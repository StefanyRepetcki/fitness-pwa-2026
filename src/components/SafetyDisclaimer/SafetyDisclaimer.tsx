import { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import styles from './SafetyDisclaimer.module.css';

function readDisclaimerVisible(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return !localStorage.getItem('ciclei-disclaimer-accepted');
  } catch {
    return true;
  }
}

export const SafetyDisclaimer = () => {
  const [isVisible, setIsVisible] = useState(readDisclaimerVisible);

  useEffect(() => {
    if (!isVisible) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  const handleAccept = () => {
    localStorage.setItem('ciclei-disclaimer-accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-labelledby="disclaimer-title" aria-modal="true">
      <div className={styles.modal}>
        <div className={styles.header}>
          <AlertTriangle className={styles.icon} size={24} aria-hidden="true" />
          <h2 id="disclaimer-title" className={styles.title}>
            Aviso Importante
          </h2>
        </div>
        <div className={styles.content}>
          <p>
            <strong>Antes de iniciar qualquer programa de exercícios ou suplementação:</strong>
          </p>
          <ul>
            <li>Consulte um médico ou profissional de saúde qualificado</li>
            <li>Este aplicativo é apenas uma ferramenta de organização e não substitui orientação profissional</li>
            <li>Pare imediatamente se sentir dor, desconforto ou qualquer sintoma anormal</li>
            <li>As informações de suplementação são apenas referenciais - consulte um nutricionista</li>
            <li>Respeite seus limites e progressão gradual</li>
          </ul>
          <p className={styles.warning}>
            <strong>
              Não nos responsabilizamos por lesões ou problemas de saúde decorrentes do uso deste aplicativo.
            </strong>
          </p>
        </div>
        <button
          type="button"
          className={styles.acceptButton}
          onClick={handleAccept}
          aria-label="Aceitar aviso e continuar"
        >
          Entendi e aceito
        </button>
      </div>
    </div>
  );
};
