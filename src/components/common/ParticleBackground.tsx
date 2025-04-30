import { useCallback } from 'react';
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from '@components/providers/ThemeProvider';

const ParticleBackground = () => {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: theme === 'dark' ? ['#36aef8', '#8c4fff'] : ['#0076c6', '#7c2cf9'],
            },
            links: {
              color: theme === 'dark' ? '#757575' : '#dbdbdb',
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1.1,
              straight: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 70,
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          absorbers: [
            {
              position: { x: 20, y: 30 },
              size: { value: 40, limit: 60, random: false, density: 1000 },
              color: theme === 'dark' ? '#8c4fff' : '#36aef8',
              opacity: 0.13,
              draggable: false,
              destroy: true,
              orbits: true,
              orbitColor: theme === 'dark' ? '#36aef8' : '#8c4fff',
              orbitOpacity: 0.10,
              orbitRadius: 80,
              absorb: 0.3,
            },
            {
              position: { x: 50, y: 50 },
              size: { value: 60, limit: 80, random: false, density: 1000 },
              color: theme === 'dark' ? '#8c4fff' : '#36aef8',
              opacity: 0.18,
              draggable: false,
              destroy: true,
              orbits: true,
              orbitColor: theme === 'dark' ? '#36aef8' : '#8c4fff',
              orbitOpacity: 0.12,
              orbitRadius: 120,
              absorb: 0.5,
            },
            {
              position: { x: 80, y: 80 },
              size: { value: 40, limit: 60, random: false, density: 1000 },
              color: theme === 'dark' ? '#36aef8' : '#8c4fff',
              opacity: 0.12,
              draggable: false,
              destroy: true,
              orbits: true,
              orbitColor: theme === 'dark' ? '#8c4fff' : '#36aef8',
              orbitOpacity: 0.10,
              orbitRadius: 80,
              absorb: 0.3,
            },
            {
              position: { x: 30, y: 80 },
              size: { value: 30, limit: 50, random: false, density: 1000 },
              color: theme === 'dark' ? '#36aef8' : '#8c4fff',
              opacity: 0.10,
              draggable: false,
              destroy: true,
              orbits: true,
              orbitColor: theme === 'dark' ? '#8c4fff' : '#36aef8',
              orbitOpacity: 0.08,
              orbitRadius: 60,
              absorb: 0.2,
            },
            {
              position: { x: 80, y: 30 },
              size: { value: 30, limit: 50, random: false, density: 1000 },
              color: theme === 'dark' ? '#36aef8' : '#8c4fff',
              opacity: 0.10,
              draggable: false,
              destroy: true,
              orbits: true,
              orbitColor: theme === 'dark' ? '#8c4fff' : '#36aef8',
              orbitOpacity: 0.08,
              orbitRadius: 60,
              absorb: 0.2,
            }
          ],
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 70,
                duration: 0.25,
              },
              push: {
                quantity: 3,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;