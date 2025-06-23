import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/Addons.js";
import { RenderPass, UnrealBloomPass } from "three/examples/jsm/Addons.js";
import { useEffect, useRef } from "react";

export default function SelectiveBloom() {
  const { scene, gl, camera, size } = useThree();
  const bloomComposer = useRef<any | null>(null);

  useEffect(() => {
    // Set up passes
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(size.width, size.height),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 2.0;
    bloomPass.radius = 0.5;

    // Create composer
    const composer = new (EffectComposer as any)(gl);
    composer.renderToScreen = true;
    composer.addPass(renderScene);
    composer.addPass(bloomPass);
    bloomComposer.current = composer;

    // Enable both layers
    camera.layers.enable(0);
    camera.layers.enable(1);
  }, [gl, scene, camera, size]);

  useFrame(() => {
    const prevBackground = scene.background;
    scene.background = null;

    const bloomLayer = new THREE.Layers();
    bloomLayer.set(1);

    // Hide non-bloom objects
    scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.userData.originalVisibility = obj.visible;
        if (!obj.layers.test(bloomLayer)) {
          obj.visible = false;
        }
      }
    });

    bloomComposer.current?.render();

    // Restore all objects
    scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh && "originalVisibility" in obj.userData) {
        obj.visible = obj.userData.originalVisibility;
        delete obj.userData.originalVisibility;
      }
    });

    scene.background = prevBackground;
  }, 1);

  return null;
}
