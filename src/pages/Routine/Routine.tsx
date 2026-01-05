import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { routine } from '../../data/routine';
import styles from './Routine.module.css';

export const Routine = () => {
  const getDayIcon = (rest: boolean) => {
    return rest ? '😴' : '💪';
  };

  return (
    <>
      <Header title="Rotina Semanal" />
      <PageContainer>
        <div className={styles.intro}>
          <p>Visualize sua semana de treinos 📅</p>
        </div>
        <div className={styles.routineGrid}>
          {routine.map((day) => (
            <div
              key={day.id}
              className={`${styles.dayCard} ${day.rest ? styles.rest : ''}`}
            >
              <div className={styles.dayHeader}>
                <span className={styles.icon}>{getDayIcon(day.rest)}</span>
                <h3 className={styles.dayName}>{day.day}</h3>
              </div>
              {day.rest ? (
                <div className={styles.restContent}>
                  <p className={styles.restText}>Dia de descanso</p>
                  <p className={styles.restSubtext}>Recuperação é importante!</p>
                </div>
              ) : (
                <Link
                  to={`/workout/${day.workoutId}`}
                  className={styles.workoutLink}
                >
                  <p className={styles.workoutName}>{day.workoutName}</p>
                  <span className={styles.arrow}>→</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </PageContainer>
    </>
  );
};

