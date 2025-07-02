import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

type SpotlightProps = {
  spotlightPosition: [number, number, number];
  spotlightRotation: [number, number, number];
  lightPosition: [number, number, number];
  targetPosition: [number, number, number];
};

const Spotlight = ({
  spotlightPosition,
  spotlightRotation,
  lightPosition,
  targetPosition,
}: SpotlightProps) => {
  const { nodes, materials } = useGLTF("/models/spotlight.glb");

  const spotlightRef = useRef<THREE.SpotLight>(null);
  const targetRef = useRef<THREE.Object3D>(null);

  const spotlightTail = useMemo(
    () => nodes.Spotlight_Spotlight_0.clone(),
    [nodes]
  );
  const spotlightHead = useMemo(
    () => nodes.Spotlight001_Spotlight_0.clone(),
    [nodes]
  );
  // const spotlightHead = nodes["Spotlight001_Spotlight_0"];
  // const spotlightTail = nodes["Spotlight_Spotlight_0"];

  useEffect(() => {
    if (spotlightRef.current && targetRef.current) {
      spotlightRef.current.target = targetRef.current;
    }
  });

  // const m = Spotlight
  return (
    <group>
      {/* Scaled model only */}
      <group castShadow receiveShadow>
        <group scale={[0.01, 0.01, 0.01]} position={spotlightPosition}>
          <group>
            <primitive object={spotlightTail} />
          </group>
          <group position={[0, -30, 0]} rotation={spotlightRotation}>
            <primitive object={spotlightHead} />
          </group>
        </group>
      </group>

      {/* Actual light in real-world space */}
      <spotLight
        ref={spotlightRef}
        position={lightPosition}
        angle={Math.PI / 4} // wider spread (45 degrees)
        intensity={30} // adjust if too bright
        distance={6} // covers more space
        penumbra={0.7} // softer edges
        decay={2} // more realistic falloff
        castShadow
      />

      {/* Light target (also in real-world space) */}
      <object3D
        ref={targetRef}
        position={targetPosition}
        rotation={spotlightRotation}
      />

      {/* Debugging spheres */}
      {/* <mesh position={targetPosition}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh position={targetPosition}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="green" />
      </mesh> */}
    </group>
  );
};

export default Spotlight;
