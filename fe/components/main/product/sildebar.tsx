import React from 'react';
import { FilterSection } from './filter';

interface Filters {
  categories: string[];
  colors: string[];
  priceRanges: string[];
}

interface SidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const Sidebar: React.FC<SidebarProps> = ({
  filters,
  setFilters,
  searchQuery,
  setSearchQuery
}) => {
  const categories = [
    { value: 'all', label: 'All Category' },
    { value: 'icons', label: 'Icons' },
    { value: 'tshirt', label: 'T-shirt' },
    { value: 'pants', label: 'Pants' },
    { value: 'jackets', label: 'Jackets' },
    { value: 'dresses', label: 'Dresses' },
    { value: 'hoodie', label: 'Hoodie' },
    { value: 'shorts', label: 'Shorts' },
    { value: 'blazers', label: 'Blazers' },
    { value: 'suits', label: 'Suits' },
    { value: 'sneakers', label: 'Sneakers' }
  ];

  const colors = [
    { value: 'all', label: 'All Colors' },
    { value: 'black', label: 'Black' },
    { value: 'white', label: 'White' },
    { value: 'gray', label: 'Gray' },
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'mustard', label: 'Mustard' },
    { value: 'cream', label: 'Cream' },
    { value: 'green', label: 'Green' }
  ];

  const priceRanges = [
    { value: 'all', label: 'All' },
    { value: '0-50', label: '$0 - $50' },
    { value: '50-100', label: '$50 - $100' }
  ];

  const toggleFilter = (filterType: keyof Filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(v => v !== value)
        : [...prev[filterType], value]
    }));
  };

  const resetFilters = () => {
    setFilters({
      categories: ['all'],
      colors: ['all'],
      priceRanges: ['all']
    });
    setSearchQuery('');
  };

  return (
    <div className="w-64 bg-gray-50 p-6 h-full overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Filters</h2>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <FilterSection
        title="Category"
        options={categories}
        selectedOptions={filters.categories}
        onToggle={(value) => toggleFilter('categories', value)}
      />

      <FilterSection
        title="Color"
        options={colors}
        selectedOptions={filters.colors}
        onToggle={(value) => toggleFilter('colors', value)}
      />

      <FilterSection
        title="Price Range"
        options={priceRanges}
        selectedOptions={filters.priceRanges}
        onToggle={(value) => toggleFilter('priceRanges', value)}
        type="radio"
      />

      <button
        onClick={resetFilters}
        className="w-full mt-4 py-2 border border-orange-400 text-orange-400 rounded-lg hover:bg-orange-50 transition-colors text-sm font-medium"
      >
        Reset Filters
      </button>
    </div>
  );
};