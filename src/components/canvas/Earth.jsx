import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import CanvasLoader from "../Loader";

const Earth = React.memo(() => {
  const earthRef = useRef();
  const { scene } = useGLTF("./planet/scene.gltf");

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material.side = THREE.DoubleSide;
          child.material.needsUpdate = true;
          // Reduce material quality for better performance
          child.material.roughness = 1;
          child.material.metalness = 0;
        }
      });
    }
  }, [scene]);

  return (
    <primitive
      ref={earthRef}
      object={scene}
      scale={1.5}
      position-y={-0.8}
    />
  );
});

const EarthCanvas = () => {
  return (
    <Canvas
      shadows={false} // Disable shadows for better performance
      frameloop='demand'
      dpr={[1, 1.5]} // Lower DPR for better performance
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 800,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={false} // Disable auto-rotation
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;