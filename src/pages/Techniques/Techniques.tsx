import { Info } from 'lucide-react';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import styles from './Techniques.module.css';

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
    name: 'RPE (Rate of Perceived Exertion)',
    icon: '📊',
    description: 'Escala de 1 a 10 que mede a intensidade do exercício baseada na sua percepção subjetiva de esforço. Permite ajustar a carga conforme seu estado do dia.',
    howTo: [
      'Escolha a carga que permita fazer o número de repetições indicado',
      'RPE 7: Pare quando ainda conseguir fazer 2-3 repetições a mais',
      'RPE 8: Pare quando ainda conseguir fazer 1-2 repetições a mais',
      'RPE 9: Pare quando estiver quase na falha (0-1 repetição de reserva)',
      'NÃO vá até a falha absoluta quando o RPE for menor que 10'
    ],
    example: 'Treino pede: 3x8-10 reps com RPE 8 → Você faz 8-10 repetições e para quando ainda conseguir fazer 1-2 repetições a mais',
    benefits: [
      'Permite ajustar a carga conforme seu estado do dia (recuperação, sono, estresse)',
      'Reduz risco de overtraining',
      'Mantém qualidade técnica',
      'Ajuda a progredir de forma mais sustentável',
      'Autoregulação inteligente'
    ]
  },
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

export const Techniques = () => {
  return (
    <>
      <Header title="Técnicas de Treino" />
      <PageContainer>
        <div className={styles.intro}>
          <Info className={styles.infoIcon} size={24} strokeWidth={2} />
          <p>
            Entenda as nomenclaturas técnicas usadas nos treinos e como executá-las corretamente
          </p>
        </div>

        <div className={styles.techniquesList}>
          {techniques.map((technique, index) => (
            <div key={index} className={styles.techniqueCard}>
              <div className={styles.techniqueHeader}>
                <span className={styles.techniqueIcon}>{technique.icon}</span>
                <h3 className={styles.techniqueName}>{technique.name}</h3>
              </div>
              
              <p className={styles.techniqueDescription}>{technique.description}</p>

              <div className={styles.techniqueSection}>
                <h4 className={styles.sectionTitle}>Como fazer:</h4>
                <ol className={styles.howToList}>
                  {technique.howTo.map((step, stepIndex) => (
                    <li key={stepIndex} className={styles.howToItem}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className={styles.techniqueSection}>
                <h4 className={styles.sectionTitle}>Exemplo:</h4>
                <p className={styles.example}>{technique.example}</p>
              </div>

              <div className={styles.techniqueSection}>
                <h4 className={styles.sectionTitle}>Benefícios:</h4>
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
      </PageContainer>
    </>
  );
};

