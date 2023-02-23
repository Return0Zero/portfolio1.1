import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/nodemedal.gltf");
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
        geometry={nodes.Curve021.geometry}
        material={materials["SVGMat.008"]}
        position={[0.14, -0.98, 0.87]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[85.15, 1, 85.15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve010.geometry}
        material={materials["SVGMat.009"]}
        position={[0.07, -0.98, -0.87]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[85.15, 1, 85.15]}
      />
    </group>
  );
}

useGLTF.preload("/nodemedal.gltf");
