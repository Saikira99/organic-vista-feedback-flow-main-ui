import React from 'react';
import { Loader } from 'lucide-react';

export function LoadingState() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <Loader className="h-12 w-12 animate-spin text-primary mx-auto" />
        <p className="text-muted-foreground">Loading organic products...</p>
      </div>
    </div>
  );
}