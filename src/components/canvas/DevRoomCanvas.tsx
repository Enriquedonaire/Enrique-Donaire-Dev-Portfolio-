import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const DevRoomModel = () => {
  const room = useGLTF("/dev room/scene.gltf");
  return (
    <primitive object={room.scene} scale={1.1} position={[0.7, -1.1, 0]} rotation={[0.15, -0.7, 0]} />
  );
};

const DevRoomCanvas = () => {
  return (
    <div className="absolute right-0 top-0 h-[40vh] w-[18vw] min-w-[120px] max-w-[220px] opacity-40 z-0 pointer-events-auto select-none" style={{mixBlendMode:'lighten'}}>
      <Canvas
        camera={{ position: [2.5, 2.2, 5.5], fov: 35 }}
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={1.1} />
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate={false} />
          <DevRoomModel />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default DevRoomCanvas;
