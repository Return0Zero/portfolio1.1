import React from 'react';
import './htmlmedal-object.css';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HTMLMedal from "./htmlmedal";


const HTMLMedalObject = () => {
    return (
        <div className='html-canvas'>
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
                <HTMLMedal />
            </Canvas>
        </div>
    )
}

export default HTMLMedalObject;
