import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { routine } from '../../data/routine';
import styles from './Routine.module.css';

export const Routine = () => {
  const getDayIcon = (rest: boolean, restActive?: boolean) => {
    if (restActive) return '🧘';
    if (rest) return '😴';
    return '💪';
  };

  return (
    <>
      <Header title="Rotina Semanal" />
      <PageContainer>
        <div className={styles.intro}>
          <p>Visualize seu ciclo semanal de treinos 📅</p>
        </div>
        <div className={styles.routineGrid} role="list">
          {routine.map((day) => (
            <article
              key={day.id}
              className={`${styles.dayCard} ${
                day.rest ? (day.restActive ? styles.restActive : styles.rest) : ''
              }`}
            >
              <div className={styles.dayHeader}>
                <span className={styles.icon} aria-hidden="true">
                  {getDayIcon(day.rest, day.restActive)}
                </span>
                <h3 className={styles.dayName}>{day.day}</h3>
              </div>
              {day.rest ? (
                <div className={styles.restContent}>
                  <p className={styles.restText}>
                    {day.restActive ? 'Descanso Ativo' : 'Dia de descanso'}
                  </p>
                  <p className={styles.restSubtext}>
                    {day.restActive
                      ? 'Cardio leve + core'
                      : 'Recuperação é importante!'}
                  </p>
                </div>
              ) : (
                <Link
                  to={`/workout/${day.workoutId}`}
                  className={styles.workoutLink}
                  aria-label={`Ver detalhes do ${day.workoutName}`}
                >
                  <p className={styles.workoutName}>{day.workoutName}</p>
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </Link>
              )}
            </article>
          ))}
        </div>
      </PageContainer>
    </>
  );
};
