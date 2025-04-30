import { motion } from 'framer-motion';
import Section from '@components/common/Section';
import { Skill } from '@/types';
import { 
  Code, 
  Server, 
  Palette, 
  Workflow, 
  BrainCircuit, 
  Database, 
  Figma, 
  Users, 
  Languages, 
  CheckCircle2 
} from 'lucide-react';
import TechStackCloud from '@components/skills/TechStackCloud';

const skills: Skill[] = [
  // Frontend
  { name: "ReactJS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
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
  
  if (lowerName.includes('react')) return <Code className="text-blue-400" />;
  if (lowerName.includes('vue')) return <Code className="text-green-400" />;
  if (lowerName.includes('node')) return <Server className="text-green-600" />;
  if (lowerName.includes('mongo')) return <Database className="text-green-500" />;
  if (lowerName.includes('graph')) return <BrainCircuit className="text-pink-500" />;
  if (lowerName.includes('figma')) return <Figma className="text-purple-500" />;
  if (lowerName.includes('language')) return <Languages className="text-blue-500" />;
  if (lowerName.includes('tailwind')) return <Palette className="text-blue-400" />;
  
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
      className="bg-gray-50/25 dark:bg-gray-900/50 mt-[-75px] py-12 "
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
                      {getSkillIcon(skill.name)}
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