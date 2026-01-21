/**
 * Storage Manager Centralizado
 * Gerencia todas as operações de localStorage de forma consistente
 * Inclui tratamento de erros, versionamento e migração de dados
 */

const STORAGE_PREFIX = 'ciclei-';
const STORAGE_VERSION_KEY = 'ciclei-storage-version';
const CURRENT_STORAGE_VERSION = '1.0.0';

export class StorageManager {
  /**
   * Obtém a chave completa com prefixo
   */
  private static getKey(key: string): string {
    return `${STORAGE_PREFIX}${key}`;
  }

  /**
   * Salva um valor no localStorage
   */
  static set<T>(key: string, value: T): void {
    try {
      const fullKey = this.getKey(key);
      const serialized = JSON.stringify(value);
      localStorage.setItem(fullKey, serialized);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      console.error(`Error saving ${key} to localStorage:`, errorMessage);
      
      // Se o erro for de quota excedida, tentar limpar dados antigos
      if (error instanceof DOMException && error.name === 'QuotaExceededError') {
        console.warn('localStorage quota exceeded, attempting cleanup...');
        this.cleanupOldData();
        
        // Tentar novamente
        try {
          const fullKey = this.getKey(key);
          const serialized = JSON.stringify(value);
          localStorage.setItem(fullKey, serialized);
        } catch {
          throw new Error(`Falha ao salvar ${key} no localStorage após limpeza`);
        }
      } else {
        throw new Error(`Falha ao salvar ${key} no localStorage: ${errorMessage}`);
      }
    }
  }

  /**
   * Obtém um valor do localStorage
   */
  static get<T>(key: string, defaultValue: T | null = null): T | null {
    try {
      const fullKey = this.getKey(key);
      const item = localStorage.getItem(fullKey);
      
      if (item === null) {
        return defaultValue;
      }

      const parsed = JSON.parse(item) as T;
      return parsed;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      console.error(`Error loading ${key} from localStorage:`, errorMessage);
      
      // Se o JSON estiver corrompido, remover a chave
      if (error instanceof SyntaxError) {
        console.warn(`Corrupted data for ${key}, removing...`);
        this.remove(key);
      }
      
      return defaultValue;
    }
  }

  /**
   * Remove um valor do localStorage
   */
  static remove(key: string): void {
    try {
      const fullKey = this.getKey(key);
      localStorage.removeItem(fullKey);
    } catch (error) {
      console.error(`Error removing ${key} from localStorage:`, error);
    }
  }

  /**
   * Verifica se uma chave existe
   */
  static has(key: string): boolean {
    try {
      const fullKey = this.getKey(key);
      return localStorage.getItem(fullKey) !== null;
    } catch {
      return false;
    }
  }

  /**
   * Limpa todos os dados do Ciclei do localStorage
   */
  static clear(): void {
    try {
      const keys = Object.keys(localStorage);
      const cicleiKeys = keys.filter(key => key.startsWith(STORAGE_PREFIX));
      
      cicleiKeys.forEach(key => {
        localStorage.removeItem(key);
      });
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      throw new Error('Falha ao limpar localStorage');
    }
  }

  /**
   * Obtém todas as chaves do Ciclei
   */
  static getAllKeys(): string[] {
    try {
      const keys = Object.keys(localStorage);
      return keys
        .filter(key => key.startsWith(STORAGE_PREFIX))
        .map(key => key.replace(STORAGE_PREFIX, ''));
    } catch {
      return [];
    }
  }

  /**
   * Obtém o tamanho aproximado usado pelo Ciclei (em bytes)
   */
  static getStorageSize(): number {
    try {
      const keys = this.getAllKeys();
      let total = 0;
      
      keys.forEach(key => {
        const fullKey = this.getKey(key);
        const item = localStorage.getItem(fullKey);
        if (item) {
          total += item.length + key.length; // Aproximação
        }
      });
      
      return total;
    } catch {
      return 0;
    }
  }

  /**
   * Limpa dados antigos para liberar espaço
   * Remove dados com mais de 90 dias sem uso
   */
  private static cleanupOldData(): void {
    // Implementação futura: remover dados antigos baseado em timestamp
  }

  /**
   * Inicializa o sistema de storage
   * Verifica versão e executa migrações se necessário
   */
  static initialize(): void {
    try {
      const currentVersion = localStorage.getItem(STORAGE_VERSION_KEY);
      
      if (currentVersion !== CURRENT_STORAGE_VERSION) {
        // Aqui você pode adicionar lógica de migração
        // Por exemplo, migrar dados de versão antiga para nova
      }
      
      localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_STORAGE_VERSION);
    } catch (error) {
      console.error('Error initializing storage:', error);
    }
  }

  /**
   * Exporta todos os dados do Ciclei como JSON
   */
  static exportData(): string {
    try {
      const keys = this.getAllKeys();
      const data: Record<string, unknown> = {};
      
      keys.forEach(key => {
        data[key] = this.get(key);
      });
      
      return JSON.stringify(data, null, 2);
    } catch (error) {
      console.error('Error exporting data:', error);
      throw new Error('Falha ao exportar dados');
    }
  }

  /**
   * Importa dados de um JSON
   */
  static importData(jsonData: string): void {
    try {
      const data = JSON.parse(jsonData) as Record<string, unknown>;
      
      Object.entries(data).forEach(([key, value]) => {
        this.set(key, value);
      });
    } catch (error) {
      console.error('Error importing data:', error);
      throw new Error('Falha ao importar dados. Verifique se o arquivo está no formato correto.');
    }
  }
}

// Inicializar storage na importação
if (typeof window !== 'undefined') {
  StorageManager.initialize();
}

