import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
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
          child.material.roughness = 1;
          child.material.metalness = 0;
          child.material.map.minFilter = THREE.LinearFilter;
          child.material.map.generateMipmaps = false;
        }
      });
    }
  }, [scene]);

  return (
    <primitive
      ref={earthRef}
      object={scene}
      scale={1.3} // Reduced from 1.5 to 1.0
      position-y={-0.9} // Adjusted from -0.8 to 0
    />
  );
});

const EarthCanvas = () => {
  return (
    <Canvas
      shadows={false}
      frameloop='demand'
      dpr={[1, 1.2]}
      gl={{ antialias: false, preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200, // Reduced from 800 to 200
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={false}
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