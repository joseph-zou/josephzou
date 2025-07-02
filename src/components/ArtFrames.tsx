import { useRef } from "react";
import { CameraControls } from "@react-three/drei";
import ArtFrame from "@/components/ArtFrame";
import { useArtFrames } from "@/hooks/useArtFrames";
import { useThree } from "@react-three/fiber";

/* Should use memo */
interface ArtFrameProps {
  cameraRef: any;
}
const ArtFrames = ({ cameraRef }: ArtFrameProps) => {
  const { frame1, frame2 } = useArtFrames();

  return (
    <>
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
    </>
  );
};

export default ArtFrames;
