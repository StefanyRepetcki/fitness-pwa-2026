import { useState } from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <button
          className={styles.creditsButton}
          onClick={() => setShowContact(!showContact)}
          aria-label="Informações do desenvolvedor"
        >
          <span className={styles.text}>Desenvolvido por Stefany Repetcki</span>
          <span className={`${styles.arrow} ${showContact ? styles.expanded : ''}`}>▼</span>
        </button>

        {showContact && (
          <div className={styles.contactInfo}>
            <div className={styles.developer}>
              <h3 className={styles.name}>Stefany Repetcki</h3>
              <p className={styles.role}>Desenvolvedora Frontend</p>
            </div>
            
            <div className={styles.contactLinks}>
              <a
                href="https://www.instagram.com/tefinha.zip/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label="Instagram de Stefany Repetcki"
              >
                <span>Instagram</span>
              </a>
            </div>

            <p className={styles.note}>
              Projeto desenvolvido com React, TypeScript e Vite. 
              Para dúvidas ou sugestões, entre em contato.
            </p>
          </div>
        )}
      </div>
    </footer>
  );
};
