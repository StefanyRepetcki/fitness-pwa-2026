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
          <p>Escolha seu treino do dia e comece a suar! 💪</p>
        </div>
        <div className={styles.workoutsList}>
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </PageContainer>
    </>
  );
};

