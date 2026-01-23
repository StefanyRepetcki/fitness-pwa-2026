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

// Calcular meta diária de água baseada no peso e perfil
// Fórmula adaptada por perfil:
// - Feminino: 35ml/kg (treino intenso, cutting)
// - Masculino: 40ml/kg (cutting agressivo, 146kg, alta atividade)
export const calculateWaterGoal = (weightKg: number, profileType?: 'female' | 'male'): number => {
  // Feminino: 35ml/kg (mínimo 2.5L, máximo 3.5L para 88kg = 3.08L)
  // Masculino: 40ml/kg (mínimo 3L, máximo 5L para 146kg = 5.84L, limitado a 5L)
  const multiplier = profileType === 'male' ? 40 : 35;
  const calculated = Math.round(weightKg * multiplier);
  
  if (profileType === 'male') {
    // Masculino: 146kg * 40ml = 5840ml, limitado a 5L (5000ml)
    return Math.max(3000, Math.min(calculated, 5000));
  } else {
    // Feminino: 88kg * 35ml = 3080ml, limitado a 3.5L (3500ml)
    return Math.max(2500, Math.min(calculated, 3500));
  }
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

// Valores padrão por perfil (baseados no CONTEXT.md)
export const DEFAULT_WEIGHTS = {
  female: 88,  // kg - Perfil feminino: 88kg, 165cm, IMC 32.3
  male: 146    // kg - Perfil masculino: 146kg, 1.81m, IMC 44.6
};

// Obter meta de água para o dia atual
export const getTodayWaterGoal = (profileType: 'female' | 'male'): number => {
  const currentWeight = getCurrentWeight();
  const defaultWeight = profileType === 'female' ? DEFAULT_WEIGHTS.female : DEFAULT_WEIGHTS.male;
  const weight = currentWeight || defaultWeight;
  return calculateWaterGoal(weight, profileType);
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

