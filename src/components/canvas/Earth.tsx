import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Earth = ({ scale = 1.2 }) => {
  const earth = useGLTF(import.meta.env.BASE_URL + "planet-scene/scene.gltf");
  return (
    <primitive object={earth.scene} scale={scale} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <div className="w-full h-[350px] md:h-[420px] lg:h-[480px] xl:h-[520px] aspect-square mx-auto">
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.01,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
          />
          <Earth scale={3.2} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
