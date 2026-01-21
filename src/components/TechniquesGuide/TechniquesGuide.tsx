import { useState } from 'react';
import { ChevronDown, Info } from 'lucide-react';
import styles from './TechniquesGuide.module.css';

interface Technique {
  name: string;
  icon: string;
  description: string;
  howTo: string[];
  example: string;
  benefits: string[];
}

const techniques: Technique[] = [
  {
    name: 'Rest Pause',
    icon: '⏸️',
    description: 'Após atingir a falha muscular, você descansa por 10-15 segundos e continua fazendo mais 2-3 repetições.',
    howTo: [
      'Faça o máximo de repetições possível até a falha',
      'Descanse 10-15 segundos (não solte o peso completamente)',
      'Continue fazendo mais 2-3 repetições até falhar novamente',
      'Isso conta como 1 série completa'
    ],
    example: 'Série: 1x8-12+2 rest pause → Você faz 10 reps até falhar → descansa 10s → faz mais 2 reps',
    benefits: [
      'Aumenta o volume efetivo do treino',
      'Permite trabalhar com mais carga',
      'Aumenta tempo sob tensão'
    ]
  },
  {
    name: 'Repetições Parciais',
    icon: '🔄',
    description: 'Após atingir a falha completa, você continua fazendo repetições parciais (meio movimento) até não conseguir mais.',
    howTo: [
      'Faça o máximo de repetições completas possível',
      'Quando não conseguir mais fazer o movimento completo',
      'Continue fazendo 10 repetições parciais (meio movimento)',
      'Isso conta como parte da mesma série'
    ],
    example: 'Série: 1x8-12+10 parciais → Você faz 10 reps completas até falhar → faz mais 10 reps parciais',
    benefits: [
      'Aumenta tempo sob tensão',
      'Recruta mais fibras musculares',
      'Intensifica o estímulo'
    ]
  },
  {
    name: 'Pico de Contração',
    icon: '⏱️',
    description: 'No ponto máximo de contração do músculo (topo do movimento), você segura por 2-3 segundos antes de voltar.',
    howTo: [
      'Execute o movimento normalmente',
      'No ponto de máxima contração, pare',
      'Segure por 2-3 segundos (conte mentalmente)',
      'Volte controladamente'
    ],
    example: 'Elevação Lateral: subir até altura dos ombros → segurar 2s → descer',
    benefits: [
      'Melhora conexão mente-músculo',
      'Aumenta ativação muscular',
      'Desenvolve controle motor'
    ]
  },
  {
    name: 'Progressão de Carga',
    icon: '📈',
    description: 'Começar com mais repetições e menos carga, e progressivamente aumentar a carga e reduzir as repetições.',
    howTo: [
      'Primeira série: 15-20 reps com carga leve',
      'Segunda série: 10-15 reps com carga média',
      'Terceira série: 8-12 reps com carga pesada',
      'Quarta série: 6-10 reps com carga muito pesada'
    ],
    example: 'Agachamento: 1x15-20 (60kg) → 1x10-15 (70kg) → 1x8-12 (80kg) → 1x6-10 (90kg)',
    benefits: [
      'Aquecimento progressivo',
      'Previne lesões',
      'Permite trabalhar com cargas maiores',
      'Desenvolve força e hipertrofia'
    ]
  },
  {
    name: 'Drop Set',
    icon: '⬇️',
    description: 'Após atingir a falha, você reduz a carga em 30% e continua até falhar novamente.',
    howTo: [
      'Faça o máximo de repetições até falhar',
      'Reduza a carga em 30% imediatamente',
      'Continue até falhar novamente',
      'Isso conta como parte da mesma série'
    ],
    example: 'Panturrilha: 1x6-10 (100kg) até falhar → reduz para 70kg → continua até falhar',
    benefits: [
      'Aumenta volume de treino',
      'Intensifica o estímulo',
      'Recruta diferentes fibras musculares'
    ]
  }
];

export const TechniquesGuide = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className={styles.toggleButton}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Ocultar guia de técnicas' : 'Mostrar guia de técnicas'}
      >
        <Info className={styles.infoIcon} size={20} strokeWidth={2} />
        <span className={styles.toggleText}>
          {isExpanded ? 'Ocultar' : 'O que significam essas técnicas?'}
        </span>
        <ChevronDown 
          className={`${styles.chevron} ${isExpanded ? styles.expanded : ''}`} 
          size={20} 
          strokeWidth={2} 
        />
      </button>

      {isExpanded && (
        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.title}>Guia de Técnicas Avançadas</h3>
            <p className={styles.subtitle}>
              Entenda as nomenclaturas técnicas usadas nos treinos
            </p>
          </div>

          <div className={styles.techniquesList}>
            {techniques.map((technique, index) => (
              <div key={index} className={styles.techniqueCard}>
                <div className={styles.techniqueHeader}>
                  <span className={styles.techniqueIcon}>{technique.icon}</span>
                  <h4 className={styles.techniqueName}>{technique.name}</h4>
                </div>
                
                <p className={styles.techniqueDescription}>{technique.description}</p>

                <div className={styles.techniqueSection}>
                  <h5 className={styles.sectionTitle}>Como fazer:</h5>
                  <ol className={styles.howToList}>
                    {technique.howTo.map((step, stepIndex) => (
                      <li key={stepIndex} className={styles.howToItem}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div className={styles.techniqueSection}>
                  <h5 className={styles.sectionTitle}>Exemplo:</h5>
                  <p className={styles.example}>{technique.example}</p>
                </div>

                <div className={styles.techniqueSection}>
                  <h5 className={styles.sectionTitle}>Benefícios:</h5>
                  <ul className={styles.benefitsList}>
                    {technique.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className={styles.benefitItem}>
                        <span className={styles.checkmark}>✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              <strong>Lembre-se:</strong> Qualidade &gt; Quantidade! Escute seu corpo e mantenha a técnica correta.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

