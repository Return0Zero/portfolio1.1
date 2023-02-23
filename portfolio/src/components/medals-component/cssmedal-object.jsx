import React from 'react';
import './cssmedal-object.css';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CSSMedal from "./cssmedal";


const CSSMedalObject = () => {
    return (
        <div className='css-canvas'>
            <Canvas >

                
                <directionalLight intensity={50}  position={[0, 0, 1]} />
                <directionalLight intensity={50}  position={[0, 0, -1]} />
                <directionalLight intensity={50}  position={[1, 0, 1]} />
                <directionalLight intensity={50}  position={[-1, 0, 1]} />
                <directionalLight intensity={50}  position={[-1, 0, -1]} />
                <directionalLight intensity={50}  position={[1, 0, -1]} />

                <OrbitControls 
                    autoRotate={true}
                    autoRotateSpeed={10}
                    enableZoom={false}
                    />
                <CSSMedal />
            </Canvas>
        </div>
    )
}

export default CSSMedalObject;
