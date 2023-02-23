import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/header-rz-medal.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.medal}
        position={[1.02, 0.23, 0.78]}
        scale={[1.38, 1.08, 1.41]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve010.geometry}
        material={materials.SVGMat}
        position={[2.2, 0.23, 1.58]}
        rotation={[3.11, 1.29, -3.11]}
        scale={[30.04, 0.89, 30.04]}
      />
    </group>
  );
}

useGLTF.preload("/header-rz-medal.gltf");
