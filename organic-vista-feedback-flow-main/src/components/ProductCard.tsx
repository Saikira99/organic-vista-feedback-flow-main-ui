import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, Sparkles, Leaf, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface Product {
  id?: string;
  _id?: string;
  name: string;
  brand: string;
  image: string;
  category: string;
  price?: number;
  rating?: number;
  certified?: boolean;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  index?: number;
}

export function ProductCard({ product, onClick, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      className="group relative perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Enhanced Dynamic Shadow */}
      <motion.div
        className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-forest-500/25 opacity-0 blur-2xl"
        animate={{
          opacity: isHovered ? 0.8 : 0,
          scale: isHovered ? 1.15 : 1,
          rotateX: isHovered ? 10 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Secondary Glow */}
      <motion.div
        className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-white/20 to-primary/10 opacity-0 blur-xl"
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />

      {/* Main Card */}
      <motion.div
        className="relative h-full bg-card/90 backdrop-blur-xl border border-white/30 rounded-3xl overflow-hidden cursor-pointer"
        onClick={() => onClick(product)}
        animate={{
          y: isHovered ? -12 : 0,
          rotateX: isHovered ? 8 : 0,
          rotateY: isHovered ? 3 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ 
          duration: 0.5, 
          ease: "easeOut",
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-primary/8"
          animate={{ 
            opacity: isHovered ? 1 : 0,
            background: isHovered 
              ? "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(var(--primary)/0.1) 100%)"
              : "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%)"
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Floating Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-transparent"
          animate={{
            borderColor: isHovered ? "rgba(var(--primary), 0.3)" : "transparent",
            boxShadow: isHovered 
              ? "0 0 30px rgba(var(--primary), 0.2), inset 0 0 20px rgba(255,255,255,0.1)"
              : "none"
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Image Section */}
        <div className="relative aspect-square overflow-hidden">
          {/* Animated Background Pattern */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-forest-50 via-accent/8 to-primary/12"
            animate={{
              background: isHovered
                ? "radial-gradient(circle at 30% 30%, rgba(var(--forest-500), 0.08) 0%, rgba(var(--accent), 0.12) 50%, rgba(var(--primary), 0.15) 100%)"
                : "linear-gradient(135deg, rgba(var(--forest-50), 1) 0%, rgba(var(--accent), 0.08) 100%)"
            }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Enhanced Floating Sparkles */}
          {isHovered && (
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-primary/40"
                  style={{
                    left: `${10 + (i * 7)}%`,
                    top: `${8 + (i * 6)}%`,
                  }}
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    rotate: [0, 180, 360],
                    y: [0, -30, -60],
                    x: [0, Math.sin(i) * 20, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles size={8 + Math.random() * 6} />
                </motion.div>
              ))}
            </div>
          )}

          {/* Floating Leaf Elements */}
          {isHovered && (
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`leaf-${i}`}
                  className="absolute text-forest-400/30"
                  style={{
                    left: `${20 + (i * 12)}%`,
                    top: `${15 + (i * 10)}%`,
                  }}
                  animate={{
                    y: [0, -25, 0],
                    rotate: [0, 15, -15, 0],
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Leaf size={12} />
                </motion.div>
              ))}
            </div>
          )}

          {/* Product Image with Enhanced Animation */}
          <motion.div
            className="relative z-10 h-full flex items-center justify-center p-8"
            animate={{
              scale: isHovered ? 1.15 : 1,
              rotate: isHovered ? 2 : 0,
              z: isHovered ? 20 : 0,
            }}
            transition={{ 
              duration: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 25
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
              animate={{
                filter: isHovered 
                  ? "drop-shadow(0 25px 50px rgba(0,0,0,0.2)) brightness(1.1) contrast(1.05)"
                  : "drop-shadow(0 10px 20px rgba(0,0,0,0.1)) brightness(1) contrast(1)",
              }}
              transition={{ duration: 0.4 }}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
              style={{
                opacity: imageLoaded ? 1 : 0,
                transition: "opacity 0.3s ease-in-out"
              }}
            />

            {/* Loading Shimmer with Animation */}
            {!imageLoaded && (
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-muted/30 via-muted/60 to-muted/30"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
          </motion.div>

          {/* Enhanced Certification Badge */}
          {product.certified && (
            <motion.div
              className="absolute top-4 left-4 z-20"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ 
                scale: isHovered ? 1.15 : 1,
                rotate: 0,
              }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ rotate: 5, scale: 1.2 }}
            >
              <Badge className="bg-success/95 text-white backdrop-blur-sm border-success/30 shadow-xl">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Award size={12} className="mr-1" />
                </motion.div>
                Certified
              </Badge>
            </motion.div>
          )}

          {/* Enhanced Favorite Button */}
          <motion.button
            className="absolute top-4 right-4 z-20 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-xl border border-white/30"
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorited(!isFavorited);
            }}
            initial={{ scale: 0, rotate: -45 }}
            animate={{ 
              scale: isHovered ? 1.15 : 1,
              rotate: 0,
            }}
            transition={{ 
              duration: 0.5, 
              delay: 0.3,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ 
                scale: isFavorited ? 1.3 : 1,
                color: isFavorited ? "#ef4444" : "#6b7280"
              }}
              transition={{ duration: 0.2 }}
            >
              <Heart 
                size={16} 
                fill={isFavorited ? "currentColor" : "none"}
                className="transition-all duration-200"
              />
            </motion.div>
          </motion.button>

          {/* Enhanced Category Tag */}
          <motion.div
            className="absolute bottom-4 right-4 z-20"
            initial={{ x: 50, opacity: 0 }}
            animate={{ 
              x: 0, 
              opacity: 1,
              y: isHovered ? -8 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ 
              duration: 0.5, 
              delay: 0.4,
              type: "spring",
              stiffness: 150
            }}
          >
            <Badge variant="secondary" className="bg-white/95 backdrop-blur-sm text-forest-700 border-forest-200/50 shadow-lg">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                <Leaf size={10} className="mr-1" />
              </motion.div>
              {product.category}
            </Badge>
          </motion.div>
        </div>

        {/* Enhanced Content Section */}
        <motion.div 
          className="p-6 relative z-10"
          animate={{
            y: isHovered ? -3 : 0,
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {/* Enhanced glass morphism background */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-card/98 to-card/85 backdrop-blur-sm"
            animate={{
              background: isHovered
                ? "linear-gradient(to top, rgba(var(--card), 0.99) 0%, rgba(var(--card), 0.90) 100%)"
                : "linear-gradient(to top, rgba(var(--card), 0.95) 0%, rgba(var(--card), 0.85) 100%)"
            }}
            transition={{ duration: 0.3 }}
          />
          
          <div className="relative space-y-4">
            {/* Brand and Name with Stagger Animation */}
            <motion.div className="space-y-2">
              <motion.p 
                className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
                animate={{ 
                  x: isHovered ? 3 : 0,
                  opacity: isHovered ? 0.8 : 0.6,
                }}
                transition={{ duration: 0.3 }}
              >
                {product.brand}
              </motion.p>
              <motion.h3
                className="font-bold text-lg leading-tight text-foreground group-hover:text-primary transition-colors duration-300"
                animate={{ 
                  x: isHovered ? 3 : 0,
                  scale: isHovered ? 1.02 : 1,
                }}
                transition={{ duration: 0.3, delay: 0.05 }}
              >
                {product.name}
              </motion.h3>
            </motion.div>

            {/* Enhanced Rating with Individual Star Animation */}
            {product.rating && (
              <motion.div
                className="flex items-center gap-3"
                animate={{ 
                  x: isHovered ? 3 : 0,
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: isHovered && i < Math.floor(product.rating!) ? 1.3 : 1,
                        rotate: isHovered && i < Math.floor(product.rating!) ? [0, 15, -15, 0] : 0,
                        y: isHovered && i < Math.floor(product.rating!) ? [0, -3, 0] : 0,
                      }}
                      transition={{ 
                        duration: 0.4, 
                        delay: i * 0.05,
                        type: "spring",
                        stiffness: 300
                      }}
                    >
                      <Star
                        size={14}
                        className={
                          i < Math.floor(product.rating!)
                            ? "text-amber-400 fill-amber-400"
                            : "text-muted-foreground/30"
                        }
                      />
                    </motion.div>
                  ))}
                </div>
                <motion.span 
                  className="text-sm text-muted-foreground"
                  animate={{ opacity: isHovered ? 1 : 0.7 }}
                  transition={{ duration: 0.3 }}
                >
                  {product.rating} ({Math.floor(Math.random() * 50) + 10})
                </motion.span>
              </motion.div>
            )}

            {/* Enhanced Description */}
            <motion.p
              className="text-sm text-muted-foreground leading-relaxed line-clamp-2"
              animate={{ 
                x: isHovered ? 3 : 0,
                opacity: isHovered ? 1 : 0.8,
              }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              {product.description}
            </motion.p>
          </div>
        </motion.div>

        {/* Enhanced Ripple Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          animate={{
            background: isHovered 
              ? "radial-gradient(circle at center, rgba(var(--primary) / 0.08) 0%, transparent 70%)"
              : "transparent"
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Shimmer Effect on Hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "100%", opacity: [0, 0.3, 0] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}