export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  notes?: string;
}

export interface Workout {
  id: string;
  name: string;
  description: string;
  exercises: Exercise[];
}

export const workouts: Workout[] = [
  {
    id: 'treino-a',
    name: 'Treino A - Superiores',
    description: 'Foco em peito, ombros e tríceps',
    exercises: [
      {
        id: 'ex1',
        name: 'Supino Reto',
        sets: 4,
        reps: '8-10',
        notes: 'Foco na execução controlada'
      },
      {
        id: 'ex2',
        name: 'Desenvolvimento com Halteres',
        sets: 3,
        reps: '10-12',
        notes: 'Mantém o core contraído'
      },
      {
        id: 'ex3',
        name: 'Tríceps Pulley',
        sets: 3,
        reps: '12-15',
        notes: 'Movimento completo'
      },
      {
        id: 'ex4',
        name: 'Voador (Pec Deck)',
        sets: 3,
        reps: '12-15',
        notes: 'Contração no final do movimento'
      },
      {
        id: 'ex5',
        name: 'Elevação Lateral',
        sets: 3,
        reps: '12-15',
        notes: 'Peso moderado, execução perfeita'
      }
    ]
  },
  {
    id: 'treino-b',
    name: 'Treino B - Inferiores',
    description: 'Foco em pernas e glúteos',
    exercises: [
      {
        id: 'ex1',
        name: 'Agachamento Livre',
        sets: 4,
        reps: '8-10',
        notes: 'Profundidade completa, joelhos alinhados'
      },
      {
        id: 'ex2',
        name: 'Leg Press',
        sets: 4,
        reps: '12-15',
        notes: 'Amplitude máxima'
      },
      {
        id: 'ex3',
        name: 'Elevação Pélvica',
        sets: 4,
        reps: '12-15',
        notes: 'Foco na contração dos glúteos'
      },
      {
        id: 'ex4',
        name: 'Cadeira Extensora',
        sets: 3,
        reps: '12-15',
        notes: 'Contração no topo'
      },
      {
        id: 'ex5',
        name: 'Cadeira Flexora',
        sets: 3,
        reps: '12-15',
        notes: 'Controle na descida'
      },
      {
        id: 'ex6',
        name: 'Panturrilha em Pé',
        sets: 4,
        reps: '15-20',
        notes: 'Amplitude completa'
      }
    ]
  },
  {
    id: 'treino-c',
    name: 'Treino C - Costas e Bíceps',
    description: 'Foco em dorsais e bíceps',
    exercises: [
      {
        id: 'ex1',
        name: 'Puxada Frontal',
        sets: 4,
        reps: '8-10',
        notes: 'Puxar com as costas, não com os braços'
      },
      {
        id: 'ex2',
        name: 'Remada Curvada',
        sets: 4,
        reps: '8-10',
        notes: 'Costas retas, contrair as escápulas'
      },
      {
        id: 'ex3',
        name: 'Rosca Direta',
        sets: 3,
        reps: '10-12',
        notes: 'Não balançar o corpo'
      },
      {
        id: 'ex4',
        name: 'Remada Unilateral',
        sets: 3,
        reps: '10-12',
        notes: 'Cada lado separadamente'
      },
      {
        id: 'ex5',
        name: 'Rosca Martelo',
        sets: 3,
        reps: '12-15',
        notes: 'Controle na descida'
      }
    ]
  }
];

