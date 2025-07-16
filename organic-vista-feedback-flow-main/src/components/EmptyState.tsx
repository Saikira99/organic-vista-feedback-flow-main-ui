import React from 'react';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  onClearFilters: () => void;
}

export function EmptyState({ onClearFilters }: EmptyStateProps) {
  return (
    <div className="text-center py-16 space-y-4">
      <div className="text-6xl">🌱</div>
      <h3 className="text-2xl font-semibold">No products found</h3>
      <p className="text-muted-foreground max-w-md mx-auto">
        Try adjusting your search or filter criteria to find what you're looking for.
      </p>
      <Button variant="outline" onClick={onClearFilters}>
        Clear Filters
      </Button>
    </div>
  );
}