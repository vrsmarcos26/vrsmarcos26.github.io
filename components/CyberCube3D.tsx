// components/CyberCube3D.tsx
"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function InteractiveCube() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  // Rotação contínua + reação sutil ao movimento do mouse
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    meshRef.current.rotation.x = time * 0.2 + state.mouse.y * 0.5;
    meshRef.current.rotation.y = time * 0.3 + state.mouse.x * 0.5;

    // Se passar o mouse, o cubo escala levemente
    const targetScale = hovered ? 1.2 : 1.0;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  // Cor adaptável (Verde Esmeralda no escuro, Azul no claro)
  const isDark =
    typeof window !== "undefined" &&
    document.documentElement.getAttribute("data-theme") === "dark";
  const primaryColor = isDark ? "#38a169" : "#2673D5";

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[2.4, 1]} />
        <meshStandardMaterial
          color={primaryColor}
          wireframe={true}
          emissive={primaryColor}
          emissiveIntensity={hovered ? 0.8 : 0.3}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function CyberCube3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto -z-10 opacity-40 dark:opacity-60">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <InteractiveCube />
      </Canvas>
    </div>
  );
}