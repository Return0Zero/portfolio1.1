import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/cssmedal.gltf");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.07, 0, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
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
        geometry={nodes.Curve010.geometry}
        material={materials["SVGMat.002"]}
        position={[0.14, -0.99, 0.78]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[263.99, 1, 263.99]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve021.geometry}
        material={materials["SVGMat.003"]}
        position={[0.08, -0.99, -0.8]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[263.99, 1, 263.99]}
      />
    </group>
  );
}

useGLTF.preload("/cssmedal.gltf");
