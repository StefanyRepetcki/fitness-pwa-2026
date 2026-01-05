import { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { getDiaryEntry, saveDiaryEntry, getRecentEntries, type DiaryEntry } from '../../data/diary';
import { getWorkoutByDate } from '../../data/workoutHistory';
import { workouts } from '../../data/workouts';
import { Smile, Frown, Meh, Heart, Zap } from 'lucide-react';
import styles from './Diary.module.css';

export const Diary = () => {
  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [notes, setNotes] = useState('');
  const [energy, setEnergy] = useState<number>(3);
  const [mood, setMood] = useState<number>(3);
  const [recentEntries, setRecentEntries] = useState(getRecentEntries(5));

  useEffect(() => {
    const savedEntry = getDiaryEntry(selectedDate);
    if (savedEntry) {
      setNotes(savedEntry.notes || '');
      setEnergy(savedEntry.energy || 3);
      setMood(savedEntry.mood || 3);
    } else {
      setNotes('');
      setEnergy(3);
      setMood(3);
    }
  }, [selectedDate]);

  const handleSave = () => {
    const workout = getWorkoutByDate(selectedDate);

    const newEntry: DiaryEntry = {
      date: selectedDate,
      workoutId: workout?.workoutId,
      workoutName: workout?.workoutName,
      notes,
      energy,
      mood
    };

    saveDiaryEntry(newEntry);
    setRecentEntries(getRecentEntries(5));
  };

  const workout = getWorkoutByDate(selectedDate);
  const workoutData = workout ? workouts.find(w => w.id === workout.workoutId) : null;

  return (
    <>
      <Header title="Meu Diário" showStreak={false} />
      <PageContainer>
        <div className={styles.intro}>
          <p>Registre como você se sentiu hoje</p>
        </div>

        {/* Seletor de Data */}
        <div className={styles.dateSelector}>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className={styles.dateInput}
            max={today}
          />
        </div>

        {/* Informações do Treino do Dia */}
        {workoutData && (
          <div className={styles.workoutInfo}>
            <h3 className={styles.workoutTitle}>Treino do Dia</h3>
            <p className={styles.workoutName}>{workoutData.name}</p>
          </div>
        )}

        {/* Energia */}
        <div className={styles.section}>
          <label className={styles.label}>
            <Zap className={styles.labelIcon} size={18} strokeWidth={2} />
            Como estava sua energia?
          </label>
          <div className={styles.ratingButtons}>
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                className={`${styles.ratingButton} ${energy === value ? styles.active : ''}`}
                onClick={() => setEnergy(value)}
                aria-label={`Energia nível ${value}`}
              >
                {value === 1 && <Frown size={24} strokeWidth={2} />}
                {value === 2 && <Meh size={24} strokeWidth={2} />}
                {value === 3 && <Meh size={24} strokeWidth={2} />}
                {value === 4 && <Smile size={24} strokeWidth={2} />}
                {value === 5 && <Heart size={24} strokeWidth={2} />}
                <span className={styles.ratingValue}>{value}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Humor */}
        <div className={styles.section}>
          <label className={styles.label}>
            <Heart className={styles.labelIcon} size={18} strokeWidth={2} />
            Como estava seu humor?
          </label>
          <div className={styles.ratingButtons}>
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                className={`${styles.ratingButton} ${mood === value ? styles.active : ''}`}
                onClick={() => setMood(value)}
                aria-label={`Humor nível ${value}`}
              >
                {value === 1 && <Frown size={24} strokeWidth={2} />}
                {value === 2 && <Meh size={24} strokeWidth={2} />}
                {value === 3 && <Meh size={24} strokeWidth={2} />}
                {value === 4 && <Smile size={24} strokeWidth={2} />}
                {value === 5 && <Heart size={24} strokeWidth={2} />}
                <span className={styles.ratingValue}>{value}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Anotações */}
        <div className={styles.section}>
          <label className={styles.label} htmlFor="notes">
            Anotações do dia
          </label>
          <textarea
            id="notes"
            className={styles.textarea}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Como foi seu treino? O que você sentiu? O que funcionou bem?"
            rows={6}
          />
        </div>

        {/* Botão Salvar */}
        <button
          className={styles.saveButton}
          onClick={handleSave}
          aria-label="Salvar entrada do diário"
        >
          Salvar
        </button>

        {/* Entradas Recentes */}
        {recentEntries.length > 0 && (
          <div className={styles.recentSection}>
            <h2 className={styles.recentTitle}>Entradas Recentes</h2>
            <div className={styles.recentList}>
              {recentEntries.map((entry) => (
                <div key={entry.date} className={styles.recentCard}>
                  <div className={styles.recentHeader}>
                    <span className={styles.recentDate}>
                      {new Date(entry.date).toLocaleDateString('pt-BR', { 
                        day: '2-digit', 
                        month: 'short',
                        year: entry.date === today ? undefined : 'numeric'
                      })}
                    </span>
                    {entry.workoutName && (
                      <span className={styles.recentWorkout}>{entry.workoutName.split(' - ')[0]}</span>
                    )}
                  </div>
                  {entry.notes && (
                    <p className={styles.recentNotes}>{entry.notes}</p>
                  )}
                  <div className={styles.recentRatings}>
                    {entry.energy && (
                      <span className={styles.ratingTag}>
                        <Zap size={14} strokeWidth={2} />
                        Energia: {entry.energy}/5
                      </span>
                    )}
                    {entry.mood && (
                      <span className={styles.ratingTag}>
                        <Heart size={14} strokeWidth={2} />
                        Humor: {entry.mood}/5
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </PageContainer>
    </>
  );
};

