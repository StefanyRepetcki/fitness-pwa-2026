import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { WorkoutCard } from '../../components/WorkoutCard/WorkoutCard';
import { TechniquesGuide } from '../../components/TechniquesGuide/TechniquesGuide';
import { workouts } from '../../data/workouts';
import { workoutsMale } from '../../data/workoutsMale';
import { useProfile } from '../../contexts/ProfileContext';
import { getLastWorkout, getLastWorkoutPath } from '../../utils/lastWorkout';
import styles from './Workouts.module.css';

export const Workouts = () => {
  const { profileType } = useProfile();
  const location = useLocation();
  const navigate = useNavigate();
  const currentWorkouts = profileType === 'male' ? workoutsMale : workouts;
  const [lastWorkoutId, setLastWorkoutId] = useState<string | null>(null);
  const hasAutoRedirected = useRef(false);

  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const isExplicitNavigation = location.state?.explicitNavigation === true;
    if (isExplicitNavigation) {
      queueMicrotask(() => setLastWorkoutId(getLastWorkout()));
      return;
    }

    const lastWorkout = getLastWorkout();
    const lastWorkoutPath = getLastWorkoutPath();
    queueMicrotask(() => setLastWorkoutId(lastWorkout));

    if (lastWorkout) {
      const workoutExists = currentWorkouts.some((w) => w.id === lastWorkout);
      if (workoutExists && !hasAutoRedirected.current) {
        hasAutoRedirected.current = true;
        const targetPath = lastWorkoutPath || `/workout/${lastWorkout}`;
        setTimeout(() => {
          navigate(targetPath, { replace: false });
        }, 300);
      }
    } else {
      hasAutoRedirected.current = false;
    }
  }, [location.pathname, location.state, currentWorkouts, navigate]);

  return (
    <>
      <Header title="Treinos" />
      <PageContainer>
        <div className={styles.intro}>
          <p>
            {profileType === 'male' 
              ? 'Escolha seu treino Push/Pull/Legs e maximize seus ganhos!'
              : 'Escolha seu treino do ciclo e comece a suar!'}
          </p>
        </div>
        
        {profileType === 'female' && <TechniquesGuide />}
        
        {currentWorkouts.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Nenhum treino disponível no momento.</p>
          </div>
        ) : (
          <div className={styles.workoutsList} role="list">
            {currentWorkouts.map((workout) => (
              <WorkoutCard 
                key={workout.id} 
                workout={workout}
                isLastOpened={workout.id === lastWorkoutId}
              />
            ))}
          </div>
        )}
      </PageContainer>
    </>
  );
};
