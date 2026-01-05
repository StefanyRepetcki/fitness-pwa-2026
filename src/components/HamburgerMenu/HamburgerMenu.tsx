import { Link, useLocation } from 'react-router-dom';
import { X, Dumbbell, UtensilsCrossed, ShoppingCart, Pill, Calendar, Sparkles, Activity, Flame, TrendingUp, BookOpen, ChefHat } from 'lucide-react';
import { useMenu } from '../../contexts/MenuContext';
import styles from './HamburgerMenu.module.css';

export const HamburgerMenu = () => {
  const { isMenuOpen: isOpen, setIsMenuOpen: setIsOpen } = useMenu();
  const location = useLocation();

  // TODAS as opções, incluindo as do bottom nav
  const menuItems = [
    { path: '/', icon: Dumbbell, label: 'Treinos', ariaLabel: 'Ir para treinos' },
    { path: '/routine', icon: Calendar, label: 'Rotina', ariaLabel: 'Ir para rotina semanal' },
    { path: '/stats', icon: TrendingUp, label: 'Estatísticas', ariaLabel: 'Ir para estatísticas' },
    { path: '/diary', icon: BookOpen, label: 'Diário', ariaLabel: 'Ir para diário' },
    { path: '/tips', icon: Sparkles, label: 'Dicas', ariaLabel: 'Ir para dicas e motivação' },
    { path: '/warmup', icon: Flame, label: 'Aquecimento', ariaLabel: 'Ir para rotinas de aquecimento' },
    { path: '/nutrition', icon: UtensilsCrossed, label: 'Alimentação', ariaLabel: 'Ir para plano alimentar' },
    { path: '/recipes', icon: ChefHat, label: 'Receitas', ariaLabel: 'Ir para receitas' },
    { path: '/shopping', icon: ShoppingCart, label: 'Compras', ariaLabel: 'Ir para lista de compras' },
    { path: '/supplements', icon: Pill, label: 'Suplementos', ariaLabel: 'Ir para suplementação' },
    { path: '/stretches', icon: Activity, label: 'Alongamentos', ariaLabel: 'Ir para alongamentos' }
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
              <h2 className={styles.menuTitle}>Menu</h2>
              <button
                className={styles.closeButton}
                onClick={closeMenu}
                aria-label="Fechar menu"
              >
                <X size={24} strokeWidth={2} />
              </button>
            </div>
            <ul className={styles.menuList}>
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`${styles.menuItem} ${isActive ? styles.active : ''}`}
                      onClick={closeMenu}
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

