/**
 * TREINO MELHORADO - Baseado em "Além da Genética 2.0"
 * Incorpora técnicas avançadas: rest pause, repetições parciais, pico de contração
 * Progressão de carga clara (pirâmide reversa)
 * Frequência: 3x/semana (Segunda, Quarta, Sexta)
 */

import type { Workout } from './workouts';

export const workoutsImproved: Workout[] = [
  {
    id: 'treino-a-improved',
    name: 'Treino A - Quadríceps + Panturrilha (Melhorado)',
    description: 'Treino avançado com técnicas de alta intensidade. Progressão de carga e técnicas avançadas para máximo desenvolvimento.',
    exercises: [
      {
        id: 'ex1',
        name: 'Agachamento Livre ou Smith',
        sets: 4,
        reps: '1x15-20 + 1x10-15 + 1x8-12 + 1x6-10',
        restTime: '2min',
        rpe: 8,
        notes: 'Progressão de carga: começar leve e aumentar. Primeiro exercício para ativação completa. Ver vídeo para técnica correta.'
      },
      {
        id: 'ex2',
        name: 'Hack Machine',
        sets: 3,
        reps: '1x10-15 + 1x8-12 + 1x8-12+2 rest pause',
        restTime: '90s',
        rpe: 8,
        notes: 'Rest pause: após falha, descansar 10-15s e fazer mais 2-3 reps. Aumenta volume efetivo.'
      },
      {
        id: 'ex3',
        name: 'Leg Press 45º',
        sets: 3,
        reps: '1x10-15+10 parciais + 1x8-12+10 parciais + 1x8-12+10 parciais',
        restTime: '90s',
        rpe: 8,
        notes: 'Repetições parciais: após falha completa, fazer 10 repetições parciais (meio movimento). Aumenta tempo sob tensão.'
      },
      {
        id: 'ex4',
        name: 'Elevação de Quadril',
        sets: 3,
        reps: '3x10-15 com 2s pico + 1 rest pause',
        restTime: '60s',
        rpe: 8,
        notes: 'Pico de contração: segurar 2 segundos no topo. Rest pause na última série: descansar 10s e continuar.'
      },
      {
        id: 'ex5',
        name: 'Abdutor',
        sets: 5,
        reps: '5x10-15 com 2s pico',
        restTime: '45s',
        rpe: 7,
        notes: 'Pico de contração de 2 segundos no ponto máximo. Volume alto (5 séries) para desenvolvimento lateral do glúteo.'
      },
      {
        id: 'ex6',
        name: 'Panturrilha em Pé (Máquina ou Smith com Step)',
        sets: 4,
        reps: '1x15-20 + 1x10-15 + 1x8-12 + 1x6-10 + drop',
        restTime: '60s',
        rpe: 8,
        notes: 'Progressão de carga + drop set na última série: reduzir 30% da carga e continuar até falha. Step aumenta amplitude.'
      }
    ]
  },
  {
    id: 'treino-b-improved',
    name: 'Treino B - Costas, Peito, Ombros e Tríceps (Melhorado)',
    description: 'Treino de alta densidade com pico de contração e técnicas avançadas. Intervalos curtos para máxima intensidade.',
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
        name: 'Pulley Frente Aberto',
        sets: 4,
        reps: '4x10-15 com 2s pico',
        restTime: '45s',
        rpe: 8,
        notes: 'Pico de contração de 2 segundos no final do movimento. Puxar até o peito, segurar 2s, controlar a volta.'
      },
      {
        id: 'ex3',
        name: 'Remada Baixa Triângulo',
        sets: 4,
        reps: '4x10-15 com 2s pico',
        restTime: '45s',
        rpe: 8,
        notes: 'Pico de contração de 2 segundos. Foco em puxar o cotovelo para trás, não apenas o braço. Máxima contração das costas.'
      },
      {
        id: 'ex4',
        name: 'Supino Inclinado com Halteres',
        sets: 4,
        reps: '4x10-15',
        restTime: '45s',
        rpe: 8,
        notes: 'Intervalo curto mantém alta densidade. Controle na descida (2s), explosão na subida.'
      },
      {
        id: 'ex5',
        name: 'Elevação Frontal Sentado com Halteres',
        sets: 4,
        reps: '4x10-15',
        restTime: '45s',
        rpe: 7,
        notes: 'Sentado para isolar deltoide anterior. Elevar até altura dos ombros, não acima.'
      },
      {
        id: 'ex6',
        name: 'Elevação Lateral Sentada com Halteres',
        sets: 4,
        reps: '4x10-15+10 parciais',
        restTime: '45s',
        rpe: 8,
        notes: 'Após falha completa, fazer 10 repetições parciais (meio movimento). Aumenta tempo sob tensão do deltoide médio.'
      },
      {
        id: 'ex7',
        name: 'Tríceps Corda',
        sets: 4,
        reps: '4x10-15 com 2s pico',
        restTime: '45s',
        rpe: 7,
        notes: 'Pico de contração de 2 segundos no final da extensão. Isolamento completo do tríceps.'
      }
    ]
  },
  {
    id: 'treino-c-improved',
    name: 'Treino C - Posterior + Glúteos (Melhorado)',
    description: 'Treino focado em posterior e glúteos com técnicas avançadas. Progressão de carga e rest pause para máximo desenvolvimento.',
    exercises: [
      {
        id: 'ex1',
        name: 'Flexor Deitado',
        sets: 4,
        reps: '1x15-20 + 1x10-15 + 1x8-12 + 1x6-10',
        restTime: '2min',
        rpe: 8,
        notes: 'Progressão de carga: começar leve e aumentar. Intervalo de 2min para recuperação adequada.'
      },
      {
        id: 'ex2',
        name: 'Flexor Sentado',
        sets: 3,
        reps: '1x15-20 + 1x10-15 + 1x8-12+2 rest pause',
        restTime: '90s',
        rpe: 8,
        notes: 'Pico de contração de 2 segundos. Rest pause na última série: descansar 10s e fazer mais 2-3 reps.'
      },
      {
        id: 'ex3',
        name: 'Stiff',
        sets: 3,
        reps: '3x8-12',
        restTime: '45s',
        rpe: 8,
        notes: 'Manter pernas semi-flexionadas. Descer até sentir alongamento no posterior, não forçar amplitude excessiva.'
      },
      {
        id: 'ex4',
        name: 'Afundo Smith com Step',
        sets: 3,
        reps: '3x8-12 (cada perna)',
        restTime: '45s entre pernas',
        rpe: 8,
        notes: 'Step aumenta amplitude e ativação dos glúteos. Trabalho unilateral para equilíbrio. Alternar pernas.'
      },
      {
        id: 'ex5',
        name: 'Elevação de Quadril',
        sets: 4,
        reps: '1x15-20 + 1x10-15 + 1x8-12+2 rest pause + 1x6-10+2 rest pause',
        restTime: '90s',
        rpe: 9,
        notes: 'Rest pause de 10 segundos nas últimas 2 séries. Máxima contração dos glúteos no topo. Progressão de carga.'
      },
      {
        id: 'ex6',
        name: 'Abdutor',
        sets: 5,
        reps: '5x10-15 com 3s pico',
        restTime: '45s',
        rpe: 7,
        notes: 'Pico de contração de 3 segundos (maior que outros exercícios). Volume alto (5 séries) para desenvolvimento lateral.'
      }
    ]
  }
];

