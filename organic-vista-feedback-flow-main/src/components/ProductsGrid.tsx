import React from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/hooks/useApi';

interface ProductsGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export function ProductsGrid({ products, onProductClick }: ProductsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
      {products.map((product, index) => (
        <div
          key={product.id || product._id}
          className="fade-in-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <ProductCard
            product={product}
            onClick={onProductClick}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}