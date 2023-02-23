import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/htmlmedal.gltf");
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
        geometry={nodes.Curve024.geometry}
        material={materials["SVGMat.004"]}
        position={[0.14, -0.92, 0.73]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[244.36, 1, 244.36]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve010.geometry}
        material={materials["SVGMat.005"]}
        position={[0.07, -0.92, -0.73]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[244.36, 1, 244.36]}
      />
    </group>
  );
}

useGLTF.preload("/htmlmedal.gltf");