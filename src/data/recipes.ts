export interface Recipe {
  id: string;
  name: string;
  category: 'cafe-manha' | 'almoco' | 'lanche' | 'jantar' | 'pre-treino' | 'pos-treino';
  prepTime: string;
  calories: string;
  macros: {
    protein: string;
    carbs: string;
    fat: string;
  };
  ingredients: {
    name: string;
    quantity: string;
  }[];
  instructions: string[];
  tips?: string;
  image?: string;
}

export const recipes: Recipe[] = [
  {
    id: 'recipe-1',
    name: 'Omelete de 3 Ovos com Torradas',
    category: 'cafe-manha',
    prepTime: '10 minutos',
    calories: '~350 kcal',
    macros: {
      protein: '21g',
      carbs: '30g',
      fat: '15g'
    },
    ingredients: [
      { name: 'Ovos inteiros', quantity: '3 unidades' },
      { name: 'Torradas ou pão integral', quantity: '3 torradas ou 2 fatias' },
      { name: 'Geléia de morango', quantity: '20g' },
      { name: 'Azeite ou manteiga', quantity: '1 colher de chá' }
    ],
    instructions: [
      'Quebre os 3 ovos em uma tigela e bata levemente com um garfo',
      'Aqueça uma frigideira antiaderente com azeite ou manteiga',
      'Despeje os ovos e cozinhe em fogo médio',
      'Quando a parte de baixo estiver firme, vire cuidadosamente',
      'Sirva com as torradas e geléia de morango'
    ],
    tips: 'Para mais sabor, adicione ervas como orégano ou salsinha. Evite queimar os ovos para manter as proteínas intactas.'
  },
  {
    id: 'recipe-2',
    name: 'Frango Grelhado com Arroz e Salada',
    category: 'almoco',
    prepTime: '25 minutos',
    calories: '~550 kcal',
    macros: {
      protein: '45g',
      carbs: '60g',
      fat: '12g'
    },
    ingredients: [
      { name: 'Peito de frango', quantity: '170g' },
      { name: 'Arroz branco', quantity: '180g (cozido)' },
      { name: 'Salada mista', quantity: 'À vontade' },
      { name: 'Legumes variados', quantity: 'À vontade' },
      { name: 'Azeite de oliva', quantity: '1 colher de sopa' },
      { name: 'Temperos', quantity: 'A gosto (alho, sal, pimenta)' }
    ],
    instructions: [
      'Tempere o frango com alho, sal e pimenta (deixe marinar por 10min se possível)',
      'Grelhe o frango em frigideira ou grelha por 6-8min cada lado',
      'Cozinhe o arroz conforme instruções da embalagem',
      'Prepare a salada com folhas variadas e legumes',
      'Tempere a salada com azeite e vinagre',
      'Monte o prato: arroz, frango e salada'
    ],
    tips: 'Para variar, substitua o frango por carne moída ou tilápia. O arroz pode ser substituído por 250g de batata inglesa ou doce.'
  },
  {
    id: 'recipe-3',
    name: 'Bowl de Frutas com Aveia e Mel',
    category: 'lanche',
    prepTime: '5 minutos',
    calories: '~280 kcal',
    macros: {
      protein: '5g',
      carbs: '55g',
      fat: '3g'
    },
    ingredients: [
      { name: 'Frutas variadas', quantity: '200g (mamão, melão, abacaxi, morango ou maçã)' },
      { name: 'Aveia', quantity: '30g' },
      { name: 'Mel', quantity: '30g' }
    ],
    instructions: [
      'Corte as frutas em cubos ou pedaços',
      'Coloque em uma tigela',
      'Adicione a aveia por cima',
      'Regue com o mel',
      'Misture bem e sirva'
    ],
    tips: 'Você pode preparar de manhã e levar para o trabalho. Adicione um pouco de canela para mais sabor.'
  },
  {
    id: 'recipe-4',
    name: 'Tapioca com Ovos e Pasta de Amendoim',
    category: 'pre-treino',
    prepTime: '15 minutos',
    calories: '~320 kcal',
    macros: {
      protein: '18g',
      carbs: '25g',
      fat: '15g'
    },
    ingredients: [
      { name: 'Goma de tapioca', quantity: '30g' },
      { name: 'Ovos inteiros', quantity: '2 unidades' },
      { name: 'Pasta de amendoim', quantity: '20g' },
      { name: 'Azeite', quantity: '1 colher de chá' }
    ],
    instructions: [
      'Aqueça uma frigideira antiaderente',
      'Espalhe a goma de tapioca formando um disco fino',
      'Cozinhe por 1-2min de cada lado até ficar crocante',
      'Em outra frigideira, prepare os ovos (mexidos ou fritos)',
      'Espalhe a pasta de amendoim na tapioca',
      'Adicione os ovos e dobre a tapioca',
      'Sirva quente'
    ],
    tips: 'Alternativa: use 3 castanhas do Pará no lugar da pasta de amendoim. Coma 30-60min antes do treino.'
  },
  {
    id: 'recipe-5',
    name: 'Bolinho de Carne e Batatas na Airfryer',
    category: 'jantar',
    prepTime: '30 minutos',
    calories: '~420 kcal',
    macros: {
      protein: '35g',
      carbs: '35g',
      fat: '12g'
    },
    ingredients: [
      { name: 'Carne moída magra', quantity: '170g' },
      { name: 'Batata inglesa', quantity: '100g' },
      { name: 'Salada', quantity: 'À vontade' },
      { name: 'Vinagre', quantity: 'Para temperar' },
      { name: 'Temperos', quantity: 'A gosto (cebola, alho, sal, pimenta)' }
    ],
    instructions: [
      'Corte as batatas em cubos pequenos',
      'Tempere a carne moída com cebola, alho, sal e pimenta',
      'Forme bolinhos pequenos com a carne',
      'Coloque os bolinhos e as batatas na Airfryer',
      'Cozinhe por 15-20min a 180°C, virando na metade',
      'Prepare a salada temperada apenas com vinagre',
      'Sirva os bolinhos com as batatas e salada'
    ],
    tips: 'Para variar, use frango desfiado ou tilápia. As batatas ficam crocantes na Airfryer sem precisar de óleo.'
  },
  {
    id: 'recipe-6',
    name: 'Smoothie Pós-Treino',
    category: 'pos-treino',
    prepTime: '5 minutos',
    calories: '~250 kcal',
    macros: {
      protein: '30g (com whey)',
      carbs: '25g',
      fat: '3g'
    },
    ingredients: [
      { name: 'Whey protein', quantity: '30g' },
      { name: 'Banana', quantity: '1 unidade média' },
      { name: 'Leite ou água', quantity: '200ml' },
      { name: 'Gelo', quantity: '3-4 cubos (opcional)' }
    ],
    instructions: [
      'Coloque todos os ingredientes no liquidificador',
      'Bata por 30-60 segundos até ficar homogêneo',
      'Sirva imediatamente',
      'Consuma até 30min após o treino'
    ],
    tips: 'Adicione creatina (5g) junto com o whey. Para mais carboidratos, adicione 1 colher de mel ou aveia.'
  }
];


