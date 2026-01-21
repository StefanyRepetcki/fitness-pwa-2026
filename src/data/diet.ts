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
          '1 banana',
          '1 xícara de café com leite desnatado'
        ],
        calories: 350
      },
      {
        id: 'lunch-1',
        name: 'Almoço',
        items: [
          '150g de peito de frango grelhado',
          '100g de arroz integral',
          'Salada verde à vontade',
          '1 colher de azeite'
        ],
        calories: 450
      },
      {
        id: 'snack-1',
        name: 'Lanche',
        items: [
          '1 iogurte grego',
          '1 colher de mel',
          '10 amêndoas'
        ],
        calories: 200
      },
      {
        id: 'dinner-1',
        name: 'Jantar',
        items: [
          '150g de salmão grelhado',
          'Batata doce assada',
          'Brócolis no vapor',
          'Salada de rúcula'
        ],
        calories: 400
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
          'Aveia com frutas vermelhas',
          '1 colher de chia',
          '1 xícara de chá verde'
        ],
        calories: 300
      },
      {
        id: 'lunch-2',
        name: 'Almoço',
        items: [
          '150g de carne magra grelhada',
          'Quinoa cozida',
          'Abobrinha grelhada',
          'Salada colorida'
        ],
        calories: 480
      },
      {
        id: 'snack-2',
        name: 'Lanche',
        items: [
          '1 maçã',
          '1 punhado de castanhas',
          'Chá de ervas'
        ],
        calories: 180
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
        calories: 320
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
          'Panqueca de aveia e banana',
          '1 colher de mel',
          '1 xícara de café'
        ],
        calories: 340
      },
      {
        id: 'lunch-3',
        name: 'Almoço',
        items: [
          '150g de peito de peru',
          'Batata doce assada',
          'Couve refogada',
          'Salada de alface e tomate'
        ],
        calories: 420
      },
      {
        id: 'snack-3',
        name: 'Lanche',
        items: [
          'Smoothie de frutas',
          '1 colher de proteína em pó',
          '1 punhado de granola'
        ],
        calories: 250
      },
      {
        id: 'dinner-3',
        name: 'Jantar',
        items: [
          'Salmão ao forno',
          'Arroz integral',
          'Aspargos grelhados',
          'Salada verde'
        ],
        calories: 410
      }
    ]
  }
];



