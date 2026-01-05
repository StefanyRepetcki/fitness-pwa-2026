export interface WorkoutHistoryEntry {
  date: string; // YYYY-MM-DD
  workoutId: string;
  workoutName: string;
}

// Função para salvar no localStorage
export const saveWorkoutHistory = (entry: WorkoutHistoryEntry) => {
  const history = getWorkoutHistory();
  // Remove entrada do mesmo dia se existir (atualiza)
  const filtered = history.filter(h => h.date !== entry.date);
  const updated = [...filtered, entry].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  localStorage.setItem('ciclei-workout-history', JSON.stringify(updated));
};

// Função para obter histórico
export const getWorkoutHistory = (): WorkoutHistoryEntry[] => {
  try {
    const stored = localStorage.getItem('ciclei-workout-history');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Erro ao ler histórico:', error);
  }
  return [];
};

// Função para obter último treino feito
export const getLastWorkout = (): WorkoutHistoryEntry | null => {
  const history = getWorkoutHistory();
  return history.length > 0 ? history[0] : null;
};

// Função para obter treino de uma data específica
export const getWorkoutByDate = (date: string): WorkoutHistoryEntry | null => {
  const history = getWorkoutHistory();
  return history.find(h => h.date === date) || null;
};

// Função para sugerir próximo treino
export const suggestNextWorkout = (workoutIds: string[]): string | null => {
  const lastWorkout = getLastWorkout();
  
  if (!lastWorkout) {
    // Se nunca fez treino, sugere o primeiro
    return workoutIds[0] || null;
  }
  
  // Encontra índice do último treino
  const lastIndex = workoutIds.indexOf(lastWorkout.workoutId);
  
  if (lastIndex === -1) {
    // Se o último treino não está na lista, sugere o primeiro
    return workoutIds[0] || null;
  }
  
  // Sugere o próximo na sequência (A -> B -> C -> A...)
  const nextIndex = (lastIndex + 1) % workoutIds.length;
  return workoutIds[nextIndex];
};

