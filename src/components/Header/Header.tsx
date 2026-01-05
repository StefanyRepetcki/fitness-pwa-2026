import { useScrollHide } from '../../hooks/useScrollHide';
import styles from './Header.module.css';

interface HeaderProps {
  title: string;
  showLogo?: boolean;
}

export const Header = ({ title, showLogo = false }: HeaderProps) => {
  const isScrollingDown = useScrollHide(50);
  const shouldHide = isScrollingDown;
  
  return (
    <header className={`${styles.header} ${shouldHide ? styles.hidden : ''}`}>
      {showLogo && (
        <div className={styles.logoContainer}>
          {/* Logo completa com texto e pêssego */}
          <img 
            src="/logo-ciclei.png" 
            alt="Ciclei" 
            className={styles.logoFull}
            onError={(e) => {
              // Fallback: usar logo apenas com pêssego + texto
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling;
              if (fallback) {
                (fallback as HTMLElement).style.display = 'flex';
              }
            }}
          />
          {/* Fallback: logo com pêssego separado + texto */}
          <div className={styles.logoFallback} style={{ display: 'none' }}>
            <img 
              src="/logo-peach.png" 
              alt="Ciclei" 
              className={styles.logoPeach}
              onError={(e) => {
                // Se não tiver pêssego, só mostrar texto
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className={styles.brandName}>Ciclei</span>
          </div>
        </div>
      )}
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};
