import type { Supplement } from '../../data/supplements';
import styles from './SupplementCard.module.css';

interface SupplementCardProps {
  supplement: Supplement;
}

export const SupplementCard = ({ supplement }: SupplementCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon} aria-hidden="true">{supplement.icon || '💊'}</span>
        <div className={styles.headerContent}>
          <h4 className={styles.name}>{supplement.name}</h4>
          <span className={styles.dosage} aria-label={`Dosagem: ${supplement.dosage}`}>
            {supplement.dosage}
          </span>
        </div>
      </div>
      <div className={styles.details}>
        {supplement.time && (
          <div className={styles.time}>
            <span className={styles.timeIcon} aria-hidden="true">⏰</span>
            <span className={styles.timeText}>{supplement.time}</span>
          </div>
        )}
        {supplement.notes && (
          <p className={styles.notes}>{supplement.notes}</p>
        )}
      </div>
    </article>
  );
};
