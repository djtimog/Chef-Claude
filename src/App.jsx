import React from "react";
import Header from "./_component/Header";
import IngredientForm from "./_component/IngredientForm";
import IngredientList from "./_component/IngredientList";
import GetRecipeCard from "./_component/GetRecipeCard";
import { RecipeArticle } from "./_component/RecipeArticle";
import { GetRecipe } from "./lib/GetRecipe";

function App() {
  const [ingredients, setIngredients] = React.useState([]);
  const [selectedRecipe, setSelectedRecipe] = React.useState(null);
  const [recipes, setRecipes] = React.useState(null);

  const removeIngredient = (indexToRemove) => {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((_, index) => index !== indexToRemove)
    );
  };

  const addIngredient = (newIngredient) => {
    const isNewIngredientUnique = !ingredients.some(
      (ingredient) =>
        ingredient.toLowerCase() === newIngredient.trim().toLowerCase()
    );
    if (!isNewIngredientUnique) {
      alert(`${newIngredient} is already in the ingredient list.`);
      return;
    }
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  const SwitchRecipe = (recipeTitle) => {
    setSelectedRecipe(recipeTitle);
  };

  const handleGetRecipes = async () => {
    const data = await GetRecipe(ingredients);
    console.log("Generated Recipes:", data);
    if (!data || data.length === 0) {
      alert(
        "No recipes were generated. Please try again with different ingredients."
      );
      return;
    }
    setRecipes(data);
    setSelectedRecipe(data[0].recipeTitle);
    setTimeout(() => (window.location.href = "#recipe"), 3000);
  };

  return (
    <>
      <Header />
      <main>
        <IngredientForm addIngredient={addIngredient} />
        <IngredientList
          ingredients={ingredients}
          removeIngredient={removeIngredient}
        />
        {ingredients.length > 3 && (
          <GetRecipeCard handleClick={handleGetRecipes} />
        )}
        {selectedRecipe !== null && (
          <section>
            <h1 id="recipe">Recipes</h1>
            <div className="recipe-button-container">
              {recipes.map((recipe, idx) => (
                <button
                  key={idx}
                  onClick={() => SwitchRecipe(recipe.recipeTitle)}
                  className={`${
                    selectedRecipe === recipe.recipeTitle
                      ? "recipe-button-selected"
                      : "recipe-button"
                  }`}
                >
                  {recipe.recipeTitle}
                </button>
              ))}
            </div>
            <RecipeArticle
              recipe={recipes.find(
                (recipe) => recipe.recipeTitle === selectedRecipe
              )}
            />
          </section>
        )}
      </main>
    </>
  );
}

export default App;
