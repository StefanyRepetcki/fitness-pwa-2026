import { useCallback, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X, Dumbbell, UtensilsCrossed, ShoppingCart, Pill, Calendar, Sparkles, Activity, Flame, TrendingUp, BookOpen, ChefHat, User, BarChart3, Timer, Droplet, GraduationCap } from 'lucide-react';
import { useMenu } from '../../contexts/MenuContext';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { ProfileToggle } from '../ProfileToggle/ProfileToggle';
import { getLastWorkoutPath } from '../../utils/lastWorkout';
import styles from './HamburgerMenu.module.css';

export const HamburgerMenu = () => {
  const { isMenuOpen: isOpen, setIsMenuOpen: setIsOpen } = useMenu();
  const location = useLocation();
  const navigate = useNavigate();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  interface MenuItem {
    path: string;
    icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
    label: string;
    ariaLabel: string;
    category: 'treino' | 'nutricao' | 'outros';
  }

  const menuItems: MenuItem[] = [
    { path: '/', icon: Dumbbell, label: 'Treinos', ariaLabel: 'Ir para treinos', category: 'treino' },
    { path: '/routine', icon: Calendar, label: 'Rotina', ariaLabel: 'Ir para rotina semanal', category: 'treino' },
    { path: '/rest-timer', icon: Timer, label: 'Timer de Descanso', ariaLabel: 'Ir para timer de descanso', category: 'treino' },
    { path: '/warmup', icon: Flame, label: 'Aquecimento', ariaLabel: 'Ir para rotinas de aquecimento', category: 'treino' },
    { path: '/stretches', icon: Activity, label: 'Alongamentos', ariaLabel: 'Ir para alongamentos', category: 'treino' },
    { path: '/techniques', icon: GraduationCap, label: 'Técnicas de Treino', ariaLabel: 'Ir para guia de técnicas de treino', category: 'treino' },
    { path: '/stats', icon: TrendingUp, label: 'Estatísticas', ariaLabel: 'Ir para estatísticas', category: 'treino' },
    { path: '/diary', icon: BookOpen, label: 'Diário', ariaLabel: 'Ir para diário', category: 'treino' },

    { path: '/nutrition', icon: UtensilsCrossed, label: 'Alimentação', ariaLabel: 'Ir para plano alimentar', category: 'nutricao' },
    { path: '/macros', icon: BarChart3, label: 'Macros', ariaLabel: 'Ir para controle de macros', category: 'nutricao' },
    { path: '/recipes', icon: ChefHat, label: 'Receitas', ariaLabel: 'Ir para receitas', category: 'nutricao' },
    { path: '/supplements', icon: Pill, label: 'Suplementos', ariaLabel: 'Ir para suplementação', category: 'nutricao' },
    { path: '/shopping', icon: ShoppingCart, label: 'Compras', ariaLabel: 'Ir para lista de compras', category: 'nutricao' },
    { path: '/water', icon: Droplet, label: 'Hidratação', ariaLabel: 'Ir para controle de água', category: 'nutricao' },

    { path: '/profile', icon: User, label: 'Perfil', ariaLabel: 'Ir para perfil', category: 'outros' },
    { path: '/tips', icon: Sparkles, label: 'Dicas', ariaLabel: 'Ir para dicas e motivação', category: 'outros' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const menu = navRef.current;
    const menuButtonEl = menuButtonRef.current;
    const focusableSelector =
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled])';

    const getFocusable = () => {
      if (!menu) return [];
      return Array.from(menu.querySelectorAll<HTMLElement>(focusableSelector));
    };

    const raf = requestAnimationFrame(() => {
      getFocusable()[0]?.focus();
    });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu();
        return;
      }
      if (e.key !== 'Tab' || !menu) return;
      const list = getFocusable();
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      menuButtonEl?.focus();
    };
  }, [isOpen, closeMenu]);

  const handleMenuItemClick = (item: MenuItem, e: React.MouseEvent<HTMLAnchorElement>) => {
    closeMenu();

    if (item.path === '/') {
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
      <button
        ref={menuButtonRef}
        type="button"
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        aria-controls="hamburger-menu"
      >
        <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {isOpen && (
        <>
          <div
            className={styles.overlay}
            onClick={closeMenu}
            aria-hidden="true"
          />
          <nav
            ref={navRef}
            id="hamburger-menu"
            className={`${styles.menu} ${isOpen ? styles.open : ''}`}
            aria-labelledby="hamburger-menu-title"
          >
            <div className={styles.menuHeader}>
              <div className={styles.headerTop}>
                <h2 id="hamburger-menu-title" className={styles.menuTitle}>Menu</h2>
                <div className={styles.headerActions}>
                  <ProfileToggle />
                  <ThemeToggle />
                  <button
                    type="button"
                    className={styles.closeButton}
                    onClick={closeMenu}
                    aria-label="Fechar menu"
                  >
                    <X size={24} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
            <ul className={styles.menuList}>
              <li className={styles.menuSection}>
                <h3 className={styles.sectionTitle}>💪 Treino</h3>
              </li>
              {menuItems
                .filter(item => item.category === 'treino')
                .map((item) => {
                  const IconComponent = item.icon;
                  const isActive =
                    item.path === '/'
                      ? location.pathname === '/' || location.pathname.startsWith('/workout/')
                      : location.pathname === item.path;
                  
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`${styles.menuItem} ${isActive ? styles.active : ''}`}
                        onClick={(e) => handleMenuItemClick(item, e)}
                        aria-label={item.ariaLabel}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <IconComponent 
                          className={styles.menuIcon}
                          size={22}
                          strokeWidth={isActive ? 2.5 : 2}
                        />
                        <span className={styles.menuLabel}>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              
              <li className={styles.menuSection}>
                <h3 className={styles.sectionTitle}>🍎 Nutrição</h3>
              </li>
              {menuItems
                .filter(item => item.category === 'nutricao')
                .map((item) => {
                  const IconComponent = item.icon;
                  const isActive =
                    item.path === '/'
                      ? location.pathname === '/' || location.pathname.startsWith('/workout/')
                      : location.pathname === item.path;
                  
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`${styles.menuItem} ${isActive ? styles.active : ''}`}
                        onClick={(e) => handleMenuItemClick(item, e)}
                        aria-label={item.ariaLabel}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <IconComponent 
                          className={styles.menuIcon}
                          size={22}
                          strokeWidth={isActive ? 2.5 : 2}
                        />
                        <span className={styles.menuLabel}>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              
              <li className={styles.menuSection}>
                <h3 className={styles.sectionTitle}>⚙️ Outros</h3>
              </li>
              {menuItems
                .filter(item => item.category === 'outros')
                .map((item) => {
                  const IconComponent = item.icon;
                  const isActive =
                    item.path === '/'
                      ? location.pathname === '/' || location.pathname.startsWith('/workout/')
                      : location.pathname === item.path;
                  
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`${styles.menuItem} ${isActive ? styles.active : ''}`}
                        onClick={(e) => handleMenuItemClick(item, e)}
                        aria-label={item.ariaLabel}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <IconComponent 
                          className={styles.menuIcon}
                          size={22}
                          strokeWidth={isActive ? 2.5 : 2}
                        />
                        <span className={styles.menuLabel}>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

