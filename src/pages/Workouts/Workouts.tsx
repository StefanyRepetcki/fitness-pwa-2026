import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { WorkoutCard } from '../../components/WorkoutCard/WorkoutCard';
import { workouts } from '../../data/workouts';
import { workoutsMale } from '../../data/workoutsMale';
import { useProfile } from '../../contexts/ProfileContext';
import { getLastWorkout } from '../../utils/lastWorkout';
import styles from './Workouts.module.css';

export const Workouts = () => {
  const { profileType } = useProfile();
  const location = useLocation();
  const navigate = useNavigate();
  const currentWorkouts = profileType === 'male' ? workoutsMale : workouts;
  const [lastWorkoutId, setLastWorkoutId] = useState<string | null>(null);
  const hasAutoRedirected = useRef(false);

  useEffect(() => {
    // Só redirecionar se estiver na página de treinos (não em uma rota de treino específico)
    if (location.pathname !== '/') {
      return;
    }

    const lastWorkout = getLastWorkout();
    setLastWorkoutId(lastWorkout);
    
    // Se houver um último treino, redirecionar automaticamente
    if (lastWorkout) {
      // Verificar se o treino existe na lista atual
      const workoutExists = currentWorkouts.some(w => w.id === lastWorkout);
      if (workoutExists && !hasAutoRedirected.current) {
        hasAutoRedirected.current = true;
        // Pequeno delay para melhor UX
        setTimeout(() => {
          navigate(`/workout/${lastWorkout}`, { replace: false });
        }, 300);
      }
    } else {
      // Se não houver último treino, resetar o flag
      hasAutoRedirected.current = false;
    }
  }, [location.pathname, currentWorkouts, navigate]);

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
