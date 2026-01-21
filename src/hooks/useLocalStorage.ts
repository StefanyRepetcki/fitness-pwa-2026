import { useState, useEffect, useCallback } from 'react';

/**
 * Hook customizado para gerenciar estado sincronizado com localStorage
 * 
 * @param key - Chave no localStorage
 * @param initialValue - Valor inicial caso não exista no localStorage
 * @returns [storedValue, setValue] - Similar ao useState
 * 
 * @example
 * const [goals, setGoals] = useLocalStorage('macro-goals', DEFAULT_GOALS);
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  // Estado para armazenar o valor
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      if (item === null) {
        return initialValue;
      }
      return JSON.parse(item) as T;
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error);
      return initialValue;
    }
  });

  // Função para atualizar o valor e sincronizar com localStorage
  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        // Permite valor ser uma função para atualização baseada no valor anterior
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        
        // Salvar no estado
        setStoredValue(valueToStore);
        
        // Salvar no localStorage
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.error(`Error saving ${key} to localStorage:`, error);
        throw new Error(`Falha ao salvar ${key} no localStorage`);
      }
    },
    [key, storedValue]
  );

  // Sincronizar com mudanças no localStorage de outras abas/janelas
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue) as T);
        } catch (error) {
          console.error(`Error parsing storage event for ${key}:`, error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [storedValue, setValue] as const;
}


