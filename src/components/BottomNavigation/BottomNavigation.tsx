import { Link, useLocation } from 'react-router-dom';
import styles from './BottomNavigation.module.css';

export const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: '🏋️', label: 'Treinos' },
    { path: '/diet', icon: '🥗', label: 'Dieta' },
    { path: '/videos', icon: '🎥', label: 'Vídeos' },
    { path: '/routine', icon: '📅', label: 'Rotina' }
  ];

  return (
    <nav className={styles.nav}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`${styles.navItem} ${
            location.pathname === item.path ? styles.active : ''
          }`}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

