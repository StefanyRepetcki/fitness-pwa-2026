import { Link } from 'react-router-dom';
import { Dumbbell, ArrowRight } from 'lucide-react';
import type { Workout } from '../../data/workouts';
import styles from './WorkoutCard.module.css';

interface WorkoutCardProps {
  workout: Workout;
}

export const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link 
      to={`/workout/${workout.id}`} 
      className={styles.card}
      aria-label={`Ver detalhes do ${workout.name}`}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{workout.name}</h3>
        <Dumbbell className={styles.icon} size={32} strokeWidth={2} aria-hidden="true" />
      </div>
      <p className={styles.description}>{workout.description}</p>
      <div className={styles.footer}>
        <span className={styles.exerciseCount}>
          {workout.exercises.length} {workout.exercises.length === 1 ? 'exercício' : 'exercícios'}
        </span>
        <ArrowRight className={styles.arrow} size={20} strokeWidth={2.5} aria-hidden="true" />
      </div>
    </Link>
  );
};
