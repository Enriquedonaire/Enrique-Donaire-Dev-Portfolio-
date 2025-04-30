import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SkillIconProps {
  icon: string;
  name: string;
  color: string;
  delay: number;
  index: number;
}

const SkillIcon = ({ icon, name, color, delay, index }: SkillIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);
  
  // Calculate position in the tornado spiral
  const angle = index * (Math.PI / 8);
  const radius = 120 + (index % 3) * 40;
  const baseX = Math.cos(angle) * radius;
  const baseY = Math.sin(angle) * radius;
  const baseZ = index * 5;

  return (
    <motion.div
      ref={iconRef}
      className="absolute"
      initial={{ 
        x: 0, 
        y: 0, 
        scale: 0,
        opacity: 0,
        rotateY: 0,
        z: 0
      }}
      animate={{ 
        x: baseX, 
        y: baseY, 
        scale: 1,
        opacity: 1,
        z: baseZ,
        transition: { 
          delay: delay * 0.1,
          duration: 0.5,
          ease: "easeOut"
        }
      }}
      whileHover={{ 
        scale: 1.2,
        rotateY: 360,
        z: baseZ + 20,
        transition: { duration: 0.8 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      <div 
        className={`flex flex-col items-center justify-center p-3 rounded-lg shadow-lg transform transition-all duration-300 ${isHovered ? 'shadow-xl' : ''}`}
        style={{
          background: `linear-gradient(135deg, ${color}33, ${color}66)`,
          border: `2px solid ${color}`,
          width: '80px',
          height: '80px',
        }}
      >
        <img 
          src={icon} 
          alt={name} 
          className="w-10 h-10 object-contain"
        />
        <span className={`text-xs font-medium mt-1 text-center ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
          {name}
        </span>
      </div>
    </motion.div>
  );
};

export default SkillIcon;