// Sistema de controle de carga/peso por exercício
import { StorageManager } from '../utils/storage';
import { validateExerciseWeight } from '../utils/validation';

export interface ExerciseWeight {
  workoutId: string;
  exerciseId: string;
  weight: number; // carga em kg
  lastUpdated: string; // data da última atualização
}

const EXERCISE_WEIGHTS_KEY = 'exercise-weights';

// Obter todas as cargas salvas
export const getExerciseWeights = (): ExerciseWeight[] => {
  const stored = StorageManager.get<ExerciseWeight[]>(EXERCISE_WEIGHTS_KEY, []);
  
  if (!Array.isArray(stored)) {
    return [];
  }

  // Validar e filtrar dados corrompidos
  return stored.filter((item: unknown) =>
    item &&
    typeof item === 'object' &&
    'workoutId' in item &&
    'exerciseId' in item &&
    'weight' in item &&
    typeof (item as ExerciseWeight).weight === 'number' &&
    (item as ExerciseWeight).weight > 0 &&
    (item as ExerciseWeight).weight <= 1000
  ) as ExerciseWeight[];
};

// Salvar todas as cargas
const saveExerciseWeights = (weights: ExerciseWeight[]) => {
  StorageManager.set(EXERCISE_WEIGHTS_KEY, weights);
};

// Obter carga de um exercício específico
export const getExerciseWeight = (workoutId: string, exerciseId: string): number | null => {
  const weights = getExerciseWeights();
  const exerciseWeight = weights.find(
    w => w.workoutId === workoutId && w.exerciseId === exerciseId
  );
  return exerciseWeight ? exerciseWeight.weight : null;
};

// Salvar/atualizar carga de um exercício
export const saveExerciseWeight = (workoutId: string, exerciseId: string, weight: number): void => {
  try {
    validateExerciseWeight(weight);
  } catch (error) {
    console.error('Peso inválido:', error);
    return;
  }

  const weights = getExerciseWeights();
  const existingIndex = weights.findIndex(
    w => w.workoutId === workoutId && w.exerciseId === exerciseId
  );

  const newWeight: ExerciseWeight = {
    workoutId,
    exerciseId,
    weight,
    lastUpdated: new Date().toISOString()
  };

  if (existingIndex >= 0) {
    weights[existingIndex] = newWeight;
  } else {
    weights.push(newWeight);
  }

  saveExerciseWeights(weights);
};

// Remover carga de um exercício
export const removeExerciseWeight = (workoutId: string, exerciseId: string): void => {
  const weights = getExerciseWeights();
  const filtered = weights.filter(
    w => !(w.workoutId === workoutId && w.exerciseId === exerciseId)
  );
  saveExerciseWeights(filtered);
};

// Obter todas as cargas de um treino específico
export const getWorkoutExerciseWeights = (workoutId: string): Record<string, number> => {
  const weights = getExerciseWeights();
  const workoutWeights: Record<string, number> = {};
  
  weights
    .filter(w => w.workoutId === workoutId)
    .forEach(w => {
      workoutWeights[w.exerciseId] = w.weight;
    });
  
  return workoutWeights;
};

