import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/logomedal.gltf");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.07, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.38, 1.08, 1.41]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["Brushed Metal Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["Brushed Metal Material"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve024.geometry}
        material={materials["SVGMat.003"]}
        position={[-1, -0.87, 0.07]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[28.54, 0.71, 28.54]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve010.geometry}
        material={materials["SVGMat.004"]}
        position={[1.12, -0.87, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={[28.54, 0.71, 28.54]}
      />
    </group>
  );
}



useGLTF.preload("/logomedal.gltf");