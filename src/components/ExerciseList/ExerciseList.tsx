import { useState } from 'react';
import { CheckCircle2, Circle, Weight } from 'lucide-react';
import type { Exercise } from '../../data/workouts';
import { getExerciseWeight, saveExerciseWeight } from '../../data/exerciseWeights';
import styles from './ExerciseList.module.css';

interface ExerciseListProps {
  exercises: Exercise[];
  workoutId?: string;
  completedExercises?: string[];
  onToggleExercise?: (exerciseId: string) => void;
}

function buildExerciseWeights(
  workoutId: string | undefined,
  exercises: Exercise[]
): Record<string, string> {
  if (!workoutId) return {};
  const weights: Record<string, string> = {};
  exercises.forEach((exercise) => {
    const savedWeight = getExerciseWeight(workoutId, exercise.id);
    if (savedWeight !== null) {
      weights[exercise.id] = savedWeight.toString();
    } else {
      weights[exercise.id] = '';
    }
  });
  return weights;
}

export const ExerciseList = ({
  exercises,
  workoutId,
  completedExercises = [],
  onToggleExercise,
}: ExerciseListProps) => {
  const [exerciseWeights, setExerciseWeights] = useState(() =>
    buildExerciseWeights(workoutId, exercises)
  );

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

  const handleWeightChange = (exerciseId: string, value: string) => {
    setExerciseWeights((prev) => ({
      ...prev,
      [exerciseId]: value,
    }));
  };

  const handleWeightBlur = (exerciseId: string) => {
    if (!workoutId) return;

    const value = exerciseWeights[exerciseId]?.replace(',', '.') || '';
    const weight = parseFloat(value);

    if (value === '' || isNaN(weight)) {
      return;
    }

    if (weight > 0 && weight <= 1000) {
      saveExerciseWeight(workoutId, exerciseId, weight);
      setExerciseWeights((prev) => ({
        ...prev,
        [exerciseId]: weight.toString(),
      }));
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
            <div className={styles.exerciseContent}>
              <div className={styles.exerciseTopBar}>
                <span className={styles.number} aria-label={`Exercício ${index + 1}`}>
                  {index + 1}
                </span>
                {workoutId && onToggleExercise && (
                  <button
                    type="button"
                    className={styles.checkboxButton}
                    onClick={() => handleToggle(exercise.id)}
                    aria-label={
                      isCompleted
                        ? `Marcar ${exercise.name} como não feito`
                        : `Marcar ${exercise.name} como feito`
                    }
                    aria-pressed={isCompleted}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className={styles.checkIcon} size={24} strokeWidth={2.5} />
                    ) : (
                      <Circle className={styles.checkIcon} size={24} strokeWidth={2} />
                    )}
                  </button>
                )}
              </div>
              <div className={styles.exerciseHeader}>
                <h4 className={styles.name}>{exercise.name}</h4>
              </div>
              <div className={styles.details}>
                <div className={styles.setsReps}>
                  <span className={styles.label}>Séries:</span>
                  <span className={styles.value}>
                    {typeof exercise.sets === 'number' ? exercise.sets : exercise.sets}
                  </span>
                  <span className={styles.separator} aria-hidden="true">
                    •
                  </span>
                  <span className={styles.label}>Reps:</span>
                  <span className={styles.value}>{exercise.reps}</span>
                  {exercise.restTime && (
                    <>
                      <span className={styles.separator} aria-hidden="true">
                        •
                      </span>
                      <span className={styles.label}>Descanso:</span>
                      <span className={styles.value}>{exercise.restTime}</span>
                    </>
                  )}
                  {exercise.rpe && (
                    <>
                      <span className={styles.separator} aria-hidden="true">
                        •
                      </span>
                      <span className={styles.label}>RPE:</span>
                      <span className={styles.value}>{exercise.rpe}/10</span>
                    </>
                  )}
                </div>
                {exercise.cadence && (
                  <div className={styles.cadence} role="note">
                    <span className={styles.cadenceIcon} aria-hidden="true">
                      ⏱️
                    </span>
                    <span className={styles.cadenceText}>Cadência: {exercise.cadence}</span>
                  </div>
                )}
                {exercise.notes && (
                  <div className={styles.notes} role="note">
                    <span className={styles.notesIcon} aria-hidden="true">
                      💡
                    </span>
                    <span className={styles.notesText}>{exercise.notes}</span>
                  </div>
                )}
                {workoutId && (
                  <div className={styles.weightInputContainer}>
                    <Weight className={styles.weightIcon} size={16} strokeWidth={2} />
                    <label htmlFor={`weight-${exercise.id}`} className={styles.weightLabel}>
                      Carga:
                    </label>
                    <input
                      id={`weight-${exercise.id}`}
                      type="number"
                      step="0.5"
                      min="0"
                      max="1000"
                      placeholder="Ex: 35"
                      value={exerciseWeights[exercise.id] || ''}
                      onChange={(e) => handleWeightChange(exercise.id, e.target.value)}
                      onBlur={() => handleWeightBlur(exercise.id)}
                      className={styles.weightInput}
                      aria-label={`Carga usada em ${exercise.name}`}
                    />
                    <span className={styles.weightUnit}>kg</span>
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
