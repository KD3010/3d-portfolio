"use client";
import Experience from '@/components/Experience';
import { ContactShadows, Environment, Float, Html, PresentationControls, Text, useGLTF } from '@react-three/drei';
import React from 'react'

const Macbook = ({children}) => {
  const model = useGLTF("/models/macbook.gltf");
  return <primitive object={model.scene} position={[0, -0.9, 0]}>{children}</primitive>;
}

const Page = () => {

  return (
    <Experience>
      <Environment preset='city' />
      <PresentationControls 
        global 
        rotation={[0.13, 0.1, 0]}
        polar={[-0.2, 0.4]}
        azimuth={[-0.5, 0.75]}
      >
        <Float rotationIntensity={0.4}>
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
    </Experience>
  )
}

export default Page