import {Canvas, useFrame, useLoader} from "@react-three/fiber";
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader";
import {Suspense} from "react";
import {useRef} from "react";


import {TextureLoader} from 'three/src/loaders/TextureLoader'

const name = (type) => `/model/textures/AR_15_Compact_${type}.png`;

function Scene() {
    const fbx = useLoader(FBXLoader, '/model/source/AR15 Compact.fbx')
    const [
        colorMap,
        metallicMap,
        aoMap,
        normalMap,
        roughnessMap
    ] = useLoader(TextureLoader, [
        name("Base_color"),
        name("Metallic"),
        name("Mixed_AO"),
        name("Normal_OpenGL"),
        name("Roughness"),
    ]);


    const myMesh = useRef();
    useFrame(({ clock }) => {
        myMesh.current.rotation.y = clock.getElapsedTime()/4;
    });

    return (
        <>
            <ambientLight intensity={200} />
            <directionalLight />
            <primitive ref={myMesh}
                position={[0, -2.5, 0]}
                rotation={[0, -1.5, 0]}
                       map={colorMap}
                       metallicMap={metallicMap}
                       aoMap={aoMap}
                       normalMap={normalMap}
                       roughnessMap={roughnessMap}
                       displacementScale={0.2}
                       object={fbx} scale={0.0025} />
        </>
    )
}

const Model = () => {
    return (
            <Canvas style={{height: 300}}>
                <Suspense fallback={null}>
                    <Scene/>
                </Suspense>
            </Canvas>
    );
};

export default Model;