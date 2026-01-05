import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { ExerciseList } from '../../components/ExerciseList/ExerciseList';
import { workouts } from '../../data/workouts';
import { 
  getWorkoutProgress, 
  toggleExercise, 
  clearWorkoutProgress,
  type WorkoutProgress 
} from '../../data/workoutProgress';
import { RotateCcw } from 'lucide-react';
import styles from './WorkoutDetail.module.css';

export const WorkoutDetail = () => {
  const { id } = useParams<{ id: string }>();
  const workout = workouts.find((w) => w.id === id);
  const [progress, setProgress] = useState<WorkoutProgress | null>(null);

  useEffect(() => {
    if (id) {
      setProgress(getWorkoutProgress(id));
    }
  }, [id]);

  if (!workout) {
    return (
      <>
        <Header title="Treino não encontrado" />
        <PageContainer>
          <div className={styles.notFound} role="alert">
            <h2>Treino não encontrado</h2>
            <p>O treino que você está procurando não existe ou foi removido.</p>
            <Link to="/" className={styles.backLink}>
              <span>←</span> Voltar para treinos
            </Link>
          </div>
        </PageContainer>
      </>
    );
  }

  const handleToggleExercise = (exerciseId: string) => {
    if (!id) return;
    const updated = toggleExercise(id, exerciseId);
    setProgress(updated);
  };

  const handleClearProgress = () => {
    if (!id) return;
    if (window.confirm('Tem certeza que deseja limpar todo o progresso deste treino?')) {
      clearWorkoutProgress(id);
      setProgress(getWorkoutProgress(id));
    }
  };

  const completedCount = progress?.completedExercises.length || 0;
  const totalExercises = workout.exercises.length;
  const progressPercentage = totalExercises > 0 
    ? Math.round((completedCount / totalExercises) * 100) 
    : 0;

  return (
    <>
      <Header title={workout.name} />
      <PageContainer>
        <div className={styles.description}>
          <p>{workout.description}</p>
        </div>

        {/* Progress Bar */}
        <div className={styles.progressSection}>
          <div className={styles.progressHeader}>
            <div className={styles.progressInfo}>
              <h3 className={styles.progressTitle}>Progresso do Treino</h3>
              <p className={styles.progressStats}>
                {completedCount} de {totalExercises} exercícios completados
              </p>
            </div>
            {completedCount > 0 && (
              <button
                className={styles.clearButton}
                onClick={handleClearProgress}
                aria-label="Limpar progresso do treino"
                title="Limpar progresso"
              >
                <RotateCcw size={18} strokeWidth={2} />
              </button>
            )}
          </div>
          <div className={styles.progressBarContainer}>
            <div 
              className={styles.progressBar}
              role="progressbar"
              aria-valuenow={progressPercentage}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${progressPercentage}% do treino completo`}
            >
              <div 
                className={styles.progressBarFill}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className={styles.progressPercentage}>{progressPercentage}%</span>
          </div>
        </div>

        <section className={styles.exercises} aria-labelledby="exercises-title">
          <h2 id="exercises-title" className={styles.sectionTitle}>Exercícios</h2>
          <ExerciseList 
            exercises={workout.exercises}
            workoutId={id}
            completedExercises={progress?.completedExercises || []}
            onToggleExercise={handleToggleExercise}
          />
        </section>
        <nav aria-label="Navegação">
          <Link to="/" className={styles.backLink}>
            <span>←</span> Voltar para treinos
          </Link>
        </nav>
      </PageContainer>
    </>
  );
};
