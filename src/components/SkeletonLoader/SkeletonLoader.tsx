import styles from './SkeletonLoader.module.css';

interface SkeletonLoaderProps {
  type?: 'card' | 'text' | 'circle' | 'list';
  count?: number;
  width?: string;
  height?: string;
}

export const SkeletonLoader = ({ 
  type = 'card', 
  count = 1,
  width,
  height 
}: SkeletonLoaderProps) => {
  if (type === 'list') {
    return (
      <div className={styles.listContainer}>
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className={styles.listItem}>
            <div className={styles.listCircle} />
            <div className={styles.listContent}>
              <div className={styles.listLine} style={{ width: '60%' }} />
              <div className={styles.listLine} style={{ width: '40%' }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'text') {
    return (
      <div className={styles.textContainer}>
        {Array.from({ length: count }).map((_, index) => (
          <div 
            key={index} 
            className={styles.textLine}
            style={{ 
              width: width || (index === count - 1 ? '60%' : '100%'),
              height: height || '1rem'
            }}
          />
        ))}
      </div>
    );
  }

  if (type === 'circle') {
    return (
      <div 
        className={styles.circle}
        style={{ 
          width: width || '3rem', 
          height: height || '3rem' 
        }}
      />
    );
  }

  // Default: card
  return (
    <div className={styles.cardContainer}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardCircle} />
            <div className={styles.cardTitle} />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardLine} />
            <div className={styles.cardLine} style={{ width: '80%' }} />
            <div className={styles.cardLine} style={{ width: '60%' }} />
          </div>
        </div>
      ))}
    </div>
  );
};


