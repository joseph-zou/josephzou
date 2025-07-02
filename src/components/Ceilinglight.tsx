import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

type CeilinglightProps = {
  ceilinglightPosition: [number, number, number];
  lightPosition: [number, number, number];
  targetPosition: [number, number, number];
};

const Ceilinglight = ({
  ceilinglightPosition,
  lightPosition,
  targetPosition,
}: CeilinglightProps) => {
  const { scene, nodes, materials } = useGLTF("/models/ceiling_light.glb");

  const spotlightRef = useRef<THREE.SpotLight>(null);
  const targetRef = useRef<THREE.Object3D>(null);
  const ceilingLight = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    if (spotlightRef.current && targetRef.current) {
      spotlightRef.current.target = targetRef.current;
    }
  });

  // const m = Spotlight
  return (
    <group>
      <group scale={[0.1, 0.1, 0.1]} position={ceilinglightPosition}>
        <primitive object={ceilingLight} />

        {/* Actual light in real-world space */}
      </group>
      <spotLight
        ref={spotlightRef}
        position={lightPosition}
        angle={Math.PI / 2} // wider spread (45 degrees)
        intensity={50} // adjust if too bright
        distance={7} // covers more space
        penumbra={0.7} // softer edges
        decay={2} // more realistic falloff
        castShadow
      />

      {/* Light target (also in real-world space) */}
      <object3D ref={targetRef} position={targetPosition} />

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

export default Ceilinglight;
