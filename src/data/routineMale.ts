/**
 * Rotina Semanal para Treino Masculino - ABCDEF (6 treinos)
 * Frequência: 6x/semana
 * 
 * Estrutura:
 * - Segunda: Treino A (Costas)
 * - Terça: Treino B (Peito, Ombros, Tríceps)
 * - Quarta: Treino C (Pernas - Quadríceps)
 * - Quinta: Treino D (Costas)
 * - Sexta: Treino E (Peito, Ombros)
 * - Sábado: Treino F (Pernas - Posterior)
 * - Domingo: Descanso
 */

import type { RoutineDay } from './routine';

export const routineMale: RoutineDay[] = [
  {
    id: 'mon-male',
    day: 'Segunda',
    workoutId: 'treino-a-male',
    workoutName: 'Treino A - Costas',
    rest: false
  },
  {
    id: 'tue-male',
    day: 'Terça',
    workoutId: 'treino-b-male',
    workoutName: 'Treino B - Peito, Ombros e Tríceps',
    rest: false
  },
  {
    id: 'wed-male',
    day: 'Quarta',
    workoutId: 'treino-c-male',
    workoutName: 'Treino C - Pernas (Quadríceps)',
    rest: false
  },
  {
    id: 'thu-male',
    day: 'Quinta',
    workoutId: 'treino-d-male',
    workoutName: 'Treino D - Costas',
    rest: false
  },
  {
    id: 'fri-male',
    day: 'Sexta',
    workoutId: 'treino-e-male',
    workoutName: 'Treino E - Peito e Ombros',
    rest: false
  },
  {
    id: 'sat-male',
    day: 'Sábado',
    workoutId: 'treino-f-male',
    workoutName: 'Treino F - Pernas (Posterior)',
    rest: false
  },
  {
    id: 'sun-male',
    day: 'Domingo',
    workoutId: '',
    workoutName: 'Descanso',
    rest: true
  }
];
