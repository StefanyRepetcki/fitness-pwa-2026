export interface WarmupExercise {
  id: string;
  name: string;
  duration: string;
  description: string;
  instructions: string;
}

export interface WarmupRoutine {
  workoutId: string;
  workoutName: string;
  totalDuration: string;
  exercises: WarmupExercise[];
}

export const warmupRoutines: WarmupRoutine[] = [
  {
    workoutId: 'treino-a',
    workoutName: 'Treino A – Quadríceps + Glúteo',
    totalDuration: '5-7 minutos',
    exercises: [
      {
        id: 'warmup-a-1',
        name: 'Mobilidade Dinâmica de Quadril',
        duration: '1 minuto',
        description: 'Prepara os quadris e glúteos para o trabalho de pernas',
        instructions: 'Em pé, faça círculos com os quadris (10x cada lado), depois balance as pernas para frente e trás (10x cada).'
      },
      {
        id: 'warmup-a-2',
        name: 'Ativação Lombar e Glúteos',
        duration: '1 minuto',
        description: 'Ativa a musculatura posterior antes do treino',
        instructions: 'Deite-se de barriga para baixo, eleve o tronco e as pernas simultaneamente (10x). Depois, em 4 apoios, faça extensão de quadril (10x cada perna).'
      },
      {
        id: 'warmup-a-3',
        name: 'Agachamento Livre (Aquecimento)',
        duration: '1 minuto',
        description: 'Prepara o movimento principal do treino',
        instructions: 'Faça 2 séries de 15 agachamentos livres, sem peso, focando na amplitude e técnica.'
      },
      {
        id: 'warmup-a-4',
        name: 'Ativação de Panturrilha',
        duration: '30 segundos',
        description: 'Prepara as panturrilhas para o trabalho específico',
        instructions: 'Em pé, eleve os calcanhares lentamente (15x), depois faça elevações rápidas (20x).'
      },
      {
        id: 'warmup-a-5',
        name: 'Alongamento Dinâmico de Quadríceps',
        duration: '1 minuto',
        description: 'Alonga e prepara os quadríceps',
        instructions: 'Em pé, puxe o calcanhar em direção ao glúteo, segurando por 2 segundos (10x cada perna).'
      }
    ]
  },
  {
    workoutId: 'treino-b',
    workoutName: 'Treino B – Costas + Ombro (Construção do V Feminino)',
    totalDuration: '5-7 minutos',
    exercises: [
      {
        id: 'warmup-b-1',
        name: 'Mobilidade Escapular',
        duration: '1 minuto',
        description: 'Prepara as escápulas para movimentos de costas e peito',
        instructions: 'Em pé, faça círculos com os ombros para frente (10x) e para trás (10x). Depois, eleve e abaixe as escápulas (10x).'
      },
      {
        id: 'warmup-b-2',
        name: 'Aquecimento com Elástico (Manguito)',
        duration: '2 minutos',
        description: 'Ativa o manguito rotador e prepara os ombros',
        instructions: 'Com elástico, faça rotação externa (15x cada braço), depois elevação lateral (15x cada braço).'
      },
      {
        id: 'warmup-b-3',
        name: 'Movimentos de Peito (Sem Peso)',
        duration: '1 minuto',
        description: 'Prepara os peitorais para o trabalho',
        instructions: 'Faça flexões de joelhos (10x) ou movimento de crucifixo com os braços (15x).'
      },
      {
        id: 'warmup-b-4',
        name: 'Alongamento Dinâmico de Costas',
        duration: '1 minuto',
        description: 'Prepara a musculatura das costas',
        instructions: 'Em pé, incline o tronco para frente e deixe os braços balançarem naturalmente (10x). Depois, faça rotação de tronco (10x cada lado).'
      },
      {
        id: 'warmup-b-5',
        name: 'Mobilidade de Ombro',
        duration: '1 minuto',
        description: 'Melhora a amplitude de movimento dos ombros',
        instructions: 'Com os braços estendidos, faça círculos grandes (10x frente, 10x trás). Depois, cruze os braços na frente do peito (10x).'
      }
    ]
  },
  {
    workoutId: 'treino-c',
    workoutName: 'Treino C – Posterior + Glúteo',
    totalDuration: '5-7 minutos',
    exercises: [
      {
        id: 'warmup-c-1',
        name: 'Mobilidade + Ativação com Mini Band',
        duration: '2 minutos',
        description: 'Ativa glúteos e prepara o quadril',
        instructions: 'Coloque a mini band nos joelhos. Faça agachamentos (15x), depois caminhada lateral (10 passos cada lado), e clamshells (15x cada lado).'
      },
      {
        id: 'warmup-c-2',
        name: 'Ativação de Glúteos',
        duration: '1 minuto',
        description: 'Prepara os glúteos para o trabalho intenso',
        instructions: 'Em 4 apoios, faça extensão de quadril (15x cada perna), focando na contração máxima do glúteo.'
      },
      {
        id: 'warmup-c-3',
        name: 'Alongamento Dinâmico de Posterior',
        duration: '1 minuto',
        description: 'Prepara os isquiotibiais',
        instructions: 'Em pé, balance a perna para frente mantendo-a estendida (10x cada perna). Depois, faça alongamento de posterior sentado (10x cada lado).'
      },
      {
        id: 'warmup-c-4',
        name: 'Ativação de Core',
        duration: '1 minuto',
        description: 'Prepara o core para os exercícios',
        instructions: 'Faça prancha por 30 segundos, depois dead bug (10x cada lado) e bird dog (10x cada lado).'
      },
      {
        id: 'warmup-c-5',
        name: 'Mobilidade de Quadril',
        duration: '1 minuto',
        description: 'Melhora a amplitude para exercícios de glúteo',
        instructions: 'Em pé, faça elevação de joelho (10x cada), depois abertura lateral de perna (10x cada).'
      }
    ]
  }
];




