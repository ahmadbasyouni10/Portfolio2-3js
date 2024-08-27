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
          // Restore better quality settings
          child.material.roughness = 0.5;
          child.material.metalness = 0.5;
          child.material.map.minFilter = THREE.LinearMipmapLinearFilter;
          child.material.map.magFilter = THREE.LinearFilter;
          child.material.map.anisotropy = 16;
          child.material.map.generateMipmaps = true;
        }
      });
    }
  }, [scene]);

  return (
    <primitive
      ref={earthRef}
      object={scene}
      scale={1.3}
      position-y={-0.9}
    />
  );
});

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ 
        antialias: true, 
        preserveDrawingBuffer: true,
        alpha: true,
        powerPreference: "high-performance"
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;