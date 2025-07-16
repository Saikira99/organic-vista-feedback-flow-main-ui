import React from 'react';
import { motion } from 'framer-motion';
import { WaterRipple } from './WaterRipple';
import { ErrorBoundary } from '../ErrorBoundary';

interface NatureButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'leaf' | 'pebble' | 'wood' | 'organic';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export function NatureButtonSafe({ 
  children, 
  onClick, 
  variant = 'organic',
  size = 'md',
  className = "",
  disabled = false
}: NatureButtonProps) {
  
  const variants = {
    leaf: "bg-gradient-to-br from-forest-500 to-forest-600 rounded-leaf shadow-nature",
    pebble: "bg-gradient-to-br from-earth-400 to-earth-500 rounded-pebble shadow-floating",
    wood: "bg-gradient-to-br from-earth-600 to-earth-700 rounded-organic shadow-depth",
    organic: "bg-gradient-to-br from-forest-500 via-forest-600 to-earth-500 rounded-organic shadow-glow"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <ErrorBoundary fallback={
      <button 
        onClick={onClick}
        disabled={disabled}
        className={`px-6 py-3 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors ${className}`}
      >
        {children}
      </button>
    }>
      <WaterRipple className={`inline-block ${className}`}>
        <motion.button
          onClick={onClick}
          disabled={disabled}
          className={`
            relative overflow-hidden font-medium text-white transition-all duration-500 transform-gpu
            ${variants[variant]}
            ${sizes[size]}
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
          `}
          whileHover={!disabled ? { 
            boxShadow: "0 0 25px rgba(34, 139, 34, 0.6), 0 0 50px rgba(34, 139, 34, 0.3)",
            rotateZ: 1
          } : {}}
          whileTap={!disabled ? { scale: 0.95 } : {}}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{ transform: "translateX(-100%)" }}
            whileHover={!disabled ? {
              opacity: 1,
              transform: "translateX(100%)",
              transition: { duration: 0.8, ease: "easeInOut" }
            } : {}}
          />
          
          {/* Glow overlay */}
          <motion.div
            className="absolute inset-0 opacity-0 bg-gradient-to-br from-white/20 to-transparent"
            whileHover={!disabled ? { opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
          />
          
          <span className="relative z-10 flex items-center gap-2">
            {children}
          </span>
        </motion.button>
      </WaterRipple>
    </ErrorBoundary>
  );
}