import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { WorkoutCard } from '../../components/WorkoutCard/WorkoutCard';
import { workouts } from '../../data/workouts';
import styles from './Workouts.module.css';

export const Workouts = () => {
  return (
    <>
      <Header title="Treinos" />
      <PageContainer>
        <div className={styles.intro}>
          <p>Escolha seu treino do ciclo e comece a suar!</p>
        </div>
        {workouts.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Nenhum treino disponível no momento.</p>
          </div>
        ) : (
          <div className={styles.workoutsList} role="list">
            {workouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        )}
      </PageContainer>
    </>
  );
};
