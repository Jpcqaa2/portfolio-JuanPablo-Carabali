import { FirstPersonControls, OrbitControls, PointerLockControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Shifu from "./World/Shifu";

import {Floor} from "./World/Floor";

const Experience = () => {
    const boxRef = useRef();
    const torusRef = useRef();
    const sphereRef = useRef();

    useFrame((state, delta)=>{
        boxRef.current.rotation.x += 1 * delta;
        torusRef.current.position.y = Math.sin(state.clock.getElapsedTime());
        torusRef.current.rotation.y = Math.cos(state.clock.getElapsedTime());
        sphereRef.current.position.x = Math.sin(state.clock.getElapsedTime()) + 5;
    })

    return (
        <>
            <mesh ref={boxRef} position={[6, 0, -2]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="green" />
            </mesh>
            
            <mesh ref={torusRef} position={[-2, 0, -5]} rotation={[-Math.PI / 4, 0, 0]} scale={0.6}>
                <torusGeometry args={[2, 1, 32, 64]} />
                <meshStandardMaterial wireframe color="green" />
            </mesh>

            <mesh ref={sphereRef} position-z={-10}>
                <sphereGeometry args={[2, 16, 32]} />
                <meshToonMaterial color="green" />
            </mesh>
            
            <OrbitControls makeDefault/>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <Shifu  />
            <Floor />
        </>
    )
}

export default Experience;