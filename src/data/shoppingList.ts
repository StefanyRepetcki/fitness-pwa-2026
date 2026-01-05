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
      { id: 'p1', name: 'Peito de frango', quantity: '1kg', checked: false },
      { id: 'p2', name: 'Salmão', quantity: '500g', checked: false },
      { id: 'p3', name: 'Atum em lata (água)', quantity: '3 latas', checked: false },
      { id: 'p4', name: 'Peito de peru', quantity: '500g', checked: false },
      { id: 'p5', name: 'Carne magra (alcatra)', quantity: '500g', checked: false },
      { id: 'p6', name: 'Ovos', quantity: '1 dúzia', checked: false },
      { id: 'p7', name: 'Queijo branco light', quantity: '300g', checked: false },
      { id: 'p8', name: 'Iogurte grego', quantity: '4 potes', checked: false }
    ]
  },
  {
    id: 'carbs',
    name: 'Carboidratos',
    icon: '🌾',
    items: [
      { id: 'c1', name: 'Arroz integral', quantity: '1kg', checked: false },
      { id: 'c2', name: 'Batata doce', quantity: '2kg', checked: false },
      { id: 'c3', name: 'Quinoa', quantity: '500g', checked: false },
      { id: 'c4', name: 'Aveia em flocos', quantity: '500g', checked: false },
      { id: 'c5', name: 'Pão integral', quantity: '1 pacote', checked: false },
      { id: 'c6', name: 'Tapioca', quantity: '1 pacote', checked: false }
    ]
  },
  {
    id: 'fruits',
    name: 'Frutas',
    icon: '🍎',
    items: [
      { id: 'f1', name: 'Banana', quantity: '1 cacho', checked: false },
      { id: 'f2', name: 'Maçã', quantity: '6 unidades', checked: false },
      { id: 'f3', name: 'Mamão', quantity: '1 unidade', checked: false },
      { id: 'f4', name: 'Frutas vermelhas (congeladas)', quantity: '500g', checked: false },
      { id: 'f5', name: 'Abacate', quantity: '2 unidades', checked: false },
      { id: 'f6', name: 'Limão', quantity: '5 unidades', checked: false }
    ]
  },
  {
    id: 'vegetables',
    name: 'Legumes e Saladas',
    icon: '🥬',
    items: [
      { id: 'v1', name: 'Alface', quantity: '1 pé', checked: false },
      { id: 'v2', name: 'Rúcula', quantity: '1 maço', checked: false },
      { id: 'v3', name: 'Tomate', quantity: '1kg', checked: false },
      { id: 'v4', name: 'Brócolis', quantity: '2 maços', checked: false },
      { id: 'v5', name: 'Abobrinha', quantity: '4 unidades', checked: false },
      { id: 'v6', name: 'Espinafre', quantity: '1 maço', checked: false },
      { id: 'v7', name: 'Pepino', quantity: '3 unidades', checked: false },
      { id: 'v8', name: 'Cebola roxa', quantity: '2 unidades', checked: false },
      { id: 'v9', name: 'Couve', quantity: '1 maço', checked: false }
    ]
  },
  {
    id: 'oils',
    name: 'Azeite e Temperos',
    icon: '🫒',
    items: [
      { id: 'o1', name: 'Azeite extra virgem', quantity: '500ml', checked: false },
      { id: 'o2', name: 'Vinagre de maçã', quantity: '1 frasco', checked: false },
      { id: 'o3', name: 'Alho', quantity: '2 cabeças', checked: false },
      { id: 'o4', name: 'Limão', quantity: '5 unidades', checked: false },
      { id: 'o5', name: 'Sal rosa do Himalaia', quantity: '1 pacote', checked: false },
      { id: 'o6', name: 'Pimenta do reino', quantity: '1 frasco', checked: false },
      { id: 'o7', name: 'Ervas frescas (salsinha, cebolinha)', quantity: '1 maço', checked: false }
    ]
  },
  {
    id: 'supplements',
    name: 'Suplementos',
    icon: '💊',
    items: [
      { id: 's1', name: 'Whey Protein', quantity: '1kg', checked: false },
      { id: 's2', name: 'Creatina', quantity: '300g', checked: false },
      { id: 's3', name: 'Multivitamínico', quantity: '1 frasco', checked: false },
      { id: 's4', name: 'Ômega 3', quantity: '1 frasco', checked: false },
      { id: 's5', name: 'Vitamina D', quantity: '1 frasco', checked: false },
      { id: 's6', name: 'Colágeno', quantity: '300g', checked: false }
    ]
  }
];

