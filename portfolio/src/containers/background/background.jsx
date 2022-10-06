import React from 'react';
import './background.css';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Terrain from "./terrain";



const Background = () => {
    return (
        <div className='background--section'>
            <Canvas >
                <directionalLight intensity={0.7} />
                <OrbitControls 
                    autoRotate={true}
                    autoRotateSpeed={0.5}
                    enableZoom={false}
                    />
                <Terrain />
                <Stars />
            </Canvas>
        </div>
    )
}

export default Background;
