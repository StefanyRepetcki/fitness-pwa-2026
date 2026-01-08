import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, ArrowRight } from 'lucide-react';
import type { Workout } from '../../data/workouts';
import { saveLastWorkout } from '../../utils/lastWorkout';
import styles from './WorkoutCard.module.css';

interface WorkoutCardProps {
  workout: Workout;
  isLastOpened?: boolean;
}

export const WorkoutCard = React.memo(({ workout, isLastOpened = false }: WorkoutCardProps) => {
  const handleClick = () => {
    saveLastWorkout(workout.id);
  };

  return (
    <Link 
      to={`/workout/${workout.id}`} 
      className={`${styles.card} ${isLastOpened ? styles.lastOpened : ''}`}
      aria-label={`Ver detalhes do ${workout.name}`}
      onClick={handleClick}
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
}, (prevProps, nextProps) => {
  // Comparação customizada: só re-renderiza se o ID do workout mudar
  return prevProps.workout.id === nextProps.workout.id;
});
