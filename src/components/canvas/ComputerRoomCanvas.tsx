import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const ComputerRoom = () => {
  const computer = useGLTF("/Computer Scene/scene.gltf");
  return (
    <primitive object={computer.scene} scale={2.2} position={[0, -1.2, 0]} />
  );
};

const ComputerRoomCanvas = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 1.5, 7], fov: 50 }}
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
          <ComputerRoom />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ComputerRoomCanvas;
