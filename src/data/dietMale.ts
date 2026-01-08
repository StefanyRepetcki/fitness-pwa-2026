/**
 * Dieta para Perfil Masculino - Hipertrofia
 * 
 * Macros recomendados para homem (75kg, intermediário):
 * - Calorias: 2800-3200 kcal (superávit de 10-15%)
 * - Proteína: 150-165g (2.0-2.2g/kg)
 * - Carboidratos: 350-450g (4.7-6.0g/kg)
 * - Gorduras: 70-90g (0.9-1.2g/kg)
 * 
 * Distribuição:
 * - 25-30% Proteína
 * - 45-55% Carboidratos
 * - 20-30% Gorduras
 * 
 * Timing:
 * - Pré-treino: Carboidratos + Proteína (2-3h antes)
 * - Pós-treino: Proteína rápida + Carboidratos simples (0-2h depois)
 * - Distribuir proteína em 4-5 refeições
 */

import type { DietDay } from './diet';

export const dietMale: DietDay[] = [
  {
    id: 'day1-male',
    day: 'Segunda-feira',
    meals: [
      {
        id: 'breakfast-1-male',
        name: 'Café da Manhã',
        items: [
          '4 ovos inteiros (2 gemas + 4 claras)',
          '100g de aveia',
          '1 banana grande',
          '1 colher de sopa de mel',
          '1 xícara de café com leite desnatado'
        ],
        calories: 650
      },
      {
        id: 'pre-workout-1-male',
        name: 'Pré-Treino (2-3h antes)',
        items: [
          '150g de arroz branco',
          '150g de peito de frango grelhado',
          '1 batata doce média',
          '1 colher de chá de azeite'
        ],
        calories: 550
      },
      {
        id: 'post-workout-1-male',
        name: 'Pós-Treino',
        items: [
          '1 scoop de whey protein (30g)',
          '1 banana grande',
          '50g de dextrose ou maltodextrina',
          '500ml de água'
        ],
        calories: 400
      },
      {
        id: 'lunch-1-male',
        name: 'Almoço',
        items: [
          '200g de peito de frango ou carne magra',
          '150g de arroz integral',
          '200g de batata doce',
          'Salada verde à vontade',
          '1 colher de sopa de azeite'
        ],
        calories: 750
      },
      {
        id: 'snack-1-male',
        name: 'Lanche da Tarde',
        items: [
          '200g de iogurte grego (0% gordura)',
          '50g de granola',
          '30g de amêndoas',
          '1 fruta (maçã ou pera)'
        ],
        calories: 450
      },
      {
        id: 'dinner-1-male',
        name: 'Jantar',
        items: [
          '200g de salmão ou atum',
          '200g de batata doce ou arroz',
          '150g de brócolis cozido',
          '1 colher de chá de azeite'
        ],
        calories: 600
      },
      {
        id: 'bedtime-1-male',
        name: 'Antes de Dormir',
        items: [
          '1 scoop de caseína (30g) ou 200g de queijo cottage',
          '30g de amendoim ou castanha-do-pará'
        ],
        calories: 300
      }
    ]
  },
  {
    id: 'day2-male',
    day: 'Terça-feira',
    meals: [
      {
        id: 'breakfast-2-male',
        name: 'Café da Manhã',
        items: [
          '100g de aveia',
          '1 scoop de whey protein (30g)',
          '1 banana grande',
          '1 colher de sopa de pasta de amendoim',
          '1 xícara de café'
        ],
        calories: 600
      },
      {
        id: 'pre-workout-2-male',
        name: 'Pré-Treino',
        items: [
          '150g de macarrão integral',
          '150g de frango desfiado',
          '1 batata doce média',
          '1 colher de chá de azeite'
        ],
        calories: 550
      },
      {
        id: 'post-workout-2-male',
        name: 'Pós-Treino',
        items: [
          '1 scoop de whey protein (30g)',
          '1 banana grande',
          '50g de dextrose',
          '500ml de água'
        ],
        calories: 400
      },
      {
        id: 'lunch-2-male',
        name: 'Almoço',
        items: [
          '250g de carne vermelha magra',
          '200g de arroz branco',
          '150g de feijão',
          'Salada verde à vontade',
          '1 colher de sopa de azeite'
        ],
        calories: 800
      },
      {
        id: 'snack-2-male',
        name: 'Lanche da Tarde',
        items: [
          '2 fatias de pão integral',
          '150g de atum em lata',
          '1 ovo cozido',
          '1 fruta'
        ],
        calories: 450
      },
      {
        id: 'dinner-2-male',
        name: 'Jantar',
        items: [
          '200g de peito de frango',
          '200g de batata doce',
          '150g de abobrinha grelhada',
          '1 colher de chá de azeite'
        ],
        calories: 600
      },
      {
        id: 'bedtime-2-male',
        name: 'Antes de Dormir',
        items: [
          '200g de queijo cottage',
          '30g de nozes'
        ],
        calories: 300
      }
    ]
  },
  {
    id: 'day3-male',
    day: 'Quarta-feira',
    meals: [
      {
        id: 'breakfast-3-male',
        name: 'Café da Manhã',
        items: [
          '4 ovos mexidos (2 gemas + 4 claras)',
          '2 fatias de pão integral',
          '1 abacate pequeno',
          '1 xícara de café com leite'
        ],
        calories: 650
      },
      {
        id: 'pre-workout-3-male',
        name: 'Pré-Treino',
        items: [
          '150g de arroz branco',
          '150g de peito de frango',
          '1 batata doce média',
          '1 colher de chá de azeite'
        ],
        calories: 550
      },
      {
        id: 'post-workout-3-male',
        name: 'Pós-Treino',
        items: [
          '1 scoop de whey protein (30g)',
          '1 banana grande',
          '50g de dextrose',
          '500ml de água'
        ],
        calories: 400
      },
      {
        id: 'lunch-3-male',
        name: 'Almoço',
        items: [
          '200g de salmão grelhado',
          '200g de arroz integral',
          '200g de batata doce',
          'Salada verde à vontade',
          '1 colher de sopa de azeite'
        ],
        calories: 750
      },
      {
        id: 'snack-3-male',
        name: 'Lanche da Tarde',
        items: [
          '200g de iogurte grego',
          '50g de granola',
          '30g de castanha-do-pará',
          '1 fruta'
        ],
        calories: 450
      },
      {
        id: 'dinner-3-male',
        name: 'Jantar',
        items: [
          '200g de peito de frango',
          '200g de batata doce',
          '150g de brócolis',
          '1 colher de chá de azeite'
        ],
        calories: 600
      },
      {
        id: 'bedtime-3-male',
        name: 'Antes de Dormir',
        items: [
          '1 scoop de caseína (30g)',
          '30g de amêndoas'
        ],
        calories: 300
      }
    ]
  },
  {
    id: 'day4-male',
    day: 'Quinta-feira',
    meals: [
      {
        id: 'breakfast-4-male',
        name: 'Café da Manhã',
        items: [
          '100g de aveia',
          '1 scoop de whey protein (30g)',
          '1 banana grande',
          '1 colher de sopa de pasta de amendoim',
          '1 xícara de café'
        ],
        calories: 600
      },
      {
        id: 'pre-workout-4-male',
        name: 'Pré-Treino',
        items: [
          '150g de macarrão integral',
          '150g de frango desfiado',
          '1 batata doce média',
          '1 colher de chá de azeite'
        ],
        calories: 550
      },
      {
        id: 'post-workout-4-male',
        name: 'Pós-Treino',
        items: [
          '1 scoop de whey protein (30g)',
          '1 banana grande',
          '50g de dextrose',
          '500ml de água'
        ],
        calories: 400
      },
      {
        id: 'lunch-4-male',
        name: 'Almoço',
        items: [
          '250g de carne vermelha magra',
          '200g de arroz branco',
          '150g de feijão',
          'Salada verde à vontade',
          '1 colher de sopa de azeite'
        ],
        calories: 800
      },
      {
        id: 'snack-4-male',
        name: 'Lanche da Tarde',
        items: [
          '2 fatias de pão integral',
          '150g de atum em lata',
          '1 ovo cozido',
          '1 fruta'
        ],
        calories: 450
      },
      {
        id: 'dinner-4-male',
        name: 'Jantar',
        items: [
          '200g de peito de frango',
          '200g de batata doce',
          '150g de abobrinha grelhada',
          '1 colher de chá de azeite'
        ],
        calories: 600
      },
      {
        id: 'bedtime-4-male',
        name: 'Antes de Dormir',
        items: [
          '200g de queijo cottage',
          '30g de nozes'
        ],
        calories: 300
      }
    ]
  },
  {
    id: 'day5-male',
    day: 'Sexta-feira',
    meals: [
      {
        id: 'breakfast-5-male',
        name: 'Café da Manhã',
        items: [
          '4 ovos inteiros (2 gemas + 4 claras)',
          '100g de aveia',
          '1 banana grande',
          '1 colher de sopa de mel',
          '1 xícara de café com leite'
        ],
        calories: 650
      },
      {
        id: 'pre-workout-5-male',
        name: 'Pré-Treino',
        items: [
          '150g de arroz branco',
          '150g de peito de frango grelhado',
          '1 batata doce média',
          '1 colher de chá de azeite'
        ],
        calories: 550
      },
      {
        id: 'post-workout-5-male',
        name: 'Pós-Treino',
        items: [
          '1 scoop de whey protein (30g)',
          '1 banana grande',
          '50g de dextrose',
          '500ml de água'
        ],
        calories: 400
      },
      {
        id: 'lunch-5-male',
        name: 'Almoço',
        items: [
          '200g de salmão grelhado',
          '200g de arroz integral',
          '200g de batata doce',
          'Salada verde à vontade',
          '1 colher de sopa de azeite'
        ],
        calories: 750
      },
      {
        id: 'snack-5-male',
        name: 'Lanche da Tarde',
        items: [
          '200g de iogurte grego',
          '50g de granola',
          '30g de amêndoas',
          '1 fruta'
        ],
        calories: 450
      },
      {
        id: 'dinner-5-male',
        name: 'Jantar',
        items: [
          '200g de peito de frango',
          '200g de batata doce',
          '150g de brócolis',
          '1 colher de chá de azeite'
        ],
        calories: 600
      },
      {
        id: 'bedtime-5-male',
        name: 'Antes de Dormir',
        items: [
          '1 scoop de caseína (30g)',
          '30g de castanha-do-pará'
        ],
        calories: 300
      }
    ]
  },
  {
    id: 'day6-male',
    day: 'Sábado',
    meals: [
      {
        id: 'breakfast-6-male',
        name: 'Café da Manhã',
        items: [
          '100g de aveia',
          '1 scoop de whey protein (30g)',
          '1 banana grande',
          '1 colher de sopa de pasta de amendoim',
          '1 xícara de café'
        ],
        calories: 600
      },
      {
        id: 'lunch-6-male',
        name: 'Almoço',
        items: [
          '250g de carne vermelha magra',
          '200g de arroz branco',
          '150g de feijão',
          'Salada verde à vontade',
          '1 colher de sopa de azeite'
        ],
        calories: 800
      },
      {
        id: 'snack-6-male',
        name: 'Lanche da Tarde',
        items: [
          '2 fatias de pão integral',
          '150g de atum em lata',
          '1 ovo cozido',
          '1 fruta'
        ],
        calories: 450
      },
      {
        id: 'dinner-6-male',
        name: 'Jantar',
        items: [
          '200g de peito de frango',
          '200g de batata doce',
          '150g de abobrinha grelhada',
          '1 colher de chá de azeite'
        ],
        calories: 600
      },
      {
        id: 'bedtime-6-male',
        name: 'Antes de Dormir',
        items: [
          '200g de queijo cottage',
          '30g de nozes'
        ],
        calories: 300
      }
    ]
  },
  {
    id: 'day7-male',
    day: 'Domingo',
    meals: [
      {
        id: 'breakfast-7-male',
        name: 'Café da Manhã',
        items: [
          '4 ovos mexidos (2 gemas + 4 claras)',
          '2 fatias de pão integral',
          '1 abacate pequeno',
          '1 xícara de café com leite'
        ],
        calories: 650
      },
      {
        id: 'lunch-7-male',
        name: 'Almoço',
        items: [
          '200g de salmão grelhado',
          '200g de arroz integral',
          '200g de batata doce',
          'Salada verde à vontade',
          '1 colher de sopa de azeite'
        ],
        calories: 750
      },
      {
        id: 'snack-7-male',
        name: 'Lanche da Tarde',
        items: [
          '200g de iogurte grego',
          '50g de granola',
          '30g de castanha-do-pará',
          '1 fruta'
        ],
        calories: 450
      },
      {
        id: 'dinner-7-male',
        name: 'Jantar',
        items: [
          '200g de peito de frango',
          '200g de batata doce',
          '150g de brócolis',
          '1 colher de chá de azeite'
        ],
        calories: 600
      },
      {
        id: 'bedtime-7-male',
        name: 'Antes de Dormir',
        items: [
          '1 scoop de caseína (30g)',
          '30g de amêndoas'
        ],
        calories: 300
      }
    ]
  }
];

