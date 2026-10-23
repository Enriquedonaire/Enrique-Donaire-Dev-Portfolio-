import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Spherical, Vector3 } from "three";
import DragHint from "./DragHint";

const TARGET = new Vector3(0, 1.6, 0);
const END_POSITION = new Vector3(1, 5, 8);
const INTRO_SECONDS = 1.6;

// The scene (robot + orbiting shapes) needs roughly a 1.25:1 frame to be fully visible.
// On narrower canvases it is scaled down so nothing gets clipped at the sides.
const FULL_SCENE_ASPECT = 1.25;

const prefersReducedMotion = () =>
  typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const ExperienceModel = ({ scale = 2.5 }) => {
  const model = useGLTF(import.meta.env.BASE_URL + "experience scene/scene.gltf");
  const { size } = useThree();
  const fit = Math.min(1, size.width / size.height / FULL_SCENE_ASPECT);
  return (
    <primitive object={model.scene} scale={scale * fit} position-y={0} rotation-y={0} />
  );
};

/**
 * Intro: the camera starts looking straight down at the robot and swings
 * quickly (with a half spin) to the regular three-quarter view.
 */
const CameraIntro = ({ play }: { play: boolean }) => {
  const { camera, invalidate } = useThree();
  const progress = useRef(0);
  const running = useRef(false);
  const end = useRef(new Spherical().setFromVector3(END_POSITION.clone().sub(TARGET)));

  // Park the camera above the robot until the intro plays.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const s = end.current;
    camera.position.setFromSpherical(new Spherical(s.radius, 0.05, s.theta - Math.PI)).add(TARGET);
    camera.lookAt(TARGET);
    invalidate();
  }, [camera, invalidate]);

  useEffect(() => {
    if (play && !prefersReducedMotion()) {
      progress.current = 0;
      running.current = true;
      invalidate();
    }
  }, [play, invalidate]);

  useFrame((_, delta) => {
    if (!running.current) return;
    // Clamp: with frameloop="demand" the first delta after idling can be seconds long.
    const step = Math.min(delta, 1 / 30);
    progress.current = Math.min(1, progress.current + step / INTRO_SECONDS);
    const t = 1 - Math.pow(1 - progress.current, 3); // easeOutCubic
    const s = end.current;
    camera.position
      .setFromSpherical(new Spherical(s.radius, 0.05 + (s.phi - 0.05) * t, s.theta - Math.PI * (1 - t)))
      .add(TARGET);
    camera.lookAt(TARGET);
    if (progress.current >= 1) running.current = false;
    invalidate();
  });

  return null;
};

const ExperienceCanvas = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [playIntro, setPlayIntro] = useState(false);

  // Play the intro the first time the robot is mostly on screen.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayIntro(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full h-full flex items-center justify-center">
      <DragHint className="top-0" />
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 40,
          near: 0.09,
          far: 100,
          position: [END_POSITION.x, END_POSITION.y, END_POSITION.z],
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
            target={[TARGET.x, TARGET.y, TARGET.z]}
          />
          <CameraIntro play={playIntro} />
          <ExperienceModel scale={1.95} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ExperienceCanvas;
