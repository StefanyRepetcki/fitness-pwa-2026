import type { Exercise } from '../../data/workouts';
import styles from './ExerciseList.module.css';

interface ExerciseListProps {
  exercises: Exercise[];
}

export const ExerciseList = ({ exercises }: ExerciseListProps) => {
  return (
    <div className={styles.list}>
      {exercises.map((exercise, index) => (
        <div key={exercise.id} className={styles.exercise}>
          <div className={styles.exerciseHeader}>
            <span className={styles.number}>{index + 1}</span>
            <h4 className={styles.name}>{exercise.name}</h4>
          </div>
          <div className={styles.details}>
            <div className={styles.setsReps}>
              <span className={styles.label}>Séries:</span>
              <span className={styles.value}>
                {typeof exercise.sets === 'number' ? exercise.sets : exercise.sets}
              </span>
              <span className={styles.separator}>•</span>
              <span className={styles.label}>Reps:</span>
              <span className={styles.value}>{exercise.reps}</span>
            </div>
            {exercise.notes && (
              <div className={styles.notes}>
                <span className={styles.notesIcon}>💡</span>
                <span className={styles.notesText}>{exercise.notes}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

