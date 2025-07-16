import React from 'react';
import { Droplets, Leaf, Wheat, Cookie, Sparkles } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Products', icon: Sparkles },
  { id: 'Honey', name: 'Honey', icon: Droplets },
  { id: 'Oils', name: 'Oils', icon: Leaf },
  { id: 'Grains', name: 'Grains', icon: Wheat },
  { id: 'Dairy', name: 'Dairy', icon: Cookie },
  { id: 'Spices', name: 'Spices', icon: Wheat }
];

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 p-6 justify-center">
      {categories.map((category) => {
        const IconComponent = category.icon;
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${
              isActive
                ? 'bg-yellow-100 text-yellow-800 border-yellow-400 shadow-md'
                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
            }`}
          >
            <IconComponent size={18} />
            <span className="hidden sm:inline">{category.name}</span>
          </button>
        );
      })}
    </div>
  );
}
