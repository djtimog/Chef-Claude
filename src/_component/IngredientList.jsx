import React from "react";
import { capitalize } from "../lib/capitalize.js";

export default function IngredientList({ ingredients, removeIngredient }) {
  const reversedIngredients = [...ingredients].reverse();
  return (
    <section>
      <h1>Ingredients</h1>
      {reversedIngredients.length === 0 ? (
        <div className="empty-card">
          <h3 className="empty-card-title">No ingredients added yet!</h3>
          <p className="empty-card-description">
            Enter the ingredients you have, and let AI suggest recipes.
          </p>
        </div>
      ) : (
        <ul>
          {reversedIngredients.map((ingredient, index) => (
            <li key={index} className="ingredient-list">
              <p>{capitalize(ingredient)}</p>
              <button onClick={() => removeIngredient(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
