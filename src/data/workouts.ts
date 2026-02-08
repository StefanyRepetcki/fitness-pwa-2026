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
    name: 'Treino A – Quadríceps',
    description: 'Treino focado em quadríceps e glúteos com técnicas de contração e controle. Ideal para desenvolvimento da parte frontal da perna e glúteos.',
    exercises: [
      {
        id: 'ex1',
        name: 'Agachamento Livre ou Smith',
        sets: 4,
        reps: '1x15-20, 1x10-15, 1x8-12, 1x6-10 (foco em progressão de carga)',
        restTime: '2min',
        rpe: 8,
        cadence: 'Controle na descida 2s',
        notes: 'Primeiras 2 séries são preparatórias. Controle de 2 segundos na descida para máxima ativação muscular. Exercício principal para quadríceps e glúteos.'
      },
      {
        id: 'ex2',
        name: 'Hack Machine ou Afundo Búlgaro',
        sets: 3,
        reps: '1x10-15, 1x8-12, 1x8-12',
        restTime: '90s',
        rpe: 8,
        notes: 'Foco em glúteos e quadríceps.'
      },
      {
        id: 'ex3',
        name: 'Leg Press 45º',
        sets: 3,
        reps: '1x10-15, 1x8-12, 1x8-12',
        restTime: '90s',
        rpe: 8,
        notes: 'Foco em quadríceps.'
      },
      {
        id: 'ex4',
        name: 'Cadeira Extensora',
        sets: 4,
        reps: '1x10-15, 1x8-12, 1x6-10, 1x4-6 (foco em progressão de carga)',
        restTime: '90s',
        rpe: 7,
        notes: 'Foco em quadríceps.'
      },
      {
        id: 'ex5',
        name: 'Elevação Pélvica',
        sets: 3,
        reps: '3x8-12 (progressivo com 2s pico de contração)',
        restTime: '60s',
        rpe: 8,
        notes: 'Máxima contração dos glúteos. Exercício isolado para desenvolvimento posterior do glúteo. Progressão de carga é mais importante que técnicas extremas.'
      },
      {
        id: 'ex6',
        name: 'Abdutor',
        sets: 4,
        reps: '4x10-15 com 2s pico de contração',
        restTime: '45s',
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
    name: 'Treino B – Costas + Ombro',
    description: 'Treino focado em construção do V feminino através de desenvolvimento de costas e ombros. Inclui mobilidade escapular e trabalho de manguito rotador.',
    exercises: [
      {
        id: 'ex1',
        name: 'Pulley Frente',
        sets: 4,
        reps: '4x10-15 com 2s pico de contração',
        restTime: '60-90s',
        rpe: 8,
        notes: 'Exercício principal para largura das costas. Puxar até o peito, contração completa. Fundamental para construção do V feminino.'
      },
      {
        id: 'ex2',
        name: 'Remada Baixa Triângulo',
        sets: 4,
        reps: '4x10-15 com 2s pico de contração',
        restTime: '60-90s',
        rpe: 8,
        notes: 'Foco em espessura das costas médias. Puxar o cotovelo para trás, não apenas o braço. Máxima contração no final do movimento. Volume aumentado para construção do V feminino (10-12 séries semanais de costas).'
      },
      {
        id: 'ex3',
        name: 'Supino Inclinado Halter',
        sets: 4,
        reps: '4x10-15',
        restTime: '45s',
        rpe: 7,
        notes: 'Desenvolvimento do peitoral superior. Complementa o trabalho de costas para equilíbrio muscular. Controle na descida.'
      },
      {
        id: 'ex4',
        name: 'Elevação Lateral',
        sets: 4,
        reps: '4x10-15 + 10 rep parciais apos falha',
        restTime: '45s',
        rpe: 8,
        notes: 'Desenvolvimento do deltoide médio. Essencial para largura dos ombros e construção do V feminino. Elevar até altura dos ombros. Após falha, realizar 10 repetições parciais para maior estímulo.'
      },
      {
        id: 'ex5',
        name: 'Crucifixo Invertido Máquina ou Face Pull',
        sets: 3,
        reps: '3x12-15 com 2s pico de contração',
        restTime: '60s',
        rpe: 8,
        notes: 'Desenvolvimento do deltoide posterior e melhora da postura. Fundamental para equilíbrio do V feminino.'
      },
      {
        id: 'ex6',
        name: 'Tríceps Corda',
        sets: 4,
        reps: '4x10-15 com 2s pico de contração',
        restTime: '60s',
        rpe: 7,
        notes: 'Isolamento do tríceps. Extensão completa com pico de contração. Complementa o trabalho de peito e ombros.'
      },
      {
        id: 'ex7',
        name: 'Rosca Direta Halter Alternada',
        sets: 3,
        reps: '3x10-12',
        restTime: '60s',
        rpe: 8,
        notes: 'Desenvolvimento do bíceps para melhorar definição e proporção do braço. Controle total na descida (2s). Evitar balanço do tronco.'
      },
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
        sets: 4,
        reps: '1x15-20, 1x10-15, 1x8-12, 1x6-10 (foco em progressão de carga)',
        restTime: '2min',
        rpe: 8,
        cadence: 'Cadência lenta',
        notes: 'Foco em progressão de carga.'
      },
      {
        id: 'ex2',
        name: 'Flexora Sentada',
        sets: 3,
        reps: '1x15-20, 1x10-15, 1x8-12 + 2 rest pause. (com 2s pico de contração)',
        restTime: '90s',
        rpe: 8,
        cadence: 'Cadência lenta',
        notes: 'Com pico de contração de 2 segundos.'
      },
      {
        id: 'ex3',
        name: 'Stiff',
        sets: 3,
        reps: '3x8-12',
        restTime: '90s',
        rpe: 8,
        notes: 'Exercício composto para posterior e glúteos. Manter pernas semi-flexionadas. Descer até sentir alongamento, não forçar amplitude excessiva. Controle total do movimento.'
      },
      {
        id: 'ex4',
        name: 'Afundo Smith com Step',
        sets: 3,
        reps: '3x8-12 (por perna)',
        restTime: '60-90s',
        rpe: 8,
        notes: 'Step aumenta amplitude e ativação dos glúteos. Trabalho unilateral para desenvolvimento simétrico. Alternar pernas entre séries.'
      },
      {
        id: 'ex5',
        name: 'Elevação Pélvica',
        sets: 4,
        reps: '4x8-12 com 2s pico',
        restTime: '90s',
        rpe: 8,
        notes: 'Exercício principal para glúteos. Máxima carga possível com boa execução. 2 segundos de pico de contração no topo. Glúteo é protagonista neste treino. Progressão de carga é mais importante que técnicas extremas - glúteo responde muito bem a carga progressiva simples.'
      },
      {
        id: 'ex6',
        name: 'Abdutora',
        sets: 4,
        reps: '4x10-15 com 3s pico de contração',
        restTime: '45s',
        rpe: 6,
        notes: 'Desenvolvimento lateral do glúteo. Séries controladas com pico de contração de 3 segundos para máxima ativação do glúteo médio.'
      },
      {
        id: 'ex7',
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
