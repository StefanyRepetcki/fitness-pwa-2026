import type { Exercise } from '../../data/workouts';
import styles from './ExerciseList.module.css';

interface ExerciseListProps {
  exercises: Exercise[];
}

export const ExerciseList = ({ exercises }: ExerciseListProps) => {
  if (exercises.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>Nenhum exercício cadastrado neste treino.</p>
      </div>
    );
  }

  return (
    <ol className={styles.list}>
      {exercises.map((exercise, index) => (
        <li key={exercise.id} className={styles.exercise}>
          <div className={styles.exerciseHeader}>
            <span className={styles.number} aria-label={`Exercício ${index + 1}`}>
              {index + 1}
            </span>
            <h4 className={styles.name}>{exercise.name}</h4>
          </div>
          <div className={styles.details}>
            <div className={styles.setsReps}>
              <span className={styles.label}>Séries:</span>
              <span className={styles.value}>
                {typeof exercise.sets === 'number' ? exercise.sets : exercise.sets}
              </span>
              <span className={styles.separator} aria-hidden="true">•</span>
              <span className={styles.label}>Reps:</span>
              <span className={styles.value}>{exercise.reps}</span>
            </div>
            {exercise.notes && (
              <div className={styles.notes} role="note">
                <span className={styles.notesIcon} aria-hidden="true">💡</span>
                <span className={styles.notesText}>{exercise.notes}</span>
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
};
