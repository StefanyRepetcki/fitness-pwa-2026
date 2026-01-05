export interface ShoppingItem {
  id: string;
  name: string;
  quantity: string;
  checked: boolean;
}

export interface ShoppingCategory {
  id: string;
  name: string;
  icon: string;
  items: ShoppingItem[];
}

export const shoppingList: ShoppingCategory[] = [
  {
    id: 'proteins',
    name: 'Proteínas',
    icon: '🥩',
    items: [
      { id: 'p1', name: 'Ovos', quantity: '150 unidades', checked: false },
      { id: 'p2', name: 'Frango', quantity: '5,1 kg', checked: false },
      { id: 'p3', name: 'Whey protein', quantity: '1 unidade', checked: false },
      { id: 'p4', name: 'Castanhas do Pará', quantity: '90 unidades', checked: false },
      { id: 'p5', name: 'Carne moída de primeira', quantity: 'Conforme necessário', checked: false },
      { id: 'p6', name: 'Tilápia', quantity: 'Conforme necessário', checked: false }
    ]
  },
  {
    id: 'carbs',
    name: 'Carboidratos',
    icon: '🌾',
    items: [
      { id: 'c1', name: 'Arroz branco', quantity: '5,4 kg', checked: false },
      { id: 'c2', name: 'Batata inglesa', quantity: '7,5 kg', checked: false },
      { id: 'c3', name: 'Batata-doce', quantity: '4,5 kg', checked: false },
      { id: 'c4', name: 'Tapioca', quantity: '900g', checked: false },
      { id: 'c5', name: 'Pão integral', quantity: '60 fatias', checked: false },
      { id: 'c6', name: 'Aveia', quantity: '900g', checked: false },
      { id: 'c7', name: 'Geléia de morango', quantity: '600g', checked: false },
      { id: 'c8', name: 'Mel', quantity: '900g', checked: false }
    ]
  },
  {
    id: 'fruits',
    name: 'Frutas',
    icon: '🍎',
    items: [
      { id: 'f1', name: 'Mamão', quantity: 'Conforme necessário', checked: false },
      { id: 'f2', name: 'Melão', quantity: 'Conforme necessário', checked: false },
      { id: 'f3', name: 'Abacaxi', quantity: 'Conforme necessário', checked: false },
      { id: 'f4', name: 'Morango', quantity: 'Conforme necessário', checked: false },
      { id: 'f5', name: 'Maçã', quantity: 'Conforme necessário', checked: false }
    ]
  },
  {
    id: 'vegetables',
    name: 'Legumes e Saladas',
    icon: '🥬',
    items: [
      { id: 'v1', name: 'Legumes variados', quantity: 'À vontade', checked: false },
      { id: 'v2', name: 'Verduras para salada', quantity: 'À vontade', checked: false },
      { id: 'v3', name: 'Vinagre', quantity: '1 frasco', checked: false }
    ]
  },
  {
    id: 'oils',
    name: 'Azeite e Temperos',
    icon: '🫒',
    items: [
      { id: 'o1', name: 'Azeite de oliva', quantity: '1 garrafa', checked: false }
    ]
  }
];
