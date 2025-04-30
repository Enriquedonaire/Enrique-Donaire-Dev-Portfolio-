import { useCallback, useEffect, useState } from 'react';
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from '@components/providers/ThemeProvider';

const ParticleBackground = () => {
  const { theme } = useTheme();
  const [isInitialized, setIsInitialized] = useState(false);
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    const container = document.querySelector<Container>('canvas.tsparticles-canvas-el');
    
    if (isInitialized && container) {
      const particles = container.particles;
      if (particles) {
        particles.options.particles.color.value = theme === 'dark' 
          ? ['#36aef8', '#8c4fff'] 
          : ['#0076c6', '#7c2cf9'];
        particles.options.particles.links.color = theme === 'dark'
          ? '#757575'
          : '#dbdbdb';
        particles.refresh();
      }
    }
  }, [theme, isInitialized]);

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
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
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
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;