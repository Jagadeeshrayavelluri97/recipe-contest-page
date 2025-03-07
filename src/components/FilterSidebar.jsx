import React from "react";

const FilterSidebar = ({ filters, setFilters }) => {
  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: prevFilters[category] === value ? null : value,
    }));
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-50 w-full sm:w-64 flex flex-col sticky top-0 h-[500px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-red-600 transition"
          onClick={() => setFilters({})}
        >
          Clear All
        </button>
      </div>

      <div className="h-[400px] overflow-y-auto">  {/* ✅ Scrollable Filters Box (Fixed Height) */}
        <div className="mb-4">    
          <h4 className="font-semibold">Meal Type</h4>  {/* Meal Type Filter */}
          {["Breakfast", "Lunch", "Dinner"].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="radio"
                name="mealType"
                checked={filters.mealType === type}
                onChange={() => handleFilterChange("mealType", type)}
              />
              {type}
            </label>
          ))}
        </div>

        <div className="mb-4">
          <h4 className="font-semibold">Dish Type</h4> {/* Dish Type Filter */}
          {["Pasta", "Curry", "Dessert"].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="radio"
                name="dishType"
                checked={filters.dishType === type}
                onChange={() => handleFilterChange("dishType", type)}
              />
              {type}
            </label>
          ))}
        </div>

        <div className="mb-4">
          <h4 className="font-semibold">Attributes</h4>  {/* Attributes Filter */}
          {[
            { key: "testKitchenApproved", label: "Test Kitchen Approved" },
            { key: "contestWinner", label: "Contest Winner" },
            { key: "featured", label: "Featured" },
          ].map(({ key, label }) => (
            <label key={key} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters[key] || false}
                onChange={() => handleFilterChange(key, !filters[key])}
              />
              {label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
