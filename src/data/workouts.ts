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
    name: 'Treino A - Quadríceps + Panturrilha',
    description: 'Destaque e definição para a parte frontal da perna',
    exercises: [
      {
        id: 'ex1',
        name: 'Leg Press 45º',
        sets: 6,
        reps: '2x30 leve + 1x8 (70%) + 3x 8-10',
        notes: 'Aquecimento: 2x30 leve, depois 1x8 a 70%, seguido de 3x 8-10'
      },
      {
        id: 'ex2',
        name: 'Cadeira Extensora',
        sets: 3,
        reps: '10-12',
        notes: 'Com isometria no topo'
      },
      {
        id: 'ex3',
        name: 'Agachamento Hack ou Livre Guiado',
        sets: 4,
        reps: '8-10',
        notes: 'Foco na técnica e amplitude'
      },
      {
        id: 'ex4',
        name: 'Adutora',
        sets: 3,
        reps: '12-15',
        notes: 'Com isometria final'
      },
      {
        id: 'ex5',
        name: 'Panturrilha no Leg ou em Pé',
        sets: 4,
        reps: '15-20',
        notes: 'Tempo controlado'
      }
    ]
  },
  {
    id: 'treino-b',
    name: 'Treino B - Costas, Peito e Ombro',
    description: 'Densidade, postura e força no tronco',
    exercises: [
      {
        id: 'ex1',
        name: 'Pulley Frente',
        sets: 6,
        reps: '2x leve + 4x 10-12',
        notes: 'Aquecimento: 2x leve, depois 4x 10-12 com drop-set final'
      },
      {
        id: 'ex2',
        name: 'Remada Baixa Triângulo ou Unilateral',
        sets: 3,
        reps: '12',
        notes: 'Foco na contração das costas'
      },
      {
        id: 'ex3',
        name: 'Supino Reto com Halteres ou Máquina',
        sets: 3,
        reps: '10-12',
        notes: 'Execução controlada'
      },
      {
        id: 'ex4',
        name: 'Voador Peitoral',
        sets: 2,
        reps: '12-15',
        notes: 'Amplitude completa'
      },
      {
        id: 'ex5',
        name: 'Desenvolvimento com Halteres ou Máquina',
        sets: 3,
        reps: '10',
        notes: 'Mantém o core contraído'
      },
      {
        id: 'ex6',
        name: 'Crucifixo Invertido ou Elevação Lateral',
        sets: 3,
        reps: '12',
        notes: 'Movimento controlado'
      }
    ]
  },
  {
    id: 'treino-c',
    name: 'Treino C - Posterior, Glúteos e Core',
    description: 'O combo que dá forma e volume aos glúteos 🍑',
    exercises: [
      {
        id: 'ex1',
        name: 'Flexora Deitada',
        sets: 5,
        reps: '2x leve + 3x 10-12',
        notes: 'Aquecimento: 2x leve, depois 3x 10-12 com cadência lenta'
      },
      {
        id: 'ex2',
        name: 'Stiff com Halteres ou Barra',
        sets: 4,
        reps: '8-10',
        notes: 'Mantém as costas retas'
      },
      {
        id: 'ex3',
        name: 'Extensão de Quadril no Cross',
        sets: 3,
        reps: '12 por perna',
        notes: 'Cada perna separadamente'
      },
      {
        id: 'ex4',
        name: 'Elevação Pélvica com Barra/Smith',
        sets: 4,
        reps: '10',
        notes: 'Máxima contração dos glúteos'
      },
      {
        id: 'ex5',
        name: 'Abdutora',
        sets: 3,
        reps: '15',
        notes: 'Com isometria no final'
      },
      {
        id: 'ex6',
        name: 'Panturrilha Sentada ou em Pé',
        sets: 3,
        reps: '20',
        notes: 'Amplitude completa'
      },
      {
        id: 'ex7',
        name: 'Prancha + Abdominal Infra',
        sets: 3,
        reps: 'Séries',
        notes: 'Core completo'
      }
    ]
  }
];
