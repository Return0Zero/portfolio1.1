import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/adobemedal.gltf");
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
        material={materials["SVGMat.001"]}
        position={[0.13, -0.77, -0.88]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[333.98, 0.8, 333.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve010.geometry}
        material={materials.SVGMat}
        position={[0.06, -0.77, 0.83]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[333.98, 0.8, 333.98]}
      />
    </group>
  );
}

useGLTF.preload("/adobemedal.gltf");