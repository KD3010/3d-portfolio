"use client";
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useEffect, useState } from 'react'

const Experience = ({ children }) => {
  const [fov, setFov] = useState(32);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setFov(50); // Adjust FOV for small devices
      } else {
        setFov(32); // Default FOV for larger devices
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to set the correct FOV

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Canvas
        camera={{
            fov,
            near: 0.1,
            far: 200,
            position: [-3, 0, 6]
        }}
        flat
    >
      <color args={["#201919"]} attach="background" />
      <ambientLight intensity={Math.PI / 2} />
      {children}
    </Canvas>
  )
}

export default Experience