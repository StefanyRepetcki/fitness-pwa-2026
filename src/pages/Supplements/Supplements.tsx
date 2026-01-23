import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { SupplementCard } from '../../components/SupplementCard/SupplementCard';
import { supplementSchedule } from '../../data/supplements';
import { supplementScheduleMale } from '../../data/supplementsMale';
import { useProfile } from '../../contexts/ProfileContext';
import styles from './Supplements.module.css';

export const Supplements = () => {
  const { profileType } = useProfile();
  const currentSchedule = profileType === 'male' ? supplementScheduleMale : supplementSchedule;

  return (
    <>
      <Header title="Suplementação" />
      <PageContainer>
        <div className={styles.intro}>
          <p>Organize seu ciclo de suplementos ao longo do dia 💊</p>
        </div>

        {currentSchedule.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Nenhum suplemento cadastrado no momento.</p>
          </div>
        ) : (
          <div className={styles.schedule}>
            {currentSchedule.map((schedule) => (
              <section key={schedule.id} className={styles.moment}>
                <div className={styles.momentHeader}>
                  <span className={styles.momentIcon} aria-hidden="true">{schedule.icon}</span>
                  <h2 className={styles.momentTitle}>{schedule.moment}</h2>
                </div>
                <div className={styles.supplements} role="list">
                  {schedule.supplements.map((supplement) => (
                    <SupplementCard key={supplement.id} supplement={supplement} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </PageContainer>
    </>
  );
};
