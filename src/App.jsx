import React, { useState, useMemo } from "react";
import recipesData from "./data/recipes";
import SearchBar from "./components/SearchBar";
import FilterSidebar from "./components/FilterSidebar";
import SortOptions from "./components/SortOptions";
import RecipeList from "./components/RecipeList";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const filteredRecipes = useMemo(() => {
    return recipesData.filter((recipe) => {
      const lowerSearch = searchTerm.toLowerCase();  

      const matchesSearch =
        recipe.name?.toLowerCase().includes(lowerSearch) ||
        recipe.chef?.toLowerCase().includes(lowerSearch) ||
        recipe.mealType?.toLowerCase().includes(lowerSearch) ||
        recipe.dishType?.toLowerCase().includes(lowerSearch) ||
        recipe.ingredients?.some((ingredient) => ingredient.toLowerCase().includes(lowerSearch));

      if (searchTerm && !matchesSearch) return false;

      
      if (filters.mealType && recipe.mealType !== filters.mealType) return false;
      if (filters.dishType && recipe.dishType !== filters.dishType) return false;  // Apply filter conditions
      if (filters.testKitchenApproved && !recipe.testKitchenApproved) return false;
      if (filters.contestWinner && !recipe.contestWinner) return false;
      if (filters.featured && !recipe.featured) return false;
      return true;
    });
  }, [searchTerm, filters]);

  const sortedRecipes = useMemo(() => {
    return [...filteredRecipes].sort((a, b) => {
      if (sort === "newest") return new Date(b.uploadedOn || 0) - new Date(a.uploadedOn || 0); // Memoized Sorting Logic
      if (sort === "oldest") return new Date(a.uploadedOn || 0) - new Date(b.uploadedOn || 0);
      if (sort === "highestRated") return (b.avgRating || 0) - (a.avgRating || 0);
      if (sort === "lowestRated") return (a.avgRating || 0) - (b.avgRating || 0);
      return 0;
    });
  }, [filteredRecipes, sort]);

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3"> {/* Search & Sorting Controls - Stack on mobile, row on larger screens */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SortOptions sort={sort} setSort={setSort} />
      </div>

      
      <div className="flex flex-col md:flex-row gap-6"> {/* Main Layout - Sidebar collapses on mobile */}
        <div className="w-full md:w-1/4 lg:w-1/5"> {/* Sidebar - Full width on mobile, fixed width on larger screens */}
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>
        <div className="flex-1"> {/* Recipe List - Full width on mobile, flex on larger screens */}
          <RecipeList recipes={sortedRecipes} />
        </div>
      </div>
    </div>
  );
};

export default App;
