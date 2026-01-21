// Sistema de controle de macros diários

export interface MacroEntry {
  id: string;
  date: string; // YYYY-MM-DD
  meal: string; // 'breakfast', 'lunch', 'dinner', 'snack'
  foodName: string;
  calories: number;
  protein: number; // em gramas
  carbs: number; // em gramas
  fat: number; // em gramas
  quantity: number; // quantidade em gramas ou unidades
  unit: string; // 'g', 'ml', 'unidade'
}

export interface MacroGoals {
  calories: number;
  protein: number; // em gramas
  carbs: number; // em gramas
  fat: number; // em gramas
}

export interface DailyMacros {
  date: string; // YYYY-MM-DD
  entries: MacroEntry[];
  goals: MacroGoals;
}

const MACROS_GOALS_KEY = 'ciclei-macro-goals';
const MACROS_ENTRIES_KEY = 'ciclei-macro-entries';

// Valores padrão de macros (baseado em 2100 calorias)
const DEFAULT_GOALS: MacroGoals = {
  calories: 2100,
  protein: 105, // 20% das calorias = 420 kcal / 4 = 105g
  carbs: 262, // 50% das calorias = 1050 kcal / 4 = 262g
  fat: 70 // 30% das calorias = 630 kcal / 9 = 70g
};

// Obter metas de macros
export const getMacroGoals = (): MacroGoals => {
  try {
    const stored = localStorage.getItem(MACROS_GOALS_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (
        parsed &&
        typeof parsed === 'object' &&
        typeof parsed.calories === 'number' &&
        typeof parsed.protein === 'number' &&
        typeof parsed.carbs === 'number' &&
        typeof parsed.fat === 'number'
      ) {
        return parsed;
      }
    }
  } catch (error) {
    console.error('Erro ao ler metas de macros:', error);
  }
  
  return { ...DEFAULT_GOALS };
};

// Salvar metas de macros
export const saveMacroGoals = (goals: MacroGoals) => {
  try {
    localStorage.setItem(MACROS_GOALS_KEY, JSON.stringify(goals));
  } catch (error) {
    console.error('Erro ao salvar metas de macros:', error);
  }
};

// Obter todas as entradas de macros
export const getAllMacroEntries = (): MacroEntry[] => {
  try {
    const stored = localStorage.getItem(MACROS_ENTRIES_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        return parsed.filter((entry: unknown) =>
          entry &&
          typeof entry === 'object' &&
          'id' in entry &&
          'date' in entry &&
          'meal' in entry &&
          'foodName' in entry &&
          'calories' in entry &&
          'protein' in entry &&
          'carbs' in entry &&
          'fat' in entry
        ) as MacroEntry[];
      }
    }
  } catch (error) {
    console.error('Erro ao ler entradas de macros:', error);
  }
  
  return [];
};

// Salvar todas as entradas
const saveAllMacroEntries = (entries: MacroEntry[]) => {
  try {
    localStorage.setItem(MACROS_ENTRIES_KEY, JSON.stringify(entries));
  } catch (error) {
    console.error('Erro ao salvar entradas de macros:', error);
  }
};

// Obter macros de uma data específica
export const getDailyMacros = (date: string): DailyMacros => {
  const entries = getAllMacroEntries();
  const dayEntries = entries.filter(e => e.date === date);
  const goals = getMacroGoals();
  
  return {
    date,
    entries: dayEntries,
    goals
  };
};

// Adicionar entrada de macro
export const addMacroEntry = (entry: Omit<MacroEntry, 'id'>): MacroEntry => {
  const entries = getAllMacroEntries();
  const newEntry: MacroEntry = {
    ...entry,
    id: `macro-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  };
  
  entries.push(newEntry);
  saveAllMacroEntries(entries);
  return newEntry;
};

// Remover entrada de macro
export const removeMacroEntry = (id: string) => {
  const entries = getAllMacroEntries();
  const filtered = entries.filter(e => e.id !== id);
  saveAllMacroEntries(filtered);
};

// Atualizar entrada de macro
export const updateMacroEntry = (id: string, updates: Partial<MacroEntry>) => {
  const entries = getAllMacroEntries();
  const index = entries.findIndex(e => e.id === id);
  if (index >= 0) {
    entries[index] = { ...entries[index], ...updates };
    saveAllMacroEntries(entries);
    return entries[index];
  }
  return null;
};

// Calcular totais do dia
export const calculateDailyTotals = (date: string) => {
  const daily = getDailyMacros(date);
  const totals = daily.entries.reduce(
    (acc, entry) => ({
      calories: acc.calories + entry.calories,
      protein: acc.protein + entry.protein,
      carbs: acc.carbs + entry.carbs,
      fat: acc.fat + entry.fat
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );
  
  return {
    ...totals,
    goals: daily.goals,
    remaining: {
      calories: daily.goals.calories - totals.calories,
      protein: daily.goals.protein - totals.protein,
      carbs: daily.goals.carbs - totals.carbs,
      fat: daily.goals.fat - totals.fat
    }
  };
};

// Calcular macros a partir de calorias (para alimentos customizados)
export const calculateMacrosFromCalories = (
  calories: number,
  proteinPercent: number = 20,
  carbsPercent: number = 50,
  fatPercent: number = 30
): { protein: number; carbs: number; fat: number } => {
  const proteinCal = (calories * proteinPercent) / 100;
  const carbsCal = (calories * carbsPercent) / 100;
  const fatCal = (calories * fatPercent) / 100;
  
  return {
    protein: Math.round((proteinCal / 4) * 10) / 10,
    carbs: Math.round((carbsCal / 4) * 10) / 10,
    fat: Math.round((fatCal / 9) * 10) / 10
  };
};


