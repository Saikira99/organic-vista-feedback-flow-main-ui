import React from 'react';

export interface SearchBarProps {
  value: string;
  onSearch: (query: string) => void;
}

export function SearchBar({ value, onSearch }: SearchBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Search products..."
      aria-label="Search products"
      className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm w-full max-w-md focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  );
}
