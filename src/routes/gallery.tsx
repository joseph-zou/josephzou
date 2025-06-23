import { useState, useEffect, useRef, useMemo, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Canvas, useLoader } from "@react-three/fiber";
import { CameraControls, MeshReflectorMaterial } from "@react-three/drei";
import Bench from "@/components/Bench";
import Spotlight from "@/components/Spotlight";
import Ceilinglight from "@/components/Ceilinglight";
import GrandOpening from "@/components/GrandOpening";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import ExplosionConfetti from "@/components/Confetti";
import { useArtFrames } from "@/hooks/useArtFrames";
import ArtFrame from "@/components/ArtFrame";
import Memories from "@/components/Memories";
import Project from "@/components/Project";
import Instructions from "@/components/Instructions";
import Loader from "@/components/Loader";

export const Route = createFileRoute("/gallery")({
  component: RouteComponent,
});

function RouteComponent() {
  const cameraRef = useRef<CameraControls | null>(null);

  const [woodTexture, wallTexture, rightWallTexture] = useLoader(
    THREE.TextureLoader,
    [
      "/textures/hardwood2.png",
      "/textures/polyhaven__painted_plaster_wall_diff_2k.jpg",
      "/textures/darkBlueWall.jpg",
    ]
  );
  const { frame1, frame2 } = useArtFrames();

  const { scene, nodes } = useGLTF("/models/baseboard.glb");
  const baseboard1 = useMemo(() => scene.clone(true), [scene]);
  const baseboard2 = useMemo(() => scene.clone(true), [scene]);
  const baseboard3 = useMemo(() => scene.clone(true), [scene]);

  const { scene: stanchionScene, nodes: stanchionNodes } = useGLTF(
    "/models/stanchions.glb"
  );
  const stanchion1 = useMemo(
    () => stanchionScene.clone(true),
    [stanchionScene]
  );
  const stanchion2 = useMemo(
    () => stanchionScene.clone(true),
    [stanchionScene]
  );
  const stanchion3 = useMemo(
    () => stanchionScene.clone(true),
    [stanchionScene]
  );
  const stanchion4 = useMemo(
    () => stanchionScene.clone(true),
    [stanchionScene]
  );
  const stanchion5 = useMemo(
    () => stanchionScene.clone(true),
    [stanchionScene]
  );
  const degToRad = (deg: number) => (deg * Math.PI) / 180;

  const { scene: securityCamera } = useGLTF("/models/security_camera.glb");
  const securityCamera1 = useMemo(
    () => securityCamera.clone(true),
    [securityCamera]
  );
  const securityCamera2 = useMemo(
    () => securityCamera.clone(true),
    [securityCamera]
  );

  useEffect(() => {
    woodTexture.wrapS = woodTexture.wrapT = THREE.RepeatWrapping;
    woodTexture.repeat.set(1, 4); // ← tweak this to control tile density
  }, [woodTexture]);

  const lookAtWall = (
    cameraPos: [number, number, number],
    lookAt: [number, number, number]
  ) => {
    if (cameraRef.current) {
      cameraRef.current.setLookAt(...cameraPos, ...lookAt, true); // animate = true
    }
  };

  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{
          position: [-20, 5, 11],
          near: 0.1,
          far: 1000,
          fov: 60,
        }}
        style={{ background: "black" }}
      >
        <Suspense fallback={<Loader />}>
          <group position={[0, 0, 2]}>
            <Instructions />
            <group position={[-5, 6, 0]} rotation={[0, -Math.PI / 2, 0]}>
              <GrandOpening />
            </group>
            <CameraControls
              ref={cameraRef}
              maxDistance={30}
              minPolarAngle={0} // Look straight ahead (horizontal)
              maxPolarAngle={Math.PI / 2}
            />
            {/* Backwall baseboard */}
            <group position={[0, 0.14, -9.96]} scale={[0.2, 0.03, 0.05]}>
              <primitive object={baseboard1} />
            </group>
            {/* Rightwall baseboard */}
            <group
              position={[4.96, 0.14, -2.5]}
              scale={[0.3, 0.03, 0.05]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <primitive object={baseboard2} />
            </group>
            {/* Rightwall baseboard */}
            <group
              position={[4.96, 0.14, -2.5]}
              scale={[0.3, 0.03, 0.05]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <primitive object={baseboard2} />
            </group>
            {/* Leftwall baseboard */}
            <group
              position={[-4.96, 0.14, -2.5]}
              scale={[0.3, 0.03, 0.05]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <primitive object={baseboard3} />
            </group>

            {/*
  <mesh position={[0, 2.5, -10]}>
    <sphereGeometry args={[0.1, 16, 16]} />
    <meshStandardMaterial color="red" />
  </mesh>

  <mesh position={[5, 2.5, -2.5]}>
    <sphereGeometry args={[0.1, 16, 16]} />
    <meshStandardMaterial color="red" />
  </mesh>

  <mesh position={[0, 2.5, -2.5]}>
    <sphereGeometry args={[0.1, 16, 16]} />
    <meshStandardMaterial color="red" />
  </mesh>

  <mesh position={[0, 0, 0]}>
    <sphereGeometry args={[0.1, 16, 16]} />
    <meshStandardMaterial color="red" />
  </mesh>
*/}
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Bench />
            <group position={[0, 0, 0]}>
              {/* 1 */}
              <group position={[0, 4, 0]}>
                <Spotlight
                  spotlightPosition={[2, 1, -8.5]}
                  spotlightRotation={[0, 0, -Math.PI / 2]}
                  lightPosition={[2, 1, -8.5]}
                  targetPosition={[0, -4, -8]}
                />
              </group>
              {/* 2 */}
              <group position={[0, 4, 0]}>
                <Spotlight
                  spotlightPosition={[2, 1, -8]}
                  spotlightRotation={[0, 0, 0]}
                  lightPosition={[2, 1, -8]}
                  targetPosition={[5, -1.5, -8]}
                />
              </group>
              {/* 3 */}
              <group position={[0, 4, 0]}>
                <Spotlight
                  spotlightPosition={[2, 1, -7.5]}
                  spotlightRotation={[0, 0, -degToRad(20)]}
                  lightPosition={[2, 1, -7.5]}
                  targetPosition={[5, -3, -7.5]}
                />
              </group>
              {/* 4 */}
              <group position={[0, 4, 0]}>
                <Spotlight
                  spotlightPosition={[2, 1, -5.5]}
                  spotlightRotation={[0, 0, 0]}
                  lightPosition={[2, 1, -5.5]}
                  targetPosition={[5, -1.5, -5.5]}
                />
              </group>
              {/* 5 */}
              <group position={[0, 4, 0]}>
                <Spotlight
                  spotlightPosition={[2, 1, -5]}
                  spotlightRotation={[0, 0, 0]}
                  lightPosition={[2, 1, -5]}
                  targetPosition={[5, -1.5, -5]}
                />
              </group>
              {/* 6 */}
              <group position={[0, 4, 0]}>
                <Spotlight
                  spotlightPosition={[2, 1, -4]}
                  spotlightRotation={[0, 0, -Math.PI / 2]}
                  lightPosition={[2, 1, -4]}
                  targetPosition={[0, -4, -4]}
                />
              </group>
              {/* 7 */}
              <group position={[0, 4, 0]}>
                <Spotlight
                  spotlightPosition={[2, 1, -3.5]}
                  spotlightRotation={[0, 0, 0]}
                  lightPosition={[2, 1, -3.5]}
                  targetPosition={[5, -1.5, -3.5]}
                />
              </group>
              {/* 8 */}
              <group position={[0, 4, 0]}>
                <Spotlight
                  spotlightPosition={[2, 1, -3]}
                  spotlightRotation={[0, 0, degToRad(20)]}
                  lightPosition={[2, 1, -3]}
                  targetPosition={[5, -3, -3]}
                />
              </group>
              {/* 9 */}
              <group position={[0, 4, 0]}>
                <Spotlight
                  spotlightPosition={[2, 1, -1]}
                  spotlightRotation={[0, 0, 0]}
                  lightPosition={[2, 1, -1]}
                  targetPosition={[5, -1.5, -1]}
                />
              </group>
              {/* 10 */}
              <group position={[0, 4, 0]}>
                <Spotlight
                  spotlightPosition={[2, 1, -1.5]}
                  spotlightRotation={[0, 0, 0]}
                  lightPosition={[2, 1, 2]}
                  targetPosition={[5, -1.5, 1.5]}
                />
              </group>
              {/* 11 */}
              <group position={[0, 4, 0]}>
                <Spotlight
                  spotlightPosition={[2, 1, 0]}
                  spotlightRotation={[0, 0, -Math.PI / 2]}
                  lightPosition={[2, 1, 0]}
                  targetPosition={[0, -4, 0]}
                />
              </group>
              {/* Ceiling Lights */}
              {/* 1 */}
              <group position={[0, 4, 0]}>
                <Ceilinglight
                  ceilinglightPosition={[-1.5, 0.98, -8]}
                  lightPosition={[-1.5, 0.98, -8]}
                  targetPosition={[-1.5, -4, -8]}
                />
              </group>
              {/* 2 */}
              <group position={[0, 4, 0]}>
                <Ceilinglight
                  ceilinglightPosition={[1.25, 0.98, -8]}
                  lightPosition={[1.25, 0.98, -8]}
                  targetPosition={[1.25, -4, -8]}
                />
              </group>
              {/* Floor */}
              <mesh position={[0, 0, -2.5]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 15]} />
                <meshStandardMaterial map={woodTexture} />
              </mesh>
              {/* Back Wall */}
              <mesh
                position={[0, 2.5, -10]}
                onDoubleClick={() => lookAtWall([0, 2.5, -1], [0, 2.5, -10])}
              >
                <planeGeometry args={[10, 5]} />
                <meshStandardMaterial
                  color="white"
                  roughness={0.8}
                  metalness={0.1}
                />
              </mesh>
              {/* Right Wall (angled) */}
              <mesh
                position={[5, 2.5, -2.5]}
                rotation={[0, -Math.PI / 2, 0]}
                onDoubleClick={() =>
                  lookAtWall([-4, 2.5, -2.5], [5, 2.5, -2.5])
                }
              >
                <planeGeometry args={[15, 5]} />
                <meshStandardMaterial
                  color="#0B3D91"
                  roughness={0.85}
                  metalness={0.05}
                />
              </mesh>
              {/* Left Wall */}
              <mesh position={[-5, 2.5, -2.5]} rotation={[0, Math.PI / 2, 0]}>
                <planeGeometry args={[15, 5]} />
                <meshStandardMaterial
                  color="white"
                  roughness={0.8}
                  metalness={0.1}
                />
              </mesh>
              {/* Ceiling */}
              <mesh position={[0, 5, -2.5]} rotation={[Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 15]} />
                <meshStandardMaterial color="#dddddd" side={THREE.DoubleSide} />
              </mesh>
            </group>
            {/* Spotlight rail 1 */}
            <mesh position={[2, 4.97, -2.5]}>
              <boxGeometry args={[0.1, 0.05, 14]} />{" "}
              {/* width, height, depth */}
              <meshStandardMaterial color="black" />
            </mesh>
            {/* Spotlight rail 2 */}
            <mesh position={[-2, 4.97, -2.5]}>
              <boxGeometry args={[0.1, 0.05, 14]} />{" "}
              {/* width, height, depth */}
              <meshStandardMaterial color="black" />
            </mesh>
            {/* Stanchions */}
            <group
              position={[2.5, 0, -7.5]}
              scale={[0.008, 0.008, 0.008]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <primitive object={stanchion1} />
            </group>
            <group
              position={[2.5, 0, -5]}
              scale={[0.008, 0.008, 0.008]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <primitive object={stanchion2} />
            </group>
            <group
              position={[2.5, 0, -2.5]}
              scale={[0.008, 0.008, 0.008]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <primitive object={stanchion3} />
            </group>
            <group
              position={[2.5, 0, 0]}
              scale={[0.008, 0.008, 0.008]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <primitive object={stanchion4} />
            </group>
            <group
              position={[2.5, 0, 2.5]}
              scale={[0.008, 0.008, 0.008]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <primitive object={stanchion5} />
            </group>
            {/* Security Camera */}
            <group
              position={[-4.7, 4.3, -9.8]}
              scale={[-5, 5, 5]}
              rotation={[degToRad(0), degToRad(-90), 0]}
            >
              <primitive object={securityCamera1} />
            </group>
            <group
              position={[4.5, 4.3, -9.8]}
              scale={[-5, 5, 5]}
              rotation={[degToRad(0), degToRad(-110), 0]}
            >
              <primitive object={securityCamera2} />
            </group>

            {/* Art Frames Memories Wall*/}
            <ArtFrame
              type="frame1"
              position={[5, 3, -8]}
              frameRotation={[0, Math.PI, 0]}
              frameScale={[0.005, 0.005, 0.005]}
              source={frame1}
              imageRotation={[0, -Math.PI / 2, 0]}
              imageScale={[0.27, 0.27, 0.27]}
              imagePosition={[-0.05, 0.61, -0.5]}
              imageDir="/images/Gallery/750_1000/me/"
              images={["1.png"]}
              planeGeometry={[3, 4]}
              cameraRef={cameraRef}
              leftButtonOffset={[0, 0.1, -0.55]}
              rightButtonOffset={[0, 0.1, 0.5]}
            />
            <ArtFrame
              type="frame1"
              position={[5, 3, -6.5]}
              frameRotation={[0, Math.PI, 0]}
              frameScale={[0.005, 0.005, 0.005]}
              source={frame1}
              imageRotation={[0, -Math.PI / 2, 0]}
              imageScale={[0.27, 0.27, 0.27]}
              imagePosition={[-0.05, 0.61, -0.5]}
              imageDir="/images/Gallery/750_1000/kai/"
              images={["1.png", "2.png", "3.png", "4.png", "5.png"]}
              planeGeometry={[3, 4]}
              cameraRef={cameraRef}
              leftButtonOffset={[0, 0.1, -0.55]}
              rightButtonOffset={[0, 0.1, 0.5]}
            />
            <ArtFrame
              type="frame2"
              position={[4.9, 3.2, -5.6]}
              frameRotation={[0, -Math.PI / 2, 0]}
              frameScale={[0.5, 0.5, 0.5]}
              source={frame2}
              imageRotation={[0, -Math.PI / 2, 0]}
              imageScale={[0.2, 0.2, 0.2]}
              imagePosition={[0, 0, 0]}
              imageDir="/images/Gallery/750_1000/meme/"
              images={["1.png", "2.png"]}
              planeGeometry={[3, 4]}
              cameraRef={cameraRef}
              leftButtonOffset={[0, 0.1, -0.55]}
              rightButtonOffset={[0, 0.1, 0.5]}
            />

            <ArtFrame
              type="frame2"
              position={[4.9, 2.2, -7.5]}
              frameRotation={[Math.PI / 2, -Math.PI / 2, 0]}
              frameScale={[0.5, 0.5, 0.5]}
              source={frame2}
              imageRotation={[0, -Math.PI / 2, 0]}
              imageScale={[0.2, 0.2, 0.2]}
              imagePosition={[0, 0, 0]}
              imageDir="/images/Gallery/1000_750/me/"
              images={["1.png"]}
              planeGeometry={[4, 3]}
              cameraRef={cameraRef}
              leftButtonOffset={[0, 0.1, -0.55]}
              rightButtonOffset={[0, 0.1, 0.5]}
            />

            <ArtFrame
              type="frame2"
              position={[4.9, 3, -4]}
              frameRotation={[Math.PI / 2, -Math.PI / 2, 0]}
              frameScale={[0.5, 0.5, 0.5]}
              source={frame2}
              imageRotation={[0, -Math.PI / 2, 0]}
              imageScale={[0.2, 0.2, 0.2]}
              imagePosition={[0, 0, 0]}
              imageDir="/images/Gallery/1000_750/oshawott/"
              images={["2.png", "3.png", "4.png", "5.png"]}
              planeGeometry={[4, 3]}
              cameraRef={cameraRef}
              leftButtonOffset={[0, 0.1, -0.55]}
              rightButtonOffset={[0, 0.1, 0.5]}
            />
            <ArtFrame
              type="frame2"
              position={[4.9, 3, -2.5]}
              frameRotation={[0, -Math.PI / 2, 0]}
              frameScale={[0.5, 0.5, 0.5]}
              source={frame2}
              imageRotation={[0, -Math.PI / 2, 0]}
              imageScale={[0.2, 0.2, 0.2]}
              imagePosition={[0, 0, 0]}
              imageDir="/images/Gallery/750_1000/squid/"
              images={["1.png", "2.png"]}
              planeGeometry={[3, 4]}
              cameraRef={cameraRef}
              leftButtonOffset={[0, 0.1, -0.55]}
              rightButtonOffset={[0, 0.1, 0.5]}
            />
            <ArtFrame
              type="frame2"
              position={[4.9, 3, -1.1]}
              frameRotation={[0, -Math.PI / 2, 0]}
              frameScale={[0.5, 0.5, 0.5]}
              source={frame2}
              imageRotation={[0, -Math.PI / 2, 0]}
              imageScale={[0.2, 0.2, 0.2]}
              imagePosition={[0, 0, 0]}
              imageDir="/images/Gallery/750_1000/food/"
              images={["1.png", "2.png"]}
              planeGeometry={[3, 4]}
              cameraRef={cameraRef}
              leftButtonOffset={[0, 0.1, -0.55]}
              rightButtonOffset={[0, 0.1, 0.5]}
            />

            {/* Art Frames Projects Wall*/}
            <ArtFrame
              type="frame2"
              position={[3, 3, -9.95]}
              frameRotation={[0, 0, 0]}
              frameScale={[0.5, 0.5, 0.5]}
              source={frame2}
              imageRotation={[0, 0, 0]}
              imageScale={[0.2, 0.2, 0.2]}
              imagePosition={[0, 0, 0]}
              imageDir="/images/Gallery/750_1000/food/"
              images={["1.png", "2.png"]}
              planeGeometry={[3, 4]}
              cameraRef={cameraRef}
              leftButtonOffset={[-0.55, 0.1, 0]}
              rightButtonOffset={[0.5, 0.1, 0]}
            />
            <ArtFrame
              type="frame1"
              position={[2, 3.5, -9.96]}
              frameRotation={[-Math.PI / 2, Math.PI, -Math.PI / 2]} // Then add Y
              frameScale={[0.005, 0.005, 0.005]}
              source={frame1}
              imageRotation={[0, 0, 0]}
              imageScale={[0.27, 0.27, 0.27]}
              imagePosition={[-0.63, -0.5, 0.04]}
              imageDir="/images/Gallery/1000_750/oshawott/"
              images={["2.png", "3.png", "4.png", "5.png"]}
              planeGeometry={[4, 3]}
              cameraRef={cameraRef}
              leftButtonOffset={[-0.55, 0.1, 0]}
              rightButtonOffset={[0.5, 0.1, 0]}
            />
            {/* Wall text */}
            <group position={[5, 4, -4]} rotation={[0, -Math.PI / 2, 0]}>
              <Memories />
            </group>
            <group position={[-1.3, 4, -10]} rotation={[0, 0, 0]}>
              <Project />
            </group>
            {/* Ground */}
            <mesh
              position={[0, -0.05, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              receiveShadow
            >
              <planeGeometry args={[100, 100]} />
              <MeshReflectorMaterial
                blur={[400, 100]}
                resolution={1024}
                mixBlur={2}
                mixStrength={5}
                roughness={0.2}
                depthScale={0.01}
                minDepthThreshold={0.9}
                maxDepthThreshold={1}
                color="#444"
                metalness={0.5}
              />
            </mesh>

            <group position={[-5, -2, 0]}>
              <ExplosionConfetti
                rate={2}
                amount={20}
                fallingHeight={15}
                enableShadows
                isExploding
                colors={[
                  "#ff3838", // vibrant red
                  "#ff9f1a", // orange
                  "#ffe14a", // yellow
                  "#61e786", // green
                  "#45aaf2", // blue
                  "#9b59b6", // purple
                  "#ffffff", // white
                ]}
              />
            </group>
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}
