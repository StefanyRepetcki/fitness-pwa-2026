import type { Meal } from '../../data/diet';
import styles from './DietCard.module.css';

interface DietCardProps {
  meal: Meal;
}

export const DietCard = ({ meal }: DietCardProps) => {
  const getMealIcon = (mealName: string) => {
    if (mealName.includes('Café')) return '☕';
    if (mealName.includes('Almoço')) return '🍽️';
    if (mealName.includes('Lanche')) return '🍎';
    if (mealName.includes('Jantar')) return '🌙';
    return '🍴';
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <span className={styles.icon}>{getMealIcon(meal.name)}</span>
          <h3 className={styles.title}>{meal.name}</h3>
        </div>
        {meal.calories && (
          <span className={styles.calories}>{meal.calories} kcal</span>
        )}
      </div>
      <ul className={styles.items}>
        {meal.items.map((item, index) => (
          <li key={index} className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

