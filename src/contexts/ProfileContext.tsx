import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export type ProfileType = 'female' | 'male';

interface ProfileContextType {
  profileType: ProfileType;
  setProfileType: (type: ProfileType) => void;
  toggleProfile: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [storedProfile, setStoredProfile] = useLocalStorage<ProfileType>('profile-type', 'female');
  const [profileType, setProfileTypeState] = useState<ProfileType>(storedProfile);

  // Aplicar perfil ao documento para CSS
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    root.setAttribute('data-profile', profileType);
    
    if (profileType === 'male') {
      root.classList.add('profile-male');
      root.classList.remove('profile-female');
    } else {
      root.classList.add('profile-female');
      root.classList.remove('profile-male');
    }
  }, [profileType]);

  const setProfileType = (type: ProfileType) => {
    setProfileTypeState(type);
    setStoredProfile(type);
  };

  const toggleProfile = () => {
    const newProfile = profileType === 'female' ? 'male' : 'female';
    setProfileType(newProfile);
  };

  return (
    <ProfileContext.Provider value={{ profileType, setProfileType, toggleProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

