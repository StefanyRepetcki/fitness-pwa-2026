import { useEffect, useState } from 'react';
import { Flame } from 'lucide-react';
import { getStreakData, getStreakMessage } from '../../data/streaks';
import styles from './StreakBadge.module.css';

export const StreakBadge = () => {
  const [streakData, setStreakData] = useState(getStreakData());

  useEffect(() => {
    // Atualizar quando a página recebe foco
    const handleFocus = () => {
      setStreakData(getStreakData());
    };
    
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  if (streakData.currentStreak === 0) {
    return null;
  }

  return (
    <div className={styles.streakBadge} role="status" aria-label={`Sequência de ${streakData.currentStreak} dias`}>
      <Flame className={styles.flameIcon} size={20} strokeWidth={2.5} aria-hidden="true" />
      <span className={styles.streakText}>
        {getStreakMessage(streakData.currentStreak)}
      </span>
    </div>
  );
};


