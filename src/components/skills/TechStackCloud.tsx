import { useEffect, useState } from 'react';
import { Cloud, renderSimpleIcon } from 'react-icon-cloud';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import simple icons
import {
  siReact,
  siJavascript,
  siTypescript,
  siNodedotjs,
  siVuedotjs,
  siMongodb,
  siGraphql,
  siNextdotjs,
  siTailwindcss,
  siAmazonaws,
  siMicrosoftazure,
  siMysql,
  siFigma,
  siApollographql,
  siHtml5,
  siCss3,
  siGit,
  siGithub,
  siExpress,
  siRedux,
  siVisualstudiocode,
  siDocker,
  siFirebase,
  siVercel,
  siNetlify,
  siPostman,
  siAngular,
  siPostgresql,
  siSass
} from 'simple-icons';

const iconSlugs = [
  siReact,
  siJavascript,
  siTypescript,
  siNodedotjs,
  siVuedotjs,
  siMongodb,
  siGraphql,
  siNextdotjs,
  siTailwindcss,
  siAmazonaws,
  siMicrosoftazure,
  siMysql,
  siFigma,
  siApollographql,
  siHtml5,
  siCss3,
  siGit,
  siGithub,
  siExpress,
  siRedux,
  siVisualstudiocode,
  siDocker,
  siFirebase,
  siVercel,
  siNetlify,
  siPostman,
  siAngular,
  siPostgresql,
  siSass  
];

const TechStackCloud = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const icons = iconSlugs.map((icon) =>
    renderSimpleIcon({
      icon,
      size: 60,
      aProps: {
        style: {
          display: 'flex',
          margin: '0.5rem',
          color: '#fff',
        },
      },
    })
  );

  const containerVariants = {
    hidden: { opacity: 0.1, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1.5,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Only render the cloud on the client side
  if (!isMounted) {
    return <div className="h-[500px] flex items-center justify-center">Loading tech stack...</div>;
  }

  return (
    <motion.div 
      ref={ref}
      className="w-full flex justify-center my-12 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="w-full max-w-3xl">
        <Cloud
          options={{
            clickToFront: 500,
            depth: 1,
            imageScale: 1.5,
            initial: [0.1, -0.1],
            outlineColour: '#0000',
            reverse: true,
            tooltip: 'native',
            tooltipDelay: 0,
            wheelZoom: false,
            zoom: 0.9,
            radiusX: 1,
            radiusY: 1,
            radiusZ: 1,
            maxSpeed: 0.09,
            freezeActive: false,
            shuffleTags: true,
            shape: 'sphere',
            noSelect: true,
            noMouse: false,
            textColour: undefined,
            pinchZoom: true,
            freezeDecel: false,
            fadeIn: 800,
            decel: 0.95,
            minSpeed: 0.01,
          }}
          containerProps={{
            style: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '750px',
            },
          }}
        >
          {icons}
        </Cloud>
      </div>
    </motion.div>
  );
};

export default TechStackCloud;