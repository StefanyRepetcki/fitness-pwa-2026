export interface Supplement {
  id: string;
  name: string;
  dosage: string;
  time: string;
  notes?: string;
  icon: string;
}

export interface SupplementSchedule {
  id: string;
  moment: string;
  icon: string;
  supplements: Supplement[];
}

export const supplementSchedule: SupplementSchedule[] = [
  {
    id: 'morning',
    moment: 'Manhã',
    icon: '🌅',
    supplements: [
      {
        id: 's1',
        name: 'Multivitamínico',
        dosage: '1 cápsula',
        time: '07:00',
        notes: 'Após o café da manhã (com refeição gordurosa para melhor absorção de vitaminas lipossolúveis). Ciclo: 3 meses on, 1 mês off.',
        icon: '💊'
      },
      {
        id: 's2',
        name: 'Vitamina D',
        dosage: '2000 UI',
        time: '07:00',
        notes: 'Junto com o multivitamínico. Não tomar junto com cálcio (competem por absorção).',
        icon: '☀️'
      },
      {
        id: 's3',
        name: 'Ômega 3',
        dosage: '2 cápsulas',
        time: '07:00',
        notes: 'Com refeição para melhor absorção. Evitar tomar junto com cálcio.',
        icon: '🐟'
      },
      {
        id: 's12',
        name: 'Ferro (Bisglicinato)',
        dosage: '18-30mg',
        time: '07:00',
        notes: 'Em jejum ou com vitamina C (aumenta absorção). IMPORTANTE: Fazer exame de sangue (hemograma + ferritina) antes de começar e monitorar a cada 3-4 meses. Não tomar junto com café/chá, cálcio ou zinco (reduzem absorção). Ciclo: 3 meses on, 1 mês off. Recomendado especialmente se já teve anemia ou treino muito intenso.',
        icon: '🔴'
      }
    ]
  },
  {
    id: 'before-lunch',
    moment: 'Antes do Almoço',
    icon: '🍽️',
    supplements: [
      {
        id: 's4',
        name: 'Colágeno',
        dosage: '10g',
        time: '12:00',
        notes: '30min antes do almoço, com água e 500mg de vitamina C (melhora absorção e síntese de colágeno). Importante para pele e articulações durante treino intenso.',
        icon: '✨'
      }
    ]
  },
  {
    id: 'after-lunch',
    moment: 'Pós-Almoço',
    icon: '☕',
    supplements: [
      {
        id: 's5',
        name: 'Probiótico',
        dosage: '1 cápsula',
        time: '13:00',
        notes: 'Após o almoço, para digestão. Ciclo: 2 meses on, 1 mês off.',
        icon: '🦠'
      }
    ]
  },
  {
    id: 'pre-workout',
    moment: 'Pré-Treino',
    icon: '💪',
    supplements: [
      {
        id: 's7',
        name: 'Cafeína',
        dosage: '200mg',
        time: '30min antes',
        notes: 'Ou café preto. Aumenta performance e foco durante treino. Para idade de 26 anos, metabolismo ainda alto, dose adequada.',
        icon: '☕'
      }
    ]
  },
  {
    id: 'post-workout',
    moment: 'Pós-Treino',
    icon: '🏋️',
    supplements: [
      {
        id: 's8',
        name: 'Whey Protein',
        dosage: '30g (ou 0.4-0.5g/kg de peso)',
        time: 'Imediato',
        notes: 'Até 30min após o treino (janela anabólica). Complementa proteína diária para desenvolvimento muscular.',
        icon: '🥤'
      },
      {
        id: 's9',
        name: 'Creatina',
        dosage: '5g',
        time: 'Imediato',
        notes: 'Junto com o whey e carboidrato (melhor absorção). Para 26 anos e 88kg, 5g/dia é suficiente. Mantém força e recuperação durante treino intenso.',
        icon: '⚡'
      }
    ]
  },
  {
    id: 'night',
    moment: 'Noite',
    icon: '🌙',
    supplements: [
      {
        id: 's10',
        name: 'Magnésio',
        dosage: '400mg',
        time: '21:00',
        notes: 'Antes de dormir, ajuda no sono e recuperação muscular. Não tomar junto com cálcio (competem por absorção).',
        icon: '😴'
      },
      {
        id: 's11',
        name: 'Zinco',
        dosage: '15mg',
        time: '21:00',
        notes: 'Junto com o magnésio. Não tomar junto com cálcio ou ferro (competem por absorção).',
        icon: '🌙'
      }
    ]
  }
];

