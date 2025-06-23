// CONFETTI COMPONENT BY ANDERSON MANCINI AND ROMAIN HERAULT
// Based on: https://github.com/JamesChan21/threejs-confetti
// Based on: https://github.com/daniel-lundin/dom-confetti
// If you use, please credit it :)

import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ExplosionConfettiProps {
  isExploding?: boolean;
  amount?: number;
  rate?: number;
  radius?: number;
  areaWidth?: number;
  areaHeight?: number;
  fallingHeight?: number;
  fallingSpeed?: number;
  colors?: string[];
  enableShadows?: boolean;
}

export default function ExplosionConfetti({
  isExploding = false,
  amount = 100,
  rate = 3,
  radius = 15,
  areaWidth = 3,
  areaHeight = 1,
  fallingHeight = 10,
  fallingSpeed = 8,
  colors = ["yellow", "white", "red"],
  enableShadows = false,
}: ExplosionConfettiProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [booms, setBooms] = useState<THREE.Object3D[]>([]);

  const geometry = new THREE.PlaneGeometry(0.03, 0.03, 1, 1);
  const spawnRate = rate / 100;

  function explode() {
    if (!groupRef.current) return;

    const boom = new THREE.Object3D() as THREE.Object3D & {
      life?: number;
      dispose?: () => void;
    };
    boom.life = Math.random() * 5 + 5;
    boom.position.set(
      -(areaWidth / 2) + areaWidth * Math.random(),
      fallingHeight + areaHeight - fallingSpeed,
      -(areaWidth / 2) + areaWidth * Math.random()
    );
    groupRef.current.add(boom);
    booms.push(boom);

    for (let i = 0; i < amount; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 1,
      });
      const particle = new THREE.Mesh(geometry, material) as THREE.Mesh & {
        life?: number;
        destination?: { x: number; y: number; z: number };
        rotateSpeedX?: number;
        rotateSpeedY?: number;
        rotateSpeedZ?: number;
      };
      particle.castShadow = enableShadows;

      particle.life = 1;
      particle.destination = {
        x: (Math.random() - 0.5) * (radius * 2) * Math.random(),
        y: (Math.random() - 0.5) * (radius * 2) * Math.random(),
        z: (Math.random() - 0.5) * (radius * 2) * Math.random(),
      };

      particle.rotation.set(
        Math.random() * 360,
        Math.random() * 360,
        Math.random() * 360
      );

      const size = Math.random() * 2 + 1;
      particle.scale.set(size, size, size);

      particle.rotateSpeedX = Math.random() * 0.8 - 0.4;
      particle.rotateSpeedY = Math.random() * 0.8 - 0.4;
      particle.rotateSpeedZ = Math.random() * 0.8 - 0.4;

      boom.add(particle);
    }

    boom.dispose = () => {
      boom.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          (child.material as THREE.Material).dispose();
        }
        boom.remove(child);
      });
      groupRef.current?.remove(boom);
    };
  }

  useFrame(() => {
    if (isExploding && Math.random() < spawnRate) explode();

    let particleCount = 0;

    booms.forEach((boom: any) => {
      boom.children.forEach((child: any) => {
        const particle = child as THREE.Mesh & {
          life?: number;
          destination?: { x: number; y: number; z: number };
          rotateSpeedX?: number;
          rotateSpeedY?: number;
          rotateSpeedZ?: number;
        };

        if (!particle.destination) return;

        particle.destination.y -= THREE.MathUtils.randFloat(0.1, 0.3);
        particle.life =
          (particle.life ?? 1) - THREE.MathUtils.randFloat(0.005, 0.01);

        particle.position.x +=
          (particle.destination.x - particle.position.x) / 200;
        particle.position.y +=
          (particle.destination.y - particle.position.y) / 200;
        particle.position.z +=
          (particle.destination.z - particle.position.z) / 200;

        particle.rotation.x += particle.rotateSpeedX ?? 0;
        particle.rotation.y += particle.rotateSpeedY ?? 0;
        particle.rotation.z += particle.rotateSpeedZ ?? 0;

        const mat = particle.material as THREE.MeshBasicMaterial;
        mat.opacity =
          (mat.opacity ?? 1) - THREE.MathUtils.randFloat(0.005, 0.01);

        if (particle.position.y < -fallingHeight) {
          particle.geometry.dispose();
          mat.dispose();
          boom.remove(particle);
        }
      });

      if (boom.children.length <= 0) {
        boom.dispose?.();
        setBooms((prev) => prev.filter((b) => b !== boom));
      }

      particleCount += boom.children.length;
    });
  });

  return <group ref={groupRef} />;
}
