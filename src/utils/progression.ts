/**
 * Sistema de Progressão de Carga
 * Calcula progressão automática baseada em RPE, histórico e semanas de treino
 */

export interface ProgressionRule {
  lastWeight: number;
  lastRPE: number;
  targetRPE: number;
  weeksSinceStart: number;
  consecutiveWeeksAtSameWeight?: number;
}

export interface ProgressionSuggestion {
  suggestedWeight: number;
  change: number; // Mudança em kg
  changePercentage: number; // Mudança em %
  reason: string;
  confidence: 'high' | 'medium' | 'low';
}

/**
 * Calcula o peso sugerido para a próxima sessão baseado em regras de progressão
 * 
 * Estratégia:
 * - Se RPE foi menor que o alvo: aumentar carga (progressão mais agressiva nas primeiras semanas)
 * - Se RPE foi igual ao alvo: manter ou aumentar levemente
 * - Se RPE foi maior que o alvo: reduzir carga
 */
export const calculateNextWeight = (rule: ProgressionRule): ProgressionSuggestion => {
  const { lastWeight, lastRPE, targetRPE, weeksSinceStart, consecutiveWeeksAtSameWeight = 0 } = rule;

  // Validações
  if (lastWeight <= 0) {
    throw new Error('Peso anterior deve ser maior que zero');
  }
  if (lastRPE < 1 || lastRPE > 10 || targetRPE < 1 || targetRPE > 10) {
    throw new Error('RPE deve estar entre 1 e 10');
  }

  let suggestedWeight: number = lastWeight;
  let reason: string = '';
  let confidence: 'high' | 'medium' | 'low' = 'medium';

  const rpeDifference = lastRPE - targetRPE;

  // Caso 1: RPE foi significativamente menor que o alvo (fácil demais)
  if (rpeDifference < -1) {
    if (weeksSinceStart < 4) {
      // Primeiras 4 semanas: progressão mais agressiva
      suggestedWeight = lastWeight * 1.05; // +5%
      reason = 'RPE abaixo do alvo. Progressão agressiva nas primeiras semanas (+5%)';
      confidence = 'high';
    } else if (weeksSinceStart < 8) {
      // Semanas 4-8: progressão moderada
      suggestedWeight = lastWeight * 1.025; // +2.5%
      reason = 'RPE abaixo do alvo. Progressão moderada (+2.5%)';
      confidence = 'high';
    } else {
      // Após 8 semanas: progressão conservadora
      suggestedWeight = lastWeight * 1.01; // +1%
      reason = 'RPE abaixo do alvo. Progressão conservadora (+1%)';
      confidence = 'medium';
    }
  }
  // Caso 2: RPE foi ligeiramente menor que o alvo
  else if (rpeDifference === -1) {
    if (weeksSinceStart < 8) {
      suggestedWeight = lastWeight * 1.02; // +2%
      reason = 'RPE ligeiramente abaixo do alvo. Pequeno aumento (+2%)';
      confidence = 'high';
    } else {
      suggestedWeight = lastWeight * 1.01; // +1%
      reason = 'RPE ligeiramente abaixo do alvo. Aumento mínimo (+1%)';
      confidence = 'medium';
    }
  }
  // Caso 3: RPE foi igual ao alvo
  else if (rpeDifference === 0) {
    if (consecutiveWeeksAtSameWeight >= 2) {
      // Se está há 2+ semanas no mesmo peso, aumentar levemente
      suggestedWeight = lastWeight * 1.01; // +1%
      reason = 'RPE no alvo, mas há 2+ semanas no mesmo peso. Pequeno aumento (+1%)';
      confidence = 'medium';
    } else if (weeksSinceStart < 12) {
      // Nas primeiras 12 semanas, ainda pode progredir
      suggestedWeight = lastWeight * 1.005; // +0.5%
      reason = 'RPE no alvo. Manutenção com leve aumento (+0.5%)';
      confidence = 'low';
    } else {
      // Após 12 semanas, manter
      suggestedWeight = lastWeight;
      reason = 'RPE no alvo. Manter carga atual';
      confidence = 'high';
    }
  }
  // Caso 4: RPE foi ligeiramente maior que o alvo
  else if (rpeDifference === 1) {
    suggestedWeight = lastWeight * 0.98; // -2%
    reason = 'RPE ligeiramente acima do alvo. Pequena redução (-2%)';
    confidence = 'medium';
  }
  // Caso 5: RPE foi significativamente maior que o alvo (muito difícil)
  else {
    suggestedWeight = lastWeight * 0.95; // -5%
    reason = 'RPE significativamente acima do alvo. Redução de carga (-5%)';
    confidence = 'high';
  }

  // Arredondar para 0.5kg (incremento comum em academias)
  const finalSuggestedWeight = Math.round(suggestedWeight * 2) / 2;

  // Garantir que não seja negativo ou zero
  const finalWeight = Math.max(0.5, finalSuggestedWeight);

  const change = finalWeight - lastWeight;
  const changePercentage = ((change / lastWeight) * 100);

  return {
    suggestedWeight: finalWeight,
    change,
    changePercentage,
    reason,
    confidence
  };
};

/**
 * Sugere progressão baseada no histórico de um exercício
 */
export interface ExerciseHistory {
  date: string; // YYYY-MM-DD
  weight: number;
  rpe?: number;
  sets: number;
  reps: number;
}

export const suggestProgressionFromHistory = (
  exerciseHistory: ExerciseHistory[],
  targetRPE: number,
  weeksSinceStart: number
): ProgressionSuggestion | null => {
  if (exerciseHistory.length === 0) {
    return null;
  }

  // Ordenar por data (mais recente primeiro)
  const sortedHistory = [...exerciseHistory].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const lastEntry = sortedHistory[0];
  const lastRPE = lastEntry.rpe || targetRPE;

  // Contar semanas consecutivas no mesmo peso
  let consecutiveWeeksAtSameWeight = 0;
  for (let i = 0; i < sortedHistory.length; i++) {
    if (Math.abs(sortedHistory[i].weight - lastEntry.weight) < 0.5) {
      consecutiveWeeksAtSameWeight++;
    } else {
      break;
    }
  }

  return calculateNextWeight({
    lastWeight: lastEntry.weight,
    lastRPE,
    targetRPE,
    weeksSinceStart,
    consecutiveWeeksAtSameWeight
  });
};

/**
 * Calcula progressão baseada em volume (séries x reps x peso)
 */
export const calculateVolumeProgression = (
  currentVolume: number, // total de kg levantados
  targetVolumeIncrease: number = 0.05 // 5% por padrão
): number => {
  return currentVolume * (1 + targetVolumeIncrease);
};

/**
 * Retorna mensagem amigável sobre a progressão
 */
export const getProgressionMessage = (suggestion: ProgressionSuggestion): string => {
  const { change, changePercentage, reason, confidence } = suggestion;
  
  const confidenceEmoji = confidence === 'high' ? '✅' : confidence === 'medium' ? '⚠️' : '💡';
  const changeEmoji = change > 0 ? '📈' : change < 0 ? '📉' : '➡️';
  
  return `${confidenceEmoji} ${changeEmoji} ${reason}\n\nPeso sugerido: ${suggestion.suggestedWeight}kg (${change > 0 ? '+' : ''}${change.toFixed(1)}kg, ${changePercentage > 0 ? '+' : ''}${changePercentage.toFixed(1)}%)`;
};

