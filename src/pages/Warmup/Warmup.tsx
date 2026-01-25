import { useState } from 'react';
import { Activity, Clock, ArrowRight } from 'lucide-react';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { Link } from 'react-router-dom';
import { warmupRoutines } from '../../data/warmups';
import { warmupRoutinesMale } from '../../data/warmupsMale';
import { workouts } from '../../data/workouts';
import { workoutsMale } from '../../data/workoutsMale';
import { useProfile } from '../../contexts/ProfileContext';
import styles from './Warmup.module.css';

export const Warmup = () => {
  const { profileType } = useProfile();
  const currentWorkouts = profileType === 'male' ? workoutsMale : workouts;
  const currentWarmups = profileType === 'male' ? warmupRoutinesMale : warmupRoutines;
  const defaultWorkoutId = profileType === 'male' ? 'treino-a-male' : 'treino-a';
  const [selectedWorkout, setSelectedWorkout] = useState<string>(defaultWorkoutId);

  const selectedWarmup = currentWarmups.find(w => w.workoutId === selectedWorkout);
  const selectedWorkoutData = currentWorkouts.find(w => w.id === selectedWorkout);

  return (
    <>
      <Header title="Aquecimento" />
      <PageContainer>
        <div className={styles.intro}>
          <p>Rotinas de aquecimento específicas para cada treino do seu ciclo</p>
        </div>

        {/* Seletor de treino */}
        <div className={styles.workoutSelector}>
          <h2 className={styles.selectorTitle}>Escolha o Treino</h2>
          <div className={styles.workoutButtons}>
            {currentWorkouts.map((workout) => (
              <button
                key={workout.id}
                className={`${styles.workoutButton} ${
                  selectedWorkout === workout.id ? styles.active : ''
                }`}
                onClick={() => setSelectedWorkout(workout.id)}
                aria-label={`Ver aquecimento do ${workout.name}`}
              >
                <Activity 
                  className={styles.buttonIcon}
                  size={20}
                  strokeWidth={selectedWorkout === workout.id ? 2.5 : 2}
                />
                <span className={styles.buttonLabel}>
                  {profileType === 'male' 
                    ? workout.name.split(' - ')[0] 
                    : workout.name.split(' - ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Informações do treino */}
        {selectedWorkoutData && (
          <div className={styles.workoutInfo}>
            <Link 
              to={`/workout/${selectedWorkoutData.id}`}
              className={styles.workoutLink}
            >
              <div className={styles.workoutLinkContent}>
                <h3 className={styles.workoutName}>{selectedWorkoutData.name}</h3>
                <p className={styles.workoutDescription}>{selectedWorkoutData.description}</p>
              </div>
              <ArrowRight className={styles.linkArrow} size={20} strokeWidth={2} />
            </Link>
          </div>
        )}

        {/* Rotina de aquecimento */}
        {selectedWarmup && (
          <div className={styles.warmupSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.durationBadge}>
                <Clock className={styles.durationIcon} size={18} strokeWidth={2} />
                <span className={styles.durationText}>{selectedWarmup.totalDuration}</span>
              </div>
              <h2 className={styles.sectionTitle}>Rotina de Aquecimento</h2>
              <p className={styles.sectionSubtitle}>
                Faça cada exercício na ordem indicada para preparar seu corpo
              </p>
            </div>
            <div className={styles.exercisesList}>
              {selectedWarmup.exercises.map((exercise, index) => (
                <div key={exercise.id} className={styles.exerciseCard}>
                  <div className={styles.exerciseHeader}>
                    <div className={styles.exerciseNumber}>{index + 1}</div>
                    <div className={styles.exerciseInfo}>
                      <h3 className={styles.exerciseName}>{exercise.name}</h3>
                      <p className={styles.exerciseDescription}>{exercise.description}</p>
                    </div>
                  </div>
                  <div className={styles.exerciseDetails}>
                    <div className={styles.duration}>
                      <Clock className={styles.durationIcon} size={16} strokeWidth={2} />
                      <span className={styles.durationText}>{exercise.duration}</span>
                    </div>
                    <div className={styles.instructions}>
                      <p className={styles.instructionsTitle}>Como fazer:</p>
                      <p className={styles.instructionsText}>{exercise.instructions}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dica final */}
        <div className={styles.tipCard}>
          <div className={styles.tipContent}>
            <Activity className={styles.tipIcon} size={24} strokeWidth={2} />
            <div>
              <h3 className={styles.tipTitle}>Dica de Aquecimento</h3>
              <p className={styles.tipText}>
                Nunca pule o aquecimento! Ele prepara seus músculos, articulações e sistema cardiovascular 
                para o trabalho intenso, reduzindo o risco de lesões e melhorando sua performance. 
                Dedique esses <strong>5-7 minutos</strong> antes de cada treino.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

