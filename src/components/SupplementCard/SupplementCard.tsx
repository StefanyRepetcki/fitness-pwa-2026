import type { Supplement } from '../../data/supplements';
import styles from './SupplementCard.module.css';

interface SupplementCardProps {
  supplement: Supplement;
}

export const SupplementCard = ({ supplement }: SupplementCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon}>{supplement.icon}</span>
        <div className={styles.headerContent}>
          <h4 className={styles.name}>{supplement.name}</h4>
          <span className={styles.dosage}>{supplement.dosage}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.time}>
          <span className={styles.timeIcon}>🕐</span>
          <span className={styles.timeText}>{supplement.time}</span>
        </div>
        {supplement.notes && (
          <p className={styles.notes}>{supplement.notes}</p>
        )}
      </div>
    </div>
  );
};

