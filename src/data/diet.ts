export interface Meal {
  id: string;
  name: string;
  items: string[];
  calories?: number;
}

export interface DietDay {
  id: string;
  day: string;
  meals: Meal[];
}

/**
 * Dieta para Perfil Feminino - Cutting para Competição Wellness
 * Adaptado por Profissional de Nutrição Esportiva
 * 
 * Perfil da atleta:
 * - Idade: 26 anos
 * - Peso: 88kg | Altura: 165cm | IMC: 32.3
 * - Objetivo: Competição Wellness (perda de peso + desenvolvimento)
 * 
 * Macros para Cutting:
 * - Calorias: 1900 kcal (déficit de 20-25% para perda de peso eficiente)
 * - Proteína: ~120-130g (1.4-1.5g/kg) - preservar massa durante cutting
 * - Carboidratos: ~200-220g (priorizar em torno do treino)
 * - Gorduras: ~50-55g (essenciais para produção hormonal)
 * 
 * Distribuição Média:
 * - 27% Proteína (130g)
 * - 45% Carboidratos (210g)
 * - 28% Gorduras (55g)
 */

export const diet: DietDay[] = [
  {
    id: 'day1',
    day: 'Segunda-feira',
    meals: [
      {
        id: 'breakfast-1',
        name: 'Café da Manhã',
        items: [
          '2 ovos mexidos',
          '1 fatia de pão integral',
          '1 banana média',
          '1 xícara de café com leite desnatado'
        ],
        calories: 320
      },
      {
        id: 'pre-workout-1',
        name: 'Pré-Treino (30-60min antes)',
        items: [
          '1 banana média',
          '1 colher de mel',
          'Café preto (opcional)'
        ],
        calories: 150
      },
      {
        id: 'post-workout-1',
        name: 'Pós-Treino',
        items: [
          '1 scoop de whey protein (30g)',
          '1 banana média',
          '500ml de água'
        ],
        calories: 280
      },
      {
        id: 'lunch-1',
        name: 'Almoço',
        items: [
          '150g de peito de frango grelhado',
          '80g de arroz integral',
          'Salada verde à vontade',
          '1 colher de azeite'
        ],
        calories: 400
      },
      {
        id: 'snack-1',
        name: 'Lanche',
        items: [
          '1 iogurte grego',
          '10 amêndoas'
        ],
        calories: 180
      },
      {
        id: 'dinner-1',
        name: 'Jantar',
        items: [
          '150g de salmão grelhado',
          'Batata doce assada (100g)',
          'Brócolis no vapor',
          'Salada de rúcula'
        ],
        calories: 370
      }
    ]
  },
  {
    id: 'day2',
    day: 'Terça-feira',
    meals: [
      {
        id: 'breakfast-2',
        name: 'Café da Manhã',
        items: [
          'Aveia (50g) com frutas vermelhas',
          '1 colher de chia',
          '1 scoop de whey protein (30g)',
          '1 xícara de chá verde'
        ],
        calories: 350
      },
      {
        id: 'lunch-2',
        name: 'Almoço',
        items: [
          '150g de carne magra grelhada',
          'Quinoa cozida (80g)',
          'Abobrinha grelhada',
          'Salada colorida',
          '1 colher de azeite'
        ],
        calories: 420
      },
      {
        id: 'snack-2',
        name: 'Lanche',
        items: [
          '1 maçã',
          '1 punhado de castanhas (15g)',
          'Chá de ervas'
        ],
        calories: 150
      },
      {
        id: 'dinner-2',
        name: 'Jantar',
        items: [
          'Omelete com 3 claras e 1 gema',
          'Espinafre refogado',
          'Tomate cereja',
          '1 fatia de queijo branco'
        ],
        calories: 280
      },
      {
        id: 'bedtime-2',
        name: 'Antes de Dormir',
        items: [
          '1 scoop de caseína (30g) ou 150g de queijo cottage'
        ],
        calories: 120
      }
    ]
  },
  {
    id: 'day3',
    day: 'Quarta-feira',
    meals: [
      {
        id: 'breakfast-3',
        name: 'Café da Manhã',
        items: [
          'Panqueca de aveia (50g) e banana',
          '1 colher de mel',
          '1 xícara de café'
        ],
        calories: 300
      },
      {
        id: 'pre-workout-3',
        name: 'Pré-Treino (30-60min antes)',
        items: [
          '1 banana média',
          '1 colher de mel',
          'Café preto (opcional)'
        ],
        calories: 150
      },
      {
        id: 'post-workout-3',
        name: 'Pós-Treino',
        items: [
          '1 scoop de whey protein (30g)',
          '1 banana média',
          '500ml de água'
        ],
        calories: 280
      },
      {
        id: 'lunch-3',
        name: 'Almoço',
        items: [
          '150g de peito de peru',
          'Batata doce assada (100g)',
          'Couve refogada',
          'Salada de alface e tomate',
          '1 colher de azeite'
        ],
        calories: 380
      },
      {
        id: 'snack-3',
        name: 'Lanche',
        items: [
          'Smoothie de frutas (sem açúcar)',
          '1 colher de proteína em pó (30g)'
        ],
        calories: 200
      },
      {
        id: 'dinner-3',
        name: 'Jantar',
        items: [
          'Salmão ao forno (150g)',
          'Arroz integral (80g)',
          'Aspargos grelhados',
          'Salada verde'
        ],
        calories: 400
      }
    ]
  }
];



