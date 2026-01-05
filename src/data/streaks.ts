// Sistema de Streaks (sequências de dias consecutivos)

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastWorkoutDate: string | null;
  totalWorkouts: number;
}

const STREAK_KEY = 'ciclei-streak-data';

export const getStreakData = (): StreakData => {
  try {
    const stored = localStorage.getItem(STREAK_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Validação de dados
      if (
        typeof parsed === 'object' &&
        parsed !== null &&
        typeof parsed.currentStreak === 'number' &&
        typeof parsed.longestStreak === 'number' &&
        typeof parsed.totalWorkouts === 'number' &&
        (parsed.lastWorkoutDate === null || typeof parsed.lastWorkoutDate === 'string') &&
        parsed.currentStreak >= 0 &&
        parsed.longestStreak >= 0 &&
        parsed.totalWorkouts >= 0
      ) {
        return parsed;
      }
    }
  } catch (error) {
    console.error('Erro ao ler streak:', error);
  }
  
  return {
    currentStreak: 0,
    longestStreak: 0,
    lastWorkoutDate: null,
    totalWorkouts: 0
  };
};

export const updateStreak = (): StreakData => {
  const today = new Date().toISOString().split('T')[0];
  const data = getStreakData();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];
  
  let newStreak = data.currentStreak;
  
  if (data.lastWorkoutDate === today) {
    // Já treinou hoje, não atualiza
    return data;
  }
  
  if (!data.lastWorkoutDate || data.lastWorkoutDate === yesterdayStr) {
    // Primeiro treino ou treinou ontem - incrementa streak
    newStreak = data.currentStreak + 1;
  } else {
    // Quebrou a sequência - reseta para 1
    newStreak = 1;
  }
  
  const updated: StreakData = {
    currentStreak: newStreak,
    longestStreak: Math.max(data.longestStreak, newStreak),
    lastWorkoutDate: today,
    totalWorkouts: data.totalWorkouts + 1
  };
  
  localStorage.setItem(STREAK_KEY, JSON.stringify(updated));
  return updated;
};

export const getStreakMessage = (streak: number): string => {
  if (streak === 0) return 'Comece sua sequência!';
  if (streak === 1) return '1 dia seguido!';
  if (streak < 7) return `${streak} dias seguidos!`;
  if (streak < 30) return `${streak} dias seguidos! 🔥`;
  if (streak < 100) return `${streak} dias seguidos! 💎`;
  return `${streak} dias seguidos! 👑`;
};

