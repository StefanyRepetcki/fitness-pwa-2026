// Sistema de progresso de exercícios por treino
// Cache inteligente: reseta exercícios completados no dia seguinte, mas mantém a data de atualização

export interface WorkoutProgress {
  workoutId: string;
  completedExercises: string[]; // IDs dos exercícios completados
  lastUpdated: string; // ISO date string
  lastUpdatedDate: string; // Data (YYYY-MM-DD) para verificar se é outro dia
}

// Verificar se uma data é do dia atual
const isToday = (dateString: string): boolean => {
  try {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    return dateString === today;
  } catch {
    return false;
  }
};

// Obter progresso de um treino
export const getWorkoutProgress = (workoutId: string): WorkoutProgress => {
  try {
    const stored = localStorage.getItem(`ciclei-workout-progress-${workoutId}`);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Validação de dados
      if (
        parsed &&
        typeof parsed === 'object' &&
        parsed.workoutId === workoutId &&
        Array.isArray(parsed.completedExercises) &&
        typeof parsed.lastUpdated === 'string'
      ) {
        // Verificar se é do dia atual
        const lastDate = parsed.lastUpdatedDate || parsed.lastUpdated.split('T')[0];
        
        // Se não for do dia atual, resetar exercícios completados mas manter a estrutura
        if (!isToday(lastDate)) {
          return {
            workoutId,
            completedExercises: [], // Resetar exercícios completados
            lastUpdated: new Date().toISOString(),
            lastUpdatedDate: new Date().toISOString().split('T')[0]
          };
        }
        
        // Se for do dia atual, retornar normalmente
        return {
          ...parsed,
          lastUpdatedDate: lastDate // Garantir que tem a data
        };
      }
    }
  } catch (error) {
    console.error('Erro ao ler progresso:', error);
  }
  
  // Retornar progresso vazio para novo dia
  const today = new Date().toISOString().split('T')[0];
  return {
    workoutId,
    completedExercises: [],
    lastUpdated: new Date().toISOString(),
    lastUpdatedDate: today
  };
};

// Salvar progresso de um treino
export const saveWorkoutProgress = (progress: WorkoutProgress) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem(
      `ciclei-workout-progress-${progress.workoutId}`,
      JSON.stringify({
        ...progress,
        lastUpdated: new Date().toISOString(),
        lastUpdatedDate: today // Sempre salvar a data atual
      })
    );
  } catch (error) {
    console.error('Erro ao salvar progresso:', error);
  }
};

// Alternar exercício completo/incompleto
export const toggleExercise = (workoutId: string, exerciseId: string): WorkoutProgress => {
  const progress = getWorkoutProgress(workoutId);
  const isCompleted = progress.completedExercises.includes(exerciseId);
  const today = new Date().toISOString().split('T')[0];
  
  const updatedProgress: WorkoutProgress = {
    ...progress,
    workoutId,
    completedExercises: isCompleted
      ? progress.completedExercises.filter(id => id !== exerciseId)
      : [...progress.completedExercises, exerciseId],
    lastUpdatedDate: today // Atualizar data ao marcar/desmarcar
  };
  
  saveWorkoutProgress(updatedProgress);
  return updatedProgress;
};

// Limpar progresso de um treino
export const clearWorkoutProgress = (workoutId: string) => {
  try {
    localStorage.removeItem(`ciclei-workout-progress-${workoutId}`);
  } catch (error) {
    console.error('Erro ao limpar progresso:', error);
  }
};

// Verificar se exercício está completo
export const isExerciseCompleted = (workoutId: string, exerciseId: string): boolean => {
  const progress = getWorkoutProgress(workoutId);
  return progress.completedExercises.includes(exerciseId);
};

