// Sistema de controle de peso

export interface WeightEntry {
  id: string;
  date: string; // YYYY-MM-DD
  weight: number; // em kg
}

export interface WeightProfile {
  currentWeight: number | null;
  targetWeight: number | null;
  entries: WeightEntry[];
}

const WEIGHT_PROFILE_KEY = 'ciclei-weight-profile';

// Obter perfil de peso
export const getWeightProfile = (): WeightProfile => {
  try {
    const stored = localStorage.getItem(WEIGHT_PROFILE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Validação de dados
      if (
        parsed &&
        typeof parsed === 'object' &&
        (parsed.currentWeight === null || typeof parsed.currentWeight === 'number') &&
        (parsed.targetWeight === null || typeof parsed.targetWeight === 'number') &&
        Array.isArray(parsed.entries)
      ) {
        return {
          currentWeight: parsed.currentWeight,
          targetWeight: parsed.targetWeight,
          entries: parsed.entries.filter((entry: unknown) =>
            entry &&
            typeof entry === 'object' &&
            'id' in entry &&
            'date' in entry &&
            'weight' in entry &&
            typeof (entry as WeightEntry).weight === 'number'
          ) as WeightEntry[]
        };
      }
    }
  } catch (error) {
    console.error('Erro ao ler perfil de peso:', error);
  }
  
  return {
    currentWeight: null,
    targetWeight: null,
    entries: []
  };
};

// Salvar perfil de peso
export const saveWeightProfile = (profile: WeightProfile) => {
  try {
    localStorage.setItem(WEIGHT_PROFILE_KEY, JSON.stringify(profile));
  } catch (error) {
    console.error('Erro ao salvar perfil de peso:', error);
  }
};

// Atualizar peso atual
export const updateCurrentWeight = (weight: number) => {
  const profile = getWeightProfile();
  const today = new Date().toISOString().split('T')[0];
  
  // Adicionar entrada de hoje se não existir ou atualizar
  const existingIndex = profile.entries.findIndex(e => e.date === today);
  const newEntry: WeightEntry = {
    id: existingIndex >= 0 ? profile.entries[existingIndex].id : `weight-${Date.now()}`,
    date: today,
    weight: weight
  };
  
  if (existingIndex >= 0) {
    profile.entries[existingIndex] = newEntry;
  } else {
    profile.entries.push(newEntry);
  }
  
  // Ordenar por data (mais recente primeiro)
  profile.entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  profile.currentWeight = weight;
  saveWeightProfile(profile);
  return profile;
};

// Atualizar peso desejado
export const updateTargetWeight = (weight: number) => {
  const profile = getWeightProfile();
  profile.targetWeight = weight;
  saveWeightProfile(profile);
  return profile;
};

// Adicionar entrada de peso
export const addWeightEntry = (weight: number, date?: string) => {
  const profile = getWeightProfile();
  const entryDate = date || new Date().toISOString().split('T')[0];
  
  const newEntry: WeightEntry = {
    id: `weight-${Date.now()}`,
    date: entryDate,
    weight: weight
  };
  
  // Se for a data de hoje, atualiza o peso atual
  const today = new Date().toISOString().split('T')[0];
  if (entryDate === today) {
    profile.currentWeight = weight;
  }
  
  // Remove entrada do mesmo dia se existir
  const existingIndex = profile.entries.findIndex(e => e.date === entryDate);
  if (existingIndex >= 0) {
    profile.entries[existingIndex] = newEntry;
  } else {
    profile.entries.push(newEntry);
  }
  
  // Ordenar por data (mais recente primeiro)
  profile.entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  saveWeightProfile(profile);
  return profile;
};

// Calcular diferença (faltam X KGs)
export const calculateWeightDifference = (): number | null => {
  const profile = getWeightProfile();
  if (profile.currentWeight !== null && profile.targetWeight !== null) {
    return profile.targetWeight - profile.currentWeight;
  }
  return null;
};

// Obter histórico de peso (últimos 30 dias)
export const getWeightHistory = (days: number = 30): WeightEntry[] => {
  const profile = getWeightProfile();
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);
  
  return profile.entries.filter(entry => {
    const entryDate = new Date(entry.date);
    return entryDate >= cutoffDate;
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

