import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function FloatingLeaf({ position }: { position: [number, number, number] }) {
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

function Particles() {
  const particlesRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 30; i++) {
      positions.push([
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ] as [number, number, number]);
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
        <Sphere key={index} position={position} args={[0.05]}>
          <meshStandardMaterial color="#86efac" emissive="#22c55e" emissiveIntensity={0.3} />
        </Sphere>
      ))}
    </group>
  );
}

interface ThreeSceneProps {
  className?: string;
}

export function ThreeScene({ className = "" }: ThreeSceneProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} color="#86efac" intensity={0.8} />
        <pointLight position={[-10, -10, -10]} color="#fbbf24" intensity={0.5} />
        
        <FloatingLeaf position={[-2, 1, 0]} />
        <FloatingLeaf position={[2, -1, 0]} />
        <FloatingLeaf position={[0, 2, -1]} />
        
        <Particles />
        
        <Environment preset="forest" />
      </Canvas>
    </div>
  );
}