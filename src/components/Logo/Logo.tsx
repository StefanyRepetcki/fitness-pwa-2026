import styles from './Logo.module.css';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <img 
      src="/logo.svg" 
      alt="Ciclei" 
      className={`${styles.logo} ${className || ''}`}
      aria-label="Ciclei"
      role="img"
    />
  );
};
