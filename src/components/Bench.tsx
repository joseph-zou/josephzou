import { useGLTF } from "@react-three/drei";
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import { Mesh } from "three";
import * as THREE from "three";

const Bench = (props: any) => {
  const { scene, nodes, materials } = useGLTF("/models/bench.glb");
  const [woodTexture, benchTexture] = useLoader(THREE.TextureLoader, [
    "/textures/hardwood2.png",
    "/textures/bench.avif",
  ]);
  // const benchMesh = nodes.Bench as Mesh
  return (
    <group scale={[1.2, 1, 1]}>
      <mesh
        geometry={(nodes.BenchRoadKillOut_lambert5_0 as Mesh).geometry}
        position={[0, 0, -2.5]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial map={benchTexture} />
      </mesh>
    </group>
  );
};

export default Bench;
