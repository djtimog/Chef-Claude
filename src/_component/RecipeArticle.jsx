export const RecipeArticle = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <section className="recipe-article" id="recipes">
      <h2 className="recipe-title">{recipe.recipeTitle}</h2>
      <p className="recipe-description">{recipe.description}</p>

      <h3 className="section-heading">Ingredients</h3>
      <ul className="ingredient-list">
        {recipe.ingredients.map((ing, idx) => (
          <li key={idx} className="ingredient-item">
            {ing}
          </li>
        ))}
      </ul>

      <h3 className="section-heading">Instructions</h3>
      <ol className="instruction-list">
        {recipe.instructions.map((step, idx) => (
          <li key={idx} className="instruction-step">
            {step}
          </li>
        ))}
      </ol>

      {recipe.suggestions && recipe.suggestions.length > 0 && (
        <>
          <h3 className="section-heading">Suggestions</h3>
          <ul className="suggestion-list">
            {recipe.suggestions.map((s, idx) => (
              <li key={idx} className="suggestion-item">
                {s}
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};
