/**
 * Treinos ABC Feminino - 3x/semana
 * Rotina otimizada para biotipo ampulheta (cintura fina, grande embaixo e acima)
 * Foco em construção do V feminino e desenvolvimento de glúteos e quadríceps
 * 
 * ⚠️ VALIDADE DO TREINO: Este treino é válido até 18 de abril de 2026.
 * Após esta data, será necessário revisar e atualizar conforme evolução e objetivos.
 * 
 * Estrutura:
 * - Treino A: Quadríceps + Glúteo
 * - Treino B: Costas + Ombro (construção do V feminino)
 * - Treino C: Posterior + Glúteo
 */

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  restTime?: string;
  rpe?: number;
  cadence?: string;
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
    name: 'Treino A – Quadríceps + Glúteo',
    description: 'Treino focado em quadríceps e glúteos com técnicas de contração e controle. Ideal para desenvolvimento da parte frontal da perna e glúteos.',
    exercises: [
      {
        id: 'ex1',
        name: 'Cadeira Extensora',
        sets: 4,
        reps: '2x15 (aquecimento) + 2x10-12',
        restTime: '60s',
        rpe: 7,
        notes: 'Primeiras 2 séries são aquecimento com 15 repetições. Séries válidas com 1 segundo de contração no topo. Ativação pré-exaustão do quadríceps.'
      },
      {
        id: 'ex2',
        name: 'Agachamento no Smith',
        sets: 5,
        reps: '2x preparatórias + 3x8-10',
        restTime: '2min',
        rpe: 8,
        cadence: 'Controle na descida 2s',
        notes: 'Primeiras 2 séries são preparatórias (aquecimento). Controle de 2 segundos na descida para máxima ativação muscular. Exercício principal para quadríceps e glúteos.'
      },
      {
        id: 'ex3',
        name: 'Leg Press 45º',
        sets: 3,
        reps: '3x10-12',
        restTime: '90s',
        rpe: 8,
        notes: 'Pé médio/levemente alto na plataforma. Posicionamento otimizado para ativação de quadríceps e glúteos. Amplitude completa do movimento. Progressão de carga é prioridade. Técnicas avançadas (parciais) podem ser usadas esporadicamente (1x a cada 3-4 semanas), não como padrão fixo.'
      },
      {
        id: 'ex4',
        name: 'Afundo Búlgaro',
        sets: 3,
        reps: '3x8-10 (por perna)',
        restTime: '60s entre pernas',
        rpe: 8,
        notes: 'Trabalho unilateral para equilíbrio e desenvolvimento simétrico. Foco em glúteos e quadríceps. Alternar pernas entre séries.'
      },
      {
        id: 'ex5',
        name: 'Elevação Pélvica',
        sets: 3,
        reps: '3x8-12',
        restTime: '60s',
        rpe: 8,
        notes: '2 segundos de pico de contração no topo. Máxima contração dos glúteos. Exercício isolado para desenvolvimento posterior do glúteo. Progressão de carga é mais importante que técnicas extremas.'
      },
      {
        id: 'ex6',
        name: 'Abdutor',
        sets: 3,
        reps: '3x12-15',
        restTime: '60s',
        rpe: 6,
        notes: 'Séries leves e controladas para aumentar frequência de estímulo do glúteo médio. Foco em qualidade de movimento, não em carga máxima. Aumenta frequência sem sobrecarregar.'
      },
      {
        id: 'ex7',
        name: 'Panturrilha em Pé',
        sets: 4,
        reps: '4x15-20',
        restTime: '60s',
        rpe: 7,
        notes: 'Amplitude completa: descer até sentir alongamento e subir até contração máxima. Volume adequado para desenvolvimento da panturrilha.'
      }
    ]
  },
  {
    id: 'treino-b',
    name: 'Treino B – Costas + Ombro (Construção do V Feminino)',
    description: 'Treino focado em construção do V feminino através de desenvolvimento de costas e ombros. Inclui mobilidade escapular e trabalho de manguito rotador.',
    exercises: [
      {
        id: 'ex1',
        name: 'Mobilidade Escapular + Manguito',
        sets: 1,
        reps: 'Aquecimento',
        restTime: '-',
        rpe: 5,
        notes: 'Aquecimento específico: mobilidade escapular e ativação do manguito rotador. Essencial para prevenir lesões e melhorar execução dos exercícios seguintes.'
      },
      {
        id: 'ex2',
        name: 'Pulley Frente',
        sets: 3,
        reps: '3x8-12',
        restTime: '90s',
        rpe: 8,
        notes: 'Exercício principal para largura das costas. Puxar até o peito, contração completa. Fundamental para construção do V feminino.'
      },
      {
        id: 'ex3',
        name: 'Remada Baixa Triângulo',
        sets: 4,
        reps: '4x10-12',
        restTime: '90s',
        rpe: 8,
        notes: 'Foco em espessura das costas médias. Puxar o cotovelo para trás, não apenas o braço. Máxima contração no final do movimento. Volume aumentado para construção do V feminino (10-12 séries semanais de costas).'
      },
      {
        id: 'ex4',
        name: 'Supino Inclinado Halter',
        sets: 3,
        reps: '3x10-12',
        restTime: '90s',
        rpe: 7,
        notes: 'Desenvolvimento do peitoral superior. Complementa o trabalho de costas para equilíbrio muscular. Controle na descida.'
      },
      {
        id: 'ex5',
        name: 'Elevação Lateral',
        sets: 4,
        reps: '4x12-15',
        restTime: '60s',
        rpe: 8,
        notes: 'EXERCÍCIO PRINCIPAL DO TREINO. Volume alto (4 séries) para desenvolvimento do deltoide médio. Essencial para largura dos ombros e construção do V feminino. Elevar até altura dos ombros.'
      },
      {
        id: 'ex6',
        name: 'Posterior de Ombro (Crucifixo Invertido ou Máquina)',
        sets: 3,
        reps: '3x12-15',
        restTime: '60s',
        rpe: 7,
        notes: 'Desenvolvimento do deltoide posterior. Crucial para equilíbrio muscular e postura. Máxima contração no final do movimento.'
      },
      {
        id: 'ex7',
        name: 'Tríceps Corda',
        sets: 3,
        reps: '3x10-12',
        restTime: '60s',
        rpe: 7,
        notes: 'Isolamento do tríceps. Extensão completa com pico de contração. Complementa o trabalho de peito e ombros.'
      },
      {
        id: 'ex8',
        name: 'Rosca Martelo',
        sets: 2,
        reps: '2-3x10-12',
        restTime: '60s',
        rpe: 7,
        notes: 'Desenvolvimento do bíceps braquial e braquiorradial. Movimento controlado. Volume moderado para equilíbrio com tríceps.'
      }
    ]
  },
  {
    id: 'treino-c',
    name: 'Treino C – Posterior + Glúteo',
    description: 'Treino focado em posterior de coxa e glúteos. O glúteo é protagonista neste treino, com volume e intensidade otimizados para máximo desenvolvimento. Intensidade alta mas sustentável - treino bom permite repetir performance, não destruir a cada sessão.',
    exercises: [
      {
        id: 'ex1',
        name: 'Flexora Deitada',
        sets: 5,
        reps: '2x leve + 3x10-12',
        restTime: '90s',
        rpe: 8,
        cadence: 'Cadência lenta',
        notes: 'Primeiras 2 séries são leves (aquecimento). Séries válidas com cadência lenta: 2s excêntrico, 1s concêntrico, 1s pico. Máxima contração do posterior.'
      },
      {
        id: 'ex2',
        name: 'Stiff',
        sets: 4,
        reps: '4x8-10',
        restTime: '90s',
        rpe: 8,
        notes: 'Exercício composto para posterior e glúteos. Manter pernas semi-flexionadas. Descer até sentir alongamento, não forçar amplitude excessiva. Controle total do movimento.'
      },
      {
        id: 'ex3',
        name: 'Elevação Pélvica',
        sets: 4,
        reps: '4x8-10',
        restTime: '90s',
        rpe: 9,
        notes: 'PESADO - Exercício principal para glúteos. Máxima carga possível com boa execução. 2 segundos de pico de contração no topo. Glúteo é protagonista neste treino. Progressão de carga é mais importante que técnicas extremas - glúteo responde muito bem a carga progressiva simples.'
      },
      {
        id: 'ex4',
        name: 'Afundo Smith com Step',
        sets: 3,
        reps: '3x10 (por perna)',
        restTime: '60s entre pernas',
        rpe: 8,
        notes: 'Step aumenta amplitude e ativação dos glúteos. Trabalho unilateral para desenvolvimento simétrico. Alternar pernas entre séries.'
      },
      {
        id: 'ex5',
        name: 'Abdutora',
        sets: 4,
        reps: '4x12-15',
        restTime: '60s',
        rpe: 7,
        notes: '1-2 segundos de isometria no ponto máximo de contração. Desenvolvimento lateral do glúteo. Volume alto para máximo estímulo.'
      },
      {
        id: 'ex6',
        name: 'Panturrilha Sentada',
        sets: 3,
        reps: '3x15-20',
        restTime: '60s',
        rpe: 7,
        notes: 'Trabalho da panturrilha sentada (gastrocnêmio interno). Amplitude completa. Complementa o trabalho de panturrilha do Treino A.'
      }
    ]
  }
];
