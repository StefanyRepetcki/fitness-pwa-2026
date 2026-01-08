import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { MealCard } from '../../components/MealCard/MealCard';
import { mealPlans } from '../../data/meals';
import { mealPlansMale } from '../../data/mealsMale';
import { useProfile } from '../../contexts/ProfileContext';
import styles from './Nutrition.module.css';

export const Nutrition = () => {
  const { profileType } = useProfile();
  const currentMealPlans = profileType === 'male' ? mealPlansMale : mealPlans;
  const selectedPlan = currentMealPlans[0];

  return (
    <>
      <Header title="Plano Alimentar" />
      <PageContainer>
        <div className={styles.intro}>
          <p>Organize seu ciclo alimentar de forma prática e eficiente 🍽️</p>
        </div>

        <div className={styles.meals}>
          <h2 className={styles.dayTitle}>{selectedPlan.day}</h2>
          {selectedPlan.meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </PageContainer>
    </>
  );
};

