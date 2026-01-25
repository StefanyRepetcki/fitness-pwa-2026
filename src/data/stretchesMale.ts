/**
 * Alongamentos para Treinos Masculinos (ABCDEF)
 * Baseado em evidências científicas e práticas profissionais
 * 
 * Princípios:
 * - Alongamentos estáticos após o treino (músculos aquecidos)
 * - Foco nos grupos musculares trabalhados
 * - Duração: 30-45 segundos por alongamento
 * - Respiração profunda e relaxada
 */

import type { WorkoutStretches } from './stretches';

export const stretchesByWorkoutMale: WorkoutStretches[] = [
  {
    workoutId: 'treino-a-male',
    workoutName: 'Treino A - Costas',
    stretches: [
      {
        id: 'stretch-a-1',
        name: 'Alongamento de Dorsais com Braço Elevado',
        description: 'Alonga os músculos das costas (latíssimo do dorso)',
        duration: '30 segundos cada lado',
        instructions: 'Fique em pé, levante um braço acima da cabeça e incline o tronco para o lado oposto. Sinta o alongamento na lateral do tronco e costas. Mantenha os pés alinhados.'
      },
      {
        id: 'stretch-a-2',
        name: 'Alongamento de Trapézio e Romboides',
        description: 'Alonga a parte média das costas',
        duration: '30-45 segundos',
        instructions: 'Sente-se ou fique em pé, cruze os braços na frente do peito e puxe suavemente. Sinta o alongamento entre as escápulas. Respire profundamente.'
      },
      {
        id: 'stretch-a-3',
        name: 'Alongamento de Bíceps',
        description: 'Alonga a parte anterior do braço (bíceps)',
        duration: '30 segundos cada braço',
        instructions: 'Estenda um braço para frente, palma para cima. Com a outra mão, puxe os dedos para baixo e o braço para trás levemente. Sinta o alongamento no bíceps.'
      },
      {
        id: 'stretch-a-4',
        name: 'Alongamento de Deltoides Posteriores',
        description: 'Alonga os deltoides posteriores e parte superior das costas',
        duration: '30 segundos cada lado',
        instructions: 'Em pé, traga um braço na horizontal e puxe com o outro braço, inclinando levemente o tronco. Sinta o alongamento na parte posterior do ombro.'
      },
      {
        id: 'stretch-a-5',
        name: 'Alongamento de Lombar e Extensores',
        description: 'Alonga a parte inferior das costas',
        duration: '30-45 segundos',
        instructions: 'Deite-se de costas, puxe os joelhos em direção ao peito. Balance suavemente de um lado para o outro. Respire profundamente e relaxe.'
      }
    ]
  },
  {
    workoutId: 'treino-b-male',
    workoutName: 'Treino B - Peito, Ombros e Tríceps',
    stretches: [
      {
        id: 'stretch-b-1',
        name: 'Alongamento de Peitoral na Porta',
        description: 'Alonga os músculos peitorais (maior e menor)',
        duration: '30-45 segundos cada lado',
        instructions: 'Coloque o antebraço na moldura da porta, com o braço em 90 graus. Avance o corpo para frente até sentir o alongamento no peito. Mantenha a postura ereta.'
      },
      {
        id: 'stretch-b-2',
        name: 'Alongamento de Ombro Cruzado',
        description: 'Alonga os músculos posteriores do ombro e deltoides',
        duration: '30 segundos cada braço',
        instructions: 'Traga um braço na horizontal em frente ao peito e puxe com o outro braço, mantendo o ombro relaxado. Sinta o alongamento na parte posterior do ombro.'
      },
      {
        id: 'stretch-b-3',
        name: 'Alongamento de Tríceps',
        description: 'Alonga a parte posterior do braço (tríceps)',
        duration: '30 segundos cada braço',
        instructions: 'Levante um braço, dobre o cotovelo e puxe o braço para trás com a outra mão, mantendo o cotovelo apontando para cima. Sinta o alongamento no tríceps.'
      },
      {
        id: 'stretch-b-4',
        name: 'Alongamento de Trapézio Superior',
        description: 'Alonga os músculos do pescoço e trapézio superior',
        duration: '30 segundos cada lado',
        instructions: 'Incline a cabeça para um lado, segurando levemente com a mão. Mantenha o ombro oposto relaxado. Não force, apenas sinta o alongamento suave.'
      },
      {
        id: 'stretch-b-5',
        name: 'Alongamento de Deltoide Anterior',
        description: 'Alonga o deltoide anterior e peitoral superior',
        duration: '30 segundos cada lado',
        instructions: 'Em pé, coloque o braço atrás do corpo segurando em uma superfície fixa. Avance o corpo levemente para frente até sentir o alongamento no ombro e peito.'
      }
    ]
  },
  {
    workoutId: 'treino-c-male',
    workoutName: 'Treino C - Pernas (Quadríceps)',
    stretches: [
      {
        id: 'stretch-c-1',
        name: 'Alongamento de Quadríceps em Pé',
        description: 'Alonga a parte frontal da coxa (quadríceps)',
        duration: '30-45 segundos cada perna',
        instructions: 'Fique em pé, dobre uma perna para trás e segure o pé com a mão. Mantenha o joelho alinhado e empurre o quadril para frente levemente. Mantenha o joelho da perna de apoio levemente flexionado.'
      },
      {
        id: 'stretch-c-2',
        name: 'Agachamento Profundo',
        description: 'Alonga quadríceps, glúteos, panturrilhas e adutores',
        duration: '30-45 segundos',
        instructions: 'Agache completamente mantendo os pés no chão. Mantenha as costas retas e respire profundamente. Se necessário, segure em algo para apoio.'
      },
      {
        id: 'stretch-c-3',
        name: 'Alongamento de Panturrilha Sentado',
        description: 'Alonga a panturrilha de forma mais profunda',
        duration: '30 segundos cada perna',
        instructions: 'Sente-se com uma perna estendida. Puxe os dedos do pé em direção ao corpo usando uma toalha ou cinto. Sinta o alongamento na panturrilha.'
      },
      {
        id: 'stretch-c-4',
        name: 'Alongamento de Adutores Sentado',
        description: 'Alonga a parte interna da coxa',
        duration: '30-45 segundos',
        instructions: 'Sente-se no chão com as pernas abertas em V. Incline o tronco para frente mantendo as costas retas. Respire profundamente e relaxe.'
      },
      {
        id: 'stretch-c-5',
        name: 'Alongamento de Posterior Sentado',
        description: 'Alonga a parte posterior da coxa (isquiotibiais)',
        duration: '30-45 segundos cada perna',
        instructions: 'Sente-se com uma perna estendida. Incline o tronco para frente mantendo as costas retas até sentir o alongamento. Não force, apenas sinta o alongamento suave.'
      }
    ]
  },
  {
    workoutId: 'treino-d-male',
    workoutName: 'Treino D - Costas',
    stretches: [
      {
        id: 'stretch-d-1',
        name: 'Alongamento de Dorsais com Braço Elevado',
        description: 'Alonga os músculos das costas (latíssimo do dorso)',
        duration: '30 segundos cada lado',
        instructions: 'Fique em pé, levante um braço acima da cabeça e incline o tronco para o lado oposto. Sinta o alongamento na lateral do tronco e costas. Mantenha os pés alinhados.'
      },
      {
        id: 'stretch-d-2',
        name: 'Alongamento de Trapézio e Romboides',
        description: 'Alonga a parte média das costas',
        duration: '30-45 segundos',
        instructions: 'Sente-se ou fique em pé, cruze os braços na frente do peito e puxe suavemente. Sinta o alongamento entre as escápulas. Respire profundamente.'
      },
      {
        id: 'stretch-d-3',
        name: 'Alongamento de Bíceps',
        description: 'Alonga a parte anterior do braço (bíceps)',
        duration: '30 segundos cada braço',
        instructions: 'Estenda um braço para frente, palma para cima. Com a outra mão, puxe os dedos para baixo e o braço para trás levemente. Sinta o alongamento no bíceps.'
      },
      {
        id: 'stretch-d-4',
        name: 'Alongamento de Lombar e Extensores',
        description: 'Alonga a parte inferior das costas',
        duration: '30-45 segundos',
        instructions: 'Deite-se de costas, puxe os joelhos em direção ao peito. Balance suavemente de um lado para o outro. Respire profundamente e relaxe.'
      }
    ]
  },
  {
    workoutId: 'treino-e-male',
    workoutName: 'Treino E - Peito e Ombros',
    stretches: [
      {
        id: 'stretch-e-1',
        name: 'Alongamento de Peitoral na Porta',
        description: 'Alonga os músculos peitorais (maior e menor)',
        duration: '30-45 segundos cada lado',
        instructions: 'Coloque o antebraço na moldura da porta, com o braço em 90 graus. Avance o corpo para frente até sentir o alongamento no peito. Mantenha a postura ereta.'
      },
      {
        id: 'stretch-e-2',
        name: 'Alongamento de Ombro Cruzado',
        description: 'Alonga os músculos posteriores do ombro e deltoides',
        duration: '30 segundos cada braço',
        instructions: 'Traga um braço na horizontal em frente ao peito e puxe com o outro braço, mantendo o ombro relaxado. Sinta o alongamento na parte posterior do ombro.'
      },
      {
        id: 'stretch-e-3',
        name: 'Alongamento de Deltoide Anterior',
        description: 'Alonga o deltoide anterior e peitoral superior',
        duration: '30 segundos cada lado',
        instructions: 'Em pé, coloque o braço atrás do corpo segurando em uma superfície fixa. Avance o corpo levemente para frente até sentir o alongamento no ombro e peito.'
      },
      {
        id: 'stretch-e-4',
        name: 'Alongamento de Trapézio Superior',
        description: 'Alonga os músculos do pescoço e trapézio superior',
        duration: '30 segundos cada lado',
        instructions: 'Incline a cabeça para um lado, segurando levemente com a mão. Mantenha o ombro oposto relaxado. Não force, apenas sinta o alongamento suave.'
      }
    ]
  },
  {
    workoutId: 'treino-f-male',
    workoutName: 'Treino F - Pernas (Posterior)',
    stretches: [
      {
        id: 'stretch-f-1',
        name: 'Alongamento de Posterior Sentado',
        description: 'Alonga a parte posterior da coxa (isquiotibiais)',
        duration: '30-45 segundos cada perna',
        instructions: 'Sente-se com uma perna estendida. Incline o tronco para frente mantendo as costas retas até sentir o alongamento. Não force, apenas sinta o alongamento suave.'
      },
      {
        id: 'stretch-f-2',
        name: 'Alongamento de Glúteo Deitado',
        description: 'Alonga os glúteos profundamente',
        duration: '30-45 segundos cada lado',
        instructions: 'Deite-se de costas, cruze uma perna sobre a outra e puxe o joelho em direção ao peito. Sinta o alongamento no glúteo. Mantenha a perna de baixo estendida.'
      },
      {
        id: 'stretch-f-3',
        name: 'Alongamento de Posterior em Pé',
        description: 'Alonga isquiotibiais e panturrilhas',
        duration: '30 segundos cada perna',
        instructions: 'Coloque um pé em uma superfície elevada (cadeira ou step). Mantenha a perna estendida e incline o tronco para frente. Sinta o alongamento no posterior.'
      },
      {
        id: 'stretch-f-4',
        name: 'Alongamento de Panturrilha na Parede',
        description: 'Alonga os músculos da panturrilha (gastrocnêmio e sóleo)',
        duration: '30 segundos cada perna',
        instructions: 'Apoie as mãos na parede, coloque um pé à frente e outro atrás. Mantenha a perna de trás estendida e empurre o calcanhar no chão. Depois, flexione levemente o joelho de trás para alongar o sóleo.'
      },
      {
        id: 'stretch-f-5',
        name: 'Alongamento de Quadríceps em Pé',
        description: 'Alonga a parte frontal da coxa (quadríceps)',
        duration: '30-45 segundos cada perna',
        instructions: 'Fique em pé, dobre uma perna para trás e segure o pé com a mão. Mantenha o joelho alinhado e empurre o quadril para frente levemente.'
      },
      {
        id: 'stretch-f-6',
        name: 'Alongamento de Abdutores',
        description: 'Alonga a parte lateral do quadril e glúteos',
        duration: '30 segundos cada lado',
        instructions: 'Sente-se com uma perna estendida e a outra dobrada. Gire o tronco em direção à perna dobrada, sentindo o alongamento no quadril.'
      }
    ]
  }
];
