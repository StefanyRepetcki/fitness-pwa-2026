import { useEffect, useState } from 'react';
import { CheckCircle2, XCircle, Info, AlertCircle, X } from 'lucide-react';
import styles from './Toast.module.css';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose: () => void;
}

export const Toast = ({ message, type = 'info', duration = 3000, onClose }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animação de entrada
    setTimeout(() => setIsVisible(true), 10);

    // Auto-fechar
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const icons = {
    success: CheckCircle2,
    error: XCircle,
    info: Info,
    warning: AlertCircle
  };

  const IconComponent = icons[type];

  return (
    <div 
      className={`${styles.toast} ${styles[type]} ${isVisible ? styles.visible : ''}`}
      role="alert"
      aria-live="polite"
    >
      <IconComponent className={styles.icon} size={20} strokeWidth={2.5} />
      <span className={styles.message}>{message}</span>
      <button
        className={styles.closeButton}
        onClick={handleClose}
        aria-label="Fechar notificação"
      >
        <X size={16} strokeWidth={2.5} />
      </button>
    </div>
  );
};

