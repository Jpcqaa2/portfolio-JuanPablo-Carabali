import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Shifu =() =>{
    const shifuRef = useRef();
    const shifuModel = useGLTF("/assets/models/Shifu/scene.GLTF")
    const {animations} = shifuModel;
    console.log(shifuModel)
    const {actions} = useAnimations(animations, shifuRef);

    useEffect(()=>{
        const action = actions["show_lc_001"]
        action.play()

    }, [])
    return(
        <mesh ref = {shifuRef} position-x={0} position-y={-2.5} rotation-y={-Math.PI *0.15}>
            <primitive object={shifuModel.scene} />
        </mesh>
        
    )
}

export default Shifu;
useGLTF.preload("/assets/models/Shifu/scene.GLTF")