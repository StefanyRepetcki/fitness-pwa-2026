/**
 * Calculadora de Macros baseada em TDEE
 * Usa a fórmula de Mifflin-St Jeor para cálculo de BMR
 * e ajusta macros baseado em objetivos do usuário
 */

export interface UserProfile {
  weight: number; // kg
  height: number; // cm
  age: number;
  gender: 'male' | 'female';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';
  goal: 'cut' | 'maintain' | 'bulk';
}

export interface MacroGoals {
  calories: number;
  protein: number; // g
  carbs: number; // g
  fat: number; // g
}

export interface MacroCalculationResult {
  bmr: number; // Basal Metabolic Rate
  tdee: number; // Total Daily Energy Expenditure
  targetCalories: number;
  macros: MacroGoals;
  explanation: string;
}

// Multiplicadores de atividade (fatores de atividade física)
const ACTIVITY_MULTIPLIERS = {
  sedentary: 1.2, // Pouco ou nenhum exercício
  light: 1.375, // Exercício leve 1-3 dias/semana
  moderate: 1.55, // Exercício moderado 3-5 dias/semana
  active: 1.725, // Exercício pesado 6-7 dias/semana
  'very-active': 1.9 // Exercício muito pesado, trabalho físico
} as const;

/**
 * Calcula a Taxa Metabólica Basal (BMR) usando a fórmula de Mifflin-St Jeor
 * Esta é a fórmula mais precisa atualmente disponível
 */
export const calculateBMR = (
  weight: number,
  height: number,
  age: number,
  gender: 'male' | 'female'
): number => {
  if (weight <= 0 || height <= 0 || age <= 0) {
    throw new Error('Peso, altura e idade devem ser maiores que zero');
  }

  // Fórmula de Mifflin-St Jeor
  // BMR (homem) = 10 × peso(kg) + 6.25 × altura(cm) - 5 × idade(anos) + 5
  // BMR (mulher) = 10 × peso(kg) + 6.25 × altura(cm) - 5 × idade(anos) - 161
  if (gender === 'male') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }
  return 10 * weight + 6.25 * height - 5 * age - 161;
};

/**
 * Calcula o Total Daily Energy Expenditure (TDEE)
 * TDEE = BMR × Fator de Atividade
 */
export const calculateTDEE = (profile: UserProfile): number => {
  const bmr = calculateBMR(profile.weight, profile.height, profile.age, profile.gender);
  const multiplier = ACTIVITY_MULTIPLIERS[profile.activityLevel];
  return bmr * multiplier;
};

/**
 * Calcula as metas de macronutrientes baseadas no perfil do usuário
 * 
 * Estratégia:
 * - Proteína: 2g/kg (ideal para hipertrofia)
 * - Gordura: 25% das calorias (essencial para hormônios)
 * - Carboidratos: Resto das calorias
 */
export const calculateMacros = (profile: UserProfile): MacroCalculationResult => {
  // Validar entrada
  if (profile.weight <= 0 || profile.height <= 0 || profile.age <= 0) {
    throw new Error('Peso, altura e idade devem ser maiores que zero');
  }

  const bmr = calculateBMR(profile.weight, profile.height, profile.age, profile.gender);
  const tdee = calculateTDEE(profile);

  // Ajustar calorias baseado no objetivo
  let targetCalories = tdee;
  let explanation = '';

  if (profile.goal === 'cut') {
    // Déficit de 15-20% para perda de peso
    targetCalories = Math.round(tdee * 0.85);
    explanation = `Déficit de 15% para perda de peso gradual (${Math.round(tdee - targetCalories)} kcal/dia)`;
  } else if (profile.goal === 'bulk') {
    // Superávit de 10-15% para ganho de peso
    targetCalories = Math.round(tdee * 1.1);
    explanation = `Superávit de 10% para ganho de massa magra (${Math.round(targetCalories - tdee)} kcal/dia)`;
  } else {
    // Manutenção
    targetCalories = Math.round(tdee);
    explanation = 'Calorias de manutenção para manter peso atual';
  }

  // Proteína: 2g/kg (ideal para hipertrofia e preservação muscular)
  const protein = Math.round(profile.weight * 2);
  const proteinCalories = protein * 4; // 4 kcal por grama de proteína

  // Gordura: 25% das calorias totais (essencial para produção hormonal)
  const fatPercentage = 0.25;
  const fatCalories = targetCalories * fatPercentage;
  const fat = Math.round(fatCalories / 9); // 9 kcal por grama de gordura

  // Carboidratos: Resto das calorias
  const remainingCalories = targetCalories - proteinCalories - fatCalories;
  const carbs = Math.max(0, Math.round(remainingCalories / 4)); // 4 kcal por grama de carboidrato

  // Garantir valores mínimos
  const macros: MacroGoals = {
    calories: targetCalories,
    protein: Math.max(protein, 50), // Mínimo 50g de proteína
    carbs: Math.max(carbs, 0),
    fat: Math.max(fat, 30) // Mínimo 30g de gordura
  };

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    targetCalories: macros.calories,
    macros,
    explanation
  };
};

/**
 * Retorna descrição do nível de atividade
 */
export const getActivityLevelDescription = (level: UserProfile['activityLevel']): string => {
  const descriptions = {
    sedentary: 'Pouco ou nenhum exercício',
    light: 'Exercício leve 1-3 dias/semana',
    moderate: 'Exercício moderado 3-5 dias/semana',
    active: 'Exercício pesado 6-7 dias/semana',
    'very-active': 'Exercício muito pesado, trabalho físico'
  };
  return descriptions[level];
};

/**
 * Retorna descrição do objetivo
 */
export const getGoalDescription = (goal: UserProfile['goal']): string => {
  const descriptions = {
    cut: 'Perder peso (déficit calórico)',
    maintain: 'Manter peso atual',
    bulk: 'Ganhar massa magra (superávit calórico)'
  };
  return descriptions[goal];
};

