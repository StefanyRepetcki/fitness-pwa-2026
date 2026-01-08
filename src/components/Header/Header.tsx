import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useScrollHide } from '../../hooks/useScrollHide';
import { StreakBadge } from '../StreakBadge/StreakBadge';
import styles from './Header.module.css';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface HeaderProps {
  title: string;
  showLogo?: boolean;
  showStreak?: boolean;
  showBackButton?: boolean;
  backPath?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export const Header = ({ 
  title, 
  showLogo = false, 
  showStreak = true,
  showBackButton = false,
  backPath,
  breadcrumbs
}: HeaderProps) => {
  const navigate = useNavigate();
  const isScrollingDown = useScrollHide(50);
  const shouldHide = isScrollingDown;
  
  const handleBack = () => {
    if (backPath) {
      navigate(backPath);
    } else {
      navigate(-1);
    }
  };
  
  return (
    <header className={`${styles.header} ${shouldHide ? styles.hidden : ''}`}>
      {(showBackButton || breadcrumbs) && (
        <div className={styles.navigationBar}>
          {showBackButton && (
            <button
              onClick={handleBack}
              className={styles.backButton}
              aria-label="Voltar"
            >
              <ArrowLeft size={20} strokeWidth={2.5} />
            </button>
          )}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              {breadcrumbs.map((item, index) => (
                <span key={index} className={styles.breadcrumbItem}>
                  {item.path ? (
                    <a 
                      href={item.path} 
                      className={styles.breadcrumbLink}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(item.path!);
                      }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className={styles.breadcrumbCurrent}>{item.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <ChevronRight size={16} className={styles.breadcrumbSeparator} />
                  )}
                </span>
              ))}
            </nav>
          )}
        </div>
      )}
      {showStreak && (
        <div className={styles.streakContainer}>
          <StreakBadge />
        </div>
      )}
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
