const { useGLTF } = require("@react-three/drei")

const Bee = () => {
    const beeModel = useGLTF('/assets/models/bee/scene.gltf')
    console.log(beeModel);
    return (
        <mesh>
            <primitive object={beeModel.scene} />
        </mesh>
    )


}
export default Bee;
useGLTF.preload("/assets/models/bee/scene.gltf");