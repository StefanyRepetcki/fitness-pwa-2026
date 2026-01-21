import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export type ProfileType = 'female' | 'male';
export type RoutineType = 'abc' | 'abcdef';

interface ProfileContextType {
  profileType: ProfileType;
  setProfileType: (type: ProfileType) => void;
  toggleProfile: () => void;
  routineType: RoutineType;
  setRoutineType: (type: RoutineType) => void;
  toggleRoutine: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [storedProfile, setStoredProfile] = useLocalStorage<ProfileType>('profile-type', 'female');
  const [storedRoutine, setStoredRoutine] = useLocalStorage<RoutineType>('routine-type', 'abc');
  const [profileType, setProfileTypeState] = useState<ProfileType>(storedProfile);
  const [routineType, setRoutineTypeState] = useState<RoutineType>(storedRoutine);

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

  const setRoutineType = (type: RoutineType) => {
    setRoutineTypeState(type);
    setStoredRoutine(type);
  };

  const toggleRoutine = () => {
    const newRoutine = routineType === 'abc' ? 'abcdef' : 'abc';
    setRoutineType(newRoutine);
  };

  return (
    <ProfileContext.Provider value={{ 
      profileType, 
      setProfileType, 
      toggleProfile,
      routineType,
      setRoutineType,
      toggleRoutine
    }}>
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


