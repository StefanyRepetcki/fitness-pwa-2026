/**
 * Rotina Semanal para Treino Masculino - Cutting Agressivo
 * Frequência: 5-6x/semana (PUSH/PULL/LEGS 2x cada)
 * 
 * Estrutura:
 * - Segunda: PUSH
 * - Terça: PULL
 * - Quarta: LEGS
 * - Quinta: Descanso Ativo (8-12k passos)
 * - Sexta: PUSH
 * - Sábado: PULL
 * - Domingo: LEGS ou Descanso (dependendo da recuperação)
 */

import type { RoutineDay } from './routine';

export const routineMale: RoutineDay[] = [
  {
    id: 'mon-male',
    day: 'Segunda',
    workoutId: 'push-male',
    workoutName: 'PUSH - Peito, Ombros e Tríceps',
    rest: false
  },
  {
    id: 'tue-male',
    day: 'Terça',
    workoutId: 'pull-male',
    workoutName: 'PULL - Costas, Bíceps e Posterior de Ombro',
    rest: false
  },
  {
    id: 'wed-male',
    day: 'Quarta',
    workoutId: 'legs-male',
    workoutName: 'LEGS - Quadríceps, Posteriores e Panturrilha',
    rest: false
  },
  {
    id: 'thu-male',
    day: 'Quinta',
    workoutId: '',
    workoutName: 'Descanso Ativo (8-12k passos)',
    rest: true
  },
  {
    id: 'fri-male',
    day: 'Sexta',
    workoutId: 'push-male',
    workoutName: 'PUSH - Peito, Ombros e Tríceps',
    rest: false
  },
  {
    id: 'sat-male',
    day: 'Sábado',
    workoutId: 'pull-male',
    workoutName: 'PULL - Costas, Bíceps e Posterior de Ombro',
    rest: false
  },
  {
    id: 'sun-male',
    day: 'Domingo',
    workoutId: 'legs-male',
    workoutName: 'LEGS - Quadríceps, Posteriores e Panturrilha',
    rest: false
  }
];
