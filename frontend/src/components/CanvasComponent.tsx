/* 
    Resources: 
    - Three.js: https://r3f.docs.pmnd.rs/api/canvas
    - Drei: https://drei.pmnd.rs/api
*/

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Preload } from "@react-three/drei";
import { Suspense } from "react";

interface CanvasProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

const CanvasComponent = ({ children, backgroundColor = "#f0f0f0" }: CanvasProps) => {
  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ 
        position: [4, 2, 4], 
        fov: 35,
        near: 0.1,
        far: 1000,
      }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
      }}
    >
      <color attach="background" args={[backgroundColor]} />

      <ambientLight intensity={0.5} />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <Suspense fallback={null}>
        <Stage
          environment="city"
          intensity={1}
          shadows
          adjustCamera={false}
          preset="portrait"
        >
          {children}
        </Stage>
      </Suspense>

      <OrbitControls
        enableZoom={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
        maxDistance={10}
        minDistance={2}
        dampingFactor={0.3}
      />
      
      <Preload all />
    </Canvas>
  );
};

export default CanvasComponent;