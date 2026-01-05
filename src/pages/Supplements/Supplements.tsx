import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { SupplementCard } from '../../components/SupplementCard/SupplementCard';
import { supplementSchedule } from '../../data/supplements';
import styles from './Supplements.module.css';

export const Supplements = () => {
  return (
    <>
      <Header title="Suplementação" />
      <PageContainer>
        <div className={styles.intro}>
          <p>Organize seus suplementos ao longo do dia 💊</p>
        </div>

        <div className={styles.schedule}>
          {supplementSchedule.map((schedule) => (
            <div key={schedule.id} className={styles.moment}>
              <div className={styles.momentHeader}>
                <span className={styles.momentIcon}>{schedule.icon}</span>
                <h2 className={styles.momentTitle}>{schedule.moment}</h2>
              </div>
              <div className={styles.supplements}>
                {schedule.supplements.map((supplement) => (
                  <SupplementCard key={supplement.id} supplement={supplement} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </>
  );
};

