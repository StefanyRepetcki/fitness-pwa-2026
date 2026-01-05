import { useState } from 'react';
import type { Meal } from '../../data/meals';
import styles from './MealCard.module.css';

interface MealCardProps {
  meal: Meal;
}

export const MealCard = ({ meal }: MealCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.card}>
      <button
        className={styles.header}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <div className={styles.headerContent}>
          <span className={styles.icon}>{meal.icon}</span>
          <h3 className={styles.title}>{meal.name}</h3>
        </div>
        <span className={`${styles.arrow} ${isExpanded ? styles.expanded : ''}`}>
          ▼
        </span>
      </button>
      
      {isExpanded && (
        <div className={styles.content}>
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
          {meal.notes && (
            <div className={styles.mealNotes}>
              <span className={styles.notesIcon}>💡</span>
              <span className={styles.notesText}>{meal.notes}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

