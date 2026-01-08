import { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { getWorkoutStats, getMonthlyData } from '../../data/stats';
import { getBadges } from '../../data/badges';
import { TrendingUp, Flame, Calendar, Target, Award, Clock } from 'lucide-react';
import styles from './Stats.module.css';

export const Stats = () => {
  const [stats, setStats] = useState(getWorkoutStats());
  const [monthlyData, setMonthlyData] = useState(getMonthlyData());
  const [badges] = useState(getBadges());

  useEffect(() => {
    // Atualizar quando a página recebe foco
    const handleFocus = () => {
      setStats(getWorkoutStats());
      setMonthlyData(getMonthlyData());
    };
    
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const unlockedBadges = badges.filter(b => b.unlocked);
  const unlockedPercentage = badges.length > 0 
    ? Math.round((unlockedBadges.length / badges.length) * 100) 
    : 0;

  // Preparar dados para gráfico simples (últimos 6 meses)
  const last6Months = [];
  const now = new Date();
  for (let i = 5; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    const monthName = date.toLocaleDateString('pt-BR', { month: 'short' });
    last6Months.push({
      month: monthName,
      count: monthlyData[monthKey] || 0
    });
  }

  const maxCount = Math.max(...last6Months.map(m => m.count), 1);

  return (
    <>
      <Header title="Minhas Estatísticas" showStreak={false} />
      <PageContainer>
        <div className={styles.intro}>
          <p>Veja seu progresso e conquistas</p>
        </div>

        {/* Cards de Estatísticas Principais */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon} style={{ background: 'linear-gradient(135deg, #eb3157 0%, #ff6b9d 100%)' }}>
              <Target size={24} strokeWidth={2.5} />
            </div>
            <div className={styles.statContent}>
              <p className={styles.statValue}>{stats.totalWorkouts}</p>
              <p className={styles.statLabel}>Treinos Completos</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon} style={{ background: 'linear-gradient(135deg, #ff6b9d 0%, #ffb3c6 100%)' }}>
              <Flame size={24} strokeWidth={2.5} />
            </div>
            <div className={styles.statContent}>
              <p className={styles.statValue}>{stats.currentStreak}</p>
              <p className={styles.statLabel}>Dias Seguidos</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon} style={{ background: 'linear-gradient(135deg, #c6b7e2 0%, #e8d5f5 100%)' }}>
              <TrendingUp size={24} strokeWidth={2.5} />
            </div>
            <div className={styles.statContent}>
              <p className={styles.statValue}>{stats.longestStreak}</p>
              <p className={styles.statLabel}>Maior Sequência</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon} style={{ background: 'linear-gradient(135deg, #ffdbe2 0%, #fff0f3 100%)' }}>
              <Clock size={24} strokeWidth={2.5} />
            </div>
            <div className={styles.statContent}>
              <p className={styles.statValue}>{stats.estimatedHours}h</p>
              <p className={styles.statLabel}>Horas de Treino</p>
            </div>
          </div>
        </div>

        {/* Gráfico Simples */}
        <div className={styles.chartSection}>
          <h2 className={styles.sectionTitle}>
            <Calendar className={styles.sectionIcon} size={20} strokeWidth={2} />
            Treinos por Mês
          </h2>
          <div className={styles.chart}>
            {last6Months.map((month, index) => (
              <div key={index} className={styles.chartBar}>
                <div 
                  className={styles.barFill}
                  style={{ 
                    height: `${(month.count / maxCount) * 100}%`,
                    background: month.count > 0 
                      ? 'linear-gradient(180deg, #eb3157 0%, #ff6b9d 100%)'
                      : 'var(--color-border-light)'
                  }}
                />
                <span className={styles.barValue}>{month.count}</span>
                <span className={styles.barLabel}>{month.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className={styles.badgesSection}>
          <h2 className={styles.sectionTitle}>
            <Award className={styles.sectionIcon} size={20} strokeWidth={2} />
            Conquistas ({unlockedBadges.length}/{badges.length})
          </h2>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${unlockedPercentage}%` }}
            />
          </div>
          <div className={styles.badgesGrid}>
            {badges.map((badge) => (
              <div 
                key={badge.id} 
                className={`${styles.badgeCard} ${badge.unlocked ? styles.unlocked : styles.locked}`}
              >
                <div 
                  className={styles.badgeIcon}
                  style={{ 
                    backgroundColor: badge.unlocked ? `${badge.color}20` : 'var(--color-surface-soft)',
                    borderColor: badge.unlocked ? badge.color : 'var(--color-border-light)',
                    opacity: badge.unlocked ? 1 : 0.5
                  }}
                >
                  <span className={styles.badgeEmoji}>{badge.icon}</span>
                </div>
                <h3 className={styles.badgeName}>{badge.name}</h3>
                <p className={styles.badgeDescription}>{badge.description}</p>
                {badge.unlocked && badge.unlockedDate && (
                  <p className={styles.badgeDate}>
                    {new Date(badge.unlockedDate).toLocaleDateString('pt-BR')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Estatísticas Adicionais */}
        <div className={styles.additionalStats}>
          <div className={styles.additionalCard}>
            <p className={styles.additionalValue}>{stats.workoutsThisMonth}</p>
            <p className={styles.additionalLabel}>Treinos Este Mês</p>
          </div>
          <div className={styles.additionalCard}>
            <p className={styles.additionalValue}>{stats.workoutsThisWeek}</p>
            <p className={styles.additionalLabel}>Treinos Esta Semana</p>
          </div>
          <div className={styles.additionalCard}>
            <p className={styles.additionalValue}>{stats.totalExercises}</p>
            <p className={styles.additionalLabel}>Exercícios Completos</p>
          </div>
        </div>
      </PageContainer>
    </>
  );
};


