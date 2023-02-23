import React from 'react';
import './reactmedal-object.css';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ReactMedal from "./reactmedal";


const ReactMedalObject = () => {
    return (
        <div className='react-canvas'>
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
                <ReactMedal />
            </Canvas>
        </div>
    )
}

export default ReactMedalObject;
