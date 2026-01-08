import { useEffect, useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import type { Badge } from '../../data/badges';
import styles from './CelebrationModal.module.css';

interface CelebrationModalProps {
  badge?: Badge;
  streak?: number;
  onClose: () => void;
}

export const CelebrationModal = ({ badge, streak, onClose }: CelebrationModalProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Animação de entrada
    setTimeout(() => setShow(true), 10);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 300);
  };

  return (
    <div 
      className={`${styles.overlay} ${show ? styles.show : ''}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="celebration-title"
    >
      <div 
        className={`${styles.modal} ${show ? styles.show : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Fechar"
        >
          <X size={24} strokeWidth={2} />
        </button>

        <div className={styles.content}>
          {badge && (
            <>
              <div className={styles.iconContainer}>
                <div 
                  className={styles.badgeIcon}
                  style={{ backgroundColor: `${badge.color}20`, borderColor: badge.color }}
                >
                  <span className={styles.emoji}>{badge.icon}</span>
                </div>
                <div className={styles.confetti}>
                  {[...Array(12)].map((_, i) => (
                    <span key={i} className={styles.confettiPiece} style={{
                      '--delay': `${i * 0.1}s`,
                      '--angle': `${i * 30}deg`
                    } as React.CSSProperties}>
                      ✨
                    </span>
                  ))}
                </div>
              </div>
              <h2 id="celebration-title" className={styles.title}>
                Conquista Desbloqueada!
              </h2>
              <p className={styles.badgeName}>{badge.name}</p>
              <p className={styles.badgeDescription}>{badge.description}</p>
            </>
          )}

          {streak && !badge && (
            <>
              <div className={styles.iconContainer}>
                <div className={styles.streakIcon}>
                  <Sparkles className={styles.sparkleIcon} size={48} strokeWidth={2} />
                </div>
                <div className={styles.confetti}>
                  {[...Array(12)].map((_, i) => (
                    <span key={i} className={styles.confettiPiece} style={{
                      '--delay': `${i * 0.1}s`,
                      '--angle': `${i * 30}deg`
                    } as React.CSSProperties}>
                      🎉
                    </span>
                  ))}
                </div>
              </div>
              <h2 id="celebration-title" className={styles.title}>
                Sequência Incrível!
              </h2>
              <p className={styles.badgeName}>{streak} dias seguidos! 🔥</p>
              <p className={styles.badgeDescription}>
                Você está no caminho certo! Continue assim!
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};


