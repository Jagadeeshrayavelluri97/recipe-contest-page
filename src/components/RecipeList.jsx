import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id || recipe.name} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
