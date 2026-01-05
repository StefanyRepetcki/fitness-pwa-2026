export interface Tip {
  id: string;
  category: 'treino' | 'alimentacao' | 'suplementacao' | 'recuperacao' | 'motivacao';
  title: string;
  content: string;
  icon: string;
}

export interface Quote {
  id: string;
  text: string;
  author?: string;
}

export const tips: Tip[] = [
  {
    id: 'tip-1',
    category: 'treino',
    title: 'Aquecimento é essencial',
    content: 'Sempre faça 5-10 minutos de aquecimento antes de treinar. Isso prepara seus músculos e reduz o risco de lesões.',
    icon: '🔥'
  },
  {
    id: 'tip-2',
    category: 'treino',
    title: 'Foque na execução',
    content: 'Qualidade sempre vem antes de quantidade. Execute os movimentos com técnica correta, mesmo que precise reduzir a carga.',
    icon: '✨'
  },
  {
    id: 'tip-3',
    category: 'alimentacao',
    title: 'Hidratação constante',
    content: 'Beba água ao longo do dia, não apenas durante o treino. A hidratação adequada melhora performance e recuperação.',
    icon: '💧'
  },
  {
    id: 'tip-4',
    category: 'alimentacao',
    title: 'Proteína em todas as refeições',
    content: 'Distribua a proteína ao longo do dia. Isso mantém seus músculos nutridos e acelera a recuperação.',
    icon: '🍗'
  },
  {
    id: 'tip-5',
    category: 'suplementacao',
    title: 'Creatina com carboidrato',
    content: 'Tome creatina junto com uma fonte de carboidrato (ex: suco de fruta) para melhor absorção.',
    icon: '💊'
  },
  {
    id: 'tip-6',
    category: 'suplementacao',
    title: 'Whey no pós-treino',
    content: 'O melhor momento para whey é até 30 minutos após o treino, quando a síntese proteica está no pico.',
    icon: '🥤'
  },
  {
    id: 'tip-7',
    category: 'recuperacao',
    title: 'Sono é treino',
    content: 'Durma 7-9 horas por noite. É durante o sono que seu corpo se recupera e constrói músculos.',
    icon: '😴'
  },
  {
    id: 'tip-8',
    category: 'recuperacao',
    title: 'Descanso ativo',
    content: 'Nos dias de descanso, faça caminhada leve ou alongamento. Isso acelera a recuperação muscular.',
    icon: '🧘'
  },
  {
    id: 'tip-9',
    category: 'motivacao',
    title: 'Progresso, não perfeição',
    content: 'Não precisa ser perfeito todos os dias. O importante é ser consistente e fazer o melhor que pode hoje.',
    icon: '🌟'
  },
  {
    id: 'tip-10',
    category: 'motivacao',
    title: 'Celebre pequenas vitórias',
    content: 'Cada treino concluído é uma vitória. Reconheça seu esforço e mantenha o foco no processo.',
    icon: '🎉'
  }
];

export const quotes: Quote[] = [
  {
    id: 'quote-1',
    text: 'O corpo alcança o que a mente acredita.',
    author: 'Anônimo'
  },
  {
    id: 'quote-2',
    text: 'A disciplina é a ponte entre metas e realizações.',
    author: 'Jim Rohn'
  },
  {
    id: 'quote-3',
    text: 'Você não precisa ser ótimo para começar, mas precisa começar para ser ótimo.',
    author: 'Zig Ziglar'
  },
  {
    id: 'quote-4',
    text: 'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
    author: 'Robert Collier'
  },
  {
    id: 'quote-5',
    text: 'Cuide do seu corpo. É o único lugar que você tem para viver.',
    author: 'Jim Rohn'
  }
];

export const spotifyPlaylist = {
  id: 'playlist-1',
  title: 'Funk academia Stefany Repetcki',
  description: 'Músicas energéticas para te motivar durante os treinos',
  url: 'https://open.spotify.com/playlist/4V39Uzit9y5xkPheyie6p2',
  image: '🎵'
};

