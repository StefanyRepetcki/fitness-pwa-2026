/**
 * Rotinas de Aquecimento para Treinos Masculinos (Push/Pull/Legs)
 * Baseado em evidências científicas e práticas profissionais
 * 
 * Princípios:
 * - Mobilidade articular específica para os grupos musculares trabalhados
 * - Ativação dos músculos principais
 * - Preparação cardiovascular leve
 * - Duração: 5-7 minutos
 */

import type { WarmupRoutine } from './warmups';

export const warmupRoutinesMale: WarmupRoutine[] = [
  {
    workoutId: 'push-male',
    workoutName: 'Push - Peito, Ombros e Tríceps',
    totalDuration: '5-7 minutos',
    exercises: [
      {
        id: 'warmup-push-1',
        name: 'Mobilidade Escapular e Ombro',
        duration: '1.5 minutos',
        description: 'Prepara escápulas e ombros para movimentos de empurrar',
        instructions: 'Em pé, faça círculos com os ombros para frente (15x) e para trás (15x). Depois, eleve e abaixe as escápulas (10x). Por fim, cruze os braços na frente do peito alternando (10x cada lado).'
      },
      {
        id: 'warmup-push-2',
        name: 'Aquecimento com Elástico (Manguito Rotador)',
        duration: '2 minutos',
        description: 'Ativa o manguito rotador e previne lesões no ombro',
        instructions: 'Com elástico ou cabo, faça rotação externa (15x cada braço), depois rotação interna (15x cada braço). Mantenha o cotovelo junto ao corpo. Depois, faça elevação lateral leve (12x cada braço).'
      },
      {
        id: 'warmup-push-3',
        name: 'Movimentos de Peito (Sem Peso)',
        duration: '1 minuto',
        description: 'Prepara os peitorais para o trabalho intenso',
        instructions: 'Faça flexões de joelhos ou inclinadas (10-12x) ou movimento de crucifixo com os braços estendidos (15x), focando na amplitude completa do movimento.'
      },
      {
        id: 'warmup-push-4',
        name: 'Alongamento Dinâmico de Peitoral',
        duration: '1 minuto',
        description: 'Melhora a amplitude de movimento do peitoral',
        instructions: 'Em pé, estenda os braços para os lados e faça círculos grandes para frente (10x) e para trás (10x). Depois, coloque o antebraço na parede e avance o corpo levemente (10x cada lado).'
      },
      {
        id: 'warmup-push-5',
        name: 'Ativação de Tríceps',
        duration: '30 segundos',
        description: 'Prepara os tríceps para o trabalho',
        instructions: 'Em pé, estenda os braços para trás e faça extensões leves (12x). Depois, faça extensões acima da cabeça sem peso (10x).'
      }
    ]
  },
  {
    workoutId: 'pull-male',
    workoutName: 'Pull - Costas e Bíceps',
    totalDuration: '5-7 minutos',
    exercises: [
      {
        id: 'warmup-pull-1',
        name: 'Mobilidade Escapular Completa',
        duration: '1.5 minutos',
        description: 'Prepara as escápulas para movimentos de puxar',
        instructions: 'Em pé, faça elevação e depressão das escápulas (10x), depois protração e retração (10x). Por fim, faça rotação das escápulas (10x cada direção).'
      },
      {
        id: 'warmup-pull-2',
        name: 'Ativação de Dorsais com Elástico',
        duration: '2 minutos',
        description: 'Ativa os músculos das costas antes do treino',
        instructions: 'Com elástico ou cabo, faça puxadas frontais leves (15x), depois remadas leves (15x). Foque em sentir a contração das costas, não apenas mover os braços.'
      },
      {
        id: 'warmup-pull-3',
        name: 'Mobilidade de Ombro e Trapézio',
        duration: '1 minuto',
        description: 'Prepara ombros e trapézio para o trabalho',
        instructions: 'Em pé, faça círculos grandes com os braços (10x frente, 10x trás). Depois, incline a cabeça para os lados segurando por 2 segundos (5x cada lado).'
      },
      {
        id: 'warmup-pull-4',
        name: 'Alongamento Dinâmico de Costas',
        duration: '1 minuto',
        description: 'Prepara a musculatura das costas',
        instructions: 'Em pé, incline o tronco para frente e deixe os braços balançarem naturalmente (10x). Depois, faça rotação de tronco mantendo os pés fixos (10x cada lado).'
      },
      {
        id: 'warmup-pull-5',
        name: 'Ativação de Bíceps e Braquial',
        duration: '30 segundos',
        description: 'Prepara os bíceps para o trabalho',
        instructions: 'Com braços ao lado do corpo, faça flexões leves de cotovelo sem peso (15x cada braço). Foque na contração do bíceps.'
      }
    ]
  },
  {
    workoutId: 'legs-male',
    workoutName: 'Legs - Pernas Completas',
    totalDuration: '5-7 minutos',
    exercises: [
      {
        id: 'warmup-legs-1',
        name: 'Mobilidade Dinâmica de Quadril',
        duration: '1.5 minutos',
        description: 'Prepara os quadris e glúteos para o trabalho de pernas',
        instructions: 'Em pé, faça círculos com os quadris (10x cada lado), depois balance as pernas para frente e trás (10x cada). Por fim, faça elevação de joelho alternando (10x cada).'
      },
      {
        id: 'warmup-legs-2',
        name: 'Ativação com Mini Band (Glúteos e Quadríceps)',
        duration: '2 minutos',
        description: 'Ativa glúteos e prepara o quadril para exercícios pesados',
        instructions: 'Coloque a mini band nos joelhos. Faça agachamentos leves (15x), depois caminhada lateral (10 passos cada lado), clamshells (15x cada lado) e pontes de glúteo (15x).'
      },
      {
        id: 'warmup-legs-3',
        name: 'Agachamento Livre (Aquecimento)',
        duration: '1 minuto',
        description: 'Prepara o movimento principal do treino',
        instructions: 'Faça 2 séries de 15 agachamentos livres, sem peso, focando na amplitude completa (até paralelo ou abaixo) e técnica perfeita. Descer controlado, subir explosivo.'
      },
      {
        id: 'warmup-legs-4',
        name: 'Alongamento Dinâmico de Quadríceps e Posteriores',
        duration: '1 minuto',
        description: 'Prepara quadríceps e isquiotibiais',
        instructions: 'Em pé, puxe o calcanhar em direção ao glúteo segurando por 2 segundos (10x cada perna). Depois, balance a perna para frente mantendo-a estendida (8x cada perna).'
      },
      {
        id: 'warmup-legs-5',
        name: 'Ativação de Panturrilha e Mobilidade de Tornozelo',
        duration: '30 segundos',
        description: 'Prepara panturrilhas e melhora mobilidade do tornozelo',
        instructions: 'Em pé, eleve os calcanhares lentamente (15x), depois faça círculos com os tornozelos (10x cada lado).'
      }
    ]
  }
];

