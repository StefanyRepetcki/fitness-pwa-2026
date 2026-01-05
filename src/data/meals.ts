export interface FoodItem {
  id: string;
  name: string;
  quantity: string;
  notes?: string;
  alternatives?: string[];
}

export interface Supplement {
  id: string;
  name: string;
  dosage: string;
  notes?: string;
}

export interface Meal {
  id: string;
  name: string;
  icon: string;
  idealTime?: string; // Horário ideal da refeição
  macros?: {
    calories: number;
    protein: number; // em gramas
    carbs: number; // em gramas
    fat: number; // em gramas
  };
  foods: FoodItem[];
  supplements?: Supplement[];
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
    day: 'Plano Alimentar - 2100 calorias',
    meals: [
      {
        id: 'breakfast',
        name: 'Café da Manhã',
        icon: '☕',
        idealTime: '7h-8h',
        macros: {
          calories: 350,
          protein: 25,
          carbs: 40,
          fat: 12
        },
        foods: [
          {
            id: 'f1',
            name: 'Ovos inteiros',
            quantity: '3 unidades',
            notes: 'Preparados como preferir'
          },
          {
            id: 'f2',
            name: 'Torradas ou Pão integral',
            quantity: '3 torradas ou 2 fatias',
            alternatives: ['3 torradas', '2 fatias de pão integral']
          },
          {
            id: 'f3',
            name: 'Geléia de morango',
            quantity: '20g',
            notes: 'Para passar no pão'
          }
        ],
        supplements: [
          {
            id: 's1',
            name: 'Picolinato de cromo',
            dosage: '200mcg'
          },
          {
            id: 's2',
            name: 'Vitamina C',
            dosage: '500mg'
          }
        ],
        notes: '3,5 litros de água ao longo do dia | 35g whey | 5g creatina'
      },
      {
        id: 'lunch',
        name: 'Almoço',
        icon: '🍽️',
        idealTime: '12h-13h',
        macros: {
          calories: 550,
          protein: 45,
          carbs: 60,
          fat: 12
        },
        foods: [
          {
            id: 'f4',
            name: 'Arroz branco ou Batata',
            quantity: '180g arroz OU 250g batata',
            alternatives: ['180g arroz branco', '250g batata inglesa', '250g batata doce']
          },
          {
            id: 'f5',
            name: 'Proteína',
            quantity: '170g',
            alternatives: ['170g frango', '170g carne moída', '170g tilápia']
          },
          {
            id: 'f6',
            name: 'Salada e legumes',
            quantity: 'À vontade',
            notes: 'Variedade de folhas e legumes'
          },
          {
            id: 'f7',
            name: 'Azeite de oliva',
            quantity: '1 colher',
            notes: 'Para temperar'
          }
        ],
        supplements: [
          {
            id: 's3',
            name: 'Extrato de laranja',
            dosage: 'Antes do almoço',
            notes: 'Tomar antes da refeição'
          },
          {
            id: 's4',
            name: 'DHA',
            dosage: 'Pós almoço',
            notes: 'Tomar após a refeição'
          }
        ]
      },
      {
        id: 'snack',
        name: 'Lanche',
        icon: '🍓',
        idealTime: '15h-16h',
        macros: {
          calories: 280,
          protein: 5,
          carbs: 55,
          fat: 3
        },
        foods: [
          {
            id: 'f8',
            name: 'Frutas',
            quantity: '200g',
            alternatives: ['Mamão', 'Melão', 'Abacaxi', 'Morango', 'Maçã'],
            notes: 'Escolher entre as opções'
          },
          {
            id: 'f9',
            name: 'Mel',
            quantity: '30g'
          },
          {
            id: 'f10',
            name: 'Aveia',
            quantity: '30g',
            notes: 'Pode misturar com as frutas'
          }
        ]
      },
      {
        id: 'pre-workout',
        name: 'Pré-Treino',
        icon: '🍳',
        idealTime: '30-60min antes do treino',
        macros: {
          calories: 320,
          protein: 18,
          carbs: 25,
          fat: 15
        },
        foods: [
          {
            id: 'f11',
            name: 'Tapioca',
            quantity: '30g',
            notes: 'Pode fazer tapioca simples'
          },
          {
            id: 'f12',
            name: 'Ovos inteiros',
            quantity: '2 unidades',
            notes: 'Preparados como preferir'
          },
          {
            id: 'f13',
            name: 'Pasta de amendoim ou Castanhas',
            quantity: '20g pasta OU 3 castanhas',
            alternatives: ['20g pasta de amendoim', '3 castanhas do Pará']
          }
        ]
      },
      {
        id: 'dinner',
        name: 'Jantar',
        icon: '🌙',
        idealTime: '19h-20h',
        macros: {
          calories: 420,
          protein: 35,
          carbs: 35,
          fat: 12
        },
        foods: [
          {
            id: 'f14',
            name: 'Batata inglesa',
            quantity: '100g',
            notes: 'Sugestão: bolinho de carne e batatas na Airfryer'
          },
          {
            id: 'f15',
            name: 'Proteína',
            quantity: '170g',
            alternatives: ['170g frango', '170g carne moída de primeira', '170g tilápia']
          },
          {
            id: 'f16',
            name: 'Salada',
            quantity: 'À vontade',
            notes: 'Somente vinagre para temperar'
          }
        ],
        supplements: [
          {
            id: 's5',
            name: 'Multivitamínico',
            dosage: '1 dose',
            notes: 'Tomar com a refeição'
          }
        ]
      }
    ]
  }
];
