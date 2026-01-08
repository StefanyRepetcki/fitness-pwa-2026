/**
 * Sistema de validação centralizado
 * Fornece validações reutilizáveis e mensagens de erro consistentes
 */

export class ValidationError extends Error {
  public field: string;
  public code?: string;

  constructor(message: string, field: string, code?: string) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
    this.code = code;
  }
}

/**
 * Valida peso corporal
 */
export const validateWeight = (weight: number): void => {
  if (isNaN(weight)) {
    throw new ValidationError('Peso deve ser um número válido', 'weight', 'INVALID_NUMBER');
  }
  if (weight <= 0) {
    throw new ValidationError('Peso deve ser maior que zero', 'weight', 'INVALID_RANGE');
  }
  if (weight > 500) {
    throw new ValidationError('Peso não pode ser maior que 500kg', 'weight', 'EXCEEDS_MAX');
  }
};

/**
 * Valida altura
 */
export const validateHeight = (height: number): void => {
  if (isNaN(height)) {
    throw new ValidationError('Altura deve ser um número válido', 'height', 'INVALID_NUMBER');
  }
  if (height <= 0) {
    throw new ValidationError('Altura deve ser maior que zero', 'height', 'INVALID_RANGE');
  }
  if (height < 50) {
    throw new ValidationError('Altura deve ser pelo menos 50cm', 'height', 'BELOW_MIN');
  }
  if (height > 300) {
    throw new ValidationError('Altura não pode ser maior que 300cm', 'height', 'EXCEEDS_MAX');
  }
};

/**
 * Valida idade
 */
export const validateAge = (age: number): void => {
  if (isNaN(age)) {
    throw new ValidationError('Idade deve ser um número válido', 'age', 'INVALID_NUMBER');
  }
  if (age <= 0) {
    throw new ValidationError('Idade deve ser maior que zero', 'age', 'INVALID_RANGE');
  }
  if (age < 13) {
    throw new ValidationError('Idade deve ser pelo menos 13 anos', 'age', 'BELOW_MIN');
  }
  if (age > 120) {
    throw new ValidationError('Idade não pode ser maior que 120 anos', 'age', 'EXCEEDS_MAX');
  }
};

/**
 * Valida carga de exercício
 */
export const validateExerciseWeight = (weight: number): void => {
  if (isNaN(weight)) {
    throw new ValidationError('Carga deve ser um número válido', 'exerciseWeight', 'INVALID_NUMBER');
  }
  if (weight < 0) {
    throw new ValidationError('Carga não pode ser negativa', 'exerciseWeight', 'INVALID_RANGE');
  }
  if (weight > 1000) {
    throw new ValidationError('Carga não pode ser maior que 1000kg', 'exerciseWeight', 'EXCEEDS_MAX');
  }
};

/**
 * Valida metas de macros
 */
export const validateMacroGoals = (macros: {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}): void => {
  if (macros.calories < 0 || macros.calories > 10000) {
    throw new ValidationError(
      'Calorias devem estar entre 0 e 10000',
      'calories',
      'INVALID_RANGE'
    );
  }

  if (macros.protein < 0 || macros.protein > 1000) {
    throw new ValidationError(
      'Proteína deve estar entre 0 e 1000g',
      'protein',
      'INVALID_RANGE'
    );
  }

  if (macros.carbs < 0 || macros.carbs > 2000) {
    throw new ValidationError(
      'Carboidratos devem estar entre 0 e 2000g',
      'carbs',
      'INVALID_RANGE'
    );
  }

  if (macros.fat < 0 || macros.fat > 500) {
    throw new ValidationError(
      'Gorduras devem estar entre 0 e 500g',
      'fat',
      'INVALID_RANGE'
    );
  }

  // Validar se a soma dos macros faz sentido
  const calculatedCalories = macros.protein * 4 + macros.carbs * 4 + macros.fat * 9;
  const difference = Math.abs(calculatedCalories - macros.calories);
  
  if (difference > 100) {
    // Permitir diferença de até 100 kcal (arredondamentos)
    console.warn(
      `Diferença entre calorias totais e calculadas: ${difference.toFixed(0)} kcal`
    );
  }
};

/**
 * Valida entrada de alimento
 */
export const validateFoodEntry = (entry: {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}): void => {
  if (!entry.name || entry.name.trim().length === 0) {
    throw new ValidationError('Nome do alimento é obrigatório', 'name', 'REQUIRED');
  }

  if (entry.name.length > 100) {
    throw new ValidationError('Nome do alimento não pode ter mais de 100 caracteres', 'name', 'TOO_LONG');
  }

  if (entry.calories < 0 || entry.calories > 5000) {
    throw new ValidationError('Calorias devem estar entre 0 e 5000', 'calories', 'INVALID_RANGE');
  }

  if (entry.protein < 0 || entry.protein > 500) {
    throw new ValidationError('Proteína deve estar entre 0 e 500g', 'protein', 'INVALID_RANGE');
  }

  if (entry.carbs < 0 || entry.carbs > 1000) {
    throw new ValidationError('Carboidratos devem estar entre 0 e 1000g', 'carbs', 'INVALID_RANGE');
  }

  if (entry.fat < 0 || entry.fat > 500) {
    throw new ValidationError('Gorduras devem estar entre 0 e 500g', 'fat', 'INVALID_RANGE');
  }
};

/**
 * Valida data no formato YYYY-MM-DD
 */
export const validateDate = (date: string): void => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date)) {
    throw new ValidationError('Data deve estar no formato YYYY-MM-DD', 'date', 'INVALID_FORMAT');
  }

  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    throw new ValidationError('Data inválida', 'date', 'INVALID_DATE');
  }
};

/**
 * Valida RPE (Rate of Perceived Exertion)
 */
export const validateRPE = (rpe: number): void => {
  if (isNaN(rpe)) {
    throw new ValidationError('RPE deve ser um número válido', 'rpe', 'INVALID_NUMBER');
  }
  if (rpe < 1 || rpe > 10) {
    throw new ValidationError('RPE deve estar entre 1 e 10', 'rpe', 'INVALID_RANGE');
  }
};

/**
 * Função helper para validar múltiplos campos
 */
export const validateFields = (
  validations: Array<{ value: unknown; validator: (value: unknown) => void; field: string }>
): void => {
  const errors: ValidationError[] = [];

  for (const { value, validator, field } of validations) {
    try {
      validator(value as never);
    } catch (error) {
      if (error instanceof ValidationError) {
        errors.push(error);
      } else {
        errors.push(new ValidationError(String(error), field));
      }
    }
  }

  if (errors.length > 0) {
    const firstError = errors[0];
    throw firstError; // Lança o primeiro erro encontrado
  }
};

