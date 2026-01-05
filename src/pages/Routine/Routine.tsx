import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Dumbbell, Check, X, Calendar as CalendarIcon } from 'lucide-react';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { workouts } from '../../data/workouts';
import { 
  getWorkoutHistory, 
  saveWorkoutHistory, 
  getLastWorkout,
  suggestNextWorkout,
  getWorkoutByDate,
  type WorkoutHistoryEntry 
} from '../../data/workoutHistory';
import styles from './Routine.module.css';

export const Routine = () => {
  const [history, setHistory] = useState<WorkoutHistoryEntry[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    setHistory(getWorkoutHistory());
  }, []);

  const workoutIds = workouts.map(w => w.id);
  const suggestedWorkoutId = suggestNextWorkout(workoutIds);
  const suggestedWorkout = workouts.find(w => w.id === suggestedWorkoutId);
  const lastWorkout = getLastWorkout();
  const todayWorkout = getWorkoutByDate(selectedDate);

  const handleMarkWorkout = (workoutId: string) => {
    const workout = workouts.find(w => w.id === workoutId);
    if (workout) {
      saveWorkoutHistory({
        date: selectedDate,
        workoutId: workout.id,
        workoutName: workout.name
      });
      setHistory(getWorkoutHistory());
    }
  };

  const handleMarkToday = (workoutId: string) => {
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);
    handleMarkWorkout(workoutId);
  };

  // Gerar últimos 7 dias para o calendário
  const getLast7Days = () => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const dayName = date.toLocaleDateString('pt-BR', { weekday: 'short' });
      const dayNumber = date.getDate();
      const isToday = dateStr === new Date().toISOString().split('T')[0];
      
      days.push({
        date: dateStr,
        dayName,
        dayNumber,
        isToday,
        workout: getWorkoutByDate(dateStr)
      });
    }
    return days;
  };

  const calendarDays = getLast7Days();

  return (
    <>
      <Header title="Meus Treinos" />
      <PageContainer>
        <div className={styles.intro}>
          <p>Organize seus treinos de forma flexível</p>
        </div>

        {/* Sugestão de treino do dia */}
        {suggestedWorkout && (
          <div className={styles.suggestionCard}>
            <div className={styles.suggestionHeader}>
              <Lightbulb className={styles.suggestionIcon} size={28} strokeWidth={2} />
              <h2 className={styles.suggestionTitle}>Sugestão de Hoje</h2>
            </div>
            <p className={styles.suggestionText}>
              {lastWorkout 
                ? `Você fez ${lastWorkout.workoutName} por último. Que tal fazer:`
                : 'Que tal começar com:'}
            </p>
            <div className={styles.suggestedWorkout}>
              <Link 
                to={`/workout/${suggestedWorkout.id}`}
                className={styles.workoutLink}
              >
                <div className={styles.workoutInfo}>
                  <h3 className={styles.workoutName}>{suggestedWorkout.name}</h3>
                  <p className={styles.workoutDescription}>{suggestedWorkout.description}</p>
                </div>
                <span className={styles.arrow}>→</span>
              </Link>
              <button
                className={styles.markButton}
                onClick={() => handleMarkToday(suggestedWorkout.id)}
                aria-label={`Marcar ${suggestedWorkout.name} como feito hoje`}
              >
                <Check size={18} strokeWidth={2.5} />
                <span>Marcar como feito</span>
              </button>
            </div>
          </div>
        )}

        {/* Calendário dos últimos 7 dias */}
        <div className={styles.calendarSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Últimos 7 Dias</h2>
            <button
              className={styles.toggleButton}
              onClick={() => setShowCalendar(!showCalendar)}
              aria-expanded={showCalendar}
            >
              <CalendarIcon size={18} strokeWidth={2} />
              <span>{showCalendar ? 'Ocultar' : 'Ver calendário'}</span>
            </button>
          </div>

          {showCalendar && (
            <div className={styles.calendar}>
              {calendarDays.map((day) => {
                const isSelected = day.date === selectedDate;
                return (
                  <div
                    key={day.date}
                    className={`${styles.calendarDay} ${day.isToday ? styles.today : ''} ${isSelected ? styles.selected : ''}`}
                    onClick={() => setSelectedDate(day.date)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedDate(day.date);
                      }
                    }}
                    aria-label={`${day.dayName}, dia ${day.dayNumber}`}
                  >
                    <div className={styles.dayLabel}>{day.dayName}</div>
                    <div className={styles.dayNumber}>{day.dayNumber}</div>
                    {day.workout && (
                      <div className={styles.workoutBadge} title={day.workout.workoutName}>
                        <Check size={14} strokeWidth={3} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Seleção de treino para a data escolhida */}
          <div className={styles.workoutSelector}>
            <h3 className={styles.selectorTitle}>
              {selectedDate === new Date().toISOString().split('T')[0]
                ? 'Treino de Hoje'
                : `Treino do dia ${new Date(selectedDate).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })}`}
            </h3>
            
            {todayWorkout ? (
              <div className={styles.completedWorkout}>
                <div className={styles.completedInfo}>
                  <Check className={styles.checkIcon} size={24} strokeWidth={2.5} />
                  <div>
                    <p className={styles.completedName}>{todayWorkout.workoutName}</p>
                    <Link 
                      to={`/workout/${todayWorkout.workoutId}`}
                      className={styles.viewLink}
                    >
                      Ver detalhes →
                    </Link>
                  </div>
                </div>
                <button
                  className={styles.removeButton}
                  onClick={() => {
                    // Remove o treino do dia selecionado
                    const filtered = history.filter(h => h.date !== selectedDate);
                    localStorage.setItem('ciclei-workout-history', JSON.stringify(filtered));
                    setHistory(filtered);
                  }}
                  aria-label="Remover treino deste dia"
                >
                  <X size={18} strokeWidth={2.5} />
                </button>
              </div>
            ) : (
              <div className={styles.workoutOptions}>
                {workouts.map((workout) => (
                  <button
                    key={workout.id}
                    className={styles.workoutOption}
                    onClick={() => handleMarkWorkout(workout.id)}
                  >
                    <Dumbbell className={styles.optionIcon} size={24} strokeWidth={2} />
                    <div className={styles.optionInfo}>
                      <span className={styles.optionName}>{workout.name}</span>
                      <span className={styles.optionDescription}>{workout.description}</span>
                    </div>
                    <span className={styles.optionArrow}>+</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Histórico recente */}
        {history.length > 0 && (
          <div className={styles.historySection}>
            <h2 className={styles.sectionTitle}>Histórico Recente</h2>
            <div className={styles.historyList}>
              {history.slice(0, 5).map((entry) => {
                const date = new Date(entry.date);
                const isToday = entry.date === new Date().toISOString().split('T')[0];
                const isYesterday = entry.date === new Date(Date.now() - 86400000).toISOString().split('T')[0];
                
                let dateLabel = '';
                if (isToday) dateLabel = 'Hoje';
                else if (isYesterday) dateLabel = 'Ontem';
                else dateLabel = date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' });

                return (
                  <div key={`${entry.date}-${entry.workoutId}`} className={styles.historyItem}>
                    <div className={styles.historyDate}>{dateLabel}</div>
                    <Link 
                      to={`/workout/${entry.workoutId}`}
                      className={styles.historyWorkout}
                    >
                      {entry.workoutName}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PageContainer>
    </>
  );
};
