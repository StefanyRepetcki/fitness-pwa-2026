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

  // Menu organizado por categorias lógicas
  interface MenuItem {
    path: string;
    icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
    label: string;
    ariaLabel: string;
    category: 'treino' | 'nutricao' | 'outros';
  }

  const menuItems: MenuItem[] = [
    // === TREINO ===
    { path: '/', icon: Dumbbell, label: 'Treinos', ariaLabel: 'Ir para treinos', category: 'treino' },
    { path: '/routine', icon: Calendar, label: 'Rotina', ariaLabel: 'Ir para rotina semanal', category: 'treino' },
    { path: '/rest-timer', icon: Timer, label: 'Timer de Descanso', ariaLabel: 'Ir para timer de descanso', category: 'treino' },
    { path: '/warmup', icon: Flame, label: 'Aquecimento', ariaLabel: 'Ir para rotinas de aquecimento', category: 'treino' },
    { path: '/stretches', icon: Activity, label: 'Alongamentos', ariaLabel: 'Ir para alongamentos', category: 'treino' },
    { path: '/techniques', icon: GraduationCap, label: 'Técnicas de Treino', ariaLabel: 'Ir para guia de técnicas de treino', category: 'treino' },
    { path: '/stats', icon: TrendingUp, label: 'Estatísticas', ariaLabel: 'Ir para estatísticas', category: 'treino' },
    { path: '/diary', icon: BookOpen, label: 'Diário', ariaLabel: 'Ir para diário', category: 'treino' },
    
    // === NUTRIÇÃO ===
    { path: '/nutrition', icon: UtensilsCrossed, label: 'Alimentação', ariaLabel: 'Ir para plano alimentar', category: 'nutricao' },
    { path: '/macros', icon: BarChart3, label: 'Macros', ariaLabel: 'Ir para controle de macros', category: 'nutricao' },
    { path: '/recipes', icon: ChefHat, label: 'Receitas', ariaLabel: 'Ir para receitas', category: 'nutricao' },
    { path: '/supplements', icon: Pill, label: 'Suplementos', ariaLabel: 'Ir para suplementação', category: 'nutricao' },
    { path: '/shopping', icon: ShoppingCart, label: 'Compras', ariaLabel: 'Ir para lista de compras', category: 'nutricao' },
    { path: '/water', icon: Droplet, label: 'Hidratação', ariaLabel: 'Ir para controle de água', category: 'nutricao' },
    
    // === PERFIL E OUTROS ===
    { path: '/profile', icon: User, label: 'Perfil', ariaLabel: 'Ir para perfil', category: 'outros' },
    { path: '/tips', icon: Sparkles, label: 'Dicas', ariaLabel: 'Ir para dicas e motivação', category: 'outros' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  };

  const handleMenuItemClick = (item: MenuItem, e: React.MouseEvent<HTMLAnchorElement>) => {
    closeMenu();
    
    // Se for "Treinos", ir direto para o último treino (se houver)
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
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-label="Abrir menu"
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
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Fechar menu"
          />
          <nav 
            id="hamburger-menu"
            className={`${styles.menu} ${isOpen ? styles.open : ''}`}
            aria-label="Menu de navegação"
          >
            <div className={styles.menuHeader}>
              <div className={styles.headerTop}>
                <h2 className={styles.menuTitle}>Menu</h2>
                <div className={styles.headerActions}>
                  <ProfileToggle />
                  <ThemeToggle />
                  <button
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
              {/* Seção: TREINO */}
              <li className={styles.menuSection}>
                <h3 className={styles.sectionTitle}>💪 Treino</h3>
              </li>
              {menuItems
                .filter(item => item.category === 'treino')
                .map((item) => {
                  const IconComponent = item.icon;
                  const isActive = location.pathname === item.path;
                  
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
              
              {/* Seção: NUTRIÇÃO */}
              <li className={styles.menuSection}>
                <h3 className={styles.sectionTitle}>🍎 Nutrição</h3>
              </li>
              {menuItems
                .filter(item => item.category === 'nutricao')
                .map((item) => {
                  const IconComponent = item.icon;
                  const isActive = location.pathname === item.path;
                  
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
              
              {/* Seção: PERFIL E OUTROS */}
              <li className={styles.menuSection}>
                <h3 className={styles.sectionTitle}>⚙️ Outros</h3>
              </li>
              {menuItems
                .filter(item => item.category === 'outros')
                .map((item) => {
                  const IconComponent = item.icon;
                  const isActive = location.pathname === item.path;
                  
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

