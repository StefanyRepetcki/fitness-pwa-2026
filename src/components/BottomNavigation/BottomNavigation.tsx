import { Link, useLocation } from 'react-router-dom';
import styles from './BottomNavigation.module.css';

export const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: '🏋️', label: 'Treinos', ariaLabel: 'Ir para treinos' },
    { path: '/nutrition', icon: '🍽️', label: 'Alimentação', ariaLabel: 'Ir para plano alimentar' },
    { path: '/shopping', icon: '🛒', label: 'Compras', ariaLabel: 'Ir para lista de compras' },
    { path: '/supplements', icon: '💊', label: 'Suplementos', ariaLabel: 'Ir para suplementação' },
    { path: '/routine', icon: '📅', label: 'Rotina', ariaLabel: 'Ir para rotina semanal' }
  ];

  return (
    <nav className={styles.nav} aria-label="Navegação principal">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`${styles.navItem} ${
            location.pathname === item.path ? styles.active : ''
          }`}
          aria-label={item.ariaLabel}
          aria-current={location.pathname === item.path ? 'page' : undefined}
        >
          <span className={styles.icon} aria-hidden="true">{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};
