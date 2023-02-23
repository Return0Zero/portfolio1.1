import React from 'react';
import './javascriptmedal-object.css';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import JavascriptMedal from "./javascriptmedal";


const JavascriptMedalObject = () => {
    return (
        <div className='javascript-canvas'>
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
                <JavascriptMedal />
            </Canvas>
        </div>
    )
}

export default JavascriptMedalObject;
