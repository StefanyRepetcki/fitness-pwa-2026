import { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { 
  Plus, 
  Target, 
  X,
  Edit2,
  Trash2
} from 'lucide-react';
import {
  getDailyMacros,
  addMacroEntry,
  removeMacroEntry,
  updateMacroEntry,
  calculateDailyTotals,
  getMacroGoals,
  saveMacroGoals,
  type MacroEntry,
  type MacroGoals
} from '../../data/macros';
import { useToast } from '../../contexts/ToastContext';
import styles from './Macros.module.css';

const MEALS = [
  { id: 'breakfast', label: 'Café da Manhã', icon: '🌅' },
  { id: 'lunch', label: 'Almoço', icon: '🍽️' },
  { id: 'dinner', label: 'Jantar', icon: '🌙' },
  { id: 'snack', label: 'Lanche', icon: '🍎' }
];

export const Macros = () => {
  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState<string>(today);
  const [goals, setGoals] = useState<MacroGoals>(getMacroGoals());
  const [dailyMacros, setDailyMacros] = useState(getDailyMacros(selectedDate));
  const [totals, setTotals] = useState(calculateDailyTotals(selectedDate));
  const [showAddForm, setShowAddForm] = useState(false);
  const [showGoalsForm, setShowGoalsForm] = useState(false);
  const [editingEntry, setEditingEntry] = useState<MacroEntry | null>(null);
  const [selectedMeal, setSelectedMeal] = useState<string>('breakfast');
  const { showToast } = useToast();

  // Form states
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState<string>('');
  const [protein, setProtein] = useState<string>('');
  const [carbs, setCarbs] = useState<string>('');
  const [fat, setFat] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('100');
  const [unit, setUnit] = useState<string>('g');

  // Goals form states
  const [goalCalories, setGoalCalories] = useState<string>('');
  const [goalProtein, setGoalProtein] = useState<string>('');
  const [goalCarbs, setGoalCarbs] = useState<string>('');
  const [goalFat, setGoalFat] = useState<string>('');

  useEffect(() => {
    const daily = getDailyMacros(selectedDate);
    setDailyMacros(daily);
    setTotals(calculateDailyTotals(selectedDate));
    setGoals(getMacroGoals());
  }, [selectedDate]);

  const resetForm = () => {
    setFoodName('');
    setCalories('');
    setProtein('');
    setCarbs('');
    setFat('');
    setQuantity('100');
    setUnit('g');
    setSelectedMeal('breakfast');
    setEditingEntry(null);
    setShowAddForm(false);
  };

  const handleAddEntry = () => {
    if (!foodName || !calories) {
      showToast('Preencha pelo menos o nome do alimento e as calorias', 'error');
      return;
    }

    const entry: Omit<MacroEntry, 'id'> = {
      date: selectedDate,
      meal: selectedMeal,
      foodName,
      calories: parseFloat(calories.replace(',', '.')) || 0,
      protein: parseFloat(protein.replace(',', '.')) || 0,
      carbs: parseFloat(carbs.replace(',', '.')) || 0,
      fat: parseFloat(fat.replace(',', '.')) || 0,
      quantity: parseFloat(quantity.replace(',', '.')) || 100,
      unit
    };

    if (editingEntry) {
      updateMacroEntry(editingEntry.id, entry);
      showToast('Alimento atualizado com sucesso!', 'success');
    } else {
      addMacroEntry(entry);
      showToast('Alimento adicionado com sucesso!', 'success');
    }

    resetForm();
    const daily = getDailyMacros(selectedDate);
    setDailyMacros(daily);
    setTotals(calculateDailyTotals(selectedDate));
  };

  const handleDeleteEntry = (id: string) => {
    if (window.confirm('Tem certeza que deseja remover este alimento?')) {
      removeMacroEntry(id);
      const daily = getDailyMacros(selectedDate);
      setDailyMacros(daily);
      setTotals(calculateDailyTotals(selectedDate));
      showToast('Alimento removido com sucesso!', 'success');
    }
  };

  const handleEditEntry = (entry: MacroEntry) => {
    setEditingEntry(entry);
    setFoodName(entry.foodName);
    setCalories(entry.calories.toString());
    setProtein(entry.protein.toString());
    setCarbs(entry.carbs.toString());
    setFat(entry.fat.toString());
    setQuantity(entry.quantity.toString());
    setUnit(entry.unit);
    setSelectedMeal(entry.meal);
    setShowAddForm(true);
  };

  const handleSaveGoals = () => {
    const newGoals: MacroGoals = {
      calories: parseFloat(goalCalories.replace(',', '.')) || goals.calories,
      protein: parseFloat(goalProtein.replace(',', '.')) || goals.protein,
      carbs: parseFloat(goalCarbs.replace(',', '.')) || goals.carbs,
      fat: parseFloat(goalFat.replace(',', '.')) || goals.fat
    };

    saveMacroGoals(newGoals);
    setGoals(newGoals);
    setTotals(calculateDailyTotals(selectedDate));
    setShowGoalsForm(false);
    showToast('Metas atualizadas com sucesso!', 'success');
  };

  const openGoalsForm = () => {
    setGoalCalories(goals.calories.toString());
    setGoalProtein(goals.protein.toString());
    setGoalCarbs(goals.carbs.toString());
    setGoalFat(goals.fat.toString());
    setShowGoalsForm(true);
  };

  const getMealEntries = (mealId: string) => {
    return dailyMacros.entries.filter(e => e.meal === mealId);
  };

  const getPercentage = (current: number, goal: number) => {
    if (goal === 0) return 0;
    return Math.min(100, Math.round((current / goal) * 100));
  };


  return (
    <>
      <Header title="Controle de Macros" />
      <PageContainer>
        {/* Seção de Metas */}
        <div className={styles.goalsSection}>
          <div className={styles.goalsHeader}>
            <div className={styles.goalsTitleGroup}>
              <Target className={styles.goalsIcon} size={24} strokeWidth={2} />
              <h2 className={styles.goalsTitle}>Metas Diárias</h2>
            </div>
            <button
              onClick={openGoalsForm}
              className={styles.editGoalsButton}
              aria-label="Editar metas"
            >
              <Edit2 size={18} strokeWidth={2} />
              Editar
            </button>
          </div>

          {showGoalsForm ? (
            <div className={styles.goalsForm}>
              <div className={styles.goalsFormGrid}>
                <div className={styles.formGroup}>
                  <label>Calorias (kcal)</label>
                  <input
                    type="number"
                    value={goalCalories}
                    onChange={(e) => setGoalCalories(e.target.value)}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Proteína (g)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={goalProtein}
                    onChange={(e) => setGoalProtein(e.target.value)}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Carboidratos (g)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={goalCarbs}
                    onChange={(e) => setGoalCarbs(e.target.value)}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Gorduras (g)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={goalFat}
                    onChange={(e) => setGoalFat(e.target.value)}
                    className={styles.formInput}
                  />
                </div>
              </div>
              <div className={styles.goalsFormActions}>
                <button onClick={handleSaveGoals} className={styles.saveButton}>
                  Salvar
                </button>
                <button
                  onClick={() => setShowGoalsForm(false)}
                  className={styles.cancelButton}
                >
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.goalsDisplay}>
              <div className={styles.goalCard}>
                <div className={styles.goalLabel}>Calorias</div>
                <div className={styles.goalValue}>{goals.calories} kcal</div>
              </div>
              <div className={styles.goalCard}>
                <div className={styles.goalLabel}>Proteína</div>
                <div className={styles.goalValue}>{goals.protein}g</div>
              </div>
              <div className={styles.goalCard}>
                <div className={styles.goalLabel}>Carboidratos</div>
                <div className={styles.goalValue}>{goals.carbs}g</div>
              </div>
              <div className={styles.goalCard}>
                <div className={styles.goalLabel}>Gorduras</div>
                <div className={styles.goalValue}>{goals.fat}g</div>
              </div>
            </div>
          )}
        </div>

        {/* Seletor de Data */}
        <div className={styles.dateSelector}>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            max={today}
            className={styles.dateInput}
          />
        </div>

        {/* Resumo do Dia */}
        <div className={styles.summarySection}>
          <h3 className={styles.summaryTitle}>Resumo do Dia</h3>
          <div className={styles.macroBars}>
            {/* Calorias */}
            <div className={styles.macroBar}>
              <div className={styles.macroBarHeader}>
                <span className={styles.macroBarLabel}>Calorias</span>
                <span className={styles.macroBarValue}>
                  {totals.calories.toFixed(0)} / {totals.goals.calories} kcal
                </span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{
                    width: `${getPercentage(totals.calories, totals.goals.calories)}%`,
                    backgroundColor: totals.remaining.calories < 0 
                      ? 'var(--color-error)' 
                      : totals.remaining.calories < totals.goals.calories * 0.1
                      ? 'var(--color-warning)'
                      : 'var(--color-primary)'
                  }}
                />
              </div>
              <div className={styles.macroBarFooter}>
                <span className={styles.remaining}>
                  {totals.remaining.calories >= 0 ? '+' : ''}
                  {totals.remaining.calories.toFixed(0)} kcal
                </span>
              </div>
            </div>

            {/* Proteína */}
            <div className={styles.macroBar}>
              <div className={styles.macroBarHeader}>
                <span className={styles.macroBarLabel}>Proteína</span>
                <span className={styles.macroBarValue}>
                  {totals.protein.toFixed(1)} / {totals.goals.protein}g
                </span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{
                    width: `${getPercentage(totals.protein, totals.goals.protein)}%`,
                    backgroundColor: totals.remaining.protein < 0 
                      ? 'var(--color-error)' 
                      : totals.remaining.protein < totals.goals.protein * 0.1
                      ? 'var(--color-warning)'
                      : 'var(--color-success)'
                  }}
                />
              </div>
              <div className={styles.macroBarFooter}>
                <span className={styles.remaining}>
                  {totals.remaining.protein >= 0 ? '+' : ''}
                  {totals.remaining.protein.toFixed(1)}g
                </span>
              </div>
            </div>

            {/* Carboidratos */}
            <div className={styles.macroBar}>
              <div className={styles.macroBarHeader}>
                <span className={styles.macroBarLabel}>Carboidratos</span>
                <span className={styles.macroBarValue}>
                  {totals.carbs.toFixed(1)} / {totals.goals.carbs}g
                </span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{
                    width: `${getPercentage(totals.carbs, totals.goals.carbs)}%`,
                    backgroundColor: totals.remaining.carbs < 0 
                      ? 'var(--color-error)' 
                      : totals.remaining.carbs < totals.goals.carbs * 0.1
                      ? 'var(--color-warning)'
                      : 'var(--color-primary)'
                  }}
                />
              </div>
              <div className={styles.macroBarFooter}>
                <span className={styles.remaining}>
                  {totals.remaining.carbs >= 0 ? '+' : ''}
                  {totals.remaining.carbs.toFixed(1)}g
                </span>
              </div>
            </div>

            {/* Gorduras */}
            <div className={styles.macroBar}>
              <div className={styles.macroBarHeader}>
                <span className={styles.macroBarLabel}>Gorduras</span>
                <span className={styles.macroBarValue}>
                  {totals.fat.toFixed(1)} / {totals.goals.fat}g
                </span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{
                    width: `${getPercentage(totals.fat, totals.goals.fat)}%`,
                    backgroundColor: totals.remaining.fat < 0 
                      ? 'var(--color-error)' 
                      : totals.remaining.fat < totals.goals.fat * 0.1
                      ? 'var(--color-warning)'
                      : 'var(--color-primary)'
                  }}
                />
              </div>
              <div className={styles.macroBarFooter}>
                <span className={styles.remaining}>
                  {totals.remaining.fat >= 0 ? '+' : ''}
                  {totals.remaining.fat.toFixed(1)}g
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário de Adicionar Alimento */}
        {showAddForm && (
          <div className={styles.addFormSection}>
            <div className={styles.addFormHeader}>
              <h3 className={styles.addFormTitle}>
                {editingEntry ? 'Editar Alimento' : 'Adicionar Alimento'}
              </h3>
              <button
                onClick={resetForm}
                className={styles.closeButton}
                aria-label="Fechar formulário"
              >
                <X size={20} strokeWidth={2} />
              </button>
            </div>

            <div className={styles.addForm}>
              <div className={styles.formGroup}>
                <label>Refeição</label>
                <select
                  value={selectedMeal}
                  onChange={(e) => setSelectedMeal(e.target.value)}
                  className={styles.formInput}
                >
                  {MEALS.map(meal => (
                    <option key={meal.id} value={meal.id}>
                      {meal.icon} {meal.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Nome do Alimento</label>
                <input
                  type="text"
                  value={foodName}
                  onChange={(e) => setFoodName(e.target.value)}
                  placeholder="Ex: Frango grelhado"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Quantidade</label>
                  <input
                    type="number"
                    step="0.1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Unidade</label>
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className={styles.formInput}
                  >
                    <option value="g">g (gramas)</option>
                    <option value="ml">ml (mililitros)</option>
                    <option value="unidade">unidade</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Calorias (kcal)</label>
                <input
                  type="number"
                  step="0.1"
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Proteína (g)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={protein}
                    onChange={(e) => setProtein(e.target.value)}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Carboidratos (g)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={carbs}
                    onChange={(e) => setCarbs(e.target.value)}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Gorduras (g)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={fat}
                    onChange={(e) => setFat(e.target.value)}
                    className={styles.formInput}
                  />
                </div>
              </div>

              <button
                onClick={handleAddEntry}
                className={styles.submitButton}
                disabled={!foodName || !calories}
              >
                {editingEntry ? 'Atualizar' : 'Adicionar'}
              </button>
            </div>
          </div>
        )}

        {/* Lista de Refeições */}
        <div className={styles.mealsSection}>
          {MEALS.map(meal => {
            const mealEntries = getMealEntries(meal.id);
            const mealTotals = mealEntries.reduce(
              (acc, e) => ({
                calories: acc.calories + e.calories,
                protein: acc.protein + e.protein,
                carbs: acc.carbs + e.carbs,
                fat: acc.fat + e.fat
              }),
              { calories: 0, protein: 0, carbs: 0, fat: 0 }
            );

            return (
              <div key={meal.id} className={styles.mealCard}>
                <div className={styles.mealHeader}>
                  <div className={styles.mealTitleGroup}>
                    <span className={styles.mealIcon}>{meal.icon}</span>
                    <h3 className={styles.mealTitle}>{meal.label}</h3>
                  </div>
                  {mealTotals.calories > 0 && (
                    <div className={styles.mealTotal}>
                      {mealTotals.calories.toFixed(0)} kcal
                    </div>
                  )}
                </div>

                {mealEntries.length > 0 && (
                  <div className={styles.mealTotals}>
                    <span>P: {mealTotals.protein.toFixed(1)}g</span>
                    <span>C: {mealTotals.carbs.toFixed(1)}g</span>
                    <span>G: {mealTotals.fat.toFixed(1)}g</span>
                  </div>
                )}

                <div className={styles.mealEntries}>
                  {mealEntries.map(entry => (
                    <div key={entry.id} className={styles.entryCard}>
                      <div className={styles.entryContent}>
                        <div className={styles.entryName}>{entry.foodName}</div>
                        <div className={styles.entryDetails}>
                          <span>{entry.quantity}{entry.unit}</span>
                          <span>•</span>
                          <span>{entry.calories.toFixed(0)} kcal</span>
                        </div>
                        <div className={styles.entryMacros}>
                          <span>P: {entry.protein.toFixed(1)}g</span>
                          <span>C: {entry.carbs.toFixed(1)}g</span>
                          <span>G: {entry.fat.toFixed(1)}g</span>
                        </div>
                      </div>
                      <div className={styles.entryActions}>
                        <button
                          onClick={() => handleEditEntry(entry)}
                          className={styles.editButton}
                          aria-label="Editar alimento"
                        >
                          <Edit2 size={16} strokeWidth={2} />
                        </button>
                        <button
                          onClick={() => handleDeleteEntry(entry.id)}
                          className={styles.deleteButton}
                          aria-label="Remover alimento"
                        >
                          <Trash2 size={16} strokeWidth={2} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setSelectedMeal(meal.id);
                    setShowAddForm(true);
                  }}
                  className={styles.addMealButton}
                >
                  <Plus size={18} strokeWidth={2} />
                  Adicionar alimento
                </button>
              </div>
            );
          })}
        </div>

        {/* Botão Flutuante */}
        {!showAddForm && (
          <button
            onClick={() => setShowAddForm(true)}
            className={styles.fabButton}
            aria-label="Adicionar alimento"
          >
            <Plus size={24} strokeWidth={2} />
          </button>
        )}
      </PageContainer>
    </>
  );
};

