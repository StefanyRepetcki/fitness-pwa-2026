import { useParams, Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { ExerciseList } from '../../components/ExerciseList/ExerciseList';
import { workouts } from '../../data/workouts';
import styles from './WorkoutDetail.module.css';

export const WorkoutDetail = () => {
  const { id } = useParams<{ id: string }>();
  const workout = workouts.find((w) => w.id === id);

  if (!workout) {
    return (
      <>
        <Header title="Treino não encontrado" />
        <PageContainer>
          <div className={styles.notFound}>
            <p>Treino não encontrado.</p>
            <Link to="/" className={styles.backLink}>
              ← Voltar para treinos
            </Link>
          </div>
        </PageContainer>
      </>
    );
  }

  return (
    <>
      <Header title={workout.name} />
      <PageContainer>
        <div className={styles.description}>
          <p>{workout.description}</p>
        </div>
        <div className={styles.exercises}>
          <h2 className={styles.sectionTitle}>Exercícios</h2>
          <ExerciseList exercises={workout.exercises} />
        </div>
        <Link to="/" className={styles.backLink}>
          ← Voltar para treinos
        </Link>
      </PageContainer>
    </>
  );
};

