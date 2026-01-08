import { User, UserCheck } from 'lucide-react';
import { useProfile } from '../../contexts/ProfileContext';
import styles from './ProfileToggle.module.css';

export const ProfileToggle = () => {
  const { profileType, toggleProfile } = useProfile();

  return (
    <button
      onClick={toggleProfile}
      className={styles.toggle}
      aria-label={profileType === 'female' ? 'Trocar para perfil masculino' : 'Trocar para perfil feminino'}
      aria-pressed={profileType === 'male'}
      title={profileType === 'female' ? 'Perfil Feminino - Clique para trocar para Masculino' : 'Perfil Masculino - Clique para trocar para Feminino'}
    >
      {profileType === 'female' ? (
        <User size={20} strokeWidth={2} />
      ) : (
        <UserCheck size={20} strokeWidth={2} />
      )}
      <span className={styles.label}>
        {profileType === 'female' ? 'Feminino' : 'Masculino'}
      </span>
    </button>
  );
};

