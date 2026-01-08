# Melhorias Rápidas e Implementáveis - Ciclei PWA

## 🚀 Melhorias que podem ser implementadas rapidamente (1-3 dias cada)

### 1. Calculadora de Macros com TDEE ⭐ CRÍTICO

**Arquivo:** `src/utils/macroCalculator.ts` (novo)

```typescript
export interface UserProfile {
  weight: number; // kg
  height: number; // cm
  age: number;
  gender: 'male' | 'female';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';
  goal: 'cut' | 'maintain' | 'bulk';
}

export interface MacroGoals {
  calories: number;
  protein: number; // g
  carbs: number; // g
  fat: number; // g
}

const ACTIVITY_MULTIPLIERS = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  'very-active': 1.9
};

// Fórmula de Mifflin-St Jeor (mais precisa)
export const calculateBMR = (weight: number, height: number, age: number, gender: 'male' | 'female'): number => {
  if (gender === 'male') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }
  return 10 * weight + 6.25 * height - 5 * age - 161;
};

export const calculateTDEE = (profile: UserProfile): number => {
  const bmr = calculateBMR(profile.weight, profile.height, profile.age, profile.gender);
  return bmr * ACTIVITY_MULTIPLIERS[profile.activityLevel];
};

export const calculateMacros = (profile: UserProfile): MacroGoals => {
  const tdee = calculateTDEE(profile);
  
  // Ajustar calorias baseado no objetivo
  let targetCalories = tdee;
  if (profile.goal === 'cut') {
    targetCalories = tdee * 0.85; // Déficit de 15%
  } else if (profile.goal === 'bulk') {
    targetCalories = tdee * 1.15; // Superávit de 15%
  }
  
  // Proteína: 1.6-2.2g/kg (usar 2g/kg para hipertrofia)
  const protein = Math.round(profile.weight * 2);
  const proteinCalories = protein * 4;
  
  // Gordura: 20-30% das calorias (usar 25%)
  const fatPercentage = 0.25;
  const fatCalories = targetCalories * fatPercentage;
  const fat = Math.round(fatCalories / 9);
  
  // Carboidratos: resto das calorias
  const remainingCalories = targetCalories - proteinCalories - fatCalories;
  const carbs = Math.round(remainingCalories / 4);
  
  return {
    calories: Math.round(targetCalories),
    protein,
    carbs,
    fat
  };
};
```

**Integração na página Profile:**
- Adicionar campos: altura, idade, gênero, nível de atividade, objetivo
- Botão "Calcular Macros Automaticamente"
- Preencher metas de macros automaticamente

---

### 2. Hook useLocalStorage Reutilizável

**Arquivo:** `src/hooks/useLocalStorage.ts` (novo)

```typescript
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  };

  return [storedValue, setValue] as const;
}
```

**Uso:**
```typescript
// Antes
const [goals, setGoals] = useState(getMacroGoals());

// Depois
const [goals, setGoals] = useLocalStorage('ciclei-macro-goals', DEFAULT_GOALS);
```

---

### 3. Sistema de Progressão de Carga

**Arquivo:** `src/utils/progression.ts` (novo)

```typescript
export interface ProgressionRule {
  lastWeight: number;
  lastRPE: number;
  targetRPE: number;
  weeksSinceStart: number;
}

export const calculateNextWeight = (rule: ProgressionRule): number => {
  const { lastWeight, lastRPE, targetRPE, weeksSinceStart } = rule;
  
  // Se RPE foi menor que o alvo, pode aumentar carga
  if (lastRPE < targetRPE - 1) {
    // Progressão mais agressiva nas primeiras semanas
    if (weeksSinceStart < 4) {
      return lastWeight * 1.05; // +5%
    }
    return lastWeight * 1.025; // +2.5%
  }
  
  // Se RPE foi igual ao alvo, manter ou aumentar levemente
  if (lastRPE === targetRPE) {
    if (weeksSinceStart < 8) {
      return lastWeight * 1.01; // +1%
    }
    return lastWeight; // Manter
  }
  
  // Se RPE foi maior que o alvo, reduzir carga
  if (lastRPE > targetRPE) {
    return lastWeight * 0.95; // -5%
  }
  
  return lastWeight;
};

export const suggestProgression = (
  exerciseId: string,
  workoutId: string,
  currentWeight: number | null
): number | null => {
  // Buscar histórico de cargas
  // Calcular progressão baseada em histórico
  // Retornar sugestão
  return null; // Implementar
};
```

**Integração:**
- Mostrar sugestão de carga na lista de exercícios
- Botão "Usar Sugestão" ao lado do input de peso

---

### 4. Validação Centralizada

**Arquivo:** `src/utils/validation.ts` (novo)

```typescript
export class ValidationError extends Error {
  constructor(message: string, public field: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export const validateWeight = (weight: number): void => {
  if (isNaN(weight)) {
    throw new ValidationError('Peso deve ser um número', 'weight');
  }
  if (weight <= 0) {
    throw new ValidationError('Peso deve ser maior que zero', 'weight');
  }
  if (weight > 500) {
    throw new ValidationError('Peso não pode ser maior que 500kg', 'weight');
  }
};

export const validateMacros = (macros: {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}): void => {
  if (macros.calories < 0 || macros.calories > 10000) {
    throw new ValidationError('Calorias devem estar entre 0 e 10000', 'calories');
  }
  if (macros.protein < 0 || macros.protein > 1000) {
    throw new ValidationError('Proteína deve estar entre 0 e 1000g', 'protein');
  }
  // ... outras validações
};

export const validateDate = (date: string): void => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date)) {
    throw new ValidationError('Data deve estar no formato YYYY-MM-DD', 'date');
  }
};
```

---

### 5. Error Boundary Melhorado

**Arquivo:** `src/components/ErrorBoundary/ErrorBoundary.tsx` (atualizar)

```typescript
import React, { Component, ErrorInfo, ReactNode } from 'react';
import styles from './ErrorBoundary.module.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Aqui você pode enviar para um serviço de logging
    // Ex: Sentry, LogRocket, etc.
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorContainer}>
          <h2>Ops! Algo deu errado</h2>
          <p>Ocorreu um erro inesperado. Por favor, recarregue a página.</p>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className={styles.errorDetails}>
              <summary>Detalhes do erro (desenvolvimento)</summary>
              <pre>{this.state.error.toString()}</pre>
            </details>
          )}
          <button onClick={this.handleReset} className={styles.resetButton}>
            Tentar Novamente
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

---

### 6. Memoização de Componentes Pesados

**Exemplo:** `src/components/WorkoutCard/WorkoutCard.tsx`

```typescript
import React from 'react';

export const WorkoutCard = React.memo(({ workout }: Props) => {
  // ... código existente
}, (prevProps, nextProps) => {
  // Comparação customizada se necessário
  return prevProps.workout.id === nextProps.workout.id;
});
```

**Exemplo:** `src/pages/Macros/Macros.tsx`

```typescript
import { useMemo } from 'react';

// Dentro do componente
const totals = useMemo(() => {
  return calculateDailyTotals(selectedDate);
}, [selectedDate, dailyMacros]);
```

---

### 7. Storage Manager Centralizado

**Arquivo:** `src/utils/storage.ts` (novo)

```typescript
export class StorageManager {
  private static prefix = 'ciclei-';

  static set<T>(key: string, value: T): void {
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(this.prefix + key, serialized);
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
      throw new Error('Falha ao salvar dados');
    }
  }

  static get<T>(key: string, defaultValue: T | null = null): T | null {
    try {
      const item = localStorage.getItem(this.prefix + key);
      if (item === null) {
        return defaultValue;
      }
      return JSON.parse(item) as T;
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error);
      return defaultValue;
    }
  }

  static remove(key: string): void {
    localStorage.removeItem(this.prefix + key);
  }

  static clear(): void {
    const keys = Object.keys(localStorage);
    keys
      .filter(key => key.startsWith(this.prefix))
      .forEach(key => localStorage.removeItem(key));
  }

  static getAllKeys(): string[] {
    const keys = Object.keys(localStorage);
    return keys
      .filter(key => key.startsWith(this.prefix))
      .map(key => key.replace(this.prefix, ''));
  }
}
```

**Refatorar todos os arquivos de data para usar StorageManager**

---

### 8. Debounce Hook

**Arquivo:** `src/hooks/useDebounce.ts` (novo)

```typescript
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

**Uso em inputs:**
```typescript
const [searchTerm, setSearchTerm] = useState('');
const debouncedSearch = useDebounce(searchTerm, 300);

useEffect(() => {
  // Fazer busca com debouncedSearch
}, [debouncedSearch]);
```

---

## 📋 Checklist de Implementação

### Fase 1: Fundação (1-2 dias)
- [ ] Criar `useLocalStorage` hook
- [ ] Criar `StorageManager` centralizado
- [ ] Criar `validation.ts` com validações
- [ ] Melhorar `ErrorBoundary`

### Fase 2: Funcionalidades (2-3 dias)
- [ ] Implementar calculadora de macros com TDEE
- [ ] Adicionar campos no Profile para cálculo
- [ ] Integrar cálculo automático de macros

### Fase 3: Otimizações (1-2 dias)
- [ ] Adicionar `React.memo` em componentes de lista
- [ ] Adicionar `useMemo` em cálculos pesados
- [ ] Criar `useDebounce` hook
- [ ] Aplicar debounce em inputs

### Fase 4: Progressão (2-3 dias)
- [ ] Criar sistema de progressão de carga
- [ ] Integrar sugestões na lista de exercícios
- [ ] Adicionar histórico de cargas por exercício

---

## 🎯 Impacto Esperado

### Calculadora de Macros
- **Impacto:** ⭐⭐⭐⭐⭐
- **Esforço:** Médio
- **Benefício:** Personalização real, melhor adesão

### Hooks e Utilitários
- **Impacto:** ⭐⭐⭐⭐
- **Esforço:** Baixo
- **Benefício:** Código mais limpo, menos bugs

### Progressão de Carga
- **Impacto:** ⭐⭐⭐⭐⭐
- **Esforço:** Médio-Alto
- **Benefício:** Melhores resultados, mais engajamento

### Memoização
- **Impacto:** ⭐⭐⭐
- **Esforço:** Baixo
- **Benefício:** Melhor performance, UX mais fluida

---

## 📝 Notas

- Todas essas melhorias são incrementais e não quebram funcionalidades existentes
- Podem ser implementadas uma de cada vez
- Testes devem ser adicionados conforme as melhorias são implementadas
- Documentação deve ser atualizada

