import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Timer, Play, Pause, Square } from 'lucide-react';
import { useToast } from '../../contexts/ToastContext';
import styles from './QuickTimer.module.css';

interface QuickTimerProps {
  variant?: 'floating' | 'inline';
  onTimerComplete?: () => void;
}

// Tempos rápidos mais usados
const QUICK_TIMES = [30, 45, 60, 90, 120];

export const QuickTimer = ({ variant = 'floating', onTimerComplete }: QuickTimerProps) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { showToast } = useToast();

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            // Notificação ao finalizar
            if ('vibrate' in navigator) {
              navigator.vibrate([200, 100, 200]);
            }
            showToast('⏰ Tempo de descanso finalizado!', 'success');
            if (onTimerComplete) {
              onTimerComplete();
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft, onTimerComplete, showToast]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins > 0) {
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    return `${secs}s`;
  };

  const startTimer = (seconds: number) => {
    setTimeLeft(seconds);
    setIsRunning(true);
    setIsExpanded(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resumeTimer = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setIsExpanded(false);
  };

  const goToFullTimer = () => {
    navigate('/rest-timer');
  };

  const getTimeColor = (): string => {
    if (timeLeft === 0) return 'var(--color-text)';
    if (timeLeft <= 10) return 'var(--color-error)';
    if (timeLeft <= 30) return 'var(--color-warning)';
    return 'var(--color-primary)';
  };

  if (variant === 'floating') {
    // Botão flutuante compacto
    if (!isExpanded && timeLeft === 0) {
      return (
        <button
          className={styles.floatingButton}
          onClick={() => setIsExpanded(true)}
          aria-label="Abrir timer rápido"
          title="Timer de descanso"
        >
          <Timer size={24} strokeWidth={2} />
        </button>
      );
    }

    // Timer expandido flutuante
    return (
      <div className={styles.floatingTimer}>
        <div className={styles.timerHeader}>
          <span className={styles.timerLabel}>Descanso</span>
          <button
            className={styles.closeButton}
            onClick={stopTimer}
            aria-label="Fechar timer"
          >
            ×
          </button>
        </div>
        
        {timeLeft > 0 ? (
          <>
            <div 
              className={styles.timerDisplay}
              style={{ color: getTimeColor() }}
            >
              {formatTime(timeLeft)}
            </div>
            <div className={styles.timerControls}>
              {isRunning ? (
                <button
                  onClick={pauseTimer}
                  className={styles.controlBtn}
                  aria-label="Pausar"
                >
                  <Pause size={18} />
                </button>
              ) : (
                <button
                  onClick={resumeTimer}
                  className={styles.controlBtn}
                  aria-label="Retomar"
                >
                  <Play size={18} />
                </button>
              )}
              <button
                onClick={stopTimer}
                className={styles.controlBtn}
                aria-label="Parar"
              >
                <Square size={18} />
              </button>
            </div>
          </>
        ) : (
          <div className={styles.quickTimes}>
            {QUICK_TIMES.map((time) => (
              <button
                key={time}
                onClick={() => startTimer(time)}
                className={styles.quickTimeBtn}
                aria-label={`Iniciar timer de ${time} segundos`}
              >
                {formatTime(time)}
              </button>
            ))}
            <button
              onClick={goToFullTimer}
              className={styles.fullTimerBtn}
              aria-label="Abrir timer completo"
            >
              Timer Completo
            </button>
          </div>
        )}
      </div>
    );
  }

  // Variante inline (para uso no header ou outros lugares)
  return (
    <div className={styles.inlineTimer}>
      {timeLeft > 0 ? (
        <>
          <div 
            className={styles.inlineDisplay}
            style={{ color: getTimeColor() }}
          >
            {formatTime(timeLeft)}
          </div>
          <div className={styles.inlineControls}>
            {isRunning ? (
              <button onClick={pauseTimer} className={styles.inlineBtn} aria-label="Pausar">
                <Pause size={16} />
              </button>
            ) : (
              <button onClick={resumeTimer} className={styles.inlineBtn} aria-label="Retomar">
                <Play size={16} />
              </button>
            )}
            <button onClick={stopTimer} className={styles.inlineBtn} aria-label="Parar">
              <Square size={16} />
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={styles.inlineTrigger}
          aria-label="Abrir timer"
        >
          <Timer size={20} />
        </button>
      )}
      
      {isExpanded && timeLeft === 0 && (
        <div className={styles.inlineExpanded}>
          {QUICK_TIMES.map((time) => (
            <button
              key={time}
              onClick={() => startTimer(time)}
              className={styles.quickTimeBtn}
            >
              {formatTime(time)}
            </button>
          ))}
          <button
            onClick={goToFullTimer}
            className={styles.fullTimerBtn}
          >
            Timer Completo
          </button>
        </div>
      )}
    </div>
  );
};

