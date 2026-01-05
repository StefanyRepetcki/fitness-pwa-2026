export interface FoodItem {
  id: string;
  name: string;
  quantity: string;
  notes?: string;
  alternatives?: string[];
}

export interface Meal {
  id: string;
  name: string;
  icon: string;
  foods: FoodItem[];
  notes?: string;
}

export interface MealPlan {
  id: string;
  day: string;
  meals: Meal[];
}

export const mealPlans: MealPlan[] = [
  {
    id: 'day1',
    day: 'Segunda-feira',
    meals: [
      {
        id: 'breakfast-1',
        name: 'Café da Manhã',
        icon: '☕',
        foods: [
          {
            id: 'f1',
            name: 'Aveia',
            quantity: '40g',
            notes: 'Farelo de aveia'
          },
          {
            id: 'f2',
            name: 'Banana',
            quantity: '1 unidade média',
            alternatives: ['Maçã', 'Mamão']
          },
          {
            id: 'f3',
            name: 'Whey Protein',
            quantity: '30g',
            notes: 'Sabor baunilha'
          },
          {
            id: 'f4',
            name: 'Chia',
            quantity: '1 colher de sopa',
            notes: 'Hidratada'
          }
        ],
        notes: 'Bater tudo no liquidificador com água gelada'
      },
      {
        id: 'lunch-1',
        name: 'Almoço',
        icon: '🍽️',
        foods: [
          {
            id: 'f5',
            name: 'Peito de frango grelhado',
            quantity: '150g',
            notes: 'Temperado com alho e limão'
          },
          {
            id: 'f6',
            name: 'Arroz integral',
            quantity: '100g',
            alternatives: ['Batata doce assada (150g)', 'Quinoa (100g)']
          },
          {
            id: 'f7',
            name: 'Salada verde',
            quantity: 'À vontade',
            notes: 'Alface, rúcula, tomate. Somente vinagre de maçã'
          },
          {
            id: 'f8',
            name: 'Azeite extra virgem',
            quantity: '1 colher de chá',
            notes: 'Sobre a salada'
          }
        ]
      },
      {
        id: 'snack-1',
        name: 'Lanche',
        icon: '🍓',
        foods: [
          {
            id: 'f9',
            name: 'Iogurte grego',
            quantity: '1 pote (170g)',
            notes: 'Sem açúcar'
          },
          {
            id: 'f10',
            name: 'Frutas vermelhas',
            quantity: '50g',
            alternatives: ['Morango', 'Mirtilo', 'Amora']
          },
          {
            id: 'f11',
            name: 'Amêndoas',
            quantity: '10 unidades',
            notes: 'Sem sal'
          }
        ]
      },
      {
        id: 'pre-workout-1',
        name: 'Pré-treino',
        icon: '🍳',
        foods: [
          {
            id: 'f12',
            name: 'Banana',
            quantity: '1 unidade média',
            notes: '30-40min antes do treino'
          },
          {
            id: 'f13',
            name: 'Café preto',
            quantity: '1 xícara',
            notes: 'Sem açúcar'
          }
        ]
      },
      {
        id: 'dinner-1',
        name: 'Jantar',
        icon: '🌙',
        foods: [
          {
            id: 'f14',
            name: 'Salmão grelhado',
            quantity: '150g',
            alternatives: ['Peito de peru (150g)', 'Atum (150g)']
          },
          {
            id: 'f15',
            name: 'Batata doce',
            quantity: '150g',
            notes: 'Assada ou cozida'
          },
          {
            id: 'f16',
            name: 'Brócolis no vapor',
            quantity: 'À vontade',
            notes: 'Temperado com limão'
          },
          {
            id: 'f17',
            name: 'Abacate',
            quantity: '1/4 unidade',
            notes: 'Fonte de gordura boa'
          }
        ]
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
        icon: '☕',
        foods: [
          {
            id: 'f18',
            name: 'Ovos mexidos',
            quantity: '2 unidades inteiras',
            notes: 'Com 1 colher de azeite'
          },
          {
            id: 'f19',
            name: 'Pão integral',
            quantity: '1 fatia',
            alternatives: ['Tapioca', 'Aveia']
          },
          {
            id: 'f20',
            name: 'Abacate',
            quantity: '1/4 unidade',
            notes: 'Amassado no pão'
          },
          {
            id: 'f21',
            name: 'Café com leite desnatado',
            quantity: '1 xícara',
            notes: 'Sem açúcar'
          }
        ]
      },
      {
        id: 'lunch-2',
        name: 'Almoço',
        icon: '🍽️',
        foods: [
          {
            id: 'f22',
            name: 'Carne magra grelhada',
            quantity: '150g',
            notes: 'Alcatra ou patinho'
          },
          {
            id: 'f23',
            name: 'Quinoa',
            quantity: '100g',
            alternatives: ['Arroz integral (100g)', 'Batata doce (150g)']
          },
          {
            id: 'f24',
            name: 'Abobrinha grelhada',
            quantity: 'À vontade',
            notes: 'Com alho e azeite'
          },
          {
            id: 'f25',
            name: 'Salada colorida',
            quantity: 'À vontade',
            notes: 'Tomate, pepino, cebola roxa'
          }
        ]
      },
      {
        id: 'snack-2',
        name: 'Lanche',
        icon: '🍓',
        foods: [
          {
            id: 'f26',
            name: 'Maçã',
            quantity: '1 unidade média',
            alternatives: ['Pera', 'Kiwi']
          },
          {
            id: 'f27',
            name: 'Castanhas do Pará',
            quantity: '3 unidades',
            notes: 'Fonte de selênio'
          },
          {
            id: 'f28',
            name: 'Chá verde',
            quantity: '1 xícara',
            notes: 'Sem açúcar'
          }
        ]
      },
      {
        id: 'pre-workout-2',
        name: 'Pré-treino',
        icon: '🍳',
        foods: [
          {
            id: 'f29',
            name: 'Tapioca com mel',
            quantity: '1 unidade pequena',
            notes: '30min antes do treino'
          },
          {
            id: 'f30',
            name: 'Café preto',
            quantity: '1 xícara',
            notes: 'Sem açúcar'
          }
        ]
      },
      {
        id: 'dinner-2',
        name: 'Jantar',
        icon: '🌙',
        foods: [
          {
            id: 'f31',
            name: 'Omelete',
            quantity: '3 claras + 1 gema',
            notes: 'Recheada com espinafre'
          },
          {
            id: 'f32',
            name: 'Espinafre refogado',
            quantity: 'À vontade',
            notes: 'Com alho'
          },
          {
            id: 'f33',
            name: 'Tomate cereja',
            quantity: 'À vontade',
            notes: 'Assado ou fresco'
          },
          {
            id: 'f34',
            name: 'Queijo branco',
            quantity: '1 fatia pequena',
            notes: 'Light'
          }
        ]
      }
    ]
  }
];

