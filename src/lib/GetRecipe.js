import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function GetRecipe(ingredients) {
  const prompt = `
      You are an AI recipe generator.

      User ingredients: ${ingredients.join(", ")}

      Return ONLY a JSON array containing a maximum of 3 recipe objects. 
      Each recipe object must strictly follow this format:

      {
        "recipeTitle": "The name of the recipe",
        "description": "A long brief description of the recipe",
        "ingredients": ["Array of ingredients"],
        "instructions": ["Array of step-by-step cooking instructions"],
        "suggestions": ["Array of serving or flavor enhancement ideas"]
      }

      RULES:
      - Use only the ingredients provided.
      - Recipes must be diverse.
      - Return JSON ONLY. No explanation, no markdown, no text.
`;

  const result = await ai.models.generateContent({
    model: "gemini-2.0-flash-001",
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  });

  let text = result.text;
  text = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
  console.log(text);

  return JSON.parse(text);
}
