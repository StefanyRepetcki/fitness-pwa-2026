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
        <div className={styles.intro}>
          <p>Controle seu tempo de descanso entre séries para maximizar seus resultados</p>
        </div>

        {/* Timer Principal */}
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

          {/* Status */}
          {timeLeft === 0 && initialTime > 0 && (
            <div className={styles.finishedMessage}>
              <h2>⏰ Tempo Finalizado!</h2>
              <p>Volte ao exercício</p>
            </div>
          )}

          {/* Controles */}
          <div className={styles.controls}>
            {!isRunning && timeLeft === 0 && (
              <div className={styles.startPrompt}>
                <p>Selecione um tempo ou defina um customizado</p>
              </div>
            )}

            {isRunning && (
              <button
                onClick={pauseTimer}
                className={`${styles.controlButton} ${styles.pauseButton}`}
                aria-label="Pausar timer"
              >
                <Pause size={24} strokeWidth={2} />
                Pausar
              </button>
            )}

            {isPaused && timeLeft > 0 && (
              <>
                <button
                  onClick={resumeTimer}
                  className={`${styles.controlButton} ${styles.resumeButton}`}
                  aria-label="Retomar timer"
                >
                  <Play size={24} strokeWidth={2} />
                  Retomar
                </button>
                <button
                  onClick={resetTimer}
                  className={`${styles.controlButton} ${styles.resetButton}`}
                  aria-label="Reiniciar timer"
                >
                  <RotateCcw size={24} strokeWidth={2} />
                  Reiniciar
                </button>
              </>
            )}

            {(isRunning || isPaused) && (
              <button
                onClick={stopTimer}
                className={`${styles.controlButton} ${styles.stopButton}`}
                aria-label="Parar timer"
              >
                <Square size={24} strokeWidth={2} />
                Parar
              </button>
            )}
          </div>
        </div>

        {/* Tempos Pré-definidos */}
        <div className={styles.presetsSection}>
          <h3 className={styles.sectionTitle}>Tempos Recomendados</h3>
          <div className={styles.presetsGrid}>
            {PRESET_TIMES.map((preset) => (
              <button
                key={preset.value}
                onClick={() => startTimer(preset.value)}
                className={`${styles.presetButton} ${timeLeft === 0 && initialTime === preset.value ? styles.active : ''}`}
                disabled={isRunning || isPaused}
                aria-label={`Iniciar timer de ${preset.label}`}
              >
                <div className={styles.presetLabel}>{preset.label}</div>
                <div className={styles.presetDescription}>{preset.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Timer Customizado */}
        <div className={styles.customSection}>
          <button
            onClick={() => setShowCustomInput(!showCustomInput)}
            className={styles.customToggle}
            aria-label={showCustomInput ? 'Fechar timer customizado' : 'Abrir timer customizado'}
          >
            {showCustomInput ? 'Fechar' : 'Timer Customizado'}
          </button>

          {showCustomInput && (
            <div className={styles.customForm}>
              <div className={styles.customInputs}>
                <div className={styles.customInputGroup}>
                  <label>Minutos</label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    value={customMinutes}
                    onChange={(e) => setCustomMinutes(e.target.value)}
                    className={styles.customInput}
                    disabled={isRunning || isPaused}
                  />
                </div>
                <div className={styles.customInputGroup}>
                  <label>Segundos</label>
                  <input
                    type="number"
                    min="0"
                    max="59"
                    value={customSeconds}
                    onChange={(e) => setCustomSeconds(e.target.value)}
                    className={styles.customInput}
                    disabled={isRunning || isPaused}
                  />
                </div>
              </div>
              <button
                onClick={handleCustomTime}
                className={styles.customStartButton}
                disabled={isRunning || isPaused}
              >
                Iniciar Timer Customizado
              </button>
            </div>
          )}
        </div>

        {/* Configurações */}
        <div className={styles.settingsSection}>
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={styles.settingsButton}
            aria-label={soundEnabled ? 'Desativar som' : 'Ativar som'}
          >
            {soundEnabled ? (
              <Volume2 size={20} strokeWidth={2} />
            ) : (
              <VolumeX size={20} strokeWidth={2} />
            )}
            <span>{soundEnabled ? 'Som Ativado' : 'Som Desativado'}</span>
          </button>
        </div>

        {/* Informações */}
        <div className={styles.infoSection}>
          <h3 className={styles.infoTitle}>💡 Dicas de Descanso</h3>
          <ul className={styles.infoList}>
            <li><strong>30-60s:</strong> Ideal para hipertrofia e resistência muscular</li>
            <li><strong>90s-2min:</strong> Bom para força e potência</li>
            <li><strong>3-5min:</strong> Recomendado para força máxima e exercícios compostos pesados</li>
            <li>Respeite o tempo de descanso para maximizar seus resultados!</li>
          </ul>
        </div>
      </PageContainer>
    </>
  );
};

