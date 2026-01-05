import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { DietCard } from '../../components/DietCard/DietCard';
import { diet } from '../../data/diet';
import styles from './Diet.module.css';

export const Diet = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const selectedDiet = diet[selectedDay];

  return (
    <>
      <Header title="Dieta" />
      <PageContainer>
        <div className={styles.intro}>
          <p>Plano alimentar equilibrado para seus objetivos 🥗</p>
        </div>
        
        <div className={styles.daySelector}>
          {diet.map((day, index) => (
            <button
              key={day.id}
              className={`${styles.dayButton} ${
                selectedDay === index ? styles.active : ''
              }`}
              onClick={() => setSelectedDay(index)}
            >
              {day.day.split('-')[0]}
            </button>
          ))}
        </div>

        <div className={styles.meals}>
          <h2 className={styles.dayTitle}>{selectedDiet.day}</h2>
          {selectedDiet.meals.map((meal) => (
            <DietCard key={meal.id} meal={meal} />
          ))}
        </div>
      </PageContainer>
    </>
  );
};

