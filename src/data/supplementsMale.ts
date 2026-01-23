/**
 * Suplementação para Perfil Masculino - Cutting Agressivo
 * Adaptado por Profissional de Educação Física
 * 
 * Foco: Preservar massa, manter força, otimizar recuperação durante cutting
 */

import type { SupplementSchedule } from './supplements';

export const supplementScheduleMale: SupplementSchedule[] = [
  {
    id: 'morning-male',
    moment: 'Manhã',
    icon: '🌅',
    supplements: [
      {
        id: 's1-male',
        name: 'Multivitamínico',
        dosage: '1 cápsula',
        time: '07:00',
        notes: 'Após o café da manhã (com refeição gordurosa para melhor absorção de vitaminas lipossolúveis). Ciclo: 3 meses on, 1 mês off.',
        icon: '💊'
      },
      {
        id: 's2-male',
        name: 'Vitamina D',
        dosage: '2000 UI',
        time: '07:00',
        notes: 'Junto com o multivitamínico. Se não pega sol regularmente. Não tomar junto com cálcio (competem por absorção).',
        icon: '☀️'
      },
      {
        id: 's3-male',
        name: 'Ômega 3',
        dosage: '2-3g',
        time: '07:00',
        notes: 'Com refeição para melhor absorção. Essencial para inflamação e saúde cardiovascular durante cutting. Evitar tomar junto com cálcio.',
        icon: '🐟'
      }
    ]
  },
  {
    id: 'pre-workout-male',
    moment: 'Pré-Treino',
    icon: '💪',
    supplements: [
      {
        id: 's5-male',
        name: 'Cafeína',
        dosage: '200-300mg',
        time: '30min antes',
        notes: 'Ou café preto. Aumenta performance e pode ajudar na queima de gordura. Para 26 anos, metabolismo ainda alto, dose adequada.',
        icon: '☕'
      },
      {
        id: 's6-male',
        name: 'Eletrólitos',
        dosage: '500-1000mg sódio, 200-400mg potássio, 100-200mg magnésio',
        time: '30min antes ou durante treino',
        notes: 'Essencial durante cutting agressivo com 146kg. Repõe minerais perdidos no suor. Adicionar em água durante treino se suar muito.',
        icon: '🧂'
      }
    ]
  },
  {
    id: 'post-workout-male',
    moment: 'Pós-Treino',
    icon: '🏋️',
    supplements: [
      {
        id: 's7-male',
        name: 'Whey Protein',
        dosage: '30g (ou 0.4-0.5g/kg de peso)',
        time: 'Imediato',
        notes: 'Até 30min após o treino. Complementa proteína diária (230g/dia). Essencial para preservar massa durante cutting.',
        icon: '🥤'
      },
      {
        id: 's4-male',
        name: 'Creatina',
        dosage: '5g',
        time: 'Imediato',
        notes: 'Junto com whey e carboidrato (melhor absorção). Mantém força e preserva massa durante cutting agressivo. Para 26 anos, 5g/dia é suficiente.',
        icon: '⚡'
      }
    ]
  },
  {
    id: 'night-male',
    moment: 'Noite',
    icon: '🌙',
    supplements: [
      {
        id: 's8-male',
        name: 'Magnésio',
        dosage: '400mg',
        time: '21:00',
        notes: 'Antes de dormir. Melhora sono e recuperação muscular. Essencial durante cutting. Não tomar junto com cálcio (competem por absorção).',
        icon: '😴'
      },
      {
        id: 's9-male',
        name: 'Zinco',
        dosage: '15mg',
        time: '21:00',
        notes: 'Junto com magnésio. Essencial para produção de testosterona e recuperação. Para 26 anos, otimiza função hormonal. Não tomar junto com cálcio ou ferro (competem por absorção).',
        icon: '🌙'
      }
    ]
  }
];

