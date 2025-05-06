import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import ParticleBackground from '@components/common/ParticleBackground';
import Typed from 'typed.js';
import FlipAvatar from '@components/ui/FlipAvatar';

const Hero = () => {
  const typedEl = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);
  const [isHovered] = useState(false);

  useEffect(() => {
    if (typedEl.current) {
      typedInstance.current = new Typed(typedEl.current, {
        strings: [
          'MERN Stack Developer',
          'AI Frontend Engineer',
          'Vue.js Expert',
          'UI/UX Design Enthusiast',
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
      transition: { duration: 0.5 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <ParticleBackground />

      <img
        src={import.meta.env.BASE_URL + 'art-glow.gif'}
        alt="Art Glow"
        className="absolute right-[5vw] top-[-3vw] w-[30vw] max-w-[700px] min-w-[320px] h-auto opacity-80 pointer-events-none select-none z-0"
        style={{ mixBlendMode: 'screen' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center flex flex-col md:flex-row items-center gap-8 md:gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Profile Picture with Flip Effect */}
          <motion.div 
            className="relative w-48 h-48 xs:w-24 xs:h-24 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] -mt-8 md:-mt-16 group"
            variants={itemVariants}
          >
            <div className="relative w-full h-full group">
              {/* Glow sutil */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/40 to-secondary-500/40 blur-[32px] -z-10 pointer-events-none transition-all duration-500"
                animate={isHovered ? {
                  opacity: 0.35,
                  scale: 1.25,
                  filter: 'brightness(1.2) saturate(1.1) blur(48px)',
                  boxShadow: '0 0 32px 16px #36aef8, 0 0 48px 24px #8c4fff'
                } : {
                  opacity: 0.18,
                  scale: 1,
                  filter: 'brightness(1.05) saturate(1.05) blur(32px)',
                  boxShadow: '0 0 16px 8px #36aef8, 0 0 24px 12px #8c4fff'
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
              {/* Border gradient */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur opacity-75 pointer-events-none"></div>
              {/* FlipAvatar */}
              <FlipAvatar
                front={import.meta.env.BASE_URL + 'enrique-pic.jpeg'}
                back={import.meta.env.BASE_URL + 'avatar-ghibli.png'}
                altFront="Enrique Donaire"
                altBack="Enrique Donaire Ghibli"
              />
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
              Versatile and results-driven developer with over four years of expertise in
              crafting high-performance web applications using cutting-edge technologies.
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

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.2,
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