/**
 * Treinos Masculinos - Rotina ABCDEF (6 treinos)
 * Estrutura de alta frequência para desenvolvimento completo
 * 
 * Estrutura:
 * - Treino A: Costas
 * - Treino B: Peito, Ombros, Tríceps
 * - Treino C: Pernas (Quadríceps focado)
 * - Treino D: Costas
 * - Treino E: Peito, Ombros
 * - Treino F: Pernas (Posterior focado)
 * 
 * Volume: 2 séries de trabalho por exercício (após aquecimento/ajuste)
 * Repetições: 6-15 (força-hipertrofia)
 * Descanso: 1-3 minutos (compostos mais longos)
 */

import type { Workout } from './workouts';

export const workoutsMale: Workout[] = [
  {
    id: 'treino-a-male',
    name: 'Treino A - Costas',
    description: 'Treino focado em desenvolvimento completo das costas com ênfase em largura e espessura. Inclui mobilidade e alongamento de peito, posteriores, glúteos, quadríceps e ílio-psoas.',
    exercises: [
      {
        id: 'ex1',
        name: 'Mobilidade e Alongamento',
        sets: 1,
        reps: 'Aquecimento',
        restTime: '-',
        rpe: 5,
        notes: 'Mobilidade e alongamento: peito, posteriores de coxa, glúteos, quadríceps e ílio-psoas. Essencial para prevenir lesões e melhorar execução.'
      },
      {
        id: 'ex2',
        name: 'Remada Curvada',
        sets: 6,
        reps: '1-2x10-15 (aquecimento) + 1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '1-3min',
        rpe: 8,
        notes: '2 segundos de pico de contração. Primeiras séries são aquecimento (10-15 reps, 1min descanso), depois ajuste (4-6 reps, 1-2min), por fim trabalho (6-10 reps, 2-3min). Ver vídeo para técnica.'
      },
      {
        id: 'ex3',
        name: 'Remada Baixa Triângulo',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2-3min',
        rpe: 8,
        notes: '2 segundos de pico de contração. Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2-3min). Foco em espessura das costas médias. Ver vídeo.'
      },
      {
        id: 'ex4',
        name: 'Serrote',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2-3min). Trabalho unilateral para desenvolvimento simétrico. Ver vídeo.'
      },
      {
        id: 'ex5',
        name: 'Pulley Frente Triângulo',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2-3min). Foco em largura das costas. Ver vídeo.'
      },
      {
        id: 'ex6',
        name: 'Hiper Extensão no Banco Romano',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2min',
        rpe: 7,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2min). Desenvolvimento de lombares e glúteos. Ver vídeo.'
      },
      {
        id: 'ex7',
        name: 'Rosca Scott (Máquina ou Cabo)',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2min',
        rpe: 7,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2min). Na última série de trabalho, realizar 2 rest pause de 10 segundos. Ver vídeo.'
      }
    ]
  },
  {
    id: 'treino-b-male',
    name: 'Treino B - Peito, Ombros e Tríceps',
    description: 'Treino completo de tronco superior com foco em peitoral, deltoides e tríceps. Inclui mobilidade e alongamento de peito e ombros.',
    exercises: [
      {
        id: 'ex1',
        name: 'Mobilidade e Alongamento',
        sets: 1,
        reps: 'Aquecimento',
        restTime: '-',
        rpe: 5,
        notes: 'Mobilidade e alongamento: peito e ombros. Essencial para prevenir lesões e melhorar amplitude de movimento.'
      },
      {
        id: 'ex2',
        name: 'Supino Inclinado (Máquina ou Halteres)',
        sets: 6,
        reps: '1-2x10-15 (aquecimento) + 1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '1-3min',
        rpe: 8,
        notes: 'Primeiras séries são aquecimento (10-15 reps, 1min), depois ajuste (4-6 reps, 1-2min), por fim trabalho (6-10 reps, 2-3min). Foco em peitoral superior. Ver vídeo.'
      },
      {
        id: 'ex3',
        name: 'Supino Reto (Máquina ou Halteres)',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2-3min). Na última série de trabalho, realizar 2 rest pause de 10 segundos. Ver vídeo.'
      },
      {
        id: 'ex4',
        name: 'Supino Declinado (Máquina, Barra ou Crossover)',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2-3min',
        rpe: 7,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2-3min). Foco em peitoral inferior. Ver vídeo.'
      },
      {
        id: 'ex5',
        name: 'Voador',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2min',
        rpe: 7,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2min). Na última série de trabalho, realizar 2 drop sets: reduzir 30% da carga e continuar até falha. Ver vídeo.'
      },
      {
        id: 'ex6',
        name: 'Elevação Frontal com Corda',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2min',
        rpe: 7,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2min). Desenvolvimento do deltoide anterior. Ver vídeo.'
      },
      {
        id: 'ex7',
        name: 'Elevação Lateral Sentado com Halteres',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2min',
        rpe: 8,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2min). Na última série de trabalho, realizar 2 rest pause de 10 segundos. Sentado para melhor isolamento. Ver vídeo.'
      },
      {
        id: 'ex8',
        name: 'Tríceps Corda',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2min',
        rpe: 7,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2min). Isolamento completo do tríceps. Ver vídeo.'
      }
    ]
  },
  {
    id: 'treino-c-male',
    name: 'Treino C - Pernas (Quadríceps)',
    description: 'Treino focado em desenvolvimento de quadríceps e panturrilhas. Inclui mobilidade e alongamento de posteriores, glúteos, quadríceps e ílio-psoas.',
    exercises: [
      {
        id: 'ex1',
        name: 'Mobilidade e Alongamento',
        sets: 1,
        reps: 'Aquecimento',
        restTime: '-',
        rpe: 5,
        notes: 'Mobilidade e alongamento: posteriores de coxa, glúteos, quadríceps e ílio-psoas. Essencial para prevenir lesões e melhorar amplitude.'
      },
      {
        id: 'ex2',
        name: 'Panturrilhas Sentada',
        sets: 6,
        reps: '1-2x10-15 (aquecimento) + 1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '1-2min',
        rpe: 7,
        notes: 'Primeiras séries são aquecimento (10-15 reps, 1min), depois ajuste (4-6 reps, 1-2min), por fim trabalho (6-10 reps, 2min). Trabalho do gastrocnêmio interno. Ver vídeo.'
      },
      {
        id: 'ex3',
        name: 'Extensor',
        sets: 6,
        reps: '1-2x10-15 (aquecimento) + 1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '1-2min',
        rpe: 8,
        notes: 'Primeiras séries são aquecimento (10-15 reps, 1min), depois ajuste (4-6 reps, 1-2min), por fim trabalho (6-10 reps, 2min). Ativação pré-exaustão do quadríceps. Ver vídeo.'
      },
      {
        id: 'ex4',
        name: 'Hack Machine',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x8-12 (trabalho)',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (8-12 reps, 2-3min). Na última série de trabalho, realizar 2 rest pause de 10 segundos. Exercício principal para quadríceps. Ver vídeo.'
      },
      {
        id: 'ex5',
        name: 'Leg Press 45º',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x10-15 (trabalho)',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (10-15 reps, 2-3min). Após falha na última série, realizar 10 repetições parciais (meio movimento). Ver vídeo.'
      },
      {
        id: 'ex6',
        name: 'Flexor Sentado',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2min',
        rpe: 7,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2min). Trabalho complementar de posterior. Ver vídeo.'
      },
      {
        id: 'ex7',
        name: 'Adutor',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '1min',
        rpe: 6,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 1min). Desenvolvimento da parte interna da coxa. Ver vídeo.'
      }
    ]
  },
  {
    id: 'treino-d-male',
    name: 'Treino D - Costas',
    description: 'Segundo treino de costas da semana com variações de exercícios para estímulo diferente. Inclui mobilidade e alongamento de peito, posteriores, glúteos, quadríceps e ílio-psoas.',
    exercises: [
      {
        id: 'ex1',
        name: 'Mobilidade e Alongamento',
        sets: 1,
        reps: 'Aquecimento',
        restTime: '-',
        rpe: 5,
        notes: 'Mobilidade e alongamento: peito, posteriores de coxa, glúteos, quadríceps e ílio-psoas. Essencial para prevenir lesões e melhorar execução.'
      },
      {
        id: 'ex2',
        name: 'Pull Down com Corda',
        sets: 6,
        reps: '1-2x10-15 (aquecimento) + 1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '1-3min',
        rpe: 8,
        notes: 'Primeiras séries são aquecimento (10-15 reps, 1min), depois ajuste (4-6 reps, 1-2min), por fim trabalho (6-10 reps, 2-3min). Variação de pegada para estímulo diferente. Ver vídeo.'
      },
      {
        id: 'ex3',
        name: 'Pulley Frente Aberto',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2-3min). Foco em largura das costas. Ver vídeo.'
      },
      {
        id: 'ex4',
        name: 'Remada Baixa Pegada Aberta',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2-3min). Variação de pegada para estímulo diferente das costas médias. Ver vídeo.'
      },
      {
        id: 'ex5',
        name: 'Serrote',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2-3min). Trabalho unilateral para desenvolvimento simétrico. Ver vídeo.'
      },
      {
        id: 'ex6',
        name: 'Hiper Extensão no Banco Romano',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2min',
        rpe: 7,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2min). Desenvolvimento de lombares e glúteos. Ver vídeo.'
      },
      {
        id: 'ex7',
        name: 'Rosca Direta no Cabo',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2min',
        rpe: 7,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2min). Na última série de trabalho, realizar 2 rest pause de 10 segundos. Ver vídeo.'
      }
    ]
  },
  {
    id: 'treino-e-male',
    name: 'Treino E - Peito e Ombros',
    description: 'Segundo treino de peito e ombros da semana com foco em desenvolvimento completo. Inclui paralelas com peso do corpo.',
    exercises: [
      {
        id: 'ex1',
        name: 'Supino Inclinado (Máquina ou Halteres)',
        sets: 6,
        reps: '1-2x10-15 (aquecimento) + 1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '1-3min',
        rpe: 8,
        notes: 'Primeiras séries são aquecimento (10-15 reps, 1min), depois ajuste (4-6 reps, 1-2min), por fim trabalho (6-10 reps, 2-3min). Foco em peitoral superior. Ver vídeo.'
      },
      {
        id: 'ex2',
        name: 'Supino Reto (Máquina ou Halteres)',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2-3min). Desenvolvimento completo do peitoral. Ver vídeo.'
      },
      {
        id: 'ex3',
        name: 'Voador',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2min',
        rpe: 7,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2min). Isolamento do peitoral. Ver vídeo.'
      },
      {
        id: 'ex4',
        name: 'Elevação Frontal com Corda',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2min',
        rpe: 7,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2min). Desenvolvimento do deltoide anterior. Ver vídeo.'
      },
      {
        id: 'ex5',
        name: 'Elevação Lateral Sentado com Halteres',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2min',
        rpe: 8,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2min). Na última série de trabalho, realizar 2 rest pause de 10 segundos. Sentado para melhor isolamento. Ver vídeo.'
      },
      {
        id: 'ex6',
        name: 'Elevação Lateral Unilateral no Cabo',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2-3min',
        rpe: 7,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2-3min). Trabalho unilateral para desenvolvimento simétrico do deltoide médio. Ver vídeo.'
      },
      {
        id: 'ex7',
        name: 'Paralelas com Peso do Corpo',
        sets: 3,
        reps: '3x máximo repetições',
        restTime: '2min',
        rpe: 8,
        notes: '3 séries de máximo repetições possíveis (intervalo 2 minutos). Exercício composto para tríceps e peitoral inferior. Ver vídeo.'
      }
    ]
  },
  {
    id: 'treino-f-male',
    name: 'Treino F - Pernas (Posterior)',
    description: 'Treino focado em posterior de coxa, glúteos e panturrilhas. Inclui mobilidade e alongamento de posteriores, glúteos, quadríceps e ílio-psoas.',
    exercises: [
      {
        id: 'ex1',
        name: 'Mobilidade e Alongamento',
        sets: 1,
        reps: 'Aquecimento',
        restTime: '-',
        rpe: 5,
        notes: 'Mobilidade e alongamento: posteriores de coxa, glúteos, quadríceps e ílio-psoas. Essencial para prevenir lesões e melhorar amplitude.'
      },
      {
        id: 'ex2',
        name: 'Panturrilhas em Pé na Máquina',
        sets: 6,
        reps: '1-2x10-15 (aquecimento) + 1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '1-2min',
        rpe: 7,
        notes: 'Primeiras séries são aquecimento (10-15 reps, 1min), depois ajuste (4-6 reps, 1-2min), por fim trabalho (6-10 reps, 2min). Trabalho do gastrocnêmio. Ver vídeo.'
      },
      {
        id: 'ex3',
        name: 'Flexor Deitado',
        sets: 6,
        reps: '1-2x10-15 (aquecimento) + 1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '1-2min',
        rpe: 8,
        notes: 'Primeiras séries são aquecimento (10-15 reps, 1min), depois ajuste (4-6 reps, 1-2min), por fim trabalho (6-10 reps, 2min). Exercício principal para posterior. Ver vídeo.'
      },
      {
        id: 'ex4',
        name: 'Stiff',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x10-15 (trabalho)',
        restTime: '2-3min',
        rpe: 8,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (10-15 reps, 2-3min). Exercício composto para posterior e glúteos. Ver vídeo.'
      },
      {
        id: 'ex5',
        name: 'Abdutor',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '2min',
        rpe: 6,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 2min). Desenvolvimento lateral do glúteo. Ver vídeo.'
      },
      {
        id: 'ex6',
        name: 'Elevação de Quadril',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x8-12 (trabalho)',
        restTime: '2-3min',
        rpe: 9,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (8-12 reps, 2-3min). Na última série de trabalho, realizar 2 rest pause de 10 segundos. Exercício principal para glúteos. Ver vídeo.'
      },
      {
        id: 'ex7',
        name: 'Extensor',
        sets: 4,
        reps: '1-2x4-6 (ajuste) + 2x6-10 (trabalho)',
        restTime: '1min',
        rpe: 7,
        notes: 'Séries de ajuste (4-6 reps, 1-2min) seguidas de trabalho (6-10 reps, 1min). Trabalho complementar de quadríceps. Ver vídeo.'
      }
    ]
  }
];
