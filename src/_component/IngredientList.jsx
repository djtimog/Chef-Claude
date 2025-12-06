import React from "react";
import { capitalize } from "../lib/capitalize.js";

export default function IngredientList({ ingredients, removeIngredient }) {
  const reversedIngredients = [...ingredients].reverse();
  return (
    <section>
      <h1>Ingredients</h1>
      {reversedIngredients.length === 0 ? (
        <h3>No ingredients added yet.</h3>
      ) : (
        <ul>
          {reversedIngredients.map((ingredient, index) => (
            <li key={index}>
              <p>{capitalize(ingredient)}</p>
              <button onClick={() => removeIngredient(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
