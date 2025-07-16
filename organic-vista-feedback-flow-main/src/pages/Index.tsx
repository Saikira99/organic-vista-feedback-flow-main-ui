import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ProductDetail } from '@/components/ProductDetail';
import { HeroSection } from '@/components/HeroSection';
import { SearchAndFilterSection } from '@/components/SearchAndFilterSection';
import { ProductsGrid } from '@/components/ProductsGrid';
import { EmptyState } from '@/components/EmptyState';
import { LoadingState } from '@/components/LoadingState';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Leaf, Heart, Mail } from 'lucide-react';
import { useProducts, Product } from '@/hooks/useApi';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const { products, loading } = useProducts();

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, activeCategory]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
  };

  if (loading) return <LoadingState />;
  if (selectedProduct) return <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefefe] to-[#e3f6e3] dark:from-gray-900 dark:to-gray-800 text-forest-800 dark:text-white transition-all duration-500">
      
      {/* Navigation Header with Glass + 3D Hover */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/30 dark:bg-gray-900/30 border-b border-white/20 dark:border-gray-700 shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05, rotateZ: 1 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Leaf size={24} className="text-primary dark:text-green-400" />
              </motion.div>
              <span className="text-2xl font-extrabold font-serif tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-lime-400 dark:from-green-300 dark:to-lime-300">
                Organic Vista
              </span>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ThemeToggle />
              <Button variant="ghost" asChild className="hover:scale-105 transition-all dark:text-white dark:hover:text-green-300">
                <Link to="/about" className="flex items-center gap-2">
                  <Heart size={16} />
                  About
                </Link>
              </Button>
              <Button variant="ghost" asChild className="hover:scale-105 transition-all dark:text-white dark:hover:text-green-300">
                <Link to="/contact" className="flex items-center gap-2">
                  <Mail size={16} />
                  Contact
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Content with 3D Effect & Glass Section */}
      <div className="pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroSection />
        </motion.div>

        <motion.div
          className="container mx-auto px-4 py-12"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="rounded-3xl p-6 shadow-2xl backdrop-blur-md bg-white/50 dark:bg-white/10 border border-white/20 dark:border-gray-700"
            whileHover={{ scale: 1.01 }}
          >
            <SearchAndFilterSection
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              productCount={filteredProducts.length}
            />

            <div className="mt-8">
              {filteredProducts.length > 0 ? (
                <ProductsGrid products={filteredProducts} onProductClick={setSelectedProduct} />
              ) : (
                <EmptyState onClearFilters={handleClearFilters} />
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
