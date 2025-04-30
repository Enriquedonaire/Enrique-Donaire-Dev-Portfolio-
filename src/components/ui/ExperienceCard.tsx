import { motion } from 'framer-motion';
import { Experience } from '@/types';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="relative mb-12 ml-10 md:ml-16"
      variants={variants}
    >
      {/* Timeline dot */}
      <div className="absolute -left-[3.25rem] top-0 flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 rounded-full border-4 border-primary-400 dark:border-primary-500 z-10">
        <span className="text-sm font-bold">{index + 1}</span>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {experience.title}
          </h3>
          <p className="text-primary-600 dark:text-primary-400 font-medium">
            {experience.company}
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1 md:space-y-0 md:space-x-4">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-1" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          {experience.description.map((item, idx) => (
            <div key={idx} className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <p className="text-gray-700 dark:text-gray-300">{item}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-5 flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span 
              key={skill} 
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;