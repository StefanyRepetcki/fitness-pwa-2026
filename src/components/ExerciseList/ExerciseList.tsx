import { CheckCircle2, Circle } from 'lucide-react';
import type { Exercise } from '../../data/workouts';
import styles from './ExerciseList.module.css';

interface ExerciseListProps {
  exercises: Exercise[];
  workoutId?: string;
  completedExercises?: string[];
  onToggleExercise?: (exerciseId: string) => void;
}

export const ExerciseList = ({ 
  exercises, 
  workoutId,
  completedExercises = [],
  onToggleExercise 
}: ExerciseListProps) => {
  if (exercises.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>Nenhum exercício cadastrado neste treino.</p>
      </div>
    );
  }

  const handleToggle = (exerciseId: string) => {
    if (onToggleExercise) {
      onToggleExercise(exerciseId);
    }
  };

  return (
    <ol className={styles.list}>
      {exercises.map((exercise, index) => {
        const isCompleted = completedExercises.includes(exercise.id);
        
        return (
          <li 
            key={exercise.id} 
            className={`${styles.exercise} ${isCompleted ? styles.completed : ''}`}
          >
            {workoutId && onToggleExercise && (
              <button
                className={styles.checkboxButton}
                onClick={() => handleToggle(exercise.id)}
                aria-label={isCompleted ? `Marcar ${exercise.name} como não feito` : `Marcar ${exercise.name} como feito`}
                aria-pressed={isCompleted}
              >
                {isCompleted ? (
                  <CheckCircle2 className={styles.checkIcon} size={24} strokeWidth={2.5} />
                ) : (
                  <Circle className={styles.checkIcon} size={24} strokeWidth={2} />
                )}
              </button>
            )}
            <div className={styles.exerciseContent}>
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
                  {exercise.restTime && (
                    <>
                      <span className={styles.separator} aria-hidden="true">•</span>
                      <span className={styles.label}>Descanso:</span>
                      <span className={styles.value}>{exercise.restTime}</span>
                    </>
                  )}
                  {exercise.rpe && (
                    <>
                      <span className={styles.separator} aria-hidden="true">•</span>
                      <span className={styles.label}>RPE:</span>
                      <span className={styles.value}>{exercise.rpe}/10</span>
                    </>
                  )}
                </div>
                {exercise.cadence && (
                  <div className={styles.cadence} role="note">
                    <span className={styles.cadenceIcon} aria-hidden="true">⏱️</span>
                    <span className={styles.cadenceText}>Cadência: {exercise.cadence}</span>
                  </div>
                )}
                {exercise.notes && (
                  <div className={styles.notes} role="note">
                    <span className={styles.notesIcon} aria-hidden="true">💡</span>
                    <span className={styles.notesText}>{exercise.notes}</span>
                  </div>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
};
