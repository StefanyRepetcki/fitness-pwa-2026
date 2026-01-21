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
    description: 'Treino avançado com técnicas de alta intensidade. Progressão de carga e técnicas avançadas para máximo desenvolvimento.',
    exercises: [
      {
        id: 'ex1',
        name: 'Agachamento Livre ou Smith',
        sets: 4,
        reps: '1x15-20 + 1x10-15 + 1x8-12 + 1x6-10',
        restTime: '2min',
        rpe: 8,
        notes: 'Progressão de carga: começar leve e aumentar a cada série. Primeiro exercício para ativação completa. Ver vídeo para técnica correta.'
      },
      {
        id: 'ex2',
        name: 'Hack Machine',
        sets: 3,
        reps: '1x10-15 + 1x8-12 + 1x8-12+2 rest pause',
        restTime: '90s',
        rpe: 8,
        notes: 'Rest pause: após falha, descansar 10-15s e fazer mais 2-3 reps. Aumenta volume efetivo do treino.'
      },
      {
        id: 'ex3',
        name: 'Leg Press 45º',
        sets: 3,
        reps: '1x10-15+10 parciais + 1x8-12+10 parciais + 1x8-12+10 parciais',
        restTime: '90s',
        rpe: 8,
        notes: 'Repetições parciais: após falha completa, fazer 10 repetições parciais (meio movimento). Aumenta tempo sob tensão e ativação muscular.'
      },
      {
        id: 'ex4',
        name: 'Elevação de Quadril',
        sets: 3,
        reps: '3x10-15 com 2s pico + 1 rest pause',
        restTime: '60s',
        rpe: 8,
        notes: 'Pico de contração: segurar 2 segundos no topo (máxima contração dos glúteos). Rest pause na última série: descansar 10s e continuar até falha.'
      },
      {
        id: 'ex5',
        name: 'Abdutor',
        sets: 5,
        reps: '5x10-15 com 2s pico',
        restTime: '45s',
        rpe: 7,
        notes: 'Pico de contração de 2 segundos no ponto máximo. Volume alto (5 séries) para desenvolvimento lateral do glúteo. Foco na qualidade do movimento.'
      },
      {
        id: 'ex6',
        name: 'Panturrilha em Pé (Máquina ou Smith com Step)',
        sets: 4,
        reps: '1x15-20 + 1x10-15 + 1x8-12 + 1x6-10 + drop',
        restTime: '60s',
        rpe: 8,
        notes: 'Progressão de carga + drop set na última série: reduzir 30% da carga e continuar até falha. Step aumenta amplitude do movimento.'
      }
    ]
  },
  {
    id: 'treino-b',
    name: 'Treino B - Costas, Peito, Ombros e Tríceps',
    description: 'Treino otimizado para Wellness com volume aumentado de costas, peito e ombros. Alta densidade com pico de contração e técnicas avançadas.',
    exercises: [
      {
        id: 'ex1',
        name: 'Abdômen Supra na Prancha',
        sets: 3,
        reps: '3x RM (máximo repetições)',
        restTime: '45s',
        rpe: 7,
        notes: 'Fazer o máximo de repetições possível em cada série. Ativação do core antes dos exercícios principais. Importante para estabilidade.'
      },
      {
        id: 'ex2',
        name: 'Pulley Frente Aberto',
        sets: 4,
        reps: '4x10-15 com 2s pico',
        restTime: '45s',
        rpe: 8,
        notes: 'Pico de contração de 2 segundos no final do movimento. Puxar até o peito, segurar 2s, controlar a volta. Foco em largura das costas.'
      },
      {
        id: 'ex3',
        name: 'Remada Baixa Triângulo',
        sets: 4,
        reps: '4x10-15 com 2s pico',
        restTime: '45s',
        rpe: 8,
        notes: 'Pico de contração de 2 segundos. Foco em puxar o cotovelo para trás, não apenas o braço. Máxima contração das costas médias.'
      },
      {
        id: 'ex3b',
        name: 'Puxada Frente Supinada',
        sets: 3,
        reps: '3x10-15 com 2s pico',
        restTime: '45s',
        rpe: 8,
        notes: 'Pegada supinada trabalha bíceps e costas de forma diferente. Pico de contração de 2 segundos no final. Foco em largura e espessura das costas.'
      },
      {
        id: 'ex3c',
        name: 'Remada Curvada com Halteres',
        sets: 3,
        reps: '3x8-12 com 2s pico',
        restTime: '60s',
        rpe: 8,
        notes: 'Exercício composto para espessura das costas. Pico de contração de 2 segundos. Manter coluna neutra, não arredondar. Intervalo maior para recuperação adequada.'
      },
      {
        id: 'ex4',
        name: 'Supino Inclinado com Halteres',
        sets: 4,
        reps: '4x10-15',
        restTime: '45s',
        rpe: 8,
        notes: 'Intervalo curto mantém alta densidade do treino. Controle na descida (2s), explosão na subida. Foco em peitoral superior.'
      },
      {
        id: 'ex4b',
        name: 'Supino Reto com Halteres',
        sets: 3,
        reps: '3x8-12',
        restTime: '60s',
        rpe: 8,
        notes: 'Exercício fundamental para peitoral completo. Controle na descida (2s), explosão na subida. Amplitude completa do movimento. Intervalo maior para recuperação.'
      },
      {
        id: 'ex4c',
        name: 'Crucifixo Inclinado com Halteres',
        sets: 3,
        reps: '3x10-15 com 2s pico',
        restTime: '45s',
        rpe: 7,
        notes: 'Isolamento do peitoral superior. Pico de contração de 2 segundos no ponto máximo. Controle total do movimento, evitar balanço. Foco em alongamento e contração.'
      },
      {
        id: 'ex5',
        name: 'Elevação Frontal Sentado com Halteres',
        sets: 4,
        reps: '4x10-15',
        restTime: '45s',
        rpe: 7,
        notes: 'Sentado para isolar deltoide anterior. Elevar até altura dos ombros, não acima. Evitar balanço do corpo.'
      },
      {
        id: 'ex6',
        name: 'Elevação Lateral Sentada com Halteres',
        sets: 4,
        reps: '4x10-15+10 parciais',
        restTime: '45s',
        rpe: 8,
        notes: 'Após falha completa, fazer 10 repetições parciais (meio movimento). Aumenta tempo sob tensão do deltoide médio. Sentado para melhor isolamento.'
      },
      {
        id: 'ex6b',
        name: 'Desenvolvimento com Halteres',
        sets: 3,
        reps: '3x8-12',
        restTime: '60s',
        rpe: 8,
        notes: 'Exercício composto para desenvolvimento completo dos ombros. Controle na descida (2s), explosão na subida. Não travar os cotovelos no topo. Intervalo maior para recuperação.'
      },
      {
        id: 'ex6c',
        name: 'Elevação Lateral Inclinada com Halteres',
        sets: 3,
        reps: '3x10-15 com 2s pico',
        restTime: '45s',
        rpe: 7,
        notes: 'Inclinação trabalha deltoide médio e posterior de forma diferente. Pico de contração de 2 segundos. Inclinar tronco levemente para frente, manter coluna neutra.'
      },
      {
        id: 'ex7',
        name: 'Tríceps Corda',
        sets: 4,
        reps: '4x10-15 com 2s pico',
        restTime: '45s',
        rpe: 7,
        notes: 'Pico de contração de 2 segundos no final da extensão. Isolamento completo do tríceps. Manter cotovelos fixos durante todo o movimento.'
      }
    ]
  },
  {
    id: 'treino-c',
    name: 'Treino C - Posterior + Glúteos',
    description: 'Treino focado em posterior e glúteos com técnicas avançadas. Progressão de carga e rest pause para máximo desenvolvimento.',
    exercises: [
      {
        id: 'ex1',
        name: 'Flexor Deitado',
        sets: 4,
        reps: '1x15-20 + 1x10-15 + 1x8-12 + 1x6-10',
        restTime: '2min',
        rpe: 8,
        notes: 'Progressão de carga: começar leve e aumentar a cada série. Intervalo de 2min para recuperação adequada. Foco na contração do posterior.'
      },
      {
        id: 'ex2',
        name: 'Flexor Sentado',
        sets: 3,
        reps: '1x15-20 + 1x10-15 + 1x8-12+2 rest pause',
        restTime: '90s',
        rpe: 8,
        notes: 'Pico de contração de 2 segundos. Rest pause na última série: descansar 10s e fazer mais 2-3 reps. Diferente ângulo de ativação que o deitado.'
      },
      {
        id: 'ex3',
        name: 'Stiff',
        sets: 3,
        reps: '3x8-12',
        restTime: '45s',
        rpe: 8,
        notes: 'Manter pernas semi-flexionadas. Descer até sentir alongamento no posterior, não forçar amplitude excessiva. Coluna neutra durante todo o movimento.'
      },
      {
        id: 'ex4',
        name: 'Afundo Smith com Step',
        sets: 3,
        reps: '3x8-12 (cada perna)',
        restTime: '45s entre pernas',
        rpe: 8,
        notes: 'Step aumenta amplitude e ativação dos glúteos. Trabalho unilateral para equilíbrio. Alternar pernas. Altura do step: joelho alinhado com quadril.'
      },
      {
        id: 'ex5',
        name: 'Elevação de Quadril',
        sets: 4,
        reps: '1x15-20 + 1x10-15 + 1x8-12+2 rest pause + 1x6-10+2 rest pause',
        restTime: '90s',
        rpe: 9,
        notes: 'Rest pause de 10 segundos nas últimas 2 séries. Máxima contração dos glúteos no topo. Progressão de carga clara. Exercício principal para glúteos.'
      },
      {
        id: 'ex6',
        name: 'Abdutor',
        sets: 5,
        reps: '5x10-15 com 3s pico',
        restTime: '45s',
        rpe: 7,
        notes: 'Pico de contração de 3 segundos (maior que outros exercícios). Volume alto (5 séries) para desenvolvimento lateral do glúteo. Foco na qualidade do movimento.'
      }
    ]
  }
];
