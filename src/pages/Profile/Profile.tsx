import { useState, useEffect, useMemo } from 'react';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { Target, TrendingDown, TrendingUp, Plus, Calendar } from 'lucide-react';
import { 
  getWeightProfile, 
  updateCurrentWeight, 
  updateTargetWeight, 
  addWeightEntry
} from '../../data/weight';
import { MacroCalculator } from '../../components/MacroCalculator/MacroCalculator';
import { NotificationSettings } from '../../components/NotificationSettings/NotificationSettings';
import { validateWeight, ValidationError } from '../../utils/validation';
import { useToast } from '../../contexts/ToastContext';
import styles from './Profile.module.css';

export const Profile = () => {
  const [profile, setProfile] = useState(getWeightProfile());
  const [currentWeightInput, setCurrentWeightInput] = useState<string>('');
  const [targetWeightInput, setTargetWeightInput] = useState<string>('');
  const [showAddWeight, setShowAddWeight] = useState(false);
  const [newWeightDate, setNewWeightDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [newWeightValue, setNewWeightValue] = useState<string>('');
  const { showToast } = useToast();

  // Recalcular sempre que o profile mudar
  const weightDifference = useMemo(() => {
    if (profile.currentWeight !== null && profile.targetWeight !== null) {
      return profile.targetWeight - profile.currentWeight;
    }
    return null;
  }, [profile.currentWeight, profile.targetWeight]);

  const history = useMemo(() => {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 30);
    
    return profile.entries
      .filter(entry => {
        const entryDate = new Date(entry.date);
        return entryDate >= cutoffDate;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [profile.entries]);

  // Histórico completo para exibição (todos os registros, ordenados do mais recente para o mais antigo)
  const allHistory = useMemo(() => {
    return [...profile.entries].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [profile.entries]);

  useEffect(() => {
    setProfile(getWeightProfile());
  }, []);

  const handleUpdateCurrentWeight = () => {
    try {
      const weight = parseFloat(currentWeightInput.replace(',', '.'));
      validateWeight(weight);
      updateCurrentWeight(weight);
      setProfile(getWeightProfile());
      setCurrentWeightInput('');
      showToast('Peso atual atualizado com sucesso!', 'success');
    } catch (error) {
      if (error instanceof ValidationError) {
        showToast(error.message, 'error');
      } else {
        showToast('Erro ao atualizar peso', 'error');
      }
    }
  };

  const handleUpdateTargetWeight = () => {
    try {
      const weight = parseFloat(targetWeightInput.replace(',', '.'));
      validateWeight(weight);
      updateTargetWeight(weight);
      setProfile(getWeightProfile());
      setTargetWeightInput('');
      showToast('Peso desejado atualizado com sucesso!', 'success');
    } catch (error) {
      if (error instanceof ValidationError) {
        showToast(error.message, 'error');
      } else {
        showToast('Erro ao atualizar peso desejado', 'error');
      }
    }
  };

  const handleAddWeightEntry = () => {
    try {
      const weight = parseFloat(newWeightValue.replace(',', '.'));
      validateWeight(weight);
      addWeightEntry(weight, newWeightDate);
      setProfile(getWeightProfile());
      setNewWeightValue('');
      setShowAddWeight(false);
      showToast('Peso registrado com sucesso!', 'success');
    } catch (error) {
      if (error instanceof ValidationError) {
        showToast(error.message, 'error');
      } else {
        showToast('Erro ao registrar peso', 'error');
      }
    }
  };

  // Preparar dados para o gráfico
  const chartData = history.length > 0 ? history : 
    (profile.currentWeight ? [{
      id: 'current',
      date: new Date().toISOString().split('T')[0],
      weight: profile.currentWeight
    }] : []);

  const minWeight = chartData.length > 0 
    ? Math.min(...chartData.map(d => d.weight), profile.targetWeight || Infinity) - 2
    : (profile.currentWeight || 0) - 2;
  const maxWeight = chartData.length > 0
    ? Math.max(...chartData.map(d => d.weight), profile.targetWeight || 0) + 2
    : (profile.currentWeight || 0) + 2;
  const weightRange = maxWeight - minWeight || 1;

  return (
    <>
      <Header title="Meu Perfil" />
      <PageContainer>
        <div className={styles.intro}>
          <p>Acompanhe sua evolução e controle seu peso</p>
        </div>

        {/* Cards de Peso */}
        <div className={styles.weightCards}>
          {/* Peso Atual */}
          <div className={styles.weightCard}>
            <div className={styles.cardHeader}>
              <Target className={styles.cardIcon} size={24} strokeWidth={2} />
              <h3 className={styles.cardTitle}>Peso Atual</h3>
            </div>
            <div className={styles.cardContent}>
              {profile.currentWeight ? (
                <div className={styles.weightValue}>
                  <span className={styles.weightNumber}>{profile.currentWeight.toFixed(1)}</span>
                  <span className={styles.weightUnit}>kg</span>
                </div>
              ) : (
                <p className={styles.noData}>Não informado</p>
              )}
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  step="0.1"
                  min="1"
                  max="500"
                  placeholder="Ex: 65.5"
                  value={currentWeightInput}
                  onChange={(e) => setCurrentWeightInput(e.target.value)}
                  className={styles.weightInput}
                  aria-label="Peso atual em quilogramas"
                />
                <button
                  onClick={handleUpdateCurrentWeight}
                  className={styles.updateButton}
                  aria-label="Atualizar peso atual"
                >
                  Atualizar
                </button>
              </div>
            </div>
          </div>

          {/* Peso Desejado */}
          <div className={styles.weightCard}>
            <div className={styles.cardHeader}>
              <Target className={styles.cardIcon} size={24} strokeWidth={2} />
              <h3 className={styles.cardTitle}>Peso Desejado</h3>
            </div>
            <div className={styles.cardContent}>
              {profile.targetWeight ? (
                <div className={styles.weightValue}>
                  <span className={styles.weightNumber}>{profile.targetWeight.toFixed(1)}</span>
                  <span className={styles.weightUnit}>kg</span>
                </div>
              ) : (
                <p className={styles.noData}>Não informado</p>
              )}
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  step="0.1"
                  min="1"
                  max="500"
                  placeholder="Ex: 60.0"
                  value={targetWeightInput}
                  onChange={(e) => setTargetWeightInput(e.target.value)}
                  className={styles.weightInput}
                  aria-label="Peso desejado em quilogramas"
                />
                <button
                  onClick={handleUpdateTargetWeight}
                  className={styles.updateButton}
                  aria-label="Atualizar peso desejado"
                >
                  Atualizar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card "Faltam X KGs" */}
        {weightDifference !== null && (
          <div className={`${styles.differenceCard} ${weightDifference > 0 ? styles.positive : weightDifference < 0 ? styles.negative : styles.neutral}`}>
            <div className={styles.differenceContent}>
              {weightDifference > 0 ? (
                <TrendingDown className={styles.differenceIcon} size={32} strokeWidth={2} />
              ) : weightDifference < 0 ? (
                <TrendingUp className={styles.differenceIcon} size={32} strokeWidth={2} />
              ) : (
                <Target className={styles.differenceIcon} size={32} strokeWidth={2} />
              )}
              <div className={styles.differenceText}>
                <h2 className={styles.differenceTitle}>
                  {weightDifference > 0 
                    ? `Faltam ${Math.abs(weightDifference).toFixed(1)} kg`
                    : weightDifference < 0
                    ? `${Math.abs(weightDifference).toFixed(1)} kg a mais`
                    : 'Meta alcançada!'}
                </h2>
                <p className={styles.differenceSubtitle}>
                  {weightDifference > 0 
                    ? 'para alcançar seu peso desejado'
                    : weightDifference < 0
                    ? 'que seu peso desejado'
                    : 'Parabéns! Você alcançou sua meta!'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Gráfico */}
        {(profile.currentWeight || profile.targetWeight || chartData.length > 0) && (
          <div className={styles.chartSection}>
            <h2 className={styles.chartTitle}>Evolução do Peso</h2>
            <div className={styles.chartContainer}>
              <div className={styles.chart}>
                {/* Linha de referência - Peso Desejado */}
                {profile.targetWeight && (
                  <div 
                    className={styles.targetLine}
                    style={{
                      bottom: `${((profile.targetWeight - minWeight) / weightRange) * 100}%`
                    }}
                  >
                    <span className={styles.targetLabel}>Meta: {profile.targetWeight.toFixed(1)}kg</span>
                  </div>
                )}

                {/* Linha de referência - Peso Atual */}
                {profile.currentWeight && (
                  <div 
                    className={styles.currentLine}
                    style={{
                      bottom: `${((profile.currentWeight - minWeight) / weightRange) * 100}%`
                    }}
                  >
                    <span className={styles.currentLabel}>Atual: {profile.currentWeight.toFixed(1)}kg</span>
                  </div>
                )}

                {/* Pontos do histórico */}
                {chartData.map((entry, index) => {
                  const height = ((entry.weight - minWeight) / weightRange) * 100;
                  const isToday = entry.date === new Date().toISOString().split('T')[0];
                  
                  return (
                    <div
                      key={entry.id}
                      className={`${styles.chartPoint} ${isToday ? styles.today : ''}`}
                      style={{
                        left: `${(index / Math.max(chartData.length - 1, 1)) * 100}%`,
                        bottom: `${height}%`
                      }}
                      title={`${entry.date}: ${entry.weight.toFixed(1)}kg`}
                    >
                      <div className={styles.pointValue}>{entry.weight.toFixed(1)}</div>
                    </div>
                  );
                })}

                {/* Linha conectando os pontos */}
                {chartData.length > 1 && (
                  <svg className={styles.chartLine} viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polyline
                      points={chartData.map((entry, index) => {
                        const x = (index / Math.max(chartData.length - 1, 1)) * 100;
                        const y = 100 - (((entry.weight - minWeight) / weightRange) * 100);
                        return `${x},${y}`;
                      }).join(' ')}
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              {/* Eixo Y (peso) */}
              <div className={styles.chartYAxis}>
                <span>{maxWeight.toFixed(1)}</span>
                <span>{((maxWeight + minWeight) / 2).toFixed(1)}</span>
                <span>{minWeight.toFixed(1)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Calculadora de Macros */}
        <div className={styles.macroCalculatorSection}>
          <MacroCalculator currentWeight={profile.currentWeight} />
        </div>

        {/* Configurações de Notificações */}
        <div className={styles.notificationSection}>
          <NotificationSettings />
        </div>

        {/* Controle de Peso */}
        <div className={styles.weightControl}>
          <div className={styles.controlHeader}>
            <h2 className={styles.controlTitle}>Registrar Peso</h2>
            <button
              onClick={() => setShowAddWeight(!showAddWeight)}
              className={styles.addButton}
              aria-label={showAddWeight ? 'Fechar formulário' : 'Adicionar novo peso'}
            >
              <Plus size={20} strokeWidth={2} />
              {showAddWeight ? 'Cancelar' : 'Adicionar'}
            </button>
          </div>

          {showAddWeight && (
            <div className={styles.addWeightForm}>
              <div className={styles.formGroup}>
                <label htmlFor="weight-date" className={styles.formLabel}>
                  <Calendar size={18} strokeWidth={2} />
                  Data
                </label>
                <input
                  id="weight-date"
                  type="date"
                  value={newWeightDate}
                  onChange={(e) => setNewWeightDate(e.target.value)}
                  max={new Date().toISOString().split('T')[0]}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="weight-value" className={styles.formLabel}>
                  <Target size={18} strokeWidth={2} />
                  Peso (kg)
                </label>
                <input
                  id="weight-value"
                  type="number"
                  step="0.1"
                  min="1"
                  max="500"
                  placeholder="Ex: 65.5"
                  value={newWeightValue}
                  onChange={(e) => setNewWeightValue(e.target.value)}
                  className={styles.formInput}
                />
              </div>
              <button
                onClick={handleAddWeightEntry}
                className={styles.submitButton}
                disabled={!newWeightValue}
              >
                Registrar Peso
              </button>
            </div>
          )}

          {/* Histórico recente */}
          {allHistory.length > 0 && (
            <div className={styles.historySection}>
              <h3 className={styles.historyTitle}>Histórico Recente</h3>
              <div className={styles.historyList}>
                {allHistory.slice(0, 7).map((entry) => {
                  const entryDate = new Date(entry.date);
                  const isToday = entry.date === new Date().toISOString().split('T')[0];
                  const isYesterday = entry.date === new Date(Date.now() - 86400000).toISOString().split('T')[0];
                  
                  let dateLabel = '';
                  if (isToday) dateLabel = 'Hoje';
                  else if (isYesterday) dateLabel = 'Ontem';
                  else dateLabel = entryDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });

                  return (
                    <div key={entry.id} className={styles.historyItem}>
                      <div className={styles.historyDate}>{dateLabel}</div>
                      <div className={styles.historyWeight}>{entry.weight.toFixed(1)} kg</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </PageContainer>
    </>
  );
};

