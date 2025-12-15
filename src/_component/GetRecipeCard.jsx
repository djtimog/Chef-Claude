import React from "react";

export default function GetRecipeCard({ handleClick, disable }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">Your Smart Kitchen Assistant👨‍🍳</h3>
          <p className="card-description">
            You&apos;ve added enough ingredients, now let&apos;s see what
            recipes🍲 you can make.
          </p>
        </div>
        <button
          disabled={disable}
          onClick={handleClick}
          className="card-button"
        >
          Ask AI
        </button>
      </div>
    </div>
  );
}
