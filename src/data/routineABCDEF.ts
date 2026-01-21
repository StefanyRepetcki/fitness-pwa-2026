import type { RoutineDay } from './routine';

/**
 * Rotina ABCDEF - 5x/semana
 * Segunda: Treino A (Quadríceps)
 * Quarta: Treino B (Costas + Panturrilha)
 * Quinta: Treino C (Posterior + Glúteos + Quadríceps)
 * Sexta: Treino D (Peito + Ombros + Tríceps)
 * Sábado: Treino E (Quadríceps Submáximo)
 * Terça e Domingo: Descanso
 */
export const routineABCDEF: RoutineDay[] = [
  {
    id: 'mon',
    day: 'Segunda',
    workoutId: 'treino-a-abcdef',
    workoutName: 'Treino A - Quadríceps (ABCDEF)',
    rest: false
  },
  {
    id: 'tue',
    day: 'Terça',
    workoutId: '',
    workoutName: 'Descanso',
    rest: true
  },
  {
    id: 'wed',
    day: 'Quarta',
    workoutId: 'treino-b-abcdef',
    workoutName: 'Treino B - Costas + Panturrilha (ABCDEF)',
    rest: false
  },
  {
    id: 'thu',
    day: 'Quinta',
    workoutId: 'treino-c-abcdef',
    workoutName: 'Treino C - Posterior + Glúteos + Quadríceps (ABCDEF)',
    rest: false
  },
  {
    id: 'fri',
    day: 'Sexta',
    workoutId: 'treino-d-abcdef',
    workoutName: 'Treino D - Peito, Ombros e Tríceps (ABCDEF)',
    rest: false
  },
  {
    id: 'sat',
    day: 'Sábado',
    workoutId: 'treino-e-abcdef',
    workoutName: 'Treino E - Quadríceps Submáximo (ABCDEF)',
    rest: false
  },
  {
    id: 'sun',
    day: 'Domingo',
    workoutId: '',
    workoutName: 'Descanso',
    rest: true
  }
];

