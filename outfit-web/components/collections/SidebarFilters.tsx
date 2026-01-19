import React from 'react';

// Đảm bảo có từ khóa 'export default' ở đây
export default function SidebarFilters() {
  const categories = ["Shirts", "Pants", "Dresses", "Hoodies", "Blazers", "Jackets", "Skirts", "Sweaters"];

  return (
    <div className="space-y-8">
      <div>
        <h4 className="font-bold text-sm mb-4">Search</h4>
        <input 
          type="text" 
          placeholder="Search products..." 
          className="w-full p-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-2"
        />
      </div>

      <div>
        <h4 className="font-bold text-sm mb-4">Category</h4>
        <div className="space-y-1">
          <div className="px-4 py-2 bg-gray-100 text-amber-600 rounded-xl text-sm font-bold cursor-pointer">
            All Categories
          </div>
          {categories.map(cat => (
            <div key={cat} className="px-4 py-2 text-gray-500 hover:bg-gray-50 rounded-xl text-sm cursor-pointer transition-all">
              {cat}
            </div>
          ))}
        </div>
      </div>

      <button className="w-full py-3 border-2 border-amber-600 text-amber-600 font-bold rounded-2xl text-xs hover:bg-amber-600 hover:text-white transition-all uppercase">
        Reset Filters
      </button>
    </div>
  );
}