import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ConfigurableSphere = ({
  numberOfZones = 15,
  sphereRadius = 1,
  zoneOpacities = [],
  zoneColors = [],
  zoneWidths = [], // New prop for custom zone widths
  rotationSpeed = 0.01,
  zoneRotationSpeed = 0.005,
  centralZoneIndex = 8 // Changed to allow more flexible central zone placement
}) => {
  const coreRef = useRef();
  const zonesRef = useRef([]);
  const sceneRef = useRef();

  // Mouse controls state
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });
  const [rotationDelta, setRotationDelta] = useState({ x: 0, y: 0 });

  // Initialize spherical zones
  useEffect(() => {
    const zones = [];
    let currentStartPhi = 0;

    for (let i = 0; i < numberOfZones; i++) {
      // Determine zone width
      const zoneWidth = zoneWidths.length > 0 
        ? zoneWidths[i % zoneWidths.length] 
        : Math.PI / numberOfZones;

      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      const segments = 100;

      const startPhi = currentStartPhi;
      const endPhi = startPhi + zoneWidth;
      currentStartPhi = endPhi;

      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2;

        for (let k = 0; k <= 1; k++) {
          const phi = k === 0 ? startPhi : endPhi;
          const x = sphereRadius * Math.sin(phi) * Math.cos(theta);
          const y = sphereRadius * Math.cos(phi);
          const z = sphereRadius * Math.sin(phi) * Math.sin(theta);
          vertices.push(x, y, z);
        }
      }

      const indices = [];
      for (let j = 0; j < segments; j++) {
        const base = j * 2;
        indices.push(base, base + 1, base + 2);
        indices.push(base + 1, base + 3, base + 2);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );
      geometry.setIndex(indices);
      geometry.computeVertexNormals();

      // Determine zone color
      let zoneColor = 0xffffff;
      if (zoneColors.length > 0) {
        zoneColor = zoneColors[i % zoneColors.length];
      }

      // Determine zone opacity
      const zoneOpacity = zoneOpacities.length > 0 
        ? zoneOpacities[i % zoneOpacities.length] 
        : 1;

      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: zoneOpacity,
        side: THREE.DoubleSide,
      });

      const zone = new THREE.Mesh(geometry, material);
      
      // Rotation direction logic (now based on index)
      zone.userData.isClockwise = i % 4 === 1 || i % 4 === 2;
      zone.userData.isAntiClockwise = i % 4 === 0 || i % 4 === 3;

      zones.push(zone);
    }

    zonesRef.current = zones;
  }, [numberOfZones, sphereRadius, zoneOpacities, zoneColors, zoneWidths]);

  // Mouse drag controls
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setRotationDelta((prev) => ({
        x: prev.x + (e.clientY - lastMousePosition.y) * 0.002,
        y: prev.y + (e.clientX - lastMousePosition.x) * 0.002,
      }));
      setLastMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, lastMousePosition]);

  // Animation loop
  useFrame(() => {
    if (sceneRef.current) {
      sceneRef.current.rotation.y += rotationDelta.y;
      sceneRef.current.rotation.x += rotationDelta.x;

      setRotationDelta((prev) => ({
        x: prev.x * 0.95,
        y: prev.y * 0.95,
      }));
    }

    zonesRef.current.forEach((zone) => {
      if (zone.userData.isClockwise) {
        zone.rotation.y += zoneRotationSpeed;
      } else if (zone.userData.isAntiClockwise) {
        zone.rotation.y -= zoneRotationSpeed;
      }
    });

    if (coreRef.current) {
      coreRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={sceneRef} rotation={[Math.PI / 2, 1, 2]}>
      {/* Core Sphere */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshBasicMaterial color={0xff6e00} />
      </mesh>

      {/* Zones */}
      {zonesRef.current.map((zone, index) => (
        <primitive object={zone} key={index} />
      ))}
    </group>
  );
};

export default function ConfigurableSphereScene() {
  return (
    <Canvas
      style={{ height: "100vh", width: "100vw", background: "transparent" }}
      camera={{ position: [0, 0, 6] }}
    >
      <ConfigurableSphere 
        numberOfZones={13}
        zoneWidths={[
          Math.PI / 10,  // Narrow zone
          Math.PI / 10,  // Wide zone
          Math.PI / 10,
          Math.PI / 30   // Medium zone
        ]}
        zoneOpacities={[
          0,  // Translucent zone
          1,
          0,
          1  // More opaque zone 

        ]}
        zoneColors={[
          0xffffff,  // Changed all colors to white
          0xffffff,
          0xffffff,
          0xffffff,
        ]}
        rotationSpeed={0.005}
        zoneRotationSpeed={0.002}
        centralZoneIndex={3}
      />
    </Canvas>
  );
}