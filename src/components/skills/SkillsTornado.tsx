import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SkillIcon from './SkillIcon';

// Skill icons
const skillsData = [
  { name: 'React', icon: '/icons/react.png', color: '#61DAFB' },
  { name: 'JavaScript', icon: '/icons/javascript.png', color: '#F7DF1E' },
  { name: 'TypeScript', icon: '/icons/typescript.png', color: '#3178C6' },
  { name: 'Node.js', icon: '/icons/nodejs.png', color: '#339933' },
  { name: 'Vue.js', icon: '/icons/vue.png', color: '#4FC08D' },
  { name: 'MongoDB', icon: '/icons/mongodb.png', color: '#47A248' },
  { name: 'GraphQL', icon: '/icons/graphql.png', color: '#E10098' },
  { name: 'Next.js', icon: '/icons/nextjs.png', color: '#000000' },
  { name: 'Tailwind', icon: '/icons/tailwind.png', color: '#06B6D4' },
  { name: 'AWS', icon: '/icons/aws.png', color: '#FF9900' },
  { name: 'Azure', icon: '/icons/azure.png', color: '#0078D4' },
  { name: 'MySQL', icon: '/icons/mysql.png', color: '#4479A1' },
  { name: 'Figma', icon: '/icons/figma.png', color: '#F24E1E' },
  { name: 'Apollo', icon: '/icons/apollo.png', color: '#311C87' },
];

const SkillsTornado = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Create rotation animation
    const rotationInterval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(rotationInterval);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden my-12">
      <motion.div 
        className="relative w-[300px] h-[300px]"
        animate={{ 
          rotateZ: rotation,
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {skillsData.map((skill, index) => (
          <SkillIcon
            key={skill.name}
            icon={skill.icon}
            name={skill.name}
            color={skill.color}
            delay={index}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsTornado;