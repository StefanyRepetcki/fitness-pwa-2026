// Sistema de controle de água/hidratação
import { getWeightProfile } from './weight';

export interface WaterEntry {
  date: string; // YYYY-MM-DD
  amount: number; // ml consumidos
  goal: number; // meta diária em ml
}

export interface WaterData {
  entries: WaterEntry[];
  lastUpdated: string;
}

const WATER_DATA_KEY = 'water-data';

// Calcular meta diária de água baseada no peso
// Fórmula: 35ml por kg de peso corporal (recomendação geral)
export const calculateWaterGoal = (weightKg: number): number => {
  // Mínimo: 2 litros, máximo: 4 litros
  const calculated = Math.round(weightKg * 35);
  return Math.max(2000, Math.min(calculated, 4000));
};

// Obter peso atual do perfil
export const getCurrentWeight = (): number | null => {
  try {
    const profile = getWeightProfile();
    if (profile.currentWeight !== null) {
      return profile.currentWeight;
    }
    // Se não tiver peso atual, pegar do histórico mais recente
    if (profile.entries && profile.entries.length > 0) {
      const sorted = [...profile.entries].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      return sorted[0].weight;
    }
    return null;
  } catch {
    return null;
  }
};

// Valores padrão por perfil
export const DEFAULT_WEIGHTS = {
  female: 88, // kg - baseado no perfil da usuária
  male: 85    // kg - valor padrão para homens
};

// Obter meta de água para o dia atual
export const getTodayWaterGoal = (profileType: 'female' | 'male'): number => {
  const currentWeight = getCurrentWeight();
  const defaultWeight = profileType === 'female' ? DEFAULT_WEIGHTS.female : DEFAULT_WEIGHTS.male;
  const weight = currentWeight || defaultWeight;
  return calculateWaterGoal(weight);
};

// Obter dados de água
export const getWaterData = (): WaterData => {
  try {
    const stored = localStorage.getItem(WATER_DATA_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed && typeof parsed === 'object' && Array.isArray(parsed.entries)) {
        return parsed;
      }
    }
  } catch (error) {
    console.error('Erro ao ler dados de água:', error);
  }
  
  return {
    entries: [],
    lastUpdated: new Date().toISOString()
  };
};

// Salvar dados de água
export const saveWaterData = (data: WaterData): void => {
  try {
    localStorage.setItem(WATER_DATA_KEY, JSON.stringify({
      ...data,
      lastUpdated: new Date().toISOString()
    }));
  } catch (error) {
    console.error('Erro ao salvar dados de água:', error);
  }
};

// Adicionar água consumida hoje
export const addWaterToday = (amount: number, goal: number): WaterEntry => {
  const today = new Date().toISOString().split('T')[0];
  const data = getWaterData();
  
  const existingIndex = data.entries.findIndex(entry => entry.date === today);
  
  const entry: WaterEntry = {
    date: today,
    amount: existingIndex >= 0 
      ? data.entries[existingIndex].amount + amount 
      : amount,
    goal
  };
  
  if (existingIndex >= 0) {
    data.entries[existingIndex] = entry;
  } else {
    data.entries.push(entry);
  }
  
  saveWaterData(data);
  return entry;
};

// Obter entrada de água de hoje
export const getTodayWaterEntry = (goal: number): WaterEntry => {
  const today = new Date().toISOString().split('T')[0];
  const data = getWaterData();
  const entry = data.entries.find(e => e.date === today);
  
  return entry || {
    date: today,
    amount: 0,
    goal
  };
};

// Resetar água do dia (para novo dia)
export const resetTodayWater = (goal: number): void => {
  const today = new Date().toISOString().split('T')[0];
  const data = getWaterData();
  
  const existingIndex = data.entries.findIndex(entry => entry.date === today);
  
  if (existingIndex >= 0) {
    data.entries[existingIndex].amount = 0;
    data.entries[existingIndex].goal = goal;
  } else {
    data.entries.push({
      date: today,
      amount: 0,
      goal
    });
  }
  
  saveWaterData(data);
};

