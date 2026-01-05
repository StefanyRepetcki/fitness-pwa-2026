import { Component } from 'react';
import type { ReactNode } from 'react';
import styles from './ErrorBoundary.module.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary capturou um erro:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.icon}>😔</div>
            <h1 className={styles.title}>Ops! Algo deu errado</h1>
            <p className={styles.message}>
              Desculpe pelo inconveniente. Por favor, recarregue a página.
            </p>
            <button
              className={styles.button}
              onClick={() => window.location.reload()}
            >
              Recarregar Página
            </button>
            <p className={styles.contact}>
              Se o problema persistir, entre em contato:{' '}
              <a 
                href="https://www.instagram.com/tefinha.zip/" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Instagram
              </a>
            </p>
            <p className={styles.developer}>
              Desenvolvido por <strong>Stefany Repetcki</strong>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

