import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { ShoppingItem } from '../../components/ShoppingItem/ShoppingItem';
import { shoppingList } from '../../data/shoppingList';
import type { ShoppingCategory } from '../../data/shoppingList';
import styles from './ShoppingList.module.css';

export const ShoppingList = () => {
  const [categories, setCategories] = useState(shoppingList);

  const handleToggleItem = (itemId: string) => {
    setCategories((prev) =>
      prev.map((category) => ({
        ...category,
        items: category.items.map((item) =>
          item.id === itemId ? { ...item, checked: !item.checked } : item
        ),
      }))
    );
  };

  const handleToggleCategory = (categoryId: string) => {
    setCategories((prev) =>
      prev.map((category) => {
        if (category.id === categoryId) {
          const allChecked = category.items.every((item) => item.checked);
          return {
            ...category,
            items: category.items.map((item) => ({
              ...item,
              checked: !allChecked,
            })),
          };
        }
        return category;
      })
    );
  };

  const getCategoryProgress = (category: ShoppingCategory) => {
    const checked = category.items.filter((item) => item.checked).length;
    return { checked, total: category.items.length };
  };

  return (
    <>
      <Header title="Lista de Compras" />
      <PageContainer>
        <div className={styles.intro}>
          <p>Organize suas compras por categoria 🛒</p>
        </div>

        <div className={styles.categories}>
          {categories.map((category) => {
            const { checked, total } = getCategoryProgress(category);
            return (
              <div key={category.id} className={styles.category}>
                <button
                  className={styles.categoryHeader}
                  onClick={() => handleToggleCategory(category.id)}
                >
                  <div className={styles.categoryHeaderContent}>
                    <span className={styles.categoryIcon}>{category.icon}</span>
                    <h3 className={styles.categoryName}>{category.name}</h3>
                    <span className={styles.categoryCount}>
                      {checked}/{total}
                    </span>
                  </div>
                  <span className={styles.categoryArrow}>▼</span>
                </button>
                <div className={styles.items}>
                  {category.items.map((item) => (
                    <ShoppingItem
                      key={item.id}
                      item={item}
                      onToggle={handleToggleItem}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </>
  );
};

