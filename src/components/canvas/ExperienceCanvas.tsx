import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const ExperienceModel = ({ scale = 2.5 }) => {
  const model = useGLTF(import.meta.env.BASE_URL + "experience scene/scene.gltf");
  return (
    <primitive object={model.scene} scale={scale} position-y={0} rotation-y={0} />
  );
};

const ExperienceCanvas = () => {
  return (
    <div className="w-full h-[950px] md:h-[900px] flex items-center justify-center">
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 40,
          near: 0.09,
          far: 100,
          position: [1, 5, 8], // Cámara centrada y más alejada
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            autoRotate
            autoRotateSpeed={4}
            enableZoom={false}
            enablePan={true}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={0}
            enableRotate={true} // Permite rotar el modelo con mouse/touch
            target={[0, 0.5, 0]}
          />
          <ExperienceModel scale={1.75} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ExperienceCanvas;
