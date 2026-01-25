export interface RoutineDay {
  id: string;
  day: string;
  workoutId: string;
  workoutName: string;
  rest: boolean;
  restActive?: boolean;
}

export const routine: RoutineDay[] = [
  {
    id: 'mon',
    day: 'Segunda',
    workoutId: 'treino-a',
    workoutName: 'Treino A – Quadríceps + Glúteo',
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
    workoutId: 'treino-b',
    workoutName: 'Treino B – Costas + Ombro (Construção do V Feminino)',
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
    workoutId: 'treino-c',
    workoutName: 'Treino C – Posterior + Glúteo',
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
