import type { ShoppingItem as ShoppingItemType } from '../../data/shoppingList';
import styles from './ShoppingItem.module.css';

interface ShoppingItemProps {
  item: ShoppingItemType;
  onToggle: (id: string) => void;
}

export const ShoppingItem = ({ item, onToggle }: ShoppingItemProps) => {
  const handleToggle = () => {
    onToggle(item.id);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div
      className={`${styles.item} ${item.checked ? styles.checked : ''}`}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      role="checkbox"
      aria-checked={item.checked}
      aria-label={`${item.checked ? 'Desmarcar' : 'Marcar'} ${item.name}`}
      tabIndex={0}
    >
      <div className={styles.checkboxContainer}>
        <div className={`${styles.checkbox} ${item.checked ? styles.checked : ''}`}>
          {item.checked && (
            <span className={styles.checkmark} aria-hidden="true">✓</span>
          )}
        </div>
      </div>
      <div className={styles.content}>
        <span className={styles.name}>{item.name}</span>
        <span className={styles.quantity}>{item.quantity}</span>
      </div>
    </div>
  );
};
