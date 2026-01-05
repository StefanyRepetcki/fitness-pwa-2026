// Sistema de progresso de exercícios por treino

export interface WorkoutProgress {
  workoutId: string;
  completedExercises: string[]; // IDs dos exercícios completados
  lastUpdated: string; // ISO date string
}

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
        return parsed;
      }
    }
  } catch (error) {
    console.error('Erro ao ler progresso:', error);
  }
  
  return {
    workoutId,
    completedExercises: [],
    lastUpdated: new Date().toISOString()
  };
};

// Salvar progresso de um treino
export const saveWorkoutProgress = (progress: WorkoutProgress) => {
  try {
    localStorage.setItem(
      `ciclei-workout-progress-${progress.workoutId}`,
      JSON.stringify({
        ...progress,
        lastUpdated: new Date().toISOString()
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
  
  const updatedProgress: WorkoutProgress = {
    ...progress,
    workoutId,
    completedExercises: isCompleted
      ? progress.completedExercises.filter(id => id !== exerciseId)
      : [...progress.completedExercises, exerciseId]
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

