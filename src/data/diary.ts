// Sistema de Diário

export interface DiaryEntry {
  date: string;
  workoutId?: string;
  workoutName?: string;
  notes: string;
  energy?: number; // 1-5
  mood?: number; // 1-5
}

const DIARY_KEY = 'ciclei-diary';

export const saveDiaryEntry = (entry: DiaryEntry) => {
  try {
    const entries = getDiaryEntries();
    const existingIndex = entries.findIndex(e => e.date === entry.date);
    
    if (existingIndex >= 0) {
      entries[existingIndex] = entry;
    } else {
      entries.push(entry);
    }
    
    // Ordenar por data (mais recente primeiro)
    entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    localStorage.setItem(DIARY_KEY, JSON.stringify(entries));
  } catch (error) {
    console.error('Erro ao salvar diário:', error);
  }
};

export const getDiaryEntries = (): DiaryEntry[] => {
  try {
    const stored = localStorage.getItem(DIARY_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Erro ao ler diário:', error);
  }
  
  return [];
};

export const getDiaryEntry = (date: string): DiaryEntry | null => {
  const entries = getDiaryEntries();
  return entries.find(e => e.date === date) || null;
};

export const getRecentEntries = (limit: number = 7): DiaryEntry[] => {
  const entries = getDiaryEntries();
  return entries.slice(0, limit);
};



