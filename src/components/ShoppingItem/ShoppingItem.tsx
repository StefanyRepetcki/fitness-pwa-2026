import { useEffect, useState } from 'react';
import type { ShoppingItem as ShoppingItemType } from '../../data/shoppingList';
import styles from './ShoppingItem.module.css';

interface ShoppingItemProps {
  item: ShoppingItemType;
  onToggle: (id: string) => void;
}

export const ShoppingItem = ({ item, onToggle }: ShoppingItemProps) => {
  const [isChecked, setIsChecked] = useState(item.checked);

  useEffect(() => {
    setIsChecked(item.checked);
  }, [item.checked]);

  const handleToggle = () => {
    onToggle(item.id);
  };

  return (
    <div
      className={`${styles.item} ${isChecked ? styles.checked : ''}`}
      onClick={handleToggle}
    >
      <div className={styles.checkboxContainer}>
        <div className={`${styles.checkbox} ${isChecked ? styles.checked : ''}`}>
          {isChecked && (
            <span className={styles.checkmark}>✓</span>
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

