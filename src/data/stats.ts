// Sistema de Estatísticas

import { getWorkoutHistory } from './workoutHistory';
import { getStreakData } from './streaks';

export interface WorkoutStats {
  totalWorkouts: number;
  currentStreak: number;
  longestStreak: number;
  workoutsThisMonth: number;
  workoutsThisWeek: number;
  totalExercises: number;
  estimatedHours: number;
  favoriteWorkout: string | null;
}

export const getWorkoutStats = (): WorkoutStats => {
  const history = getWorkoutHistory();
  const streakData = getStreakData();
  
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay());
  startOfWeek.setHours(0, 0, 0, 0);
  
  const workoutsThisMonth = history.filter(entry => {
    const entryDate = new Date(entry.date);
    return entryDate >= startOfMonth;
  }).length;
  
  const workoutsThisWeek = history.filter(entry => {
    const entryDate = new Date(entry.date);
    return entryDate >= startOfWeek;
  }).length;
  
  // Contar exercícios (assumindo média de 6 exercícios por treino)
  const totalExercises = history.length * 6;
  
  // Estimar horas (assumindo 1h por treino)
  const estimatedHours = Math.round(history.length * 1);
  
  // Treino favorito (mais feito)
  const workoutCounts: Record<string, number> = {};
  history.forEach(entry => {
    workoutCounts[entry.workoutId] = (workoutCounts[entry.workoutId] || 0) + 1;
  });
  
  const favoriteWorkout = Object.keys(workoutCounts).length > 0
    ? Object.keys(workoutCounts).reduce((a, b) => 
        workoutCounts[a] > workoutCounts[b] ? a : b
      )
    : null;
  
  return {
    totalWorkouts: history.length,
    currentStreak: streakData.currentStreak,
    longestStreak: streakData.longestStreak,
    workoutsThisMonth,
    workoutsThisWeek,
    totalExercises,
    estimatedHours,
    favoriteWorkout
  };
};

export const getMonthlyData = () => {
  const history = getWorkoutHistory();
  const monthlyData: Record<string, number> = {};
  
  history.forEach(entry => {
    const date = new Date(entry.date);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    monthlyData[monthKey] = (monthlyData[monthKey] || 0) + 1;
  });
  
  return monthlyData;
};

