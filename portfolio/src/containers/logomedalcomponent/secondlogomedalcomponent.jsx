import React from 'react';
import './secondlogomedalcomponent.css';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import LogoMedal from "./logomedal";


const SecondLogoMedalComponent = () => {
    return (
        <div className='second-logo-canvas'>
            <Canvas >

                
                <directionalLight intensity={15}  position={[0, 0, 1]} />
                <directionalLight intensity={15}  position={[0, 0, -1]} />
                <directionalLight intensity={15}  position={[1, 0, 1]} />

                <OrbitControls 
                    autoRotate={false}
                    autoRotateSpeed={10}
                    enableZoom={false}
                    />
                <LogoMedal />
            </Canvas>
        </div>
    )
}

export default SecondLogoMedalComponent;
