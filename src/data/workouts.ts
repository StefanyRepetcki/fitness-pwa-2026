export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  restTime?: string; // Tempo de descanso entre séries
  rpe?: number; // Rate of Perceived Exertion (1-10)
  cadence?: string; // Cadência do movimento (ex: "2s excêntrico, 1s concêntrico")
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
        restTime: '60-90s',
        rpe: 8,
        notes: 'Aquecimento: 2x30 leve, depois 1x8 a 70%, seguido de 3x 8-10'
      },
      {
        id: 'ex2',
        name: 'Cadeira Extensora',
        sets: 3,
        reps: '10-12',
        restTime: '60-90s',
        rpe: 7,
        cadence: '2s excêntrico, 1s concêntrico, 2s isometria',
        notes: 'Com isometria no topo. Cadência controlada para máxima ativação.'
      },
      {
        id: 'ex3',
        name: 'Agachamento Hack ou Livre Guiado',
        sets: 4,
        reps: '8-10',
        restTime: '90-120s',
        rpe: 8,
        notes: 'Foco na técnica e amplitude completa. Progressão: Semana 1-2: 70%, Semana 3-4: 75%, Semana 5-6: 80%'
      },
      {
        id: 'ex4',
        name: 'Adutora',
        sets: 3,
        reps: '12-15',
        restTime: '45-60s',
        rpe: 6,
        notes: 'Com isometria final de 2 segundos'
      },
      {
        id: 'ex5',
        name: 'Panturrilha no Leg ou em Pé',
        sets: 4,
        reps: '15-20',
        restTime: '30-45s',
        rpe: 7,
        notes: 'Tempo controlado. Amplitude completa (máxima extensão e flexão)'
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
        restTime: '60-90s',
        rpe: 8,
        notes: 'Aquecimento: 2x leve, depois 4x 10-12 com drop-set final (reduzir 30% da carga na última série)'
      },
      {
        id: 'ex2',
        name: 'Remada Baixa Triângulo ou Unilateral',
        sets: 3,
        reps: '12',
        restTime: '60-90s',
        rpe: 7,
        notes: 'Foco na contração das costas. Puxar o cotovelo para trás, não apenas o braço.'
      },
      {
        id: 'ex3',
        name: 'Supino Reto com Halteres ou Máquina',
        sets: 3,
        reps: '10-12',
        restTime: '60-90s',
        rpe: 8,
        notes: 'Execução controlada. Variação: Supino inclinado a cada 2 ciclos para trabalhar peitoral superior.'
      },
      {
        id: 'ex4',
        name: 'Voador Peitoral',
        sets: 2,
        reps: '12-15',
        restTime: '45-60s',
        rpe: 6,
        notes: 'Amplitude completa: abrir até sentir alongamento, fechar até quase tocar os halteres'
      },
      {
        id: 'ex5',
        name: 'Desenvolvimento com Halteres ou Máquina',
        sets: 3,
        reps: '10',
        restTime: '45-60s',
        rpe: 7,
        notes: 'Mantém o core contraído. Não travar os cotovelos no topo.'
      },
      {
        id: 'ex6',
        name: 'Crucifixo Invertido ou Elevação Lateral',
        sets: 3,
        reps: '12',
        restTime: '30-45s',
        rpe: 6,
        notes: 'Movimento controlado. Elevar até altura dos ombros, não acima.'
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
        restTime: '60-90s',
        rpe: 7,
        cadence: '2s excêntrico, 1s concêntrico',
        notes: 'Aquecimento: 2x leve, depois 3x 10-12 com cadência lenta. Foco na contração do posterior.'
      },
      {
        id: 'ex2',
        name: 'Stiff com Halteres ou Barra',
        sets: 4,
        reps: '8-10',
        restTime: '90-120s',
        rpe: 8,
        notes: 'Mantém as costas retas. Descer até sentir alongamento no posterior, não forçar amplitude excessiva.'
      },
      {
        id: 'ex3',
        name: 'Extensão de Quadril no Cross',
        sets: 3,
        reps: '12 por perna',
        restTime: '60-90s',
        rpe: 7,
        notes: 'Cada perna separadamente. Altura do step: joelho alinhado com quadril. Máxima contração no topo.'
      },
      {
        id: 'ex4',
        name: 'Elevação Pélvica com Barra/Smith',
        sets: 4,
        reps: '10',
        restTime: '90-120s',
        rpe: 8,
        notes: 'Máxima contração dos glúteos no topo (2s de isometria). Progressão: aumentar carga a cada 2 semanas.'
      },
      {
        id: 'ex5',
        name: 'Abdutora',
        sets: 3,
        reps: '15',
        restTime: '45-60s',
        rpe: 6,
        notes: 'Com isometria no final de 2 segundos. Foco na parte lateral do glúteo.'
      },
      {
        id: 'ex6',
        name: 'Panturrilha Sentada ou em Pé',
        sets: 3,
        reps: '20',
        restTime: '30-45s',
        rpe: 7,
        notes: 'Amplitude completa: descer até máximo alongamento, subir até máxima contração.'
      },
      {
        id: 'ex7',
        name: 'Prancha + Abdominal Infra',
        sets: 3,
        reps: 'Séries',
        restTime: '30-45s',
        rpe: 6,
        notes: 'Core completo. Prancha: 30-45s. Abdominal infra: 15-20 reps. Alternar entre os dois.'
      }
    ]
  }
];
