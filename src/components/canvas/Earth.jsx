import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = ({ scrollY }) => {
  const earthRef = useRef();
  const { scene } = useGLTF("./planet/scene.gltf");

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          if (child.geometry.attributes.position.array.some(isNaN)) {
            console.error("Model contains NaN values in position attribute");
          }
        }
      });
    }
  }, [scene]);

  useFrame(() => {
    if (earthRef.current) {
      // Adjust this value to control the vertical rotation speed
      const verticalRotation = scrollY * 0.002;
      earthRef.current.rotation.x = verticalRotation;
    }
  });

  return (
    <primitive 
      ref={earthRef}
      object={scene} 
      scale={1.7} 
      position-y={-0.8} 
    />
  );
};

const EarthCanvas = () => {
  const [scrollY, setScrollY] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
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
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth scrollY={scrollY} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;