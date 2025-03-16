"use client";
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Experience = ({ children }) => {
  return (
    <Canvas
        camera={{
            fov: 37,
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