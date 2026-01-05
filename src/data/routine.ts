export interface RoutineDay {
  id: string;
  day: string;
  workoutId: string;
  workoutName: string;
  rest: boolean;
}

export const routine: RoutineDay[] = [
  {
    id: 'mon',
    day: 'Segunda',
    workoutId: 'treino-a',
    workoutName: 'Treino A - Superiores',
    rest: false
  },
  {
    id: 'tue',
    day: 'Terça',
    workoutId: 'treino-b',
    workoutName: 'Treino B - Inferiores',
    rest: false
  },
  {
    id: 'wed',
    day: 'Quarta',
    workoutId: 'treino-c',
    workoutName: 'Treino C - Costas e Bíceps',
    rest: false
  },
  {
    id: 'thu',
    day: 'Quinta',
    workoutId: 'treino-a',
    workoutName: 'Treino A - Superiores',
    rest: false
  },
  {
    id: 'fri',
    day: 'Sexta',
    workoutId: 'treino-b',
    workoutName: 'Treino B - Inferiores',
    rest: false
  },
  {
    id: 'sat',
    day: 'Sábado',
    workoutId: 'treino-c',
    workoutName: 'Treino C - Costas e Bíceps',
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

