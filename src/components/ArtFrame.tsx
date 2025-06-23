import React, { useCallback, useMemo, useRef, useState } from "react";
import { useTexture, Html } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ArtFrameProps {
  type: "frame1" | "frame2";
  source: THREE.Object3D;
  position?: [number, number, number];
  frameRotation?: [number, number, number];
  frameScale?: [number, number, number];
  imageRotation?: [number, number, number];
  imageScale?: [number, number, number];
  imagePosition: [number, number, number];
  imageDir: string;
  images: string[];
  planeGeometry: [number, number];
  cameraRef: any;
  leftButtonOffset: [number, number, number];
  rightButtonOffset: [number, number, number];
}

const ArtFrame: React.FC<ArtFrameProps> = ({
  type,
  source,
  position = [0, 0, 0],
  frameRotation = [0, 0, 0],
  frameScale = [1, 1, 1],
  imageRotation = [0, 0, 0],
  imageScale = [1, 1, 1],
  imagePosition,
  imageDir = "",
  images = [],
  planeGeometry = [],
  cameraRef = null,
  leftButtonOffset,
  rightButtonOffset,
}) => {
  const imageRef = useRef<any>(null);
  const zoomedCameraPos = useRef<THREE.Vector3 | null>(null);
  const zoomedCameraTarget = useRef<THREE.Vector3 | null>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const image_paths = images.map((image) => imageDir.concat(image));
  const allTextures = useTexture(image_paths, (loaded) => {
    loaded.forEach((tex) => {
      tex.colorSpace = "srgb";
      tex.needsUpdate = true;
    });
  }) as THREE.Texture[];
  // const allTextures = useTexture(image_paths);

  const currentTexture = allTextures[currentIndex];

  const frame = useMemo(() => {
    return source.clone();
  }, [source]);

  const lookAtPainting = useCallback((event: any) => {
    event.stopPropagation();
    if (!cameraRef.current || !imageRef.current) return;
    const target = imageRef.current.getWorldPosition(new THREE.Vector3());

    // Get the forward direction the image is facing
    const direction = new THREE.Vector3();
    imageRef.current.getWorldDirection(direction); // normalized

    // Move the camera back from the image by a fixed distance (e.g., 4 units)
    const cameraPos = target.clone().add(direction.multiplyScalar(2.5));

    cameraRef.current.setLookAt(
      ...cameraPos.toArray(),
      ...target.toArray(),
      true
    );
    setTimeout(() => {
      zoomedCameraPos.current = cameraPos.clone();
      zoomedCameraTarget.current = target.clone();
      setIsZoomed(true);
    }, 750);
  }, []);

  useFrame(({ camera }) => {
    if (!isZoomed || !zoomedCameraPos.current || !zoomedCameraTarget.current)
      return;

    const posChanged =
      camera.position.distanceTo(zoomedCameraPos.current) > 0.5;
    const targetChanged =
      cameraRef.current?.controls?.target &&
      !cameraRef.current.controls.target.equals(zoomedCameraTarget.current);

    if (posChanged || targetChanged) {
      setIsZoomed(false);
      zoomedCameraPos.current = null;
      zoomedCameraTarget.current = null;
    }
  });

  const nextImage = () => setCurrentIndex((i) => (i + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <>
      <group position={position} onDoubleClick={lookAtPainting}>
        {/* Frame group with independent transform */}
        <group rotation={frameRotation} scale={frameScale}>
          <primitive object={frame} />
        </group>
        {/* Image group with independent transform */}
        <group
          rotation={imageRotation}
          scale={imageScale}
          position={imagePosition}
        >
          <mesh ref={imageRef}>
            <planeGeometry args={planeGeometry} />
            <meshBasicMaterial
              map={currentTexture}
              toneMapped={false}
              side={THREE.FrontSide}
            />
          </mesh>
          {/* <mesh>
            <sphereGeometry args={[0.1]} />
            <meshStandardMaterial color="blue" />
          </mesh> */}
        </group>
        {/* Navigation buttons (visible only if zoomed in) */}
        {isZoomed && (
          <>
            <Html
              position={[
                imagePosition[0] + leftButtonOffset[0],
                imagePosition[1] + leftButtonOffset[1],
                imagePosition[2] + leftButtonOffset[2],
              ]}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                onDoubleClick={(e) => e.stopPropagation()}
                style={{
                  fontSize: "1.5rem",
                  padding: "0.5rem",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                ⟨
              </button>
            </Html>
            <Html
              position={[
                imagePosition[0] + rightButtonOffset[0],
                imagePosition[1] + rightButtonOffset[1],
                imagePosition[2] + rightButtonOffset[2],
              ]}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  nextImage();
                }}
                onDoubleClick={(e) => e.stopPropagation()}
                style={{
                  fontSize: "1.5rem",
                  padding: "0.5rem",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                ⟩
              </button>
            </Html>
          </>
        )}
      </group>
    </>
  );
};

export default ArtFrame;
