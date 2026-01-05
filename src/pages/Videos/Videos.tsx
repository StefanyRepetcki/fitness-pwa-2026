import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { VideoCard } from '../../components/VideoCard/VideoCard';
import { videos } from '../../data/videos';
import styles from './Videos.module.css';

export const Videos = () => {
  return (
    <>
      <Header title="Vídeos e Dúvidas" />
      <PageContainer>
        <div className={styles.intro}>
          <p>Tire suas dúvidas sobre execução de exercícios 🎥</p>
        </div>
        {videos.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Nenhum vídeo disponível no momento.</p>
          </div>
        ) : (
          <div className={styles.videosList} role="list">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </PageContainer>
    </>
  );
};
