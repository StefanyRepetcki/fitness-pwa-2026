import { useState } from 'react';
import { Activity, ArrowRight, Clock } from 'lucide-react';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { Link } from 'react-router-dom';
import { stretchesByWorkout } from '../../data/stretches';
import { stretchesByWorkoutMale } from '../../data/stretchesMale';
import { workouts } from '../../data/workouts';
import { workoutsMale } from '../../data/workoutsMale';
import { workoutsABCDEF } from '../../data/workoutsABCDEF';
import { useProfile } from '../../contexts/ProfileContext';
import styles from './Stretches.module.css';

export const Stretches = () => {
  const { profileType, routineType } = useProfile();
  const currentWorkouts = profileType === 'male' 
    ? workoutsMale 
    : (routineType === 'abcdef' ? workoutsABCDEF : workouts);
  const currentStretches = profileType === 'male' ? stretchesByWorkoutMale : stretchesByWorkout;
  const defaultWorkoutId = profileType === 'male' 
    ? 'push-male' 
    : (routineType === 'abcdef' ? 'treino-a-abcdef' : 'treino-a');
  const [selectedWorkout, setSelectedWorkout] = useState<string>(defaultWorkoutId);

  const selectedStretches = currentStretches.find(s => s.workoutId === selectedWorkout);
  const selectedWorkoutData = currentWorkouts.find(w => w.id === selectedWorkout);

  return (
    <>
      <Header title="Alongamentos" />
      <PageContainer>
        <div className={styles.intro}>
          <p>Alongamentos específicos para cada treino do seu ciclo</p>
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
                aria-label={`Ver alongamentos do ${workout.name}`}
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

        {/* Lista de alongamentos */}
        {selectedStretches && (
          <div className={styles.stretchesSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Alongamentos Recomendados</h2>
              <p className={styles.sectionSubtitle}>
                Faça cada alongamento com calma, respirando profundamente
              </p>
            </div>
            <div className={styles.stretchesList}>
              {selectedStretches.stretches.map((stretch, index) => (
                <div key={stretch.id} className={styles.stretchCard}>
                  <div className={styles.stretchHeader}>
                    <div className={styles.stretchNumber}>{index + 1}</div>
                    <div className={styles.stretchInfo}>
                      <h3 className={styles.stretchName}>{stretch.name}</h3>
                      <p className={styles.stretchDescription}>{stretch.description}</p>
                    </div>
                  </div>
                  <div className={styles.stretchDetails}>
                    <div className={styles.duration}>
                      <Clock className={styles.durationIcon} size={18} strokeWidth={2} />
                      <span className={styles.durationText}>{stretch.duration}</span>
                    </div>
                    {stretch.instructions && (
                      <div className={styles.instructions}>
                        <p className={styles.instructionsTitle}>Como fazer:</p>
                        <p className={styles.instructionsText}>{stretch.instructions}</p>
                      </div>
                    )}
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
              <h3 className={styles.tipTitle}>Dica de Alongamento</h3>
              <p className={styles.tipText}>
                Faça os alongamentos após o treino, quando os músculos estão aquecidos. 
                Mantenha cada posição por 30-45 segundos, respirando profundamente. 
                Não force além do seu limite!
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

