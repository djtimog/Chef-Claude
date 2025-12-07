import React from "react";
import Header from "./_component/Header";
import IngredientForm from "./_component/IngredientForm";
import IngredientList from "./_component/IngredientList";
import GetRecipeCard from "./_component/GetRecipeCard";
import { RecipeArticle } from "./_component/RecipeArticle";

const Recipes = [
  {
    recipeTitle: "Fluffy Pancakes",
    description: "A quick breakfast using eggs, flour, butter, and sugar.",
    ingredients: ["Eggs", "Flour", "Butter", "Sugar"],
    instructions: [
      "Whisk eggs and sugar together until light.",
      "Add flour gradually and mix until smooth.",
      "Melt butter in a pan and pour in batter.",
      "Cook until golden brown on both sides.",
      "Serve warm with syrup or fruit.",
    ],
    suggestions: [
      "Top with honey or fresh berries",
      "Add a pinch of cinnamon for flavor",
    ],
  },
  {
    recipeTitle: "Butter Cookies",
    description: "Crispy cookies made with butter, sugar, and flour.",
    ingredients: ["Butter", "Sugar", "Flour", "Eggs"],
    instructions: [
      "Cream butter and sugar together.",
      "Add eggs and mix well.",
      "Stir in flour until dough forms.",
      "Shape into cookies and bake at 180°C for 12 minutes.",
    ],
    suggestions: [
      "Sprinkle with powdered sugar",
      "Add chocolate chips for variation",
    ],
  },
];

function App() {
  const [ingredients, setIngredients] = React.useState([
    "flour",
    "sugar",
    "butter",
    "eggs",
  ]);
  const [selectedRecipe, setSelectedRecipe] = React.useState(null);

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

  const handleGetRecipes = () => {
    setSelectedRecipe(Recipes[0].recipeTitle);
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
            <h1>Recipes</h1>
            <div className="recipe-button-container">
              {Recipes.map((recipe, idx) => (
                <button
                  key={idx}
                  onClick={() => SwitchRecipe(recipe.recipeTitle)}
                  className="recipe-button"
                >
                  {recipe.recipeTitle}
                </button>
              ))}
            </div>
            <RecipeArticle
              recipe={Recipes.find(
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
