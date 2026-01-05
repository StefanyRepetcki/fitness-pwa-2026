import { Link } from 'react-router-dom';
import styles from './SkipLink.module.css';

export const SkipLink = () => {
  return (
    <Link to="#main-content" className={styles.skipLink}>
      Pular para o conteúdo principal
    </Link>
  );
};

