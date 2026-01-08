import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Dumbbell, Timer, Calendar, User } from 'lucide-react';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';
import { useMenu } from '../../contexts/MenuContext';
import { useScrollHide } from '../../hooks/useScrollHide';
import { getLastWorkoutPath } from '../../utils/lastWorkout';
import styles from './BottomNavigation.module.css';

export const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isMenuOpen } = useMenu();
  const isScrollingDown = useScrollHide(50);
  
  // Esconde se estiver scrollando para baixo OU se o menu hambúrguer estiver aberto
  const shouldHide = isScrollingDown || isMenuOpen;

  // Apenas itens essenciais para treinar no bottom nav
  const navItems = [
    { path: '/', icon: Dumbbell, label: 'Treinos', ariaLabel: 'Ir para treinos' },
    { path: '/rest-timer', icon: Timer, label: 'Timer', ariaLabel: 'Ir para timer de descanso' },
    { path: '/routine', icon: Calendar, label: 'Rotina', ariaLabel: 'Ir para rotina semanal' },
    { path: '/profile', icon: User, label: 'Perfil', ariaLabel: 'Ir para perfil' }
  ];
  
  const handleNavClick = (path: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    // Se for para a lista de treinos, ir direto para o último treino (se houver)
    if (path === '/') {
      e.preventDefault();
      const lastWorkoutPath = getLastWorkoutPath();
      if (lastWorkoutPath) {
        navigate(lastWorkoutPath);
      } else {
        navigate('/');
      }
    }
  };

  return (
    <>
      <HamburgerMenu />
      <nav className={`${styles.nav} ${shouldHide ? styles.hidden : ''}`} aria-label="Navegação principal">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navItem} ${isActive ? styles.active : ''}`}
              aria-label={item.ariaLabel}
              aria-current={isActive ? 'page' : undefined}
              onClick={(e) => handleNavClick(item.path, e)}
            >
              <IconComponent 
                className={styles.icon}
                size={24}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={styles.label}>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};
