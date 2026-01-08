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
    
    // Log estruturado do erro
    const errorLog = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    
    console.error('Error details:', errorLog);
    
    // Aqui você pode enviar para um serviço de logging (Sentry, LogRocket, etc.)
    // Exemplo:
    // if (window.Sentry) {
    //   window.Sentry.captureException(error, { contexts: { react: errorInfo } });
    // }
    
    // Salvar erro no localStorage para debug (apenas em desenvolvimento)
    if (import.meta.env.DEV) {
      try {
        const errors = JSON.parse(localStorage.getItem('ciclei-errors') || '[]');
        errors.push(errorLog);
        // Manter apenas os últimos 10 erros
        const recentErrors = errors.slice(-10);
        localStorage.setItem('ciclei-errors', JSON.stringify(recentErrors));
      } catch (e) {
        // Ignorar erros ao salvar log
      }
    }
  }
  
  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

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
            <div className={styles.actions}>
              <button
                className={styles.button}
                onClick={this.handleReset}
              >
                Tentar Novamente
              </button>
              <button
                className={`${styles.button} ${styles.secondary}`}
                onClick={() => window.location.reload()}
              >
                Recarregar Página
              </button>
            </div>
            {import.meta.env.DEV && this.state.error && (
              <details className={styles.errorDetails}>
                <summary>Detalhes do erro (desenvolvimento)</summary>
                <pre className={styles.errorStack}>
                  {this.state.error.toString()}
                  {'\n\n'}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
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

