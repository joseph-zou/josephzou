import { Text3D } from "@react-three/drei";
import { useRef } from "react";
import { FontLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";
import helvetikerBold from "three/examples/fonts/helvetiker_bold.typeface.json";
import type { FontData } from "@react-three/drei";
const Project = () => {
  const textRef = useRef<THREE.Mesh>(null);
  return (
    <Text3D
      font={helvetikerBold as unknown as FontData}
      ref={textRef}
      position={[0, 0, 0]}
      size={0.5} // bigger for thicker look
    >
      <meshStandardMaterial
        color="#4B0082"
        metalness={1} // fully metallic
        roughness={0.4} // some roughness for realism
        emissive="#2E003E" // subtle dark gold emissive
        emissiveIntensity={0.3}
        toneMapped={false}
      />
      Projects
    </Text3D>
  );
};

export default Project;
