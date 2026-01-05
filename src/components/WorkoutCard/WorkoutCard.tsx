import { Link } from 'react-router-dom';
import type { Workout } from '../../data/workouts';
import styles from './WorkoutCard.module.css';

interface WorkoutCardProps {
  workout: Workout;
}

export const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link to={`/workout/${workout.id}`} className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{workout.name}</h3>
        <span className={styles.icon}>🏋️</span>
      </div>
      <p className={styles.description}>{workout.description}</p>
      <div className={styles.footer}>
        <span className={styles.exerciseCount}>
          {workout.exercises.length} exercícios
        </span>
        <span className={styles.arrow}>→</span>
      </div>
    </Link>
  );
};

