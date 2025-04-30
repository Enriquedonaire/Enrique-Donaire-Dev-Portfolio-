import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import ParticleBackground from '@components/common/ParticleBackground';
import Typed from 'typed.js';

const Hero = () => {
  const typedEl = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedEl.current) {
      typedInstance.current = new Typed(typedEl.current, {
        strings: [
          'MERN Stack Developer', 
          'AI Frontend Engineer', 
          'Vue.js Expert', 
          'UI/UX Design Enthusiast'
        ],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <ParticleBackground />
      {/* GIF decorativo en el lado derecho detrás del texto */}
      <img 
        src="/Art Glow GIF by IndieRocktopus.gif" 
        alt="Art Glow" 
        className="absolute right-[4vw] top-[-4vw] w-[60vw] max-w-[700px] min-w-[320px] h-auto opacity-100 pointer-events-none select-none z-0"
        style={{mixBlendMode:'screen'}}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center flex flex-col md:flex-row items-center gap-8 md:gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Profile Picture */}
          <motion.div 
            className="relative w-80 h-80 md:w-[26rem] md:h-[26rem] -mt-16"
            variants={itemVariants}
          >
            <div className="relative w-full h-full group">
              {/* Glowing background effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/50 to-secondary-500/50 blur-2xl opacity-100 transition-opacity duration-700 -z-10"></div>
              {/* Border gradient */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur opacity-75"></div>
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 dark:border-black/20">
                <img 
                  src="/EnriquePic.jpeg" 
                  alt="Enrique Donaire" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          {/* Text Content */}
          <motion.div className="flex-1">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              variants={itemVariants}
            >
              Hi, I'm <span className="animate-gradient-text">Enrique Donaire</span>
            </motion.h1>
            <motion.div
              className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8"
              variants={itemVariants}
            >
              <span ref={typedEl} className="typing"></span>
            </motion.div>
            <motion.p 
              className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Versatile and results-driven developer with over three years of expertise
              in crafting high-performance web applications using cutting-edge technologies.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer"
              >
                Get in Touch
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="border border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 px-8 py-3 rounded-md font-medium transition-colors cursor-pointer"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.2
          }}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="flex flex-col items-center cursor-pointer text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;