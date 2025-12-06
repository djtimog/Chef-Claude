export default function IngredientForm({ addIngredient }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const ingredient = formData.get("ingredient");
    console.log("Ingredient submitted:", ingredient);
    addIngredient(ingredient);
    ingredient && event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="ingredient"
          placeholder="e.g., Sugar"
          id="ingredient"
          aria-label="Enter an ingredient name"
          required
        />
        <button type="submit">Add Ingredient</button>
      </div>
    </form>
  );
}
