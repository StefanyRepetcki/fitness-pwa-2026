import { useState } from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  const handleToggle = () => {
    setShowContact(!showContact);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <button
          className={styles.creditsButton}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          aria-expanded={showContact}
          aria-controls="contact-info"
          aria-label="Informações do desenvolvedor"
        >
          <span className={styles.text}>Desenvolvido por Stefany Repetcki</span>
          <span 
            className={`${styles.arrow} ${showContact ? styles.expanded : ''}`}
            aria-hidden="true"
          >
            ▼
          </span>
        </button>

        {showContact && (
          <div id="contact-info" className={styles.contactInfo} role="region" aria-labelledby="developer-name">
            <div className={styles.developer}>
              <h3 id="developer-name" className={styles.name}>Stefany Repetcki</h3>
              <p className={styles.role}>Desenvolvedora Frontend</p>
            </div>
            
            <div className={styles.contactLinks} role="list">
              <a
                href="https://www.instagram.com/tefinha.zip/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label="Instagram de Stefany Repetcki - Abre em nova aba"
              >
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/stefany-repetcki/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label="LinkedIn de Stefany Repetcki - Abre em nova aba"
              >
                <span>LinkedIn</span>
              </a>
            </div>

          </div>
        )}
      </div>
    </footer>
  );
};
