import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { DietCard } from '../../components/DietCard/DietCard';
import { diet, type DietDay } from '../../data/diet';
import styles from './Diet.module.css';

export const Diet = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const selectedDiet = diet[selectedDay];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedDay(index);
    }
  };

  return (
    <>
      <Header title="Dieta" />
      <PageContainer>
        <div className={styles.intro}>
          <p>Plano alimentar equilibrado para seus objetivos 🥗</p>
        </div>
        
        <div className={styles.daySelector} role="tablist" aria-label="Selecionar dia da semana">
          {diet.map((plan: DietDay, index: number) => (
            <button
              key={plan.id}
              className={`${styles.dayButton} ${selectedDay === index ? styles.active : ''}`}
              onClick={() => setSelectedDay(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              role="tab"
              aria-selected={selectedDay === index}
              aria-controls={`diet-${plan.id}`}
            >
              {plan.day.split('-')[0]}
            </button>
          ))}
        </div>

        <div className={styles.meals} role="tabpanel" id={`diet-${selectedDiet?.id}`}>
          <h2 className={styles.dayTitle}>{selectedDiet?.day}</h2>
          {selectedDiet?.meals.map((meal) => (
            <DietCard key={meal.id} meal={meal} />
          ))}
        </div>
      </PageContainer>
    </>
  );
};
