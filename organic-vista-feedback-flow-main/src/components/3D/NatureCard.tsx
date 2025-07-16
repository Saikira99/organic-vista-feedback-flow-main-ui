import React from 'react';
import { motion } from 'framer-motion';
import { FloatingParticles } from './FloatingParticles';

interface NatureCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'glass' | 'clay' | 'leaf' | 'floating';
  hover3D?: boolean;
}

export function NatureCard({ 
  children, 
  className = "",
  variant = 'glass',
  hover3D = true
}: NatureCardProps) {
  
  const variants = {
    glass: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-floating",
    clay: "bg-gradient-to-br from-earth-100 to-earth-200 shadow-depth border border-earth-300/50",
    leaf: "bg-gradient-to-br from-forest-100/80 to-forest-200/60 backdrop-blur-lg border border-forest-300/30 shadow-nature",
    floating: "bg-white/5 backdrop-blur-2xl border border-white/10 shadow-glow"
  };

  return (
    <motion.div
      className={`
        relative overflow-hidden transition-all duration-700 transform-gpu
        ${variants[variant]}
        rounded-organic
        ${className}
      `}
      whileHover={hover3D ? {
        y: -8,
        scale: 1.02,
        rotateX: 5,
        rotateY: 5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 50px rgba(34, 139, 34, 0.2)",
      } : {}}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      <FloatingParticles count={4} />
      
      {/* Organic morphing border */}
      <motion.div
        className="absolute inset-0 opacity-0 bg-gradient-to-br from-forest-400/20 to-earth-400/20 rounded-organic"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        animate={{
          borderRadius: [
            "40% 60% 60% 40% / 40% 40% 60% 60%",
            "60% 40% 40% 60% / 60% 60% 40% 40%",
            "40% 60% 40% 60% / 60% 40% 60% 40%",
            "60% 40% 60% 40% / 40% 60% 40% 60%",
            "40% 60% 60% 40% / 40% 40% 60% 60%"
          ]
        }}
        style={{
          animation: "organic-morph 8s ease-in-out infinite"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}