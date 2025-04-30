import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <motion.div 
      variants={cardVariants}
      className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <Github size={20} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;