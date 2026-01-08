/**
 * Gerencia o último treino aberto durante a sessão
 * Usa sessionStorage para resetar quando a aba fecha
 * Agora também salva quando navega para o timer, permitindo voltar ao treino específico
 */

const LAST_WORKOUT_KEY = 'ciclei-last-workout-id';
const LAST_WORKOUT_DATE_KEY = 'ciclei-last-workout-date';
const LAST_WORKOUT_PATH_KEY = 'ciclei-last-workout-path'; // Caminho completo do treino

/**
 * Salva o ID do último treino aberto
 * @param workoutId - ID do treino
 * @param savePath - Se true, salva também o caminho completo (ex: /workout/panturrilha)
 */
export const saveLastWorkout = (workoutId: string, savePath: boolean = false): void => {
  try {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    sessionStorage.setItem(LAST_WORKOUT_KEY, workoutId);
    sessionStorage.setItem(LAST_WORKOUT_DATE_KEY, today);
    
    if (savePath) {
      const workoutPath = `/workout/${workoutId}`;
      sessionStorage.setItem(LAST_WORKOUT_PATH_KEY, workoutPath);
    }
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
 * Obtém o caminho completo do último treino (ex: /workout/panturrilha)
 * Retorna null se não houver ou se não for do dia atual
 */
export const getLastWorkoutPath = (): string | null => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const lastDate = sessionStorage.getItem(LAST_WORKOUT_DATE_KEY);
    const lastPath = sessionStorage.getItem(LAST_WORKOUT_PATH_KEY);
    
    // Se não for do dia atual, retorna null
    if (lastDate !== today) {
      return null;
    }
    
    return lastPath;
  } catch (error) {
    console.error('Error getting last workout path:', error);
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
    sessionStorage.removeItem(LAST_WORKOUT_PATH_KEY);
  } catch (error) {
    console.error('Error clearing last workout:', error);
  }
};

