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
          <div className={styles.notFound} role="alert">
            <h2>Treino não encontrado</h2>
            <p>O treino que você está procurando não existe ou foi removido.</p>
            <Link to="/" className={styles.backLink}>
              <span>←</span> Voltar para treinos
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
        <section className={styles.exercises} aria-labelledby="exercises-title">
          <h2 id="exercises-title" className={styles.sectionTitle}>Exercícios</h2>
          <ExerciseList exercises={workout.exercises} />
        </section>
        <nav aria-label="Navegação">
          <Link to="/" className={styles.backLink}>
            <span>←</span> Voltar para treinos
          </Link>
        </nav>
      </PageContainer>
    </>
  );
};
