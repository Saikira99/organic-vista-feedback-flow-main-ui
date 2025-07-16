import React, { useState, useEffect } from 'react';
import { Leaf, Sparkles, Droplets, Sun } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),   // Logo appear
      setTimeout(() => setStage(2), 1200),  // Grow animation
      setTimeout(() => setStage(3), 2000),  // Nature effects
      setTimeout(() => setStage(4), 3000),  // Text appear
      setTimeout(() => setStage(5), 4000),  // Sparkle effect
      setTimeout(() => onComplete(), 5000), // Complete
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-primary/20 rounded-full animate-float-slow ${
              stage >= 2 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Flowing Organic Shapes */}
      <div className="absolute inset-0">
        <div 
          className={`absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-xl transition-all duration-2000 ${
            stage >= 2 ? 'scale-150 opacity-100' : 'scale-75 opacity-0'
          }`}
        />
        <div 
          className={`absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-radial from-success/10 to-transparent rounded-full blur-xl transition-all duration-2000 ${
            stage >= 3 ? 'scale-125 opacity-100' : 'scale-50 opacity-0'
          }`}
        />
      </div>

      {/* Main Logo Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Central Logo Circle */}
          <div 
            className={`relative w-32 h-32 rounded-full bg-gradient-to-br from-primary-glow to-primary flex items-center justify-center transition-all duration-1000 ${
              stage >= 1 ? 'scale-100 opacity-100 shadow-glow' : 'scale-0 opacity-0'
            } ${
              stage >= 2 ? 'animate-pulse-gentle' : ''
            }`}
          >
            {/* Growing Leaf Animation */}
            <Leaf 
              size={48} 
              className={`text-white transition-all duration-1000 ${
                stage >= 2 ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
              }`}
            />
            
            {/* Orbital Elements */}
            <div className={`absolute inset-0 transition-all duration-2000 ${stage >= 3 ? 'animate-spin-slow' : ''}`}>
              {/* Water Droplet */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Droplets 
                  size={16} 
                  className={`text-info transition-all duration-1000 ${
                    stage >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                />
              </div>
              
              {/* Sun */}
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
                <Sun 
                  size={16} 
                  className={`text-warning transition-all duration-1000 ${
                    stage >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                />
              </div>
              
              {/* Sparkle */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <Sparkles 
                  size={16} 
                  className={`text-success transition-all duration-1000 ${
                    stage >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                />
              </div>
              
              {/* Secondary Leaf */}
              <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
                <Leaf 
                  size={16} 
                  className={`text-primary-glow transition-all duration-1000 ${
                    stage >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Expanding Ripple Effects */}
          {stage >= 2 && (
            <>
              <div className="absolute inset-0 w-32 h-32 rounded-full border-2 border-primary/20 animate-ping" />
              <div className="absolute inset-0 w-32 h-32 rounded-full border border-primary-glow/30 animate-pulse" 
                   style={{ animationDelay: '0.5s' }} />
            </>
          )}
        </div>
      </div>

      {/* Brand Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mt-48 text-center">
          <h1 
            className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-primary-glow to-success bg-clip-text text-transparent transition-all duration-1000 ${
              stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Organic Vista
          </h1>
          <p 
            className={`text-lg text-muted-foreground mt-2 transition-all duration-1000 ${
              stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            Nature's Finest Selection
          </p>
        </div>
      </div>

      {/* Final Sparkle Burst */}
      {stage >= 5 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <Sparkles
              key={i}
              size={20}
              className="absolute text-primary-glow animate-sparkle-burst"
              style={{
                left: '50%',
                top: '50%',
                transform: `rotate(${i * 30}deg) translateY(-100px)`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Growing Vine Decorations */}
      <div className={`absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-primary/5 to-transparent transition-all duration-2000 ${
        stage >= 3 ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
      }`}>
        <div className="absolute bottom-0 left-1/4 w-2 h-full bg-gradient-to-t from-success/20 to-transparent rounded-t-full" />
        <div className="absolute bottom-0 left-3/4 w-2 h-full bg-gradient-to-t from-primary/20 to-transparent rounded-t-full" />
      </div>
    </div>
  );
}