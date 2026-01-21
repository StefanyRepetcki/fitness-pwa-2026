import { useState } from 'react';
import { Calculator, Save, Info } from 'lucide-react';
import {
  calculateMacros,
  getActivityLevelDescription,
  getGoalDescription,
  type UserProfile,
  type MacroCalculationResult
} from '../../utils/macroCalculator';
import { validateHeight, validateAge, ValidationError } from '../../utils/validation';
import { saveMacroGoals } from '../../data/macros';
import { useToast } from '../../contexts/ToastContext';
import styles from './MacroCalculator.module.css';

interface MacroCalculatorProps {
  currentWeight: number | null;
  onMacrosCalculated?: (macros: MacroCalculationResult) => void;
}

export const MacroCalculator = ({ currentWeight, onMacrosCalculated }: MacroCalculatorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('female');
  const [activityLevel, setActivityLevel] = useState<UserProfile['activityLevel']>('moderate');
  const [goal, setGoal] = useState<UserProfile['goal']>('maintain');
  const [result, setResult] = useState<MacroCalculationResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { showToast } = useToast();

  const handleCalculate = () => {
    // Limpar erros anteriores
    setErrors({});
    setResult(null);

    try {
      // Validar peso
      if (!currentWeight || currentWeight <= 0) {
        setErrors({ weight: 'Peso atual é necessário. Atualize seu peso no perfil primeiro.' });
        showToast('Atualize seu peso atual antes de calcular macros', 'error');
        return;
      }

      // Validar altura
      const heightNum = parseFloat(height.replace(',', '.'));
      validateHeight(heightNum);

      // Validar idade
      const ageNum = parseFloat(age);
      validateAge(ageNum);

      // Calcular macros
      const profile: UserProfile = {
        weight: currentWeight,
        height: heightNum,
        age: ageNum,
        gender,
        activityLevel,
        goal
      };

      const calculation = calculateMacros(profile);
      setResult(calculation);

      if (onMacrosCalculated) {
        onMacrosCalculated(calculation);
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        setErrors({ [error.field]: error.message });
        showToast(error.message, 'error');
      } else {
        const message = error instanceof Error ? error.message : 'Erro ao calcular macros';
        showToast(message, 'error');
        setErrors({ general: message });
      }
    }
  };

  const handleSaveMacros = () => {
    if (!result) return;

    try {
      saveMacroGoals(result.macros);
      showToast('Metas de macros salvas com sucesso!', 'success');
      setIsOpen(false);
    } catch {
      showToast('Erro ao salvar macros', 'error');
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={styles.openButton}
        aria-label="Abrir calculadora de macros"
      >
        <Calculator size={20} strokeWidth={2} />
        Calcular Macros Automaticamente
      </button>
    );
  }

  return (
    <div className={styles.calculator}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          <Calculator size={24} strokeWidth={2} />
          Calculadora de Macros
        </h3>
        <button
          onClick={() => {
            setIsOpen(false);
            setResult(null);
            setErrors({});
          }}
          className={styles.closeButton}
          aria-label="Fechar calculadora"
        >
          ×
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.infoBox}>
          <Info size={18} strokeWidth={2} />
          <p>
            Esta calculadora usa a fórmula de Mifflin-St Jeor para calcular suas necessidades calóricas
            e distribui os macronutrientes de forma otimizada para seus objetivos.
          </p>
        </div>

        <div className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="height" className={styles.label}>
              Altura (cm) *
            </label>
            <input
              id="height"
              type="number"
              min="50"
              max="300"
              step="0.1"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className={`${styles.input} ${errors.height ? styles.inputError : ''}`}
              placeholder="Ex: 165"
            />
            {errors.height && <span className={styles.error}>{errors.height}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="age" className={styles.label}>
              Idade *
            </label>
            <input
              id="age"
              type="number"
              min="13"
              max="120"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={`${styles.input} ${errors.age ? styles.inputError : ''}`}
              placeholder="Ex: 30"
            />
            {errors.age && <span className={styles.error}>{errors.age}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="gender" className={styles.label}>
              Gênero *
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value as 'male' | 'female')}
              className={styles.select}
            >
              <option value="female">Feminino</option>
              <option value="male">Masculino</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="activity" className={styles.label}>
              Nível de Atividade *
            </label>
            <select
              id="activity"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value as UserProfile['activityLevel'])}
              className={styles.select}
            >
              <option value="sedentary">Sedentário (pouco ou nenhum exercício)</option>
              <option value="light">Leve (exercício 1-3 dias/semana)</option>
              <option value="moderate">Moderado (exercício 3-5 dias/semana)</option>
              <option value="active">Ativo (exercício 6-7 dias/semana)</option>
              <option value="very-active">Muito Ativo (exercício pesado, trabalho físico)</option>
            </select>
            <p className={styles.helperText}>
              {getActivityLevelDescription(activityLevel)}
            </p>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="goal" className={styles.label}>
              Objetivo *
            </label>
            <select
              id="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value as UserProfile['goal'])}
              className={styles.select}
            >
              <option value="cut">Perder peso (déficit calórico)</option>
              <option value="maintain">Manter peso atual</option>
              <option value="bulk">Ganhar massa magra (superávit calórico)</option>
            </select>
            <p className={styles.helperText}>
              {getGoalDescription(goal)}
            </p>
          </div>

          <button
            onClick={handleCalculate}
            className={styles.calculateButton}
            disabled={!height || !age}
          >
            <Calculator size={20} strokeWidth={2} />
            Calcular Macros
          </button>
        </div>

        {result && (
          <div className={styles.result}>
            <div className={styles.resultHeader}>
              <h4 className={styles.resultTitle}>Resultado do Cálculo</h4>
              <p className={styles.resultExplanation}>{result.explanation}</p>
            </div>

            <div className={styles.metrics}>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>BMR (Taxa Metabólica Basal)</span>
                <span className={styles.metricValue}>{result.bmr} kcal</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>TDEE (Gasto Calórico Total)</span>
                <span className={styles.metricValue}>{result.tdee} kcal</span>
              </div>
            </div>

            <div className={styles.macros}>
              <div className={styles.macroCard}>
                <div className={styles.macroHeader}>
                  <span className={styles.macroLabel}>Calorias</span>
                </div>
                <div className={styles.macroValue}>{result.macros.calories}</div>
                <div className={styles.macroUnit}>kcal/dia</div>
              </div>

              <div className={styles.macroCard}>
                <div className={styles.macroHeader}>
                  <span className={styles.macroLabel}>Proteína</span>
                </div>
                <div className={styles.macroValue}>{result.macros.protein}</div>
                <div className={styles.macroUnit}>g/dia</div>
                <div className={styles.macroNote}>
                  {Math.round((result.macros.protein / (currentWeight || 1)) * 10) / 10} g/kg
                </div>
              </div>

              <div className={styles.macroCard}>
                <div className={styles.macroHeader}>
                  <span className={styles.macroLabel}>Carboidratos</span>
                </div>
                <div className={styles.macroValue}>{result.macros.carbs}</div>
                <div className={styles.macroUnit}>g/dia</div>
              </div>

              <div className={styles.macroCard}>
                <div className={styles.macroHeader}>
                  <span className={styles.macroLabel}>Gorduras</span>
                </div>
                <div className={styles.macroValue}>{result.macros.fat}</div>
                <div className={styles.macroUnit}>g/dia</div>
              </div>
            </div>

            <button
              onClick={handleSaveMacros}
              className={styles.saveButton}
            >
              <Save size={20} strokeWidth={2} />
              Salvar como Metas
            </button>
          </div>
        )}

        {errors.general && (
          <div className={styles.errorBox}>
            {errors.general}
          </div>
        )}
      </div>
    </div>
  );
};

