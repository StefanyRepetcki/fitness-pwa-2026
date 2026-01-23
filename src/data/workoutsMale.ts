/**
 * Treinos Masculinos - Cutting Agressivo (PUSH/PULL/LEGS)
 * Adaptado por Profissional de Educação Física
 * 
 * Perfil do atleta:
 * - Biotipo: Mesomorfo
 * - Objetivo: Cutting Agressivo (preservar massa, queimar gordura)
 * - Altura: 1.81m
 * - Peso: 146kg
 * 
 * Estrutura:
 * - PUSH: Peito, Ombros, Tríceps
 * - PULL: Costas, Bíceps, Posterior de Ombro
 * - LEGS: Quadríceps, Posteriores, Panturrilha
 * 
 * Frequência: 5-6x/semana (PUSH/PULL/LEGS 2x cada)
 * 
 * Princípios:
 * - Manter estímulo neural
 * - Controlar fadiga
 * - Aumentar gasto energético
 * - RPE 7-8 (não até falha sempre)
 * - Sem técnicas avançadas (rest pause, drop set, parciais)
 * - Foco em força e preservação de massa
 */

import type { Workout } from './workouts';

export const workoutsMale: Workout[] = [
  {
    id: 'push-male',
    name: 'PUSH - Peito, Ombros e Tríceps',
    description: 'Treino focado em movimentos de empurrar. Mantém estímulo neural e força durante cutting agressivo. RPE 7-8, sem técnicas avançadas.',
    exercises: [
      {
        id: 'push-1',
        name: 'Supino Reto com Barra',
        sets: 4,
        reps: '4x5-8',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Exercício principal. Foco em força. Manter técnica perfeita. Não ir até falha absoluta.'
      },
      {
        id: 'push-2',
        name: 'Supino Inclinado com Halteres',
        sets: 3,
        reps: '3x8-10',
        restTime: '2min',
        rpe: 7,
        notes: 'Desenvolvimento peitoral superior. Controle total do movimento.'
      },
      {
        id: 'push-3',
        name: 'Desenvolvimento com Halteres',
        sets: 3,
        reps: '3x6-8',
        restTime: '2min',
        rpe: 8,
        notes: 'Desenvolvimento completo dos deltoides. Pode ser feito em pé ou sentado.'
      },
      {
        id: 'push-4',
        name: 'Elevação Lateral',
        sets: 3,
        reps: '3x12-15',
        restTime: '1-1.5min',
        rpe: 7,
        notes: 'Isolamento deltoide médio. Evitar balanço do corpo.'
      },
      {
        id: 'push-5',
        name: 'Tríceps Corda',
        sets: 3,
        reps: '3x10-12',
        restTime: '1-1.5min',
        rpe: 7,
        notes: 'Isolamento tríceps. Extensão completa no final do movimento.'
      },
      {
        id: 'push-6',
        name: 'Mergulho Máquina ou Paralela',
        sets: 2,
        reps: '2x8-10',
        restTime: '1-2min',
        rpe: 7,
        notes: 'Exercício composto para tríceps. Pode usar peso adicional se necessário.'
      }
    ]
  },
  {
    id: 'pull-male',
    name: 'PULL - Costas, Bíceps e Posterior de Ombro',
    description: 'Treino focado em movimentos de puxar. Preserva força e massa das costas durante cutting. RPE 7-8, foco em movimento controlado.',
    exercises: [
      {
        id: 'pull-1',
        name: 'Barra Fixa ou Pulldown Pesado',
        sets: 4,
        reps: '4x6-8',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Exercício principal para largura das costas. Foco em força. Se não conseguir barra fixa, usar pulldown com carga pesada.'
      },
      {
        id: 'pull-2',
        name: 'Remada Curvada com Barra',
        sets: 3,
        reps: '3x6-8',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Desenvolvimento de espessura das costas. Manter coluna neutra e puxar em direção ao umbigo.'
      },
      {
        id: 'pull-3',
        name: 'Remada Máquina Neutra',
        sets: 3,
        reps: '3x8-10',
        restTime: '2min',
        rpe: 7,
        notes: 'Isolamento das costas médias. Controle total do movimento.'
      },
      {
        id: 'pull-4',
        name: 'Face Pull',
        sets: 3,
        reps: '3x12-15',
        restTime: '1-1.5min',
        rpe: 7,
        notes: 'Desenvolvimento dos deltoides posteriores. Importante para postura e equilíbrio dos ombros.'
      },
      {
        id: 'pull-5',
        name: 'Rosca Direta com Barra',
        sets: 3,
        reps: '3x6-8',
        restTime: '1-2min',
        rpe: 7,
        notes: 'Desenvolvimento do bíceps. Controle total na descida.'
      },
      {
        id: 'pull-6',
        name: 'Rosca Alternada',
        sets: 2,
        reps: '2x10-12',
        restTime: '1min',
        rpe: 7,
        notes: 'Isolamento bíceps unilateral. Trabalho de cada braço separadamente.'
      }
    ]
  },
  {
    id: 'legs-male',
    name: 'LEGS - Quadríceps, Posteriores e Panturrilha',
    description: 'Treino completo de pernas focado em força e metabolismo. Preserva massa durante cutting. RPE 7-8, movimento controlado.',
    exercises: [
      {
        id: 'legs-1',
        name: 'Agachamento ou Hack Pesado',
        sets: 4,
        reps: '4x5-8',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Exercício principal. Foco em força. Descer até paralelo ou abaixo. Manter coluna neutra e joelhos alinhados.'
      },
      {
        id: 'legs-2',
        name: 'Leg Press',
        sets: 3,
        reps: '3x8-10',
        restTime: '2min',
        rpe: 7,
        notes: 'Volume adicional para quadríceps. Amplitude completa (até 90°).'
      },
      {
        id: 'legs-3',
        name: 'Stiff',
        sets: 3,
        reps: '3x6-8',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Desenvolvimento posteriores e glúteos. Manter pernas semi-flexionadas e coluna neutra.'
      },
      {
        id: 'legs-4',
        name: 'Mesa Flexora',
        sets: 3,
        reps: '3x10-12',
        restTime: '1-2min',
        rpe: 7,
        notes: 'Isolamento posteriores. Controle total do movimento.'
      },
      {
        id: 'legs-5',
        name: 'Panturrilha',
        sets: 4,
        reps: '4x10-12',
        restTime: '1min',
        rpe: 7,
        notes: 'Desenvolvimento gastrocnêmio e sóleo. Amplitude completa (subir na ponta dos pés).'
      }
    ]
  }
];
