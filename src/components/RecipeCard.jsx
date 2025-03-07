import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img
        src={recipe.imgUrl || "/default-image.jpg"} // Fallback image
        alt={recipe.name}
        className="w-full h-40 object-cover rounded-md"
        onError={(e) => (e.target.src = "/default-image.jpg")} // Handle broken images
      />
      <h3 className="text-lg font-semibold mt-2">{recipe.name}</h3>
      <p className="text-gray-600 text-sm">By {recipe.chef}</p>
      <p className="text-yellow-500">⭐ {recipe.avgRating} ({recipe.totalRatings})</p>
      <p className="text-xs text-gray-500">{recipe.uploadedOn}</p>
    </div>
  );
};

export default RecipeCard;
