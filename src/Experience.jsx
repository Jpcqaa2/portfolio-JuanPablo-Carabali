import { FirstPersonControls, OrbitControls, PointerLockControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Shifu from "./World/Shifu";

import {Floor} from "./World/Floor";

const Experience = () => {
    

    return (
        <>
            
            <OrbitControls makeDefault/>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <Shifu  />
            <Floor />
        </>
    )
}

export default Experience;