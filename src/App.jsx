import React from "react";
import Header from "./_component/Header";
import IngredientForm from "./_component/IngredientForm";
import IngredientList from "./_component/IngredientList";

function App() {
  const [ingredients, setIngredients] = React.useState([
    "flour",
    "sugar",
    "butter",
    "eggs",
  ]);
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
  return (
    <>
      <Header />
      <main>
        <IngredientForm addIngredient={addIngredient} />
        <IngredientList
          ingredients={ingredients}
          removeIngredient={removeIngredient}
        />
      </main>
    </>
  );
}

export default App;
