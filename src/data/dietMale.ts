/**
 * Dieta para Perfil Masculino - Cutting Agressivo
 * Adaptado por Profissional de Educação Física e Nutrição
 * 
 * Perfil do atleta:
 * - Biotipo: Mesomorfo
 * - Altura: 1.81m
 * - Peso: 146kg
 * - IMC: ~44.6 kg/m²
 * - Objetivo: Cutting Agressivo (preservar massa, queimar gordura)
 * 
 * Macros para Cutting Agressivo:
 * - Calorias: 2900-3200 kcal (déficit de 600-1000 kcal/dia)
 * - Proteína: 220-230g (2.2g/kg massa magra estimada)
 * - Carboidratos: 250-300g (priorizar em torno do treino)
 * - Gorduras: 70-90g (essenciais para produção hormonal)
 * 
 * Distribuição Média:
 * - 30% Proteína (230g)
 * - 37% Carboidratos (280g)
 * - 24% Gorduras (80g)
 * 
 * Timing:
 * - Pré-treino: Carboidratos + Proteína (2-3h antes)
 * - Pós-treino: Proteína rápida + Carboidratos simples (0-2h depois)
 * - Distribuir proteína em 5-6 refeições
 * - Manter glicogênio para preservar força durante cutting
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
          '60g de aveia',
          '1 banana média',
          '1 scoop de whey protein (30g)',
          '1 xícara de café com leite desnatado'
        ],
        calories: 550
      },
      {
        id: 'pre-workout-1-male',
        name: 'Pré-Treino (2-3h antes)',
        items: [
          '120g de arroz branco',
          '150g de peito de frango grelhado',
          '100g de batata doce',
          '1 colher de chá de azeite'
        ],
        calories: 500
      },
      {
        id: 'post-workout-1-male',
        name: 'Pós-Treino',
        items: [
          '1 scoop de whey protein (30g)',
          '1 banana média',
          '30g de dextrose ou maltodextrina',
          '500ml de água'
        ],
        calories: 300
      },
      {
        id: 'lunch-1-male',
        name: 'Almoço',
        items: [
          '200g de peito de frango ou carne magra',
          '100g de arroz integral',
          '150g de batata doce',
          'Salada verde à vontade',
          '1 colher de sopa de azeite'
        ],
        calories: 600
      },
      {
        id: 'snack-1-male',
        name: 'Lanche da Tarde',
        items: [
          '150g de iogurte grego (0% gordura)',
          '30g de amêndoas',
          '1 fruta (maçã ou pera)'
        ],
        calories: 300
      },
      {
        id: 'dinner-1-male',
        name: 'Jantar',
        items: [
          '200g de salmão ou atum',
          '150g de batata doce',
          '150g de brócolis cozido',
          '1 colher de chá de azeite'
        ],
        calories: 500
      },
      {
        id: 'bedtime-1-male',
        name: 'Antes de Dormir',
        items: [
          '1 scoop de caseína (30g) ou 150g de queijo cottage',
          '20g de amendoim ou castanha-do-pará'
        ],
        calories: 250
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
        calories: 550
      },
      {
        id: 'pre-workout-2-male',
        name: 'Pré-Treino',
        items: [
          '100g de macarrão integral',
          '150g de frango desfiado',
          '100g de batata doce',
          '1 colher de chá de azeite'
        ],
        calories: 500
      },
      {
        id: 'post-workout-2-male',
        name: 'Pós-Treino',
        items: [
          '1 scoop de whey protein (30g)',
          '1 banana média',
          '30g de dextrose',
          '500ml de água'
        ],
        calories: 300
      },
      {
        id: 'lunch-2-male',
        name: 'Almoço',
        items: [
          '200g de carne vermelha magra',
          '120g de arroz branco',
          '100g de feijão',
          'Salada verde à vontade',
          '1 colher de sopa de azeite'
        ],
        calories: 650
      },
      {
        id: 'snack-2-male',
        name: 'Lanche da Tarde',
        items: [
          '2 fatias de pão integral',
          '120g de atum em lata',
          '1 ovo cozido',
          '1 fruta'
        ],
        calories: 350
      },
      {
        id: 'dinner-2-male',
        name: 'Jantar',
        items: [
          '200g de peito de frango',
          '150g de batata doce',
          '150g de abobrinha grelhada',
          '1 colher de chá de azeite'
        ],
        calories: 500
      },
      {
        id: 'bedtime-2-male',
        name: 'Antes de Dormir',
        items: [
          '150g de queijo cottage',
          '20g de nozes'
        ],
        calories: 250
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
        calories: 550
      },
      {
        id: 'pre-workout-3-male',
        name: 'Pré-Treino',
        items: [
          '120g de arroz branco',
          '150g de peito de frango',
          '100g de batata doce',
          '1 colher de chá de azeite'
        ],
        calories: 500
      },
      {
        id: 'post-workout-3-male',
        name: 'Pós-Treino',
        items: [
          '1 scoop de whey protein (30g)',
          '1 banana média',
          '30g de dextrose',
          '500ml de água'
        ],
        calories: 300
      },
      {
        id: 'lunch-3-male',
        name: 'Almoço',
        items: [
          '200g de salmão grelhado',
          '100g de arroz integral',
          '150g de batata doce',
          'Salada verde à vontade',
          '1 colher de sopa de azeite'
        ],
        calories: 600
      },
      {
        id: 'snack-3-male',
        name: 'Lanche da Tarde',
        items: [
          '150g de iogurte grego',
          '30g de castanha-do-pará',
          '1 fruta'
        ],
        calories: 300
      },
      {
        id: 'dinner-3-male',
        name: 'Jantar',
        items: [
          '200g de peito de frango',
          '150g de batata doce',
          '150g de brócolis',
          '1 colher de chá de azeite'
        ],
        calories: 500
      },
      {
        id: 'bedtime-3-male',
        name: 'Antes de Dormir',
        items: [
          '1 scoop de caseína (30g)',
          '20g de amêndoas'
        ],
        calories: 250
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
        calories: 550
      },
      {
        id: 'pre-workout-4-male',
        name: 'Pré-Treino',
        items: [
          '100g de macarrão integral',
          '150g de frango desfiado',
          '100g de batata doce',
          '1 colher de chá de azeite'
        ],
        calories: 500
      },
      {
        id: 'post-workout-4-male',
        name: 'Pós-Treino',
        items: [
          '1 scoop de whey protein (30g)',
          '1 banana média',
          '30g de dextrose',
          '500ml de água'
        ],
        calories: 300
      },
      {
        id: 'lunch-4-male',
        name: 'Almoço',
        items: [
          '200g de carne vermelha magra',
          '120g de arroz branco',
          '100g de feijão',
          'Salada verde à vontade',
          '1 colher de sopa de azeite'
        ],
        calories: 650
      },
      {
        id: 'snack-4-male',
        name: 'Lanche da Tarde',
        items: [
          '2 fatias de pão integral',
          '120g de atum em lata',
          '1 ovo cozido',
          '1 fruta'
        ],
        calories: 350
      },
      {
        id: 'dinner-4-male',
        name: 'Jantar',
        items: [
          '200g de peito de frango',
          '150g de batata doce',
          '150g de abobrinha grelhada',
          '1 colher de chá de azeite'
        ],
        calories: 500
      },
      {
        id: 'bedtime-4-male',
        name: 'Antes de Dormir',
        items: [
          '150g de queijo cottage',
          '20g de nozes'
        ],
        calories: 250
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
        calories: 550
      },
      {
        id: 'pre-workout-5-male',
        name: 'Pré-Treino',
        items: [
          '120g de arroz branco',
          '150g de peito de frango grelhado',
          '100g de batata doce',
          '1 colher de chá de azeite'
        ],
        calories: 500
      },
      {
        id: 'post-workout-5-male',
        name: 'Pós-Treino',
        items: [
          '1 scoop de whey protein (30g)',
          '1 banana média',
          '30g de dextrose',
          '500ml de água'
        ],
        calories: 300
      },
      {
        id: 'lunch-5-male',
        name: 'Almoço',
        items: [
          '200g de salmão grelhado',
          '100g de arroz integral',
          '150g de batata doce',
          'Salada verde à vontade',
          '1 colher de sopa de azeite'
        ],
        calories: 600
      },
      {
        id: 'snack-5-male',
        name: 'Lanche da Tarde',
        items: [
          '150g de iogurte grego',
          '30g de amêndoas',
          '1 fruta'
        ],
        calories: 300
      },
      {
        id: 'dinner-5-male',
        name: 'Jantar',
        items: [
          '200g de peito de frango',
          '150g de batata doce',
          '150g de brócolis',
          '1 colher de chá de azeite'
        ],
        calories: 500
      },
      {
        id: 'bedtime-5-male',
        name: 'Antes de Dormir',
        items: [
          '1 scoop de caseína (30g)',
          '20g de castanha-do-pará'
        ],
        calories: 250
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
        calories: 550
      },
      {
        id: 'lunch-6-male',
        name: 'Almoço',
        items: [
          '200g de carne vermelha magra',
          '120g de arroz branco',
          '100g de feijão',
          'Salada verde à vontade',
          '1 colher de sopa de azeite'
        ],
        calories: 650
      },
      {
        id: 'snack-6-male',
        name: 'Lanche da Tarde',
        items: [
          '2 fatias de pão integral',
          '120g de atum em lata',
          '1 ovo cozido',
          '1 fruta'
        ],
        calories: 350
      },
      {
        id: 'dinner-6-male',
        name: 'Jantar',
        items: [
          '200g de peito de frango',
          '150g de batata doce',
          '150g de abobrinha grelhada',
          '1 colher de chá de azeite'
        ],
        calories: 500
      },
      {
        id: 'bedtime-6-male',
        name: 'Antes de Dormir',
        items: [
          '150g de queijo cottage',
          '20g de nozes'
        ],
        calories: 250
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
        calories: 550
      },
      {
        id: 'lunch-7-male',
        name: 'Almoço',
        items: [
          '200g de salmão grelhado',
          '100g de arroz integral',
          '150g de batata doce',
          'Salada verde à vontade',
          '1 colher de sopa de azeite'
        ],
        calories: 600
      },
      {
        id: 'snack-7-male',
        name: 'Lanche da Tarde',
        items: [
          '150g de iogurte grego',
          '30g de castanha-do-pará',
          '1 fruta'
        ],
        calories: 300
      },
      {
        id: 'dinner-7-male',
        name: 'Jantar',
        items: [
          '200g de peito de frango',
          '150g de batata doce',
          '150g de brócolis',
          '1 colher de chá de azeite'
        ],
        calories: 500
      },
      {
        id: 'bedtime-7-male',
        name: 'Antes de Dormir',
        items: [
          '1 scoop de caseína (30g)',
          '20g de amêndoas'
        ],
        calories: 250
      }
    ]
  }
];

