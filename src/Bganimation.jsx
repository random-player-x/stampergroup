import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

const AnimatedStars = () => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005; // Rotate stars around Y-axis
    }
  });

  return (
    <group ref={groupRef}>
      <Stars
        radius={300} // Inner radius of the sphere
        depth={100}   // Depth of the star field
        count={10000} // Number of stars
        factor={20}   // Increased from 4 to 6 to make stars larger
        saturation={1}
        fade
        speed={2}
      />
    </group>
  );
};

const SpaceBackground = () => {
    return (
      <div
        style={{
          width: "100%",
          height: "180%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1, // Ensure it is behind all other content
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 1] }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedStars />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>
    );
  };
  
  export default SpaceBackground;
  