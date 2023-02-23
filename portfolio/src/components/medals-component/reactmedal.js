
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/reactmedal.gltf");
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
        geometry={nodes.Curve023.geometry}
        material={materials["SVGMat.002"]}
        position={[0.1, -0.95, 1.07]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[18.09, 2, 18.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve022.geometry}
        material={materials["SVGMat.002"]}
        position={[0.1, -0.95, 1.07]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[18.09, 2, 18.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve021.geometry}
        material={materials["SVGMat.002"]}
        position={[0.1, -0.95, 1.07]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[18.09, 2, 18.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve010.geometry}
        material={materials["SVGMat.002"]}
        position={[0.1, -0.95, 1.07]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[18.09, 2, 18.09]}
      />
    </group>
  );
}

useGLTF.preload("/reactmedal.gltf");