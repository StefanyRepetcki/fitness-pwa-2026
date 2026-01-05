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
                href="https://github.com/StefanyRepetcki"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label="GitHub de Stefany Repetcki"
              >
                <span className={styles.icon}>GitHub</span>
                <span>GitHub</span>
              </a>
              <a
                href="mailto:contato@stefanyrepetcki.dev"
                className={styles.link}
                aria-label="Enviar email para Stefany Repetcki"
              >
                <span className={styles.icon}>Email</span>
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/stefany-repetcki"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label="LinkedIn de Stefany Repetcki"
              >
                <span className={styles.icon}>LinkedIn</span>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/StefanyRepetcki/fitness-pwa-2026"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label="Repositório do projeto no GitHub"
              >
                <span className={styles.icon}>Código</span>
                <span>Repositório</span>
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
