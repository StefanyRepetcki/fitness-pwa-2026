import type { Workout } from './workouts';

/**
 * Treinos ABCDEF - 5x/semana
 * Para mulheres avançadas que conseguem treinar 5 vezes na semana
 * Ênfase em quadríceps com estratégias avançadas
 */
export const workoutsABCDEF: Workout[] = [
  {
    id: 'treino-a-abcdef',
    name: 'Treino A - Quadríceps (ABCDEF)',
    description: 'Treino focado exclusivamente em quadríceps com técnicas avançadas. Extensora como primeiro exercício para ativação pré-exaustão.',
    exercises: [
      {
        id: 'ex1',
        name: 'Extensora',
        sets: 4,
        reps: '1x15-20 + 1x10-15 + 1x8-12 + 1x6-10',
        restTime: '2min',
        rpe: 8,
        notes: 'Progressão de carga: começar leve e aumentar a cada série. Primeiro exercício para ativação pré-exaustão do quadríceps. Ver vídeo para técnica correta.'
      },
      {
        id: 'ex2',
        name: 'Hack Machine',
        sets: 3,
        reps: '1x10-15 + 1x8-12 + 1x6-10+2 rest pause',
        restTime: '2min',
        rpe: 8,
        notes: 'Rest pause: após falha, descansar 10 segundos e fazer mais 2-3 reps. Aumenta volume efetivo do treino.'
      },
      {
        id: 'ex3',
        name: 'Leg Press 45º',
        sets: 3,
        reps: '3x10-15+10 parciais',
        restTime: '90s',
        rpe: 8,
        notes: 'Repetições parciais: após falha completa, fazer 10 repetições parciais (meio movimento). Se possível usar super band para aumentar tensão constante. Aumenta tempo sob tensão e ativação muscular.'
      },
      {
        id: 'ex4',
        name: 'Extensora',
        sets: 3,
        reps: '3x10-15 com 2s pico + 2 drops na última série',
        restTime: '60s',
        rpe: 8,
        notes: 'Pico de contração de 2 segundos no topo. Na última série, após falha, fazer 2 drop sets: reduzir carga em 30% e continuar até falha novamente. Volume alto para quadríceps.'
      },
      {
        id: 'ex5',
        name: 'Adutor',
        sets: 3,
        reps: '3x10-15',
        restTime: '45s',
        rpe: 7,
        notes: 'Foco na parte interna da coxa. Movimento controlado e completo.'
      }
    ]
  },
  {
    id: 'treino-b-abcdef',
    name: 'Treino B - Costas + Panturrilha (ABCDEF)',
    description: 'Treino de costas com foco em largura e espessura. Panturrilha dupla com super-set para máxima intensidade.',
    exercises: [
      {
        id: 'ex1',
        name: 'Abdômen Supra na Prancha',
        sets: 3,
        reps: '3x RM (máximo repetições)',
        restTime: '45s',
        rpe: 7,
        notes: 'Fazer o máximo de repetições possível em cada série. Ativação do core antes dos exercícios principais.'
      },
      {
        id: 'ex2',
        name: 'Abdômen Infra na Torre',
        sets: 3,
        reps: '3x RM (máximo repetições)',
        restTime: '45s',
        rpe: 7,
        notes: 'Fazer o máximo de repetições possível em cada série. Trabalha a parte inferior do abdômen.'
      },
      {
        id: 'ex3',
        name: 'Panturrilha em Pé (Máquina ou Smith com Step)',
        sets: 4,
        reps: '1x15-20 + 1x10-15 + 1x8-12 + 1x6-10+2 drop',
        restTime: '1min',
        rpe: 8,
        notes: 'Progressão de carga + drop set na última série: reduzir 30% da carga e continuar até falha. Step aumenta amplitude do movimento.'
      },
      {
        id: 'ex4',
        name: 'Panturrilha em Pé (Super-set)',
        sets: 3,
        reps: '3 séries super-set',
        restTime: '45s',
        rpe: 8,
        notes: 'Super-set: fazer 2 exercícios de panturrilha sem descanso entre eles. Aumenta intensidade e volume.'
      },
      {
        id: 'ex5',
        name: 'Pulley Frente Aberto',
        sets: 3,
        reps: '3x10-15 com 2s pico (parar antes da falha)',
        restTime: '45s',
        rpe: 7,
        notes: 'Pico de contração de 2 segundos no final do movimento. Parar 1-2 reps antes da falha para manter qualidade e permitir maior volume total. Foco em largura das costas.'
      },
      {
        id: 'ex6',
        name: 'Pulley Frente Supinado',
        sets: 3,
        reps: '3x10-15 com 2s pico (parar antes da falha)',
        restTime: '45s',
        rpe: 7,
        notes: 'Pegada supinada (palmas para cima) trabalha bíceps e costas de forma diferente. Pico de contração de 2 segundos. Parar antes da falha.'
      },
      {
        id: 'ex7',
        name: 'Remada Baixa Triângulo',
        sets: 3,
        reps: '3x10-15 com 2s pico (parar antes da falha)',
        restTime: '45s',
        rpe: 7,
        notes: 'Pico de contração de 2 segundos. Foco em puxar o cotovelo para trás, não apenas o braço. Parar antes da falha para manter qualidade.'
      }
    ]
  },
  {
    id: 'treino-c-abcdef',
    name: 'Treino C - Posterior + Glúteos + Quadríceps (ABCDEF)',
    description: 'Treino completo de pernas com foco em posterior, glúteos e quadríceps. Progressão de carga e técnicas avançadas.',
    exercises: [
      {
        id: 'ex1',
        name: 'Flexor Deitado',
        sets: 4,
        reps: '1x15-20 + 1x10-15 + 1x8-12 + 1x6-10+2 drop',
        restTime: '2min',
        rpe: 8,
        notes: 'Progressão de carga: começar leve e aumentar a cada série. Drop set na última série: reduzir 30% da carga e continuar até falha. Foco na contração do posterior.'
      },
      {
        id: 'ex2',
        name: 'Flexor Sentado',
        sets: 3,
        reps: '1x10-15 + 1x8-12 + 1x6-10+2 rest pause',
        restTime: '1min',
        rpe: 8,
        notes: 'Pico de contração de 2 segundos. Rest pause na última série: descansar 10s e fazer mais 2-3 reps. Diferente ângulo de ativação que o deitado.'
      },
      {
        id: 'ex3',
        name: 'Agachamento Smith',
        sets: 3,
        reps: '1x10-15 + 1x8-12 + 1x6-10+1 rest pause',
        restTime: '2min',
        rpe: 8,
        notes: 'Progressão de carga. Rest pause de 10 segundos na última série. Trabalha quadríceps novamente na semana, aumentando frequência de estímulo.'
      },
      {
        id: 'ex4',
        name: 'Leg Press 45º',
        sets: 3,
        reps: '3x10-15',
        restTime: '45s',
        rpe: 7,
        notes: 'Após agachamento, continua o trabalho de quadríceps. Intervalo curto para manter intensidade.'
      },
      {
        id: 'ex5',
        name: 'Elevação de Quadril',
        sets: 4,
        reps: '1x15-20 + 1x10-15 + 1x8-12 + 1x6-10+2 drop',
        restTime: '1min',
        rpe: 9,
        notes: 'Progressão de carga + drop set na última série. Máxima contração dos glúteos no topo. Exercício principal para glúteos.'
      },
      {
        id: 'ex6',
        name: 'Abdutor',
        sets: 3,
        reps: '3x10-15 com 3s pico',
        restTime: '45s',
        rpe: 7,
        notes: 'Pico de contração de 3 segundos (maior que outros exercícios). Volume adequado para desenvolvimento lateral do glúteo. Foco na qualidade do movimento.'
      }
    ]
  },
  {
    id: 'treino-d-abcdef',
    name: 'Treino D - Peito, Ombros e Tríceps (ABCDEF)',
    description: 'Treino de tronco superior com peito, ombros e tríceps. Complementa o Treino B para desenvolvimento completo.',
    exercises: [
      {
        id: 'ex1',
        name: 'Abdômen Supra na Prancha',
        sets: 3,
        reps: '3x RM (máximo repetições)',
        restTime: '45s',
        rpe: 7,
        notes: 'Fazer o máximo de repetições possível em cada série. Ativação do core.'
      },
      {
        id: 'ex2',
        name: 'Abdômen Infra na Torre',
        sets: 3,
        reps: '3x RM (máximo repetições)',
        restTime: '45s',
        rpe: 7,
        notes: 'Fazer o máximo de repetições possível em cada série. Trabalha a parte inferior do abdômen.'
      },
      {
        id: 'ex3',
        name: 'Panturrilha em Pé (Máquina ou Smith com Step)',
        sets: 4,
        reps: '1x15-20 + 1x10-15 + 1x8-12 + 1x6-10+2 rest pause',
        restTime: '1min',
        rpe: 8,
        notes: 'Progressão de carga + rest pause na última série: descansar 10s e continuar até falha. Step aumenta amplitude.'
      },
      {
        id: 'ex4',
        name: 'Supino Inclinado com Halteres',
        sets: 3,
        reps: '3x10-15 (parar antes da falha)',
        restTime: '45s',
        rpe: 7,
        notes: 'Parar 1-2 reps antes da falha para manter qualidade e permitir maior volume total. Controle na descida (2s), explosão na subida. Foco em peitoral superior.'
      },
      {
        id: 'ex5',
        name: 'Elevação Lateral Sentada com Halteres',
        sets: 3,
        reps: '3x10-15 (parar antes da falha)',
        restTime: '45s',
        rpe: 7,
        notes: 'Sentado para melhor isolamento do deltoide médio. Parar antes da falha. Elevar até altura dos ombros, não acima.'
      },
      {
        id: 'ex6',
        name: 'Elevação Frontal Sentada com Halteres',
        sets: 3,
        reps: '3x10-15 com 2s pico (parar antes da falha)',
        restTime: '45s',
        rpe: 7,
        notes: 'Pico de contração de 2 segundos. Sentado para isolar deltoide anterior. Parar antes da falha. Evitar balanço do corpo.'
      },
      {
        id: 'ex7',
        name: 'Tríceps Corda',
        sets: 3,
        reps: '3x10-15 com 2s pico (parar antes da falha)',
        restTime: '45s',
        rpe: 7,
        notes: 'Pico de contração de 2 segundos no final da extensão. Isolamento completo do tríceps. Parar antes da falha. Manter cotovelos fixos durante todo o movimento.'
      }
    ]
  },
  {
    id: 'treino-e-abcdef',
    name: 'Treino E - Quadríceps Submáximo (ABCDEF)',
    description: 'Treino submáximo de quadríceps. Estímulo leve para recuperação ativa e fluxo sanguíneo, sem causar dano muscular excessivo.',
    exercises: [
      {
        id: 'ex1',
        name: 'Extensora',
        sets: 6,
        reps: '6x10-15 com 2s pico (parar antes da falha)',
        restTime: '60s',
        rpe: 6,
        notes: 'TREINO SUBMÁXIMO: Parar sempre antes da falha (1-2 reps de reserva). Pico de contração de 2 segundos. Volume alto (6 séries) sem fadiga excessiva. Promove recuperação ativa e fluxo sanguíneo.'
      },
      {
        id: 'ex2',
        name: 'Adutor',
        sets: 3,
        reps: '3x10-15 com 2s pico (parar antes da falha)',
        restTime: '60s',
        rpe: 6,
        notes: 'TREINO SUBMÁXIMO: Parar antes da falha. Pico de contração de 2 segundos. Estímulo leve para manter ativação sem sobrecarregar.'
      }
    ]
  }
];

