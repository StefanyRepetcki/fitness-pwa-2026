import { useState } from 'react';
import { Music2, Lightbulb, RefreshCw, Dumbbell, UtensilsCrossed, Pill, Moon, Sparkles } from 'lucide-react';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { tips, quotes, spotifyPlaylistFemale, spotifyPlaylistMale } from '../../data/tips';
import { useProfile } from '../../contexts/ProfileContext';
import styles from './Tips.module.css';

export const Tips = () => {
  const { profileType } = useProfile();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  
  const spotifyPlaylist = profileType === 'male' ? spotifyPlaylistMale : spotifyPlaylistFemale;

  const categories = [
    { id: 'all', label: 'Todas', icon: Sparkles },
    { id: 'treino', label: 'Treino', icon: Dumbbell },
    { id: 'alimentacao', label: 'Alimentação', icon: UtensilsCrossed },
    { id: 'suplementacao', label: 'Suplementação', icon: Pill },
    { id: 'recuperacao', label: 'Recuperação', icon: Moon },
    { id: 'motivacao', label: 'Motivação', icon: Lightbulb }
  ];

  const filteredTips = selectedCategory === 'all' 
    ? tips 
    : tips.filter(tip => tip.category === selectedCategory);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <>
      <Header title="Dicas & Motivação" />
      <PageContainer>
        <div className={styles.intro}>
          <p>Inspiração e conhecimento para seu ciclo completo</p>
        </div>

        {/* Playlist do Spotify */}
        <div className={styles.playlistCard}>
          <div className={styles.playlistHeader}>
            <Music2 className={styles.playlistIcon} size={32} strokeWidth={2} />
            <h2 className={styles.playlistTitle}>Música para Treinar</h2>
          </div>
          <p className={styles.playlistDescription}>{spotifyPlaylist.description}</p>
          <a
            href={spotifyPlaylist.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.spotifyButton}
            aria-label={`Abrir playlist ${spotifyPlaylist.title} no Spotify`}
          >
            <Music2 size={20} strokeWidth={2.5} />
            <span>Abrir no Spotify</span>
            <span className={styles.externalIcon}>↗</span>
          </a>
        </div>

        {/* Quote do dia */}
        <div className={styles.quoteCard}>
          <div className={styles.quoteHeader}>
            <Lightbulb className={styles.quoteIcon} size={28} strokeWidth={2} />
            <h2 className={styles.quoteTitle}>Inspiração do Dia</h2>
          </div>
          <blockquote className={styles.quoteText}>
            "{currentQuote.text}"
          </blockquote>
          {currentQuote.author && (
            <p className={styles.quoteAuthor}>— {currentQuote.author}</p>
          )}
          <button
            className={styles.newQuoteButton}
            onClick={getRandomQuote}
            aria-label="Ver nova frase motivacional"
          >
            <RefreshCw size={18} strokeWidth={2.5} />
            <span>Nova inspiração</span>
          </button>
        </div>

        {/* Filtros de categoria */}
        <div className={styles.categories}>
          <div className={styles.categoriesScroll}>
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  className={`${styles.categoryButton} ${
                    selectedCategory === category.id ? styles.active : ''
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                  aria-label={`Filtrar dicas de ${category.label}`}
                >
                  <IconComponent 
                    className={styles.categoryIcon}
                    size={20}
                    strokeWidth={selectedCategory === category.id ? 2.5 : 2}
                  />
                  <span className={styles.categoryLabel}>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Lista de dicas */}
        <div className={styles.tipsSection}>
          <h2 className={styles.sectionTitle}>
            {selectedCategory === 'all' ? 'Todas as Dicas' : `Dicas de ${categories.find(c => c.id === selectedCategory)?.label}`}
          </h2>
          <div className={styles.tipsList}>
            {filteredTips.length === 0 ? (
              <div className={styles.emptyState}>
                <p>Nenhuma dica disponível nesta categoria.</p>
              </div>
            ) : (
              filteredTips.map((tip) => (
                <div key={tip.id} className={styles.tipCard}>
                  <div className={styles.tipHeader}>
                    <span className={styles.tipIcon}>{tip.icon}</span>
                    <h3 className={styles.tipTitle}>{tip.title}</h3>
                  </div>
                  <p className={styles.tipContent}>{tip.content}</p>
                  <span className={styles.tipCategory}>
                    {categories.find(c => c.id === tip.category)?.label}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </PageContainer>
    </>
  );
};
