export interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  type: 'youtube' | 'local';
  duration?: string;
}

export const videos: Video[] = [
  {
    id: 'video1',
    title: 'Execução Correta do Agachamento',
    description: 'Aprenda a técnica perfeita para agachamento livre, evitando lesões e maximizando resultados',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'youtube',
    duration: '5:30'
  },
  {
    id: 'video2',
    title: 'Como Fazer Supino Corretamente',
    description: 'Técnica detalhada do supino reto, posicionamento e movimento completo',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'youtube',
    duration: '6:15'
  },
  {
    id: 'video3',
    title: 'Elevação Pélvica - Técnica Perfeita',
    description: 'Exercício essencial para glúteos, aprenda a execução correta',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'youtube',
    duration: '4:45'
  },
  {
    id: 'video4',
    title: 'Puxada Frontal - Guia Completo',
    description: 'Como executar a puxada frontal corretamente para desenvolver as costas',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'youtube',
    duration: '5:20'
  },
  {
    id: 'video5',
    title: 'Alongamento Pós-Treino',
    description: 'Routine de alongamento para relaxar os músculos após o treino',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'youtube',
    duration: '8:00'
  }
];


