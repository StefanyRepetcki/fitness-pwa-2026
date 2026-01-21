/**
 * Rotina Melhorada - Baseada em "Além da Genética 2.0"
 * Frequência: 3x/semana (Segunda, Quarta, Sexta)
 * 48h de descanso entre treinos para recuperação adequada
 */

import type { RoutineDay } from './routine';

export const routineImproved: RoutineDay[] = [
  {
    id: 'mon',
    day: 'Segunda',
    workoutId: 'treino-a-improved',
    workoutName: 'Treino A - Quadríceps + Panturrilha',
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
    workoutId: 'treino-b-improved',
    workoutName: 'Treino B - Costas, Peito, Ombros e Tríceps',
    rest: false
  },
  {
    id: 'thu',
    day: 'Quinta',
    workoutId: '',
    workoutName: 'Descanso',
    rest: true
  },
  {
    id: 'fri',
    day: 'Sexta',
    workoutId: 'treino-c-improved',
    workoutName: 'Treino C - Posterior + Glúteos',
    rest: false
  },
  {
    id: 'sat',
    day: 'Sábado',
    workoutId: '',
    workoutName: 'Descanso',
    rest: true
  },
  {
    id: 'sun',
    day: 'Domingo',
    workoutId: '',
    workoutName: 'Descanso',
    rest: true
  }
];

