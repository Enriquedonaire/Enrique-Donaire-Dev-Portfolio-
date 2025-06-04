import { motion } from 'framer-motion';
import Section from '@components/common/Section';
import { Skill } from '@/types';
import { FaReact, FaJs, FaVuejs, FaNodeJs, FaDatabase, FaFigma, FaTrailer, FaGithub, FaAmazon, FaMicrosoft, FaHtml5 } from 'react-icons/fa'
import { 
  Code, 
  Server, 
  Workflow, 
  BrainCircuit,
  Users, 
  Languages, 
  CheckCircle2 
} from 'lucide-react';
import TechStackCloud from '@components/skills/TechStackCloud';
import { siApollographql, siExpress, siMysql, siTailwindcss, siTypescript } from 'simple-icons';

const skills: Skill[] = [
  // Frontend
  { name: "ReactJS", level: 95, category: "frontend"},
  { name: "JavaScript", level: 95, category: "frontend",  },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Vue.js", level: 85, category: "frontend" },
  { name: "NextJS", level: 85, category: "frontend" },
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "TailwindCSS", level: 85, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "MongoDB", level: 85, category: "backend" },
  { name: "GraphQL", level: 80, category: "backend" },
  { name: "MySQL", level: 75, category: "backend" },
  { name: "REST APIs", level: 90, category: "backend" },
  
  // Tools
  { name: "AWS", level: 70, category: "tools" },
  { name: "Azure", level: 65, category: "tools" },
  { name: "Git/GitHub", level: 85, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "Apollo", level: 75, category: "tools" },
  { name: "CI/CD", level: 70, category: "tools" },
  
  // Soft skills
  { name: "Teamwork", level: 95, category: "soft" },
  { name: "Communication", level: 90, category: "soft" },
  { name: "Problem Solving", level: 95, category: "soft" },
  { name: "Creativity", level: 90, category: "soft" },
  { name: "Adaptability", level: 85, category: "soft" },
  { name: "Leadership", level: 80, category: "soft" },
];

const filterSkills = (category: Skill['category']) => {
  return skills.filter(skill => skill.category === category);
};

const getCategoryIcon = (category: Skill['category']) => {
  switch (category) {
    case 'frontend':
      return <Code size={24} className="text-primary-500" />;
    case 'backend':
      return <Server size={24} className="text-secondary-500" />;
    case 'tools':
      return <Workflow size={24} className="text-green-500" />;
    case 'soft':
      return <Users size={24} className="text-amber-500" />;
    default:
      return <CheckCircle2 size={24} />;
  }
};

const getSkillIcon = (name: string) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('javascript')) return <FaJs className="text-yellow-500" />;
  if (lowerName.includes('react')) return <FaReact className="text-blue-400" />;
  if (lowerName.includes('vue')) return <FaVuejs className="text-green-400" />;
  if (lowerName.includes('node')) return <FaNodeJs className="text-green-600" />;
  if (lowerName.includes('mongo')) return <FaDatabase className="text-green-500" />;
  if (lowerName.includes('graph')) return <BrainCircuit className="text-pink-500" />;
  if (lowerName.includes('figma')) return <FaFigma className="text-purple-500" />;
  if (lowerName.includes('language')) return <Languages className="text-blue-500" />;
  if (lowerName.includes('tailwind')) return <FaTrailer className="text-blue-400" />;
  if (lowerName.includes('github')) return <FaGithub className="text-gray-500" />;
  if (lowerName.includes('azure')) return <FaMicrosoft  className="text-blue-500" />;
  if (lowerName.includes('html')) return <FaHtml5 className="text-orange-500" />;
  if (lowerName.includes('aws')) return <FaAmazon className="text-yellow-500" />;
  if (lowerName.includes('typescript')) {
    return (
      <svg
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        className="text-blue-600"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="TypeScript"
      >
        <path d={siTypescript.path} />
      </svg>
    );
  }
  if (lowerName.includes('tailwindcss')) {
    return (
      <svg
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        className="text-blue-600"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Tailwind CSS"
      >
        <path d={siTailwindcss.path} />
      </svg>
    );
  }
  if (lowerName.includes('express')) {
    return (
      siExpress && (
        <svg  
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          className="text-green-600"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Express.js"
        >
          <path d={siExpress.path} />
        </svg>
      )
  );
  }

  if (lowerName.includes('mysql')) {
    return (
      <svg
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        className="text-blue-600"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="MySQL"
      >
        <path d={siMysql.path} />
      </svg>  
    );
  }
  if (lowerName.includes('apollo')) {
    return (
      <svg
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        className="text-blue-600"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Apollo GraphQL"
      >
        <path d={siApollographql.path} />
      </svg>
    );
  }
  if (lowerName.includes('next')) {
    // Render the SVG path from simple-icons
    return (
      <svg
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        className="text-gray-800 dark:text-gray-200"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Vercel"
      >
        <path d="M24 22.525H0l12-21.05 12 21.05z" />
      </svg>
    );
  }

  return <CheckCircle2 className="text-primary-400" />;
};

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  
  const categories = [
    { id: 'frontend', title: 'Frontend', skills: filterSkills('frontend') },
    { id: 'backend', title: 'Backend', skills: filterSkills('backend') },
    { id: 'tools', title: 'Tools & Platforms', skills: filterSkills('tools') },
    { id: 'soft', title: 'Soft Skills', skills: filterSkills('soft') },
  ];
  
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="My technical skills and competencies"
      className="mt-[-75px] py-12 "
    >
      {/* Tech Stack Cloud */}
      <TechStackCloud />
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {categories.map(category => (
          <motion.div
            key={category.id}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            variants={categoryVariants}
          >
            <div className="flex items-center mb-6">
              {getCategoryIcon(category.id as Skill['category'])}
              <h3 className="text-xl font-bold ml-3">{category.title}</h3>
            </div>
            
            <div className="space-y-5">
              {category.skills.map(skill => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {skill.icon || getSkillIcon(skill.name)}
                      <span className="ml-2 text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default SkillsSection;