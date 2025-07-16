import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { ErrorBoundary } from '../ErrorBoundary';

// Extend Three.js objects for react-three-fiber
extend({ Mesh: THREE.Mesh, SphereGeometry: THREE.SphereGeometry, MeshStandardMaterial: THREE.MeshStandardMaterial });

interface FloatingLeafProps {
  position: [number, number, number];
}

function FloatingLeaf({ position }: FloatingLeafProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.3, 8, 6]} />
        <meshStandardMaterial color="#4ade80" transparent opacity={0.7} />
      </mesh>
    </Float>
  );
}

function ParticlesSafe() {
  const particlesRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 20; i++) { // Reduced count for performance
      positions.push([
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
      ]);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={particlesRef}>
      {particles.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.05, 6, 4]} />
          <meshStandardMaterial color="#86efac" emissive="#22c55e" emissiveIntensity={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} color="#86efac" intensity={0.8} />
      <pointLight position={[-10, -10, -10]} color="#fbbf24" intensity={0.5} />
      
      <FloatingLeaf position={[-2, 1, 0]} />
      <FloatingLeaf position={[2, -1, 0]} />
      <FloatingLeaf position={[0, 2, -1]} />
      
      <ParticlesSafe />
      
      <Environment preset="forest" />
    </>
  );
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin text-forest-500 text-2xl">🌿</div>
    </div>
  );
}

interface ThreeSceneSafeProps {
  className?: string;
}

export function ThreeSceneSafe({ className = "" }: ThreeSceneSafeProps) {
  // Check for WebGL support
  const supportsWebGL = useMemo(() => {
    try {
      const canvas = document.createElement('canvas');
      return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch (e) {
      return false;
    }
  }, []);

  if (!supportsWebGL) {
    return (
      <div className={`w-full h-full flex items-center justify-center ${className}`}>
        <div className="text-forest-500 text-center">
          <div className="text-4xl mb-2">🌿</div>
          <p className="text-sm">3D not supported</p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className={`w-full h-full ${className}`}>
        <Suspense fallback={<LoadingFallback />}>
          <Canvas 
            camera={{ position: [0, 0, 5], fov: 60 }}
            gl={{ antialias: false, alpha: true }}
            dpr={[1, 1.5]} // Limit pixel ratio for performance
          >
            <Scene />
          </Canvas>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}