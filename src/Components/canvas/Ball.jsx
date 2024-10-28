import React, { useState, Suspense } from "react"; // Import Suspense here
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import { creator } from "../../assets";
import * as THREE from 'three'; // Import THREE to use RepeatWrapping

const Ball = ({ imgUrl }) => {
  // State for handling errors
  const [isError, setIsError] = useState(false);

  // Load the texture
  const [decal] = useTexture([imgUrl], (texture) => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping; // Optional for repeating textures
  });

  // Error handling for the texture loading
  const handleTextureError = () => {
    console.warn(`Failed to load texture from: ${imgUrl}`);
    setIsError(true);
  };

  // Set default image in case of an error
  const defaultImg = creator; // Ensure you have a default image in your assets

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#c2a4de'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={isError ? defaultImg : decal} // Use default image if there's an error
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
