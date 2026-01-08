/**
 * Gerencia o último treino aberto durante a sessão
 * Usa sessionStorage para resetar quando a aba fecha
 */

const LAST_WORKOUT_KEY = 'ciclei-last-workout-id';
const LAST_WORKOUT_DATE_KEY = 'ciclei-last-workout-date';

/**
 * Salva o ID do último treino aberto
 */
export const saveLastWorkout = (workoutId: string): void => {
  try {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    sessionStorage.setItem(LAST_WORKOUT_KEY, workoutId);
    sessionStorage.setItem(LAST_WORKOUT_DATE_KEY, today);
  } catch (error) {
    console.error('Error saving last workout:', error);
  }
};

/**
 * Obtém o ID do último treino aberto (se for do dia atual)
 */
export const getLastWorkout = (): string | null => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const lastDate = sessionStorage.getItem(LAST_WORKOUT_DATE_KEY);
    const lastWorkout = sessionStorage.getItem(LAST_WORKOUT_KEY);
    
    // Se não for do dia atual, retorna null
    if (lastDate !== today) {
      return null;
    }
    
    return lastWorkout;
  } catch (error) {
    console.error('Error getting last workout:', error);
    return null;
  }
};

/**
 * Limpa o último treino aberto
 */
export const clearLastWorkout = (): void => {
  try {
    sessionStorage.removeItem(LAST_WORKOUT_KEY);
    sessionStorage.removeItem(LAST_WORKOUT_DATE_KEY);
  } catch (error) {
    console.error('Error clearing last workout:', error);
  }
};

