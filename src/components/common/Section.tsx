import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ id, title, subtitle, children, className = '' }: SectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden relative ${className}`}
    >
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-gradient-text inline-block">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={contentVariants}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;