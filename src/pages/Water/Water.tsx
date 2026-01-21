import { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { useProfile } from '../../contexts/ProfileContext';
import { 
  getTodayWaterGoal, 
  getTodayWaterEntry, 
  addWaterToday,
  type WaterEntry 
} from '../../data/water';
import { Droplet, Plus, RotateCcw, CheckCircle2 } from 'lucide-react';
import { useToast } from '../../contexts/ToastContext';
import styles from './Water.module.css';

// Tamanhos de copo/garrafa em ml
const WATER_SIZES = [
  { label: '150ml', value: 150, icon: '🥤' },
  { label: '200ml', value: 200, icon: '🥤' },
  { label: '250ml', value: 250, icon: '🥤' },
  { label: '300ml', value: 300, icon: '💧' },
  { label: '500ml', value: 500, icon: '💧' },
  { label: '750ml', value: 750, icon: '💧' },
  { label: '1L', value: 1000, icon: '💧' }
];

export const Water = () => {
  const { profileType } = useProfile();
  const { showToast } = useToast();
  const [goal, setGoal] = useState<number>(getTodayWaterGoal(profileType));
  const [entry, setEntry] = useState<WaterEntry>(getTodayWaterEntry(goal));
  const [customAmount, setCustomAmount] = useState<string>('');

  // Atualizar quando o perfil mudar
  useEffect(() => {
    const newGoal = getTodayWaterGoal(profileType);
    setGoal(newGoal);
    setEntry(getTodayWaterEntry(newGoal));
  }, [profileType]);

  // Verificar se é um novo dia e resetar se necessário
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (entry.date !== today) {
      const newGoal = getTodayWaterGoal(profileType);
      setGoal(newGoal);
      setEntry(getTodayWaterEntry(newGoal));
    }
  }, [entry.date, profileType]);

  const handleAddWater = (amount: number) => {
    const updated = addWaterToday(amount, goal);
    setEntry(updated);
    
    const percentage = Math.round((updated.amount / goal) * 100);
    
    if (percentage >= 100) {
      showToast('🎉 Parabéns! Você atingiu sua meta de água hoje!', 'success');
    } else if (percentage >= 75) {
      showToast('💪 Você está quase lá! Continue assim!', 'success');
    } else {
      showToast(`+${amount}ml adicionados! Continue hidratando! 💧`, 'success');
    }
  };

  const handleCustomAdd = () => {
    const amount = parseInt(customAmount);
    if (isNaN(amount) || amount <= 0) {
      showToast('Por favor, insira uma quantidade válida', 'error');
      return;
    }
    if (amount > 2000) {
      showToast('Quantidade máxima é 2000ml por vez', 'error');
      return;
    }
    handleAddWater(amount);
    setCustomAmount('');
  };

  const handleReset = () => {
    if (window.confirm('Tem certeza que deseja resetar o consumo de água de hoje?')) {
      const { resetTodayWater } = require('../../data/water');
      resetTodayWater(goal);
      setEntry(getTodayWaterEntry(goal));
      showToast('Consumo de água resetado', 'success');
    }
  };

  const percentage = goal > 0 ? Math.round((entry.amount / goal) * 100) : 0;
  const remaining = Math.max(0, goal - entry.amount);
  const liters = (entry.amount / 1000).toFixed(1);
  const goalLiters = (goal / 1000).toFixed(1);

  const getProgressColor = (): string => {
    if (percentage >= 100) return 'var(--color-success)';
    if (percentage >= 75) return 'var(--color-primary)';
    if (percentage >= 50) return 'var(--color-warning)';
    return 'var(--color-error)';
  };

  return (
    <>
      <Header title="Hidratação" />
      <PageContainer>
        <div className={styles.intro}>
          <p>Mantenha-se hidratado! Sua meta diária é <strong>{goalLiters}L</strong> de água 💧</p>
        </div>

        {/* Card Principal de Progresso */}
        <div className={styles.progressCard}>
          <div className={styles.progressHeader}>
            <div className={styles.progressInfo}>
              <div className={styles.waterIcon}>
                <Droplet size={32} strokeWidth={2} />
              </div>
              <div>
                <h2 className={styles.amount}>{liters}L</h2>
                <p className={styles.goal}>de {goalLiters}L</p>
              </div>
            </div>
            {entry.amount > 0 && (
              <button
                onClick={handleReset}
                className={styles.resetButton}
                aria-label="Resetar consumo de água"
                title="Resetar"
              >
                <RotateCcw size={18} strokeWidth={2} />
              </button>
            )}
          </div>

          {/* Barra de Progresso */}
          <div className={styles.progressBarContainer}>
            <div 
              className={styles.progressBar}
              role="progressbar"
              aria-valuenow={percentage}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${percentage}% da meta de água completa`}
            >
              <div 
                className={styles.progressBarFill}
                style={{ 
                  width: `${Math.min(percentage, 100)}%`,
                  backgroundColor: getProgressColor()
                }}
              />
            </div>
            <div className={styles.progressStats}>
              <span className={styles.percentage}>{percentage}%</span>
              {remaining > 0 && (
                <span className={styles.remaining}>
                  Faltam {(remaining / 1000).toFixed(1)}L
                </span>
              )}
              {percentage >= 100 && (
                <span className={styles.complete}>
                  <CheckCircle2 size={16} /> Meta atingida!
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Botões Rápidos de Adicionar Água */}
        <div className={styles.quickAddSection}>
          <h3 className={styles.sectionTitle}>Adicionar Água</h3>
          <div className={styles.waterSizes}>
            {WATER_SIZES.map((size) => (
              <button
                key={size.value}
                onClick={() => handleAddWater(size.value)}
                className={styles.waterButton}
                aria-label={`Adicionar ${size.label} de água`}
              >
                <span className={styles.waterIcon}>{size.icon}</span>
                <span className={styles.waterLabel}>{size.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Adicionar Quantidade Customizada */}
        <div className={styles.customSection}>
          <h3 className={styles.sectionTitle}>Quantidade Personalizada</h3>
          <div className={styles.customInput}>
            <input
              type="number"
              min="1"
              max="2000"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="Ex: 350"
              className={styles.customInputField}
              aria-label="Quantidade de água em ml"
            />
            <span className={styles.mlLabel}>ml</span>
            <button
              onClick={handleCustomAdd}
              className={styles.addButton}
              aria-label="Adicionar água"
            >
              <Plus size={20} strokeWidth={2} />
              Adicionar
            </button>
          </div>
        </div>

        {/* Dicas de Hidratação */}
        <div className={styles.tipsSection}>
          <h3 className={styles.tipsTitle}>💡 Dicas de Hidratação</h3>
          <ul className={styles.tipsList}>
            <li>Beba água ao acordar para ativar o metabolismo</li>
            <li>Mantenha uma garrafa sempre por perto</li>
            <li>Beba antes, durante e após o treino</li>
            <li>Urina clara = boa hidratação!</li>
          </ul>
        </div>
      </PageContainer>
    </>
  );
};

