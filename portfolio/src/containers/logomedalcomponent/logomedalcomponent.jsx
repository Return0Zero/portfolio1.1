import React from 'react';
import './logomedalcomponent.css';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import LogoMedal from "./logomedal";


const LogoMedalComponent = () => {
    return (
        <div className='medal-canvas'>
            <Canvas   style={{
        touchAction: 'none' }}>

                
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
                <LogoMedal />
            </Canvas>
        </div>
    )
}

export default LogoMedalComponent;
