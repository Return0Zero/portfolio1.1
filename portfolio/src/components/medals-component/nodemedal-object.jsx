import React from 'react';
import './nodemedal-object.css';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import NodeMedal from "./nodemedal";


const NodeMedalObject = () => {
    return (
        <div className='node-canvas'>
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
                <NodeMedal />
            </Canvas>
        </div>
    )
}

export default NodeMedalObject;
