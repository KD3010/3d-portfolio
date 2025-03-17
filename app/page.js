"use client";
import * as THREE from 'three';
import Experience from '@/components/Experience';
import { ContactShadows, Environment, Float, Html, PresentationControls, Text, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react'

const Macbook = ({children}) => {
  const model = useGLTF("/models/macbook.gltf");
  return <primitive object={model.scene} position={[0, -0.9, 0]}>{children}</primitive>;
}

const Scene = () => {
  const color = new THREE.Color;
  const fullScreenRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    fullScreenRef.current.material.color.lerp(color.set(hovered ? '#2a5298' : '#fff'), 0.1);
  })

  return (<>
    <PresentationControls 
        global 
        rotation={[0.13, 0.1, 0]}
        polar={[-0.2, 0.4]}
        azimuth={[-0.5, 0.75]}
      >
        <Float rotationIntensity={0.4}>
          <Text
              font='/fonts/bangers.woff'
              fontSize={0.1}
              position={[ -1.2, 1.8, -1.7 ]}
              rotation={[ -0.2, -0.15, 0 ]}
              textAlign='center'
              onClick={() => window.location.assign('/portfolio.html')}
              ref={fullScreenRef}
              onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
              onPointerOut={() => setHovered(false)}
            >
            Full Screen
          </Text>
          <rectAreaLight 
            width={3.6}
            height={1.65}
            intensity={65}
            color={'#41b1ff'}
            rotation={[ -1, Math.PI, 0 ]}
            position={[ -0, -0.25, -1.8 ]}
            
          />
          <Macbook>
            <Html 
                transform 
                wrapperClass='htmlScreen' 
                distanceFactor={1.17}
                position={[0, 1.56, -1.4]}
                rotation-x={ -0.256 }>
                  <iframe src='/portfolio.html' />
              </Html>
          </Macbook>

          <Text 
            font='/fonts/bangers.woff'
            fontSize={0.5}
            position={[ 0, -1, 1.2 ]}
            rotation={[ 0, -0.35, 0.15 ]}
            textAlign='center'
          >
            {'Kushagra \nDevda'}
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows 
        position-y={-1.4}
        opacity={0.4}
        blur={1.4}  
      />
  </>)
}

const Page = () => {
  return (
    <Experience>
      <Environment preset='city' />
      <Scene />
    </Experience>
  )
}

export default Page