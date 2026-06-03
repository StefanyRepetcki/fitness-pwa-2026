import { useState, useEffect, useRef } from 'react';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { Play, Pause, Square, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { useToast } from '../../contexts/ToastContext';
import { getLastWorkoutPath } from '../../utils/lastWorkout';
import styles from './RestTimer.module.css';

// Tempos pré-definidos baseados em recomendações científicas
const PRESET_TIMES = [
  { label: '30s', value: 30, description: 'Hipertrofia - Curto' },
  { label: '45s', value: 45, description: 'Hipertrofia - Ideal' },
  { label: '60s', value: 60, description: 'Hipertrofia - Longo' },
  { label: '90s', value: 90, description: 'Força - Curto' },
  { label: '2min', value: 120, description: 'Força - Médio' },
  { label: '3min', value: 180, description: 'Força - Ideal' },
  { label: '5min', value: 300, description: 'Força - Longo' }
];

export const RestTimer = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [initialTime, setInitialTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [customMinutes, setCustomMinutes] = useState<string>('1');
  const [customSeconds, setCustomSeconds] = useState<string>('30');
  const [showCustomInput, setShowCustomInput] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { showToast } = useToast();
  
  // Obter o caminho do último treino para voltar corretamente
  const lastWorkoutPath = getLastWorkoutPath();
  // Se não houver último treino, volta para a lista de treinos
  const backPath = lastWorkoutPath || '/';

  // Criar elemento de áudio para o beep
  useEffect(() => {
    // Criar um beep usando Web Audio API
    const createBeep = () => {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const audioContext = new AudioContextClass();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 800; // Frequência do beep
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    };

    // Tentar vibrar se disponível
    const vibrate = () => {
      if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200, 100, 200]);
      }
    };

    if (timeLeft === 0 && initialTime > 0 && !isRunning && !isPaused) {
      if (soundEnabled) {
        createBeep();
      }
      vibrate();
      showToast('Tempo de descanso finalizado! Volte ao exercício! 💪', 'success');
    }
  }, [timeLeft, initialTime, isRunning, isPaused, soundEnabled, showToast]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
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
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = (seconds: number) => {
    setInitialTime(seconds);
    setTimeLeft(seconds);
    setIsRunning(true);
    setIsPaused(false);
    setShowCustomInput(false);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    setIsPaused(true);
  };

  const resumeTimer = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
      setIsPaused(false);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTimeLeft(0);
    setInitialTime(0);
  };

  const resetTimer = () => {
    if (initialTime > 0) {
      setTimeLeft(initialTime);
      setIsRunning(false);
      setIsPaused(false);
    }
  };

  const handleCustomTime = () => {
    const minutes = parseInt(customMinutes) || 0;
    const seconds = parseInt(customSeconds) || 0;
    const totalSeconds = minutes * 60 + seconds;

    if (totalSeconds <= 0) {
      showToast('Por favor, insira um tempo válido', 'error');
      return;
    }

    if (totalSeconds > 600) {
      showToast('Tempo máximo é 10 minutos', 'error');
      return;
    }

    startTimer(totalSeconds);
  };

  const getProgress = (): number => {
    if (initialTime === 0) return 0;
    return ((initialTime - timeLeft) / initialTime) * 100;
  };

  const getTimeColor = (): string => {
    // Quando zerado e não foi iniciado, usar cor neutra (preto)
    if (timeLeft === 0 && initialTime === 0) return 'var(--color-text)';
    // Quando finalizado (zerado mas já foi iniciado), usar verde
    if (timeLeft === 0 && initialTime > 0) return 'var(--color-success)';
    // Quando restam 10 segundos ou menos, usar vermelho
    if (timeLeft <= 10) return 'var(--color-error)';
    // Quando restam 30 segundos ou menos, usar laranja
    if (timeLeft <= 30) return 'var(--color-warning)';
    // Quando está rodando normalmente, usar cor primária do perfil
    return 'var(--color-primary)';
  };

  // Determinar breadcrumbs baseado no último treino
  const breadcrumbs = lastWorkoutPath 
    ? [
        { label: 'Treinos', path: '/' },
        { label: 'Timer de Descanso' }
      ]
    : undefined;

  return (
    <>
      <Header 
        title="Timer de Descanso" 
        showBackButton={true}
        backPath={backPath}
        breadcrumbs={breadcrumbs}
      />
      <PageContainer>
        <div className={styles.container}>
        <div className={styles.timerContainer}>
          <div className={styles.timerCircle}>
            <svg className={styles.timerSvg} viewBox="0 0 100 100">
              <circle
                className={styles.timerBackground}
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="var(--color-border-light)"
                strokeWidth="8"
              />
              <circle
                className={styles.timerProgress}
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke={getTimeColor()}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - getProgress() / 100)}`}
                transform="rotate(-90 50 50)"
                style={{ transition: 'stroke-dashoffset 0.5s ease' }}
              />
            </svg>
            <div className={styles.timerDisplay}>
              <div 
                className={styles.timerTime}
                style={{ color: getTimeColor() }}
              >
                {formatTime(timeLeft)}
              </div>
              {initialTime > 0 && (
                <div className={styles.timerTotal}>
                  de {formatTime(initialTime)}
                </div>
              )}
            </div>
          </div>

          {timeLeft === 0 && initialTime > 0 && (
            <div className={styles.finishedMessage}>
              <span>⏰ Tempo Finalizado!</span>
            </div>
          )}

          <div className={styles.controls}>
            {!isRunning && timeLeft === 0 && !showCustomInput && (
              <div className={styles.startPrompt}>
                Selecione um tempo abaixo
              </div>
            )}

            {isRunning && (
              <button
                onClick={pauseTimer}
                className={`${styles.controlButton} ${styles.pauseButton}`}
                aria-label="Pausar timer"
              >
                <Pause size={20} strokeWidth={2} />
                <span>Pausar</span>
              </button>
            )}

            {isPaused && timeLeft > 0 && (
              <>
                <button
                  onClick={resumeTimer}
                  className={`${styles.controlButton} ${styles.resumeButton}`}
                  aria-label="Retomar timer"
                >
                  <Play size={20} strokeWidth={2} />
                  <span>Retomar</span>
                </button>
                <button
                  onClick={resetTimer}
                  className={`${styles.controlButton} ${styles.resetButton}`}
                  aria-label="Reiniciar timer"
                >
                  <RotateCcw size={20} strokeWidth={2} />
                </button>
              </>
            )}

            {(isRunning || isPaused) && (
              <button
                onClick={stopTimer}
                className={`${styles.controlButton} ${styles.stopButton}`}
                aria-label="Parar timer"
              >
                <Square size={20} strokeWidth={2} />
                <span>Parar</span>
              </button>
            )}
          </div>
        </div>

        {!isRunning && !isPaused && (
          <div className={styles.presetsSection}>
            <div className={styles.presetsGrid}>
              {PRESET_TIMES.map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => startTimer(preset.value)}
                  className={`${styles.presetButton} ${timeLeft === 0 && initialTime === preset.value ? styles.active : ''}`}
                  disabled={isRunning || isPaused}
                  aria-label={`Iniciar timer de ${preset.label}`}
                  title={preset.description}
                >
                  <span className={styles.presetLabel}>{preset.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {!isRunning && !isPaused && (
          <div className={styles.customSection}>
            {!showCustomInput ? (
              <button
                onClick={() => setShowCustomInput(true)}
                className={styles.customToggle}
                aria-label="Abrir timer customizado"
              >
                <span>+</span> Timer Customizado
              </button>
            ) : (
              <div className={styles.customForm}>
                <div className={styles.customHeader}>
                  <span>Timer Customizado</span>
                  <button
                    onClick={() => setShowCustomInput(false)}
                    className={styles.customClose}
                    aria-label="Fechar"
                  >
                    ×
                  </button>
                </div>
                <div className={styles.customInputs}>
                  <div className={styles.customInputGroup}>
                    <label>Min</label>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={customMinutes}
                      onChange={(e) => setCustomMinutes(e.target.value)}
                      className={styles.customInput}
                    />
                  </div>
                  <div className={styles.customInputGroup}>
                    <label>Seg</label>
                    <input
                      type="number"
                      min="0"
                      max="59"
                      value={customSeconds}
                      onChange={(e) => setCustomSeconds(e.target.value)}
                      className={styles.customInput}
                    />
                  </div>
                  <button
                    onClick={handleCustomTime}
                    className={styles.customStartButton}
                  >
                    Iniciar
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        <div className={styles.footerSection}>
          <div className={styles.settingsSection}>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={styles.settingsButton}
              aria-label={soundEnabled ? 'Desativar som' : 'Ativar som'}
              title={soundEnabled ? 'Som ativado' : 'Som desativado'}
            >
              {soundEnabled ? (
                <Volume2 size={18} strokeWidth={2} />
              ) : (
                <VolumeX size={18} strokeWidth={2} />
              )}
            </button>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoTitle}>💡 Dicas de Descanso</div>
            <div className={styles.infoList}>
              <span><strong>30-60s:</strong> Hipertrofia</span>
              <span><strong>90s-2min:</strong> Força</span>
              <span><strong>3-5min:</strong> Força máxima</span>
            </div>
          </div>
        </div>
        </div>
      </PageContainer>
    </>
  );
};

