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
    workoutName: 'Treino A - Quadríceps + Panturrilha',
    rest: false
  },
  {
    id: 'tue',
    day: 'Terça',
    workoutId: 'treino-b',
    workoutName: 'Treino B - Costas + Peito + Ombro',
    rest: false
  },
  {
    id: 'wed',
    day: 'Quarta',
    workoutId: 'treino-c',
    workoutName: 'Treino C - Posterior + Glúteos',
    rest: false
  },
  {
    id: 'thu',
    day: 'Quinta',
    workoutId: '',
    workoutName: 'Descanso Ativo',
    rest: true,
    restActive: true
  },
  {
    id: 'fri',
    day: 'Sexta',
    workoutId: 'treino-a',
    workoutName: 'Treino A - Foco Técnico ou Carga',
    rest: false
  },
  {
    id: 'sat',
    day: 'Sábado',
    workoutId: 'treino-c',
    workoutName: 'Glúteo Extra ou Leve',
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
