import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/javascriptmedal.gltf");
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
        geometry={nodes.Curve022.geometry}
        material={materials["SVGMat.006"]}
        position={[0.13, -0.66, 0.99]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[83.72, 1, 83.72]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve010.geometry}
        material={materials["SVGMat.007"]}
        position={[0.08, -0.66, -0.91]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[83.72, 1, 83.72]}
      />
    </group>
  );
}

useGLTF.preload("/javascriptmedal.gltf");