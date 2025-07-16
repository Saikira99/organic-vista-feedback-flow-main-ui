import React from 'react';
import { NatureButtonSafe } from '@/components/3D/NatureButtonSafe';
import { FloatingParticles } from '@/components/3D/FloatingParticles';
import { ThreeSceneSafe } from '@/components/3D/ThreeSceneSafe';
import { Leaf, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-organic.jpg';

export function HeroSection() {
  return (
    <section className="relative h-[100vh] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900/70 via-earth-900/50 to-water-900/60" />

      {/* 3D Scene */}
      <ThreeSceneSafe className="absolute inset-0 opacity-40" />

      {/* Floating Particles */}
      <FloatingParticles count={20} className="absolute inset-0" />

      {/* Interactive Elements */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            animate={{ rotate: [0, 1, -1, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            {/* Rotating Leaf Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity }}
              className="hover:scale-110 transition-transform"
            >
              <Leaf size={40} className="text-primary-glow" />
            </motion.div>

            {/* Main Title */}
            <h1 className="text-6xl lg:text-8xl font-serif font-bold shimmer-effect">
              Organic Vista
            </h1>

            {/* Rotating Sparkles Icon */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity }}
              className="hover:scale-110 transition-transform"
            >
              <Sparkles size={40} className="text-accent" />
            </motion.div>
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="text-xl lg:text-3xl max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Journey into nature's sanctuary, where every product tells a story of purity and harmony
          </motion.p>

          {/* Call-to-Action Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <NatureButtonSafe
              variant="organic"
              size="lg"
              onClick={() => {
                const productsSection = document.querySelector('.container');
                if (productsSection) {
                  productsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }
              }}
            >
              <Leaf size={24} />
              WELCOME TO ORGANIC VISTA
            </NatureButtonSafe>
          </motion.div>
        </motion.div>
      </div>

      {/* Additional 3D Effects */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        {/* Example: Add dynamic 3D objects like rotating leaves or floating orbs */}
        <ThreeSceneSafe className="absolute inset-0" />
      </motion.div>
    </section>
  );
}