import { useState } from 'react';
import type { Meal } from '../../data/meals';
import styles from './MealCard.module.css';

interface MealCardProps {
  meal: Meal;
}

export const MealCard = ({ meal }: MealCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className={styles.card}>
      <button
        className={styles.header}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isExpanded}
        aria-controls={`meal-content-${meal.id}`}
        aria-label={`${isExpanded ? 'Fechar' : 'Abrir'} detalhes de ${meal.name}`}
      >
        <div className={styles.headerContent}>
          <span className={styles.icon} aria-hidden="true">{meal.icon}</span>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>{meal.name}</h3>
            {meal.idealTime && (
              <span className={styles.idealTime} aria-label={`Horário ideal: ${meal.idealTime}`}>
                ⏰ {meal.idealTime}
              </span>
            )}
          </div>
        </div>
        <span 
          className={`${styles.arrow} ${isExpanded ? styles.expanded : ''}`}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>
      
      {isExpanded && (
        <div 
          id={`meal-content-${meal.id}`}
          className={styles.content}
          role="region"
          aria-labelledby={`meal-title-${meal.id}`}
        >
          {meal.macros && (
            <div className={styles.macros}>
              <h4 className={styles.macrosTitle}>Macronutrientes</h4>
              <div className={styles.macrosGrid}>
                <div className={styles.macroItem}>
                  <span className={styles.macroLabel}>Calorias</span>
                  <span className={styles.macroValue}>{meal.macros.calories} kcal</span>
                </div>
                <div className={styles.macroItem}>
                  <span className={styles.macroLabel}>Proteína</span>
                  <span className={styles.macroValue}>{meal.macros.protein}g</span>
                </div>
                <div className={styles.macroItem}>
                  <span className={styles.macroLabel}>Carboidratos</span>
                  <span className={styles.macroValue}>{meal.macros.carbs}g</span>
                </div>
                <div className={styles.macroItem}>
                  <span className={styles.macroLabel}>Gorduras</span>
                  <span className={styles.macroValue}>{meal.macros.fat}g</span>
                </div>
              </div>
            </div>
          )}
          <ul className={styles.foodsList}>
            {meal.foods.map((food) => (
              <li key={food.id} className={styles.foodItem}>
                <div className={styles.foodMain}>
                  <span className={styles.foodName}>{food.name}</span>
                  <span className={styles.foodQuantity}>{food.quantity}</span>
                </div>
                {food.notes && (
                  <p className={styles.foodNotes}>{food.notes}</p>
                )}
                {food.alternatives && food.alternatives.length > 0 && (
                  <div className={styles.alternatives}>
                    <span className={styles.alternativesLabel}>ou</span>
                    <div className={styles.alternativesList}>
                      {food.alternatives.map((alt, index) => (
                        <span key={index} className={styles.alternative}>
                          {alt}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          {meal.supplements && meal.supplements.length > 0 && (
            <div className={styles.supplements}>
              <h4 className={styles.supplementsTitle}>💊 Suplementos</h4>
              <ul className={styles.supplementsList}>
                {meal.supplements.map((supplement) => (
                  <li key={supplement.id} className={styles.supplementItem}>
                    <span className={styles.supplementName}>{supplement.name}</span>
                    <span className={styles.supplementDosage}>{supplement.dosage}</span>
                    {supplement.notes && (
                      <span className={styles.supplementNotes}>{supplement.notes}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {meal.notes && (
            <div className={styles.mealNotes}>
              <span className={styles.notesIcon} aria-hidden="true">💡</span>
              <span className={styles.notesText}>{meal.notes}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
