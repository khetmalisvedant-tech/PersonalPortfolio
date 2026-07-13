import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Nodes({ count = 220 }) {
  const pointsRef = useRef(null);
  const linesRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 4;
    }
    return arr;
  }, [count]);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(count * 6), 3));
    return geo;
  }, [count]);

  useMemo(() => {
    const handler = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(
        pointsRef.current.rotation.x,
        mouse.current.y * 0.15,
        0.03
      );
      pointsRef.current.rotation.y += mouse.current.x * 0.0002;
    }

    const posAttr = lineGeometry.attributes.position;
    let idx = 0;
    const maxLines = 60;
    const threshold = 3.2;
    outer: for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < threshold && idx < maxLines) {
          posAttr.setXYZ(idx * 2, positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
          posAttr.setXYZ(idx * 2 + 1, positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
          idx++;
        }
        if (idx >= maxLines) break outer;
      }
    }
    posAttr.needsUpdate = true;
    lineGeometry.setDrawRange(0, idx * 2);
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.045} color="#3B82F6" transparent opacity={0.85} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#06B6D4" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}

export default function SceneBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <Nodes />
        </Suspense>
      </Canvas>
    </div>
  );
}
