import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { recipes } from '../../data/recipes';
import { Clock, Flame, UtensilsCrossed, ChefHat } from 'lucide-react';
import styles from './Recipes.module.css';

export const Recipes = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'cafe-manha', label: 'Café da Manhã' },
    { id: 'almoco', label: 'Almoço' },
    { id: 'lanche', label: 'Lanche' },
    { id: 'pre-treino', label: 'Pré-Treino' },
    { id: 'pos-treino', label: 'Pós-Treino' },
    { id: 'jantar', label: 'Jantar' }
  ];

  const filteredRecipes = selectedCategory === 'all'
    ? recipes
    : recipes.filter(recipe => recipe.category === selectedCategory);

  return (
    <>
      <Header title="Receitas" showStreak={false} />
      <PageContainer>
        <div className={styles.intro}>
          <p>Receitas práticas e saudáveis para seu ciclo alimentar</p>
        </div>

        {/* Filtros de categoria */}
        <div className={styles.categories}>
          <div className={styles.categoriesScroll}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.categoryButton} ${
                  selectedCategory === category.id ? styles.active : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
                aria-label={`Filtrar receitas de ${category.label}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de receitas */}
        <div className={styles.recipesList}>
          {filteredRecipes.length === 0 ? (
            <div className={styles.emptyState}>
              <p>Nenhuma receita disponível nesta categoria.</p>
            </div>
          ) : (
            filteredRecipes.map((recipe) => (
              <article key={recipe.id} className={styles.recipeCard}>
                <div className={styles.recipeHeader}>
                  <ChefHat className={styles.recipeIcon} size={24} strokeWidth={2} />
                  <div className={styles.recipeTitleContainer}>
                    <h3 className={styles.recipeTitle}>{recipe.name}</h3>
                    <span className={styles.recipeCategory}>
                      {categories.find(c => c.id === recipe.category)?.label}
                    </span>
                  </div>
                </div>

                <div className={styles.recipeMeta}>
                  <div className={styles.metaItem}>
                    <Clock className={styles.metaIcon} size={16} strokeWidth={2} />
                    <span>{recipe.prepTime}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Flame className={styles.metaIcon} size={16} strokeWidth={2} />
                    <span>{recipe.calories}</span>
                  </div>
                </div>

                <div className={styles.macros}>
                  <div className={styles.macroItem}>
                    <span className={styles.macroLabel}>Proteína</span>
                    <span className={styles.macroValue}>{recipe.macros.protein}</span>
                  </div>
                  <div className={styles.macroItem}>
                    <span className={styles.macroLabel}>Carboidratos</span>
                    <span className={styles.macroValue}>{recipe.macros.carbs}</span>
                  </div>
                  <div className={styles.macroItem}>
                    <span className={styles.macroLabel}>Gorduras</span>
                    <span className={styles.macroValue}>{recipe.macros.fat}</span>
                  </div>
                </div>

                <div className={styles.ingredients}>
                  <h4 className={styles.sectionTitle}>
                    <UtensilsCrossed className={styles.sectionIcon} size={18} strokeWidth={2} />
                    Ingredientes
                  </h4>
                  <ul className={styles.ingredientsList}>
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className={styles.ingredientItem}>
                        <span className={styles.ingredientName}>{ingredient.name}</span>
                        <span className={styles.ingredientQuantity}>{ingredient.quantity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.instructions}>
                  <h4 className={styles.sectionTitle}>Modo de Preparo</h4>
                  <ol className={styles.instructionsList}>
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index} className={styles.instructionItem}>
                        {instruction}
                      </li>
                    ))}
                  </ol>
                </div>

                {recipe.tips && (
                  <div className={styles.tips}>
                    <span className={styles.tipsIcon} aria-hidden="true">💡</span>
                    <p className={styles.tipsText}>{recipe.tips}</p>
                  </div>
                )}
              </article>
            ))
          )}
        </div>
      </PageContainer>
    </>
  );
};

