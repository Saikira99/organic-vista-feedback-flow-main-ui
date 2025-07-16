import React from 'react';
import { SearchBar } from '@/components/SearchBar';
import { CategoryFilter } from '@/components/CategoryFilter';

interface SearchAndFilterSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  productCount: number;
}

export function SearchAndFilterSection({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  productCount,
}: SearchAndFilterSectionProps) {
  return (
    <section className="mb-12 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl lg:text-4xl font-bold">
          Premium Organic Products
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Hand-selected products that meet the highest standards of quality and sustainability.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <SearchBar
          value={searchQuery}
          onSearch={onSearchChange}
        />
        <div className="text-sm text-muted-foreground">
          {productCount > 0 ? `${productCount} products found` : 'No products found'}
        </div>
      </div>

      {/* ✅ This is crucial for filter to work */}
      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />
    </section>
  );
}
