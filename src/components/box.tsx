import { RigidBody } from "@react-three/rapier";

export default function Box({
  position,
  rotation,
  scale,
}: {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}) {
  return (
    <RigidBody colliders="cuboid">
      <mesh
        castShadow
        receiveShadow
        position={position}
        rotation={rotation}
        scale={scale}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#a0c3d2" />
      </mesh>
    </RigidBody>
  );
}
