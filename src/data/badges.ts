// Sistema de Badges/Conquistas

import { getWorkoutHistory } from './workoutHistory';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  unlocked: boolean;
  unlockedDate?: string;
}

export type BadgeId = 
  | 'first-workout'
  | 'week-streak'
  | 'month-streak'
  | '10-workouts'
  | '25-workouts'
  | '50-workouts'
  | '100-workouts'
  | 'perfect-week'
  | 'early-bird'
  | 'night-owl';

const BADGES_KEY = 'ciclei-badges';

const ALL_BADGES: Badge[] = [
  {
    id: 'first-workout',
    name: 'Primeiro Passo',
    description: 'Complete seu primeiro treino',
    icon: '🎉',
    color: '#eb3157',
    unlocked: false
  },
  {
    id: 'week-streak',
    name: 'Semana de Fogo',
    description: 'Treine 7 dias seguidos',
    icon: '🔥',
    color: '#ff6b9d',
    unlocked: false
  },
  {
    id: 'month-streak',
    name: 'Mês de Dedicação',
    description: 'Treine 30 dias seguidos',
    icon: '💎',
    color: '#c6b7e2',
    unlocked: false
  },
  {
    id: '10-workouts',
    name: 'Dez Treinos',
    description: 'Complete 10 treinos',
    icon: '⭐',
    color: '#ffdbe2',
    unlocked: false
  },
  {
    id: '25-workouts',
    name: 'Vinte e Cinco',
    description: 'Complete 25 treinos',
    icon: '🌟',
    color: '#ffb3c6',
    unlocked: false
  },
  {
    id: '50-workouts',
    name: 'Cinquenta',
    description: 'Complete 50 treinos',
    icon: '💫',
    color: '#eb3157',
    unlocked: false
  },
  {
    id: '100-workouts',
    name: 'Centenária',
    description: 'Complete 100 treinos',
    icon: '👑',
    color: '#d01e44',
    unlocked: false
  },
  {
    id: 'perfect-week',
    name: 'Semana Perfeita',
    description: 'Treine todos os dias da semana',
    icon: '✨',
    color: '#ffdbe2',
    unlocked: false
  },
  {
    id: 'early-bird',
    name: 'Madrugadora',
    description: 'Treine antes das 8h',
    icon: '🌅',
    color: '#ffdbe2',
    unlocked: false
  },
  {
    id: 'night-owl',
    name: 'Coruja Noturna',
    description: 'Treine após as 20h',
    icon: '🌙',
    color: '#c6b7e2',
    unlocked: false
  }
];

export const getBadges = (): Badge[] => {
  try {
    const stored = localStorage.getItem(BADGES_KEY);
    if (stored) {
      const storedBadges = JSON.parse(stored);
      // Merge com badges padrão para garantir que novos badges sejam adicionados
      return ALL_BADGES.map(badge => {
        const storedBadge = storedBadges.find((b: Badge) => b.id === badge.id);
        return storedBadge || badge;
      });
    }
  } catch (error) {
    console.error('Erro ao ler badges:', error);
  }
  
  return ALL_BADGES;
};

export const unlockBadge = (badgeId: BadgeId): Badge | null => {
  const badges = getBadges();
  const badge = badges.find(b => b.id === badgeId);
  
  if (!badge || badge.unlocked) {
    return null;
  }
  
  badge.unlocked = true;
  badge.unlockedDate = new Date().toISOString();
  
  localStorage.setItem(BADGES_KEY, JSON.stringify(badges));
  return badge;
};

export const checkAndUnlockBadges = (streakData: { currentStreak: number; totalWorkouts: number }, workoutTime?: Date) => {
  const unlocked: Badge[] = [];
  
  // Primeiro treino
  if (streakData.totalWorkouts === 1) {
    const badge = unlockBadge('first-workout');
    if (badge) unlocked.push(badge);
  }
  
  // 7 dias seguidos
  if (streakData.currentStreak === 7) {
    const badge = unlockBadge('week-streak');
    if (badge) unlocked.push(badge);
  }
  
  // 30 dias seguidos
  if (streakData.currentStreak === 30) {
    const badge = unlockBadge('month-streak');
    if (badge) unlocked.push(badge);
  }
  
  // Total de treinos
  if (streakData.totalWorkouts === 10) {
    const badge = unlockBadge('10-workouts');
    if (badge) unlocked.push(badge);
  } else if (streakData.totalWorkouts === 25) {
    const badge = unlockBadge('25-workouts');
    if (badge) unlocked.push(badge);
  } else if (streakData.totalWorkouts === 50) {
    const badge = unlockBadge('50-workouts');
    if (badge) unlocked.push(badge);
  } else if (streakData.totalWorkouts === 100) {
    const badge = unlockBadge('100-workouts');
    if (badge) unlocked.push(badge);
  }
  
  // Early Bird - treinar antes das 8h
  if (workoutTime) {
    const hour = workoutTime.getHours();
    if (hour < 8) {
      const badge = unlockBadge('early-bird');
      if (badge) unlocked.push(badge);
    }
    // Night Owl - treinar após as 20h
    if (hour >= 20) {
      const badge = unlockBadge('night-owl');
      if (badge) unlocked.push(badge);
    }
  }
  
  // Semana Perfeita - 7 treinos em 7 dias
  if (checkPerfectWeek()) {
    const badge = unlockBadge('perfect-week');
    if (badge) unlocked.push(badge);
  }
  
  return unlocked;
};

// Verificar Semana Perfeita (7 treinos em 7 dias)
export const checkPerfectWeek = (): boolean => {
  const history = getWorkoutHistory();
  const now = new Date();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay());
  startOfWeek.setHours(0, 0, 0, 0);
  
  const weekWorkouts = history.filter(entry => {
    const entryDate = new Date(entry.date);
    return entryDate >= startOfWeek;
  });
  
  // Verificar se tem treino em cada dia da semana (7 dias diferentes)
  const uniqueDays = new Set(weekWorkouts.map(w => w.date));
  return uniqueDays.size === 7;
};

