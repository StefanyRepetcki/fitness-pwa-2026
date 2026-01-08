/**
 * Plano Alimentar para Perfil Masculino - Hipertrofia
 * Macros: ~3700 kcal, 255g proteína, 420g carboidratos, 88g gorduras
 * 
 * Nota: Proteína alta (3.4g/kg para 75kg) é adequada para atletas de força/hipertrofia.
 * Se preferir reduzir, pode ajustar para 2.0-2.2g/kg (150-165g).
 * 
 * Distribuição:
 * - 27% Proteína (255g)
 * - 45% Carboidratos (420g)
 * - 21% Gorduras (88g)
 */

import type { MealPlan } from './meals';

export const mealPlansMale: MealPlan[] = [
  {
    id: 'plan-male-1',
    day: 'Plano Alimentar Masculino - ~3700 calorias',
    meals: [
      {
        id: 'breakfast-male-1',
        name: 'Café da Manhã',
        icon: '☕',
        idealTime: '7h-8h',
        macros: {
          calories: 650,
          protein: 35,
          carbs: 80,
          fat: 18
        },
        foods: [
          {
            id: 'f1-male',
            name: 'Ovos inteiros',
            quantity: '4 unidades (2 gemas + 4 claras)',
            notes: 'Mexidos ou cozidos'
          },
          {
            id: 'f2-male',
            name: 'Aveia',
            quantity: '100g',
            notes: 'Pode misturar com whey'
          },
          {
            id: 'f3-male',
            name: 'Banana',
            quantity: '1 unidade grande',
            notes: 'Pode adicionar mel'
          },
          {
            id: 'f4-male',
            name: 'Mel',
            quantity: '1 colher de sopa'
          }
        ],
        supplements: [
          {
            id: 's1-male',
            name: 'Whey Protein',
            dosage: '1 scoop (30g)',
            notes: 'Opcional, pode misturar na aveia'
          }
        ],
        notes: '4-5 litros de água ao longo do dia | 5g creatina'
      },
      {
        id: 'pre-workout-male-1',
        name: 'Pré-Treino',
        icon: '💪',
        idealTime: '2-3h antes do treino',
        macros: {
          calories: 550,
          protein: 40,
          carbs: 70,
          fat: 10
        },
        foods: [
          {
            id: 'f5-male',
            name: 'Arroz branco',
            quantity: '150g',
            notes: 'Fácil digestão'
          },
          {
            id: 'f6-male',
            name: 'Peito de frango grelhado',
            quantity: '150g'
          },
          {
            id: 'f7-male',
            name: 'Batata doce',
            quantity: '1 unidade média',
            notes: 'Fonte de carboidratos complexos'
          },
          {
            id: 'f8-male',
            name: 'Azeite de oliva',
            quantity: '1 colher de chá'
          }
        ]
      },
      {
        id: 'post-workout-male-1',
        name: 'Pós-Treino',
        icon: '🥤',
        idealTime: '0-2h após treino',
        macros: {
          calories: 400,
          protein: 30,
          carbs: 60,
          fat: 2
        },
        foods: [
          {
            id: 'f9-male',
            name: 'Whey Protein',
            quantity: '1 scoop (30g)',
            notes: 'Proteína de rápida absorção'
          },
          {
            id: 'f10-male',
            name: 'Banana',
            quantity: '1 unidade grande',
            notes: 'Carboidrato simples para recuperação'
          },
          {
            id: 'f11-male',
            name: 'Dextrose ou Maltodextrina',
            quantity: '50g',
            notes: 'Para repor glicogênio muscular'
          }
        ],
        notes: 'Tomar imediatamente após o treino para otimizar recuperação'
      },
      {
        id: 'lunch-male-1',
        name: 'Almoço',
        icon: '🍽️',
        idealTime: '12h-13h',
        macros: {
          calories: 750,
          protein: 50,
          carbs: 90,
          fat: 18
        },
        foods: [
          {
            id: 'f12-male',
            name: 'Arroz integral',
            quantity: '150g',
            alternatives: ['150g arroz branco', '200g batata doce']
          },
          {
            id: 'f13-male',
            name: 'Batata doce',
            quantity: '200g',
            notes: 'Fonte de carboidratos de baixo índice glicêmico'
          },
          {
            id: 'f14-male',
            name: 'Proteína',
            quantity: '200g',
            alternatives: ['200g peito de frango', '200g carne magra', '200g salmão']
          },
          {
            id: 'f15-male',
            name: 'Salada verde',
            quantity: 'À vontade',
            notes: 'Variedade de folhas'
          },
          {
            id: 'f16-male',
            name: 'Azeite de oliva',
            quantity: '1 colher de sopa',
            notes: 'Para temperar'
          }
        ],
        supplements: [
          {
            id: 's2-male',
            name: 'Multivitamínico',
            dosage: '1 dose',
            notes: 'Tomar com a refeição'
          }
        ]
      },
      {
        id: 'snack-male-1',
        name: 'Lanche da Tarde',
        icon: '🍓',
        idealTime: '15h-16h',
        macros: {
          calories: 450,
          protein: 25,
          carbs: 50,
          fat: 15
        },
        foods: [
          {
            id: 'f17-male',
            name: 'Iogurte grego (0% gordura)',
            quantity: '200g',
            notes: 'Alto teor de proteína'
          },
          {
            id: 'f18-male',
            name: 'Granola',
            quantity: '50g',
            notes: 'Fonte de carboidratos e fibras'
          },
          {
            id: 'f19-male',
            name: 'Amêndoas',
            quantity: '30g',
            notes: 'Gorduras saudáveis'
          },
          {
            id: 'f20-male',
            name: 'Frutas',
            quantity: '1 unidade',
            alternatives: ['Maçã', 'Pera', 'Banana']
          }
        ]
      },
      {
        id: 'dinner-male-1',
        name: 'Jantar',
        icon: '🌙',
        idealTime: '19h-20h',
        macros: {
          calories: 600,
          protein: 45,
          carbs: 60,
          fat: 15
        },
        foods: [
          {
            id: 'f21-male',
            name: 'Proteína',
            quantity: '200g',
            alternatives: ['200g salmão', '200g atum', '200g peito de frango']
          },
          {
            id: 'f22-male',
            name: 'Batata doce ou Arroz',
            quantity: '200g',
            alternatives: ['200g batata doce', '200g arroz integral']
          },
          {
            id: 'f23-male',
            name: 'Brócolis cozido',
            quantity: '150g',
            notes: 'Rico em fibras e micronutrientes'
          },
          {
            id: 'f24-male',
            name: 'Azeite de oliva',
            quantity: '1 colher de chá'
          }
        ]
      },
      {
        id: 'bedtime-male-1',
        name: 'Antes de Dormir',
        icon: '🌙',
        idealTime: '22h-23h',
        macros: {
          calories: 300,
          protein: 30,
          carbs: 10,
          fat: 15
        },
        foods: [
          {
            id: 'f25-male',
            name: 'Caseína ou Queijo Cottage',
            quantity: '1 scoop (30g) OU 200g queijo cottage',
            alternatives: ['1 scoop caseína', '200g queijo cottage'],
            notes: 'Proteína de lenta absorção para síntese proteica noturna'
          },
          {
            id: 'f26-male',
            name: 'Amendoim ou Castanha-do-pará',
            quantity: '30g',
            alternatives: ['30g amendoim', '30g castanha-do-pará'],
            notes: 'Gorduras saudáveis e saciedade'
          }
        ],
        notes: 'Caseína ajuda na recuperação muscular durante o sono'
      }
    ]
  }
];

