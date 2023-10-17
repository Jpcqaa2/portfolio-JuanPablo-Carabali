import React from "react";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";

export function Floor(props) {
    const PATH = "/assets/textures/grass/"

    const propstexture = useTexture({
        map: PATH + "grassAlpha.jpg",
        normalMap: PATH + "grassNormalGl.jpg",
        roughnessMap: PATH + "grassRough.jpg",
        aoMap: PATH + "grassAO.jpg",

    })
  return (
    <group {...props} dispose={null}>
    <mesh position-y={-2} rotation-x={-Math.PI / 2} >
    <planeGeometry attach="geometry" args={[12, 12]} />
    <meshStandardMaterial {...propstexture} />
</mesh>
    </group>
  );
 
}
