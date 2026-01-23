/**
 * Tipos e interfaces para treinos e exercícios
 */

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  restTime?: string;      // Tempo de descanso entre séries
  rpe?: number;           // Rate of Perceived Exertion (1-10)
  cadence?: string;       // Cadência do movimento
  notes?: string;         // Observações e dicas
}

export interface Workout {
  id: string;
  name: string;
  description: string;
  exercises: Exercise[];
}

// Export do array workouts para perfil feminino (padrão ABC)
// Usa workoutsImproved como padrão
import { workoutsImproved } from './workoutsImproved';
export const workouts: Workout[] = workoutsImproved;
