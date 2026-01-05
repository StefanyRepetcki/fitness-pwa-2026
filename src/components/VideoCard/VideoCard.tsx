import type { Video } from '../../data/videos';
import styles from './VideoCard.module.css';

interface VideoCardProps {
  video: Video;
}

export const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{video.title}</h3>
        {video.duration && (
          <span className={styles.duration}>{video.duration}</span>
        )}
      </div>
      <p className={styles.description}>{video.description}</p>
      <div className={styles.videoContainer}>
        {video.type === 'youtube' ? (
          <iframe
            src={video.videoUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          />
        ) : (
          <video controls className={styles.video}>
            <source src={video.videoUrl} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        )}
      </div>
    </div>
  );
};

