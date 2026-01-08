/**
 * Treinos Push/Pull/Legs para Perfil Masculino
 * Baseado em evidências científicas e práticas profissionais de hipertrofia
 * 
 * Estrutura:
 * - Push: Peito, Ombros, Tríceps
 * - Pull: Costas, Bíceps, Deltoides Posteriores
 * - Legs: Quadríceps, Posteriores, Glúteos, Panturrilhas
 * 
 * Volume: 3-4 séries por exercício
 * Repetições: 6-12 (força-hipertrofia)
 * Descanso: 1-3 minutos (compostos mais longos)
 */

import type { Workout } from './workouts';

export const workoutsMale: Workout[] = [
  {
    id: 'push-male',
    name: 'Push - Peito, Ombros e Tríceps',
    description: 'Treino focado em movimentos de empurrar. Desenvolve peitoral, deltoides e tríceps com volume e intensidade otimizados para hipertrofia.',
    exercises: [
      {
        id: 'push-1',
        name: 'Supino Inclinado com Barra (45°)',
        sets: 4,
        reps: '6-10',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Exercício principal. Foco em peitoral superior. Controle a descida (2s) e explosão na subida.'
      },
      {
        id: 'push-2',
        name: 'Supino Reto com Barra',
        sets: 4,
        reps: '6-10',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Desenvolvimento completo do peitoral. Manter omoplatas retraídas e pés no chão.'
      },
      {
        id: 'push-3',
        name: 'Supino Declinado com Halteres',
        sets: 3,
        reps: '8-12',
        restTime: '1-2min',
        rpe: 7,
        notes: 'Foco em peitoral inferior. Amplitude completa de movimento.'
      },
      {
        id: 'push-4',
        name: 'Voador Frontal (Pec Deck)',
        sets: 3,
        reps: '10-12',
        restTime: '1-1.5min',
        rpe: 7,
        cadence: '2s excêntrico, 1s concêntrico',
        notes: 'Isolamento do peitoral. Controle total do movimento.'
      },
      {
        id: 'push-5',
        name: 'Desenvolvimento Militar (Ombros)',
        sets: 4,
        reps: '6-10',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Desenvolvimento completo dos deltoides. Pode ser feito em pé ou sentado.'
      },
      {
        id: 'push-6',
        name: 'Elevação Lateral (Ombros)',
        sets: 3,
        reps: '10-12',
        restTime: '1-1.5min',
        rpe: 7,
        cadence: '2s subida, 2s descida',
        notes: 'Isolamento deltoide médio. Evitar balanço do corpo.'
      },
      {
        id: 'push-7',
        name: 'Elevação Frontal com Barra',
        sets: 3,
        reps: '10-12',
        restTime: '1-1.5min',
        rpe: 6,
        notes: 'Desenvolvimento deltoide anterior. Alternar com halteres para variação.'
      },
      {
        id: 'push-8',
        name: 'Paralelas (Tríceps)',
        sets: 3,
        reps: '8-12',
        restTime: '1-2min',
        rpe: 7,
        notes: 'Exercício composto para tríceps. Pode usar peso adicional quando ficar fácil.'
      },
      {
        id: 'push-9',
        name: 'Tríceps Pulley (Corda)',
        sets: 3,
        reps: '10-12',
        restTime: '1-1.5min',
        rpe: 7,
        cadence: '1s concêntrico, 2s excêntrico',
        notes: 'Isolamento tríceps. Extensão completa no final do movimento.'
      },
      {
        id: 'push-10',
        name: 'Tríceps Francês (Halter ou Barra)',
        sets: 3,
        reps: '8-12',
        restTime: '1-1.5min',
        rpe: 7,
        notes: 'Isolamento tríceps. Manter cotovelos fixos durante todo o movimento.'
      }
    ]
  },
  {
    id: 'pull-male',
    name: 'Pull - Costas e Bíceps',
    description: 'Treino focado em movimentos de puxar. Desenvolve dorsais, trapézio, romboides e bíceps com ênfase em largura e espessura das costas.',
    exercises: [
      {
        id: 'pull-1',
        name: 'Barra Fixa ou Puxada Frontal',
        sets: 4,
        reps: '6-10',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Exercício principal para largura das costas. Pegada pronada (palmas para frente) ou supinada (palmas para você).'
      },
      {
        id: 'pull-2',
        name: 'Remada Curvada com Barra',
        sets: 4,
        reps: '6-10',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Desenvolvimento de espessura das costas. Manter coluna neutra e puxar em direção ao umbigo.'
      },
      {
        id: 'pull-3',
        name: 'Remada Articulada (Máquina)',
        sets: 3,
        reps: '8-12',
        restTime: '1-2min',
        rpe: 7,
        notes: 'Isolamento das costas médias. Controle total do movimento.'
      },
      {
        id: 'pull-4',
        name: 'Puxada Fechada (Pegada Neutra)',
        sets: 3,
        reps: '8-12',
        restTime: '1-2min',
        rpe: 7,
        notes: 'Variação de pegada para ativar diferentes fibras. Puxar até o peito.'
      },
      {
        id: 'pull-5',
        name: 'Encolhimento com Halteres',
        sets: 3,
        reps: '10-12',
        restTime: '1-1.5min',
        rpe: 7,
        notes: 'Desenvolvimento do trapézio superior. Elevação apenas com os ombros.'
      },
      {
        id: 'pull-6',
        name: 'Extensão Lombar (Hiperextensão)',
        sets: 3,
        reps: '12-15',
        restTime: '1-1.5min',
        rpe: 6,
        notes: 'Fortalecimento da lombar. Essencial para estabilidade e prevenção de lesões.'
      },
      {
        id: 'pull-7',
        name: 'Voador Invertido (Deltoides Posteriores)',
        sets: 3,
        reps: '12-15',
        restTime: '1-1.5min',
        rpe: 7,
        notes: 'Desenvolvimento dos deltoides posteriores. Importante para postura e equilíbrio dos ombros.'
      },
      {
        id: 'pull-8',
        name: 'Rosca Direta com Barra',
        sets: 3,
        reps: '8-10',
        restTime: '1-1.5min',
        rpe: 7,
        cadence: '1s concêntrico, 2s excêntrico',
        notes: 'Desenvolvimento do bíceps. Controle total na descida.'
      },
      {
        id: 'pull-9',
        name: 'Rosca com Polia Alta',
        sets: 3,
        reps: '10-12',
        restTime: '1-1.5min',
        rpe: 7,
        notes: 'Isolamento bíceps com tensão constante. Variação importante.'
      },
      {
        id: 'pull-10',
        name: 'Rosca Martelo',
        sets: 3,
        reps: '10-12',
        restTime: '1-1.5min',
        rpe: 7,
        notes: 'Desenvolvimento do braquial e braquiorradial. Dá mais "pico" ao braço.'
      }
    ]
  },
  {
    id: 'legs-male',
    name: 'Legs - Pernas Completas',
    description: 'Treino completo de pernas: quadríceps, posteriores, glúteos e panturrilhas. Volume alto para desenvolvimento máximo de massa e força.',
    exercises: [
      {
        id: 'legs-1',
        name: 'Agachamento Livre',
        sets: 4,
        reps: '6-10',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Exercício rei das pernas. Descer até paralelo ou abaixo. Manter coluna neutra e joelhos alinhados.'
      },
      {
        id: 'legs-2',
        name: 'Leg Press 45°',
        sets: 4,
        reps: '8-12',
        restTime: '1-2min',
        rpe: 7,
        notes: 'Volume adicional para quadríceps. Amplitude completa (até 90°).'
      },
      {
        id: 'legs-3',
        name: 'Cadeira Extensora Unilateral',
        sets: 3,
        reps: '10-12',
        restTime: '1-1.5min',
        rpe: 7,
        cadence: '2s excêntrico, 1s concêntrico, 1s isometria',
        notes: 'Isolamento quadríceps. Trabalho unilateral para equilíbrio.'
      },
      {
        id: 'legs-4',
        name: 'Mesa Flexora (Deitado)',
        sets: 3,
        reps: '10-12',
        restTime: '1-1.5min',
        rpe: 7,
        notes: 'Isolamento posteriores. Controle total do movimento.'
      },
      {
        id: 'legs-5',
        name: 'Cadeira Flexora (Sentado)',
        sets: 3,
        reps: '10-12',
        restTime: '1-1.5min',
        rpe: 7,
        notes: 'Variação para posteriores. Diferente ângulo de ativação.'
      },
      {
        id: 'legs-6',
        name: 'Stiff ou Levantamento Terra Romeno',
        sets: 3,
        reps: '8-12',
        restTime: '1-2min',
        rpe: 7,
        notes: 'Desenvolvimento posteriores e glúteos. Manter pernas semi-flexionadas e coluna neutra.'
      },
      {
        id: 'legs-7',
        name: 'Cadeira Abdutora',
        sets: 3,
        reps: '12-15',
        restTime: '1-1.5min',
        rpe: 6,
        notes: 'Desenvolvimento glúteos e adutores. Importante para estabilidade do quadril.'
      },
      {
        id: 'legs-8',
        name: 'Cadeira Adutora',
        sets: 3,
        reps: '12-15',
        restTime: '1-1.5min',
        rpe: 6,
        notes: 'Fortalecimento adutores. Previne desequilíbrios musculares.'
      },
      {
        id: 'legs-9',
        name: 'Panturrilha em Máquina (Em Pé)',
        sets: 4,
        reps: '12-15',
        restTime: '1min',
        rpe: 7,
        cadence: '1s subida, 2s descida',
        notes: 'Desenvolvimento gastrocnêmio. Amplitude completa (subir na ponta dos pés).'
      },
      {
        id: 'legs-10',
        name: 'Panturrilha Unilateral com Halter',
        sets: 3,
        reps: '12-15',
        restTime: '1min',
        rpe: 7,
        notes: 'Trabalho unilateral para equilíbrio. Foco em sóleo e gastrocnêmio.'
      }
    ]
  }
];

