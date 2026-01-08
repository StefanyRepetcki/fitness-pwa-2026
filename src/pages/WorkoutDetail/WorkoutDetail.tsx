import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { ExerciseList } from '../../components/ExerciseList/ExerciseList';
import { CelebrationModal } from '../../components/CelebrationModal/CelebrationModal';
import { workouts } from '../../data/workouts';
import { workoutsMale } from '../../data/workoutsMale';
import { useProfile } from '../../contexts/ProfileContext';
import { saveLastWorkout } from '../../utils/lastWorkout';
import { 
  getWorkoutProgress, 
  toggleExercise, 
  clearWorkoutProgress,
  type WorkoutProgress 
} from '../../data/workoutProgress';
import { updateStreak } from '../../data/streaks';
import { checkAndUnlockBadges, type Badge } from '../../data/badges';
import { saveWorkoutHistory } from '../../data/workoutHistory';
import { showWorkoutCompleteNotification, showStreakNotification } from '../../utils/notifications';
import { useToast } from '../../contexts/ToastContext';
import { RotateCcw, Flame, StretchHorizontal } from 'lucide-react';
import styles from './WorkoutDetail.module.css';

export const WorkoutDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { profileType } = useProfile();
  const currentWorkouts = profileType === 'male' ? workoutsMale : workouts;
  const workout = currentWorkouts.find((w) => w.id === id);
  const [progress, setProgress] = useState<WorkoutProgress | null>(null);
  const [celebrationBadge, setCelebrationBadge] = useState<Badge | null>(null);
  const [celebrationStreak, setCelebrationStreak] = useState<number | null>(null);
  const { showToast } = useToast();

  useEffect(() => {
    if (id) {
      setProgress(getWorkoutProgress(id));
      // Salvar como último treino aberto
      saveLastWorkout(id);
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
    if (!id || !workout) return;
    const updated = toggleExercise(id, exerciseId);
    setProgress(updated);
    
    // Verificar se completou todos os exercícios
    const allCompleted = updated.completedExercises.length === workout.exercises.length;
    
    if (allCompleted) {
      // Salvar no histórico
      const today = new Date().toISOString().split('T')[0];
      saveWorkoutHistory({
        date: today,
        workoutId: workout.id,
        workoutName: workout.name
      });
      
      // Atualizar streak
      const streakData = updateStreak();
      
      // Verificar badges (passar horário do treino para Early Bird/Night Owl)
      const workoutTime = new Date();
      const unlockedBadges = checkAndUnlockBadges(streakData, workoutTime);
      
      // Notificações
      showWorkoutCompleteNotification();
      showStreakNotification(streakData.currentStreak);
      
      // Mostrar celebração
      if (unlockedBadges.length > 0) {
        setCelebrationBadge(unlockedBadges[0]);
      } else if (streakData.currentStreak > 0 && streakData.currentStreak % 7 === 0) {
        setCelebrationStreak(streakData.currentStreak);
      }
    }
  };

  const handleClearProgress = () => {
    if (!id) return;
    if (window.confirm('Tem certeza que deseja limpar todo o progresso deste treino?')) {
      clearWorkoutProgress(id);
      setProgress(getWorkoutProgress(id));
      showToast('Progresso do treino limpo com sucesso!', 'success');
    }
  };

  const completedCount = progress?.completedExercises.length || 0;
  const totalExercises = workout.exercises.length;
  const progressPercentage = totalExercises > 0 
    ? Math.round((completedCount / totalExercises) * 100) 
    : 0;

  return (
    <>
      <Header 
        title={workout.name}
        showBackButton={true}
        backPath="/"
        breadcrumbs={[
          { label: 'Treinos', path: '/' },
          { label: workout.name }
        ]}
      />
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

        {/* Links rápidos para aquecimento e alongamento */}
        <section className={styles.quickLinks} aria-label="Links rápidos">
          <h2 className={styles.quickLinksTitle}>Preparação e Recuperação</h2>
          <div className={styles.quickLinksGrid}>
            <Link to="/warmup" className={styles.quickLink}>
              <Flame className={styles.quickLinkIcon} size={24} strokeWidth={2} />
              <div className={styles.quickLinkContent}>
                <h3 className={styles.quickLinkTitle}>Aquecimento</h3>
                <p className={styles.quickLinkDescription}>Prepare seu corpo antes do treino</p>
              </div>
            </Link>
            <Link to="/stretches" className={styles.quickLink}>
              <StretchHorizontal className={styles.quickLinkIcon} size={24} strokeWidth={2} />
              <div className={styles.quickLinkContent}>
                <h3 className={styles.quickLinkTitle}>Alongamento</h3>
                <p className={styles.quickLinkDescription}>Recupere e relaxe após o treino</p>
              </div>
            </Link>
          </div>
        </section>

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
      
      {(celebrationBadge || celebrationStreak) && (
        <CelebrationModal
          badge={celebrationBadge || undefined}
          streak={celebrationStreak || undefined}
          onClose={() => {
            setCelebrationBadge(null);
            setCelebrationStreak(null);
          }}
        />
      )}
    </>
  );
};
