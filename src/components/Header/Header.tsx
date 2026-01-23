import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useScrollHide } from '../../hooks/useScrollHide';
import { StreakBadge } from '../StreakBadge/StreakBadge';
import { getLastWorkoutPath } from '../../utils/lastWorkout';
import { Logo } from '../Logo/Logo';
import styles from './Header.module.css';

interface BreadcrumbItem {
  label: string;
  path?: string;
  state?: Record<string, unknown>;
}

interface HeaderProps {
  title: string;
  showLogo?: boolean;
  showStreak?: boolean;
  showBackButton?: boolean;
  backPath?: string;
  backState?: Record<string, unknown>;
  breadcrumbs?: BreadcrumbItem[];
}

export const Header = ({ 
  title, 
  showLogo = false, 
  showStreak = true,
  showBackButton = false,
  backPath,
  backState,
  breadcrumbs
}: HeaderProps) => {
  const navigate = useNavigate();
  const isScrollingDown = useScrollHide(50);
  const shouldHide = isScrollingDown;
  
  const handleBack = () => {
    if (backPath) {
      navigate(backPath, { state: backState });
    } else {
      navigate(-1);
    }
  };
  
  // Função para navegar considerando o último treino quando for para "Treinos"
  const handleBreadcrumbClick = (path: string, state?: Record<string, unknown>) => {
    // Se houver estado explícito (breadcrumb ou botão voltar), ir para a lista sem redirecionar
    if (state?.explicitNavigation === true) {
      navigate(path, { state });
      return;
    }
    
    // Se for para a lista de treinos SEM estado explícito, ir direto para o último treino (se houver)
    if (path === '/') {
      const lastWorkoutPath = getLastWorkoutPath();
      if (lastWorkoutPath) {
        navigate(lastWorkoutPath);
        return;
      }
    }
    navigate(path, { state });
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
                        handleBreadcrumbClick(item.path!, item.state);
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
          <Logo className={styles.logoFull} />
        </div>
      )}
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};
