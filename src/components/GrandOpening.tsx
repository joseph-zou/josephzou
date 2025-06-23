import { Text } from "@react-three/drei";
import { useRef, useEffect } from "react";
import {
  EffectComposer,
  Bloom,
  Selection,
  Select,
} from "@react-three/postprocessing";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

const GrandOpening = () => {
  const textRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  // useEffect(() => {
  //   camera.layers.enable(1); // bloom layer
  // }, [camera]);

  // useEffect(() => {
  //   if (textRef.current) {
  //     textRef.current.layers.set(1); // Bloom-only layer
  //   }
  // }, []);
  return (
    <>
      <Text
        ref={textRef}
        position={[0, 0, 0]}
        color="white"
        fontSize={1}
        anchorX="center"
        anchorY="middle"
      >
        <meshStandardMaterial
          emissive="red"
          emissiveIntensity={5}
          color="black"
          toneMapped={false}
        />
        Grand Opening
      </Text>
      <Text
        position={[0, 0, -0.01]} // push slightly back
        fontSize={1.02} // slightly larger
        anchorX="center"
        anchorY="middle"
      >
        <meshBasicMaterial
          color="red"
          transparent
          opacity={0.4}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
        Grand Opening
      </Text>
    </>
  );
};

export default GrandOpening;
