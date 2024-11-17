import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ComputerModel = () => {
  const computer = useGLTF('/vending_machine.glb');
  // const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    computer.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.transparent = false;
        child.material.opacity = 1;
        child.material.side = THREE.DoubleSide;
      }
    });

    // Center the model
    // if (modelRef.current) {
    //     const box = new THREE.Box3().setFromObject(computer.scene);
    //     const center = box.getCenter(new THREE.Vector3());
    //     computer.scene.position.sub(center);
    // }
  }, [computer]);

//   useFrame((state, delta) => {
//     if (modelRef.current) {
//         modelRef.current.rotation.y += delta * 0.3 // Speed factor
//     }
//   });

  return (
    <primitive
      // ref={modelRef}
      object={computer.scene}
      scale={0.75}
      position={[0, 0, 0]}
    />
  );
};

export { ComputerModel };