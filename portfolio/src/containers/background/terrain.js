import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/terrain.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, -1.5, 2]}
        rotation={[-Math.PI, 0.39, -Math.PI]}
        scale={[12, 12.8, 12]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/terrain.glb");