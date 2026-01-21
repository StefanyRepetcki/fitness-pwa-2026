import { Calendar, CalendarDays } from 'lucide-react';
import { useProfile } from '../../contexts/ProfileContext';
import styles from './RoutineToggle.module.css';

export const RoutineToggle = () => {
  const { routineType, toggleRoutine, profileType } = useProfile();

  // Só mostrar o toggle se for perfil feminino
  if (profileType === 'male') {
    return null;
  }

  return (
    <button
      onClick={toggleRoutine}
      className={styles.toggle}
      aria-label={routineType === 'abc' ? 'Trocar para rotina ABCDEF (5x/semana)' : 'Trocar para rotina ABC (3x/semana)'}
      aria-pressed={routineType === 'abcdef'}
      title={routineType === 'abc' ? 'Rotina ABC (3x/semana) - Clique para trocar para ABCDEF (5x/semana)' : 'Rotina ABCDEF (5x/semana) - Clique para trocar para ABC (3x/semana)'}
    >
      {routineType === 'abc' ? (
        <Calendar size={20} strokeWidth={2} />
      ) : (
        <CalendarDays size={20} strokeWidth={2} />
      )}
      <span className={styles.label}>
        {routineType === 'abc' ? 'ABC' : 'ABCDEF'}
      </span>
    </button>
  );
};

