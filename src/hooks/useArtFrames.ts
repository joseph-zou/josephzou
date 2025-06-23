// useFrames.ts
import { useGLTF } from "@react-three/drei";

export const useArtFrames = () => {
  const { scene: frame1 } = useGLTF("/models/frame1.glb");
  const { scene: frame2 } = useGLTF("/models/frame2.glb");
  return { frame1, frame2 };
};
