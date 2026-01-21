export interface Stretch {
  id: string;
  name: string;
  description: string;
  duration: string; // Ex: "30 segundos" ou "3x 20s"
  instructions?: string;
  image?: string;
}

export interface WorkoutStretches {
  workoutId: string;
  workoutName: string;
  stretches: Stretch[];
}

export const stretchesByWorkout: WorkoutStretches[] = [
  {
    workoutId: 'treino-a',
    workoutName: 'Treino A - Quadríceps + Panturrilha',
    stretches: [
      {
        id: 'stretch-a-1',
        name: 'Alongamento de Quadríceps em Pé',
        description: 'Alonga a parte frontal da coxa (quadríceps)',
        duration: '30 segundos cada perna',
        instructions: 'Fique em pé, dobre uma perna para trás e segure o pé com a mão. Mantenha o joelho alinhado e empurre o quadril para frente levemente.'
      },
      {
        id: 'stretch-a-2',
        name: 'Alongamento de Panturrilha na Parede',
        description: 'Alonga os músculos da panturrilha (gastrocnêmio e sóleo)',
        duration: '30 segundos cada perna',
        instructions: 'Apoie as mãos na parede, coloque um pé à frente e outro atrás. Mantenha a perna de trás estendida e empurre o calcanhar no chão.'
      },
      {
        id: 'stretch-a-3',
        name: 'Agachamento Profundo',
        description: 'Alonga quadríceps, glúteos e panturrilhas',
        duration: '30-45 segundos',
        instructions: 'Agache completamente mantendo os pés no chão. Mantenha as costas retas e respire profundamente.'
      },
      {
        id: 'stretch-a-4',
        name: 'Alongamento de Adutores Sentado',
        description: 'Alonga a parte interna da coxa',
        duration: '30-45 segundos',
        instructions: 'Sente-se no chão com as pernas abertas em V. Incline o tronco para frente mantendo as costas retas.'
      },
      {
        id: 'stretch-a-5',
        name: 'Alongamento de Panturrilha Sentado',
        description: 'Alonga a panturrilha de forma mais profunda',
        duration: '30 segundos cada perna',
        instructions: 'Sente-se com uma perna estendida. Puxe os dedos do pé em direção ao corpo usando uma toalha ou cinto.'
      }
    ]
  },
  {
    workoutId: 'treino-b',
    workoutName: 'Treino B - Costas + Peito + Ombro',
    stretches: [
      {
        id: 'stretch-b-1',
        name: 'Alongamento de Peitoral na Porta',
        description: 'Alonga os músculos peitorais',
        duration: '30-45 segundos cada lado',
        instructions: 'Coloque o antebraço na moldura da porta, com o braço em 90 graus. Avance o corpo para frente até sentir o alongamento no peito.'
      },
      {
        id: 'stretch-b-2',
        name: 'Alongamento de Dorsais com Braço Elevado',
        description: 'Alonga os músculos das costas (latíssimo do dorso)',
        duration: '30 segundos cada lado',
        instructions: 'Fique em pé, levante um braço acima da cabeça e incline o tronco para o lado oposto. Sinta o alongamento na lateral do tronco.'
      },
      {
        id: 'stretch-b-3',
        name: 'Alongamento de Ombro Cruzado',
        description: 'Alonga os músculos posteriores do ombro',
        duration: '30 segundos cada braço',
        instructions: 'Traga um braço na horizontal em frente ao peito e puxe com o outro braço, mantendo o ombro relaxado.'
      },
      {
        id: 'stretch-b-4',
        name: 'Alongamento de Trapézio',
        description: 'Alonga os músculos do pescoço e trapézio superior',
        duration: '30 segundos cada lado',
        instructions: 'Incline a cabeça para um lado, segurando levemente com a mão. Mantenha o ombro oposto relaxado.'
      },
      {
        id: 'stretch-b-5',
        name: 'Alongamento de Tríceps',
        description: 'Alonga a parte posterior do braço',
        duration: '30 segundos cada braço',
        instructions: 'Levante um braço, dobre o cotovelo e puxe o braço para trás com a outra mão, mantendo o cotovelo apontando para cima.'
      }
    ]
  },
  {
    workoutId: 'treino-c',
    workoutName: 'Treino C - Posterior + Glúteos',
    stretches: [
      {
        id: 'stretch-c-1',
        name: 'Alongamento de Posterior Sentado',
        description: 'Alonga a parte posterior da coxa (isquiotibiais)',
        duration: '30-45 segundos cada perna',
        instructions: 'Sente-se com uma perna estendida. Incline o tronco para frente mantendo as costas retas até sentir o alongamento.'
      },
      {
        id: 'stretch-c-2',
        name: 'Alongamento de Glúteo Deitado',
        description: 'Alonga os glúteos profundamente',
        duration: '30-45 segundos cada lado',
        instructions: 'Deite-se de costas, cruze uma perna sobre a outra e puxe o joelho em direção ao peito. Sinta o alongamento no glúteo.'
      },
      {
        id: 'stretch-c-3',
        name: 'Alongamento de Posterior em Pé',
        description: 'Alonga isquiotibiais e panturrilhas',
        duration: '30 segundos cada perna',
        instructions: 'Coloque um pé em uma superfície elevada (cadeira ou step). Mantenha a perna estendida e incline o tronco para frente.'
      },
      {
        id: 'stretch-c-4',
        name: 'Alongamento de Glúteo com Perna Cruzada',
        description: 'Alonga glúteos e piriforme',
        duration: '30-45 segundos cada lado',
        instructions: 'Sente-se, cruze uma perna sobre a outra e puxe o joelho em direção ao peito. Mantenha as costas retas.'
      },
      {
        id: 'stretch-c-5',
        name: 'Alongamento de Abdutores',
        description: 'Alonga a parte lateral do quadril e glúteos',
        duration: '30 segundos cada lado',
        instructions: 'Sente-se com uma perna estendida e a outra dobrada. Gire o tronco em direção à perna dobrada, sentindo o alongamento no quadril.'
      }
    ]
  },
  // Alongamentos para ABCDEF - Treino A (Quadríceps focado)
  {
    workoutId: 'treino-a-abcdef',
    workoutName: 'Treino A - Quadríceps (ABCDEF)',
    stretches: [
      {
        id: 'stretch-a-abcdef-1',
        name: 'Alongamento de Quadríceps em Pé',
        description: 'Alonga a parte frontal da coxa (quadríceps)',
        duration: '30 segundos cada perna',
        instructions: 'Fique em pé, dobre uma perna para trás e segure o pé com a mão. Mantenha o joelho alinhado e empurre o quadril para frente levemente.'
      },
      {
        id: 'stretch-a-abcdef-2',
        name: 'Agachamento Profundo',
        description: 'Alonga quadríceps, glúteos e panturrilhas',
        duration: '30-45 segundos',
        instructions: 'Agache completamente mantendo os pés no chão. Mantenha as costas retas e respire profundamente.'
      },
      {
        id: 'stretch-a-abcdef-3',
        name: 'Alongamento de Adutores Sentado',
        description: 'Alonga a parte interna da coxa',
        duration: '30-45 segundos',
        instructions: 'Sente-se no chão com as pernas abertas em V. Incline o tronco para frente mantendo as costas retas.'
      },
      {
        id: 'stretch-a-abcdef-4',
        name: 'Alongamento de Quadríceps Deitado',
        description: 'Alonga quadríceps de forma mais profunda',
        duration: '30 segundos cada perna',
        instructions: 'Deite-se de lado, dobre a perna de cima e segure o pé. Puxe suavemente em direção ao glúteo, mantendo o quadril alinhado.'
      }
    ]
  },
  // Alongamentos para ABCDEF - Treino B (Costas + Panturrilha)
  {
    workoutId: 'treino-b-abcdef',
    workoutName: 'Treino B - Costas + Panturrilha (ABCDEF)',
    stretches: [
      {
        id: 'stretch-b-abcdef-1',
        name: 'Alongamento de Dorsais com Braço Elevado',
        description: 'Alonga os músculos das costas (latíssimo do dorso)',
        duration: '30 segundos cada lado',
        instructions: 'Fique em pé, levante um braço acima da cabeça e incline o tronco para o lado oposto. Sinta o alongamento na lateral do tronco e costas.'
      },
      {
        id: 'stretch-b-abcdef-2',
        name: 'Alongamento de Trapézio e Romboides',
        description: 'Alonga músculos das costas médias e superiores',
        duration: '30-45 segundos',
        instructions: 'Sente-se ou fique em pé, cruze os braços na frente do peito e puxe suavemente. Sinta o alongamento entre as escápulas. Respire profundamente.'
      },
      {
        id: 'stretch-b-abcdef-3',
        name: 'Alongamento de Panturrilha na Parede',
        description: 'Alonga os músculos da panturrilha (gastrocnêmio e sóleo)',
        duration: '30 segundos cada perna',
        instructions: 'Apoie as mãos na parede, coloque um pé à frente e outro atrás. Mantenha a perna de trás estendida e empurre o calcanhar no chão.'
      },
      {
        id: 'stretch-b-abcdef-4',
        name: 'Alongamento de Panturrilha Sentado',
        description: 'Alonga a panturrilha de forma mais profunda',
        duration: '30 segundos cada perna',
        instructions: 'Sente-se com uma perna estendida. Puxe os dedos do pé em direção ao corpo usando uma toalha ou cinto.'
      },
      {
        id: 'stretch-b-abcdef-5',
        name: 'Alongamento de Core (Prancha Passiva)',
        description: 'Alonga e relaxa o core após trabalho abdominal',
        duration: '30-45 segundos',
        instructions: 'Deite-se de bruços, empurre o tronco para cima mantendo o quadril no chão. Sinta o alongamento na parte frontal do tronco.'
      }
    ]
  },
  // Alongamentos para ABCDEF - Treino C (Posterior + Glúteos + Quadríceps)
  {
    workoutId: 'treino-c-abcdef',
    workoutName: 'Treino C - Posterior + Glúteos + Quadríceps (ABCDEF)',
    stretches: [
      {
        id: 'stretch-c-abcdef-1',
        name: 'Alongamento de Posterior Sentado',
        description: 'Alonga a parte posterior da coxa (isquiotibiais)',
        duration: '30-45 segundos cada perna',
        instructions: 'Sente-se com uma perna estendida. Incline o tronco para frente mantendo as costas retas até sentir o alongamento.'
      },
      {
        id: 'stretch-c-abcdef-2',
        name: 'Alongamento de Glúteo Deitado',
        description: 'Alonga os glúteos profundamente',
        duration: '30-45 segundos cada lado',
        instructions: 'Deite-se de costas, cruze uma perna sobre a outra e puxe o joelho em direção ao peito. Sinta o alongamento no glúteo.'
      },
      {
        id: 'stretch-c-abcdef-3',
        name: 'Alongamento de Quadríceps em Pé',
        description: 'Alonga a parte frontal da coxa (quadríceps)',
        duration: '30 segundos cada perna',
        instructions: 'Fique em pé, dobre uma perna para trás e segure o pé com a mão. Mantenha o joelho alinhado e empurre o quadril para frente levemente.'
      },
      {
        id: 'stretch-c-abcdef-4',
        name: 'Alongamento de Abdutores',
        description: 'Alonga a parte lateral do quadril e glúteos',
        duration: '30 segundos cada lado',
        instructions: 'Sente-se com uma perna estendida e a outra dobrada. Gire o tronco em direção à perna dobrada, sentindo o alongamento no quadril.'
      },
      {
        id: 'stretch-c-abcdef-5',
        name: 'Agachamento Profundo',
        description: 'Alonga quadríceps, glúteos e panturrilhas',
        duration: '30-45 segundos',
        instructions: 'Agache completamente mantendo os pés no chão. Mantenha as costas retas e respire profundamente.'
      }
    ]
  },
  // Alongamentos para ABCDEF - Treino D (Peito, Ombros, Tríceps)
  {
    workoutId: 'treino-d-abcdef',
    workoutName: 'Treino D - Peito, Ombros e Tríceps (ABCDEF)',
    stretches: [
      {
        id: 'stretch-d-1',
        name: 'Alongamento de Peitoral na Porta',
        description: 'Alonga os músculos peitorais',
        duration: '30-45 segundos cada lado',
        instructions: 'Coloque o antebraço na moldura da porta, com o braço em 90 graus. Avance o corpo para frente até sentir o alongamento no peito.'
      },
      {
        id: 'stretch-d-2',
        name: 'Alongamento de Ombro Cruzado',
        description: 'Alonga os músculos posteriores do ombro',
        duration: '30 segundos cada braço',
        instructions: 'Traga um braço na horizontal em frente ao peito e puxe com o outro braço, mantendo o ombro relaxado.'
      },
      {
        id: 'stretch-d-3',
        name: 'Alongamento de Tríceps',
        description: 'Alonga a parte posterior do braço',
        duration: '30 segundos cada braço',
        instructions: 'Levante um braço, dobre o cotovelo e puxe o braço para trás com a outra mão, mantendo o cotovelo apontando para cima.'
      },
      {
        id: 'stretch-d-4',
        name: 'Alongamento de Deltoide Anterior',
        description: 'Alonga a parte frontal do ombro',
        duration: '30 segundos cada braço',
        instructions: 'Em pé, coloque o braço atrás do corpo segurando em uma superfície fixa. Avance o corpo levemente para frente até sentir o alongamento no ombro e peito.'
      },
      {
        id: 'stretch-d-5',
        name: 'Alongamento de Trapézio Superior',
        description: 'Alonga os músculos do pescoço e trapézio',
        duration: '30 segundos cada lado',
        instructions: 'Incline a cabeça para um lado, segurando levemente com a mão. Mantenha o ombro oposto relaxado. Não force, apenas sinta o alongamento suave.'
      }
    ]
  },
  // Alongamentos para ABCDEF - Treino E (Quadríceps Submáximo)
  {
    workoutId: 'treino-e-abcdef',
    workoutName: 'Treino E - Quadríceps Submáximo (ABCDEF)',
    stretches: [
      {
        id: 'stretch-e-1',
        name: 'Alongamento de Quadríceps em Pé',
        description: 'Alonga a parte frontal da coxa (quadríceps)',
        duration: '30 segundos cada perna',
        instructions: 'Fique em pé, dobre uma perna para trás e segure o pé com a mão. Mantenha o joelho alinhado e empurre o quadril para frente levemente.'
      },
      {
        id: 'stretch-e-2',
        name: 'Agachamento Profundo',
        description: 'Alonga quadríceps, glúteos e panturrilhas',
        duration: '30-45 segundos',
        instructions: 'Agache completamente mantendo os pés no chão. Mantenha as costas retas e respire profundamente.'
      },
      {
        id: 'stretch-e-3',
        name: 'Alongamento de Adutores Sentado',
        description: 'Alonga a parte interna da coxa',
        duration: '30-45 segundos',
        instructions: 'Sente-se no chão com as pernas abertas em V. Incline o tronco para frente mantendo as costas retas.'
      },
      {
        id: 'stretch-e-4',
        name: 'Alongamento de Quadríceps Deitado',
        description: 'Alonga quadríceps de forma mais profunda',
        duration: '30 segundos cada perna',
        instructions: 'Deite-se de lado, dobre a perna de cima e segure o pé. Puxe suavemente em direção ao glúteo, mantendo o quadril alinhado.'
      }
    ]
  }
];



