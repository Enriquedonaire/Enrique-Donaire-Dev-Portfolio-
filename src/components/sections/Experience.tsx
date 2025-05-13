import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import { Experience as ExperienceType } from '@/types';
import ExperienceCanvas from "@/components/canvas/ExperienceCanvas";
import ParticleBackground from "@/components/common/ParticleBackground";

const experiences: ExperienceType[] = [
  {
    id: 1,
    title: "Front-End Developer",
    company: "Henko-AI",
    period: "February 2024 - Present",
    location: "Remote - Spain",
    image: "henko-ai.jpeg",
    description: [
      "Spearheading the development of a Progressive Web App with an emphasis on intuitive interfaces and responsive designs",
      "Successfully migrated legacy platforms to modern frameworks, utilizing NextJS, ReactJS, Redux, and TailwindCSS",
      "Designed and implemented dynamic interfaces with GraphQL and AI APIs to enhance functionality and user experience",
      "Automated business-critical operations, improving efficiency across pharmaceutical shipment and payment processes",
      "Integrated advanced AI technologies including OpenAI, Whisper AI, Gladia AI, and Speech.io to build intuitive interfaces",
      "Collaborated with cross-functional teams to gather requirements and provide ongoing support, ensuring satisfaction and project success",
    ],
    skills: ["ReactJS", "NextJS", "Redux", "TailwindCSS", "GraphQL", "AI Integration", "AWS", "OpenAI", "Whisper AI", "Gladia AI", "Speech.io"]
  },
  {
    id: 2,
    title: "Front-End Developer (Vue.js)",
    company: "isEazy LMS",
    period: "March 2023 - February 2024",
    location: "Remote - Spain",
    image: "iseazy-lms.jpeg",
    description: [
      "Directed the evolution and optimization of a Progressive Web Application (PWA), prioritizing mobile-first design and scalability",
      "Drove success across 14 Agile-Scrum sprints, ensuring the seamless delivery of features through active participation in sprint planning, stand-ups, and presentations",
      "Championed  a  comprehensive  migration  from  outdatedtechnologies ( JavaScript/Typescript ES5) to a modern stack using Vite, Vue 3, NextJS and TailwindCSS.",
      "Improved code quality and collaboration through consistent contributions to private and open-source projects, leveraging GitHub workflows",
      "Implemented CI/CD pipelines and automated testing frameworks, ensuring high-quality code delivery and reducing deployment times",
    ],
    skills: ["Vue.js", "Vite", "NextJS",  "ReactJS", "TailwindCSS", "PWA", "Agile/Scrum", "GitHub", "Open Source", "JavaScript", "TypeScript"]
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "atSistemas",
    period: "March 2022 - January 2023",
    location: "Remote - Spain",
    image: "atSitemas2.jpg",
    description: [
      "Architected and deployed dynamic web solutions tailored to client specifications, surpassing expectations and boosting operational efficiency",
      "Streamlined development workflows by integrating cutting-edge technologies, driving performance optimization across multiple projects",
      "Leveraged Next.js to develop fast, SEO-optimized web applications with server-side rendering and API routes, enhancing user experience and maintainability",
      "Implemented CI/CD pipelines and automated testing frameworks, ensuring high-quality code delivery and reducing deployment times",
      "Collaborated with cross-functional teams to gather requirements and provide ongoing support"
    ],
    skills: ["React", "NextJS", "JavaScript", "RESTful APIs", "GitHub", "Front-end Development"]
  },
  {
    id: 4,
    title: "MERN-Stack Developer",
    company: "Freelance",
    period: "May 2020 - March 2022",
    location: "Granada - Spain",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: [
      "Delivered custom software solutions to over 10 clients, ensuring scalability and seamless functionality",
      "Cultivated expertise in NextJS, ReactJS, AWS ( Ec2, S3, DynamoDBand Lambda) REST APIs, MongoDB, Supabase and the MERN stack,ensuring robust application performance",
      "Implemented responsive designs and user-friendly interfaces, enhancing user experience and engagement",
      "Collaborated with clients to gather requirements and provide ongoing support, ensuring satisfaction and project success",
      "Developed and maintained comprehensive documentation for all projects, ensuring clarity and ease of understanding for future developers"
    ],
    skills: ["MongoDB", "Express.js", "React","NextJS", "Node.js", "AWS", "REST APIs"]
  }
];

const ExperienceCard = ({ exp }: { exp: ExperienceType }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card
      className="relative overflow-hidden transition-all duration-300 w-full max-w-[540px] min-h-[420px] group
        dark:bg-gradient-to-br dark:from-[#181c2a]/95 dark:to-[#0a0a0a]/95 dark:border-none
        bg-white/95 border border-gray-200
        backdrop-blur-sm
        z-10
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced glow effect */}
      <div
        className="absolute inset-0 -z-10 rounded-2xl transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.15), rgba(6, 182, 212, 0.15))',
          filter: 'blur(20px)',
          transform: 'scale(1.2)',
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Animated border gradient */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-400 via-cyan-400 to-purple-400 dark:from-purple-500 dark:via-cyan-500 dark:to-purple-500 bg-[length:100%_200%] animate-gradient-y"></div>

      <CardHeader>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <CardTitle className="text-xl md:text-2xl font-bold text-blue-900 dark:text-white mb-1">
              {exp.title}
            </CardTitle>
            <div className="flex items-center mt-2 text-purple-600 dark:text-purple-400">
              <Briefcase className="h-4 w-4 mr-2" />
              <span>{exp.company}</span>
            </div>
          </div>
          <div className="flex items-center text-cyan-700 dark:text-cyan-400">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{exp.period}</span>
            <span className="mx-2">•</span>
            <span>{exp.location}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-4">
          {exp.description.map((item, i) => (
            <li key={i} className="text-gray-800 dark:text-gray-300 flex">
              <span className="text-purple-600 dark:text-purple-500 mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {exp.skills.map((skill, i) => (
            <Badge
              key={i}
              variant="outline"
              className={`${i % 2 === 0 ? "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30" : "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30"}`}
            >
              {skill}
            </Badge>
          ))}
        </div>
        {/* Botón de enlace a la compañía */}
        {exp.company === "Henko-AI" && (
          <a href="https://henko-ai.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 px-4 py-2 bg-cyan-700 hover:bg-cyan-500 text-white rounded-lg font-semibold transition-colors">Learn more</a>
        )}
        {exp.company === "isEazy LMS" && (
          <a href="https://www.iseazy.com/es/lms" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 px-4 py-2 bg-cyan-700 hover:bg-cyan-500 text-white rounded-lg font-semibold transition-colors">Learn more</a>
        )}
        {exp.company === "atSistemas" && (
          <a href="https://www.knowmadmood.com/es" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 px-4 py-2 bg-cyan-700 hover:bg-cyan-500 text-white rounded-lg font-semibold transition-colors">Learn more</a>
        )}
        {exp.company === "Freelance" && (
          <a href="https://github.com/Enriquedonaire" target="_blank" rel="noopener noreferrer" className="inline-block mt-20 px-4 py-2 bg-cyan-700 hover:bg-cyan-500 text-white rounded-lg font-semibold transition-colors ">Learn more</a>
        )}
      </CardContent>
    </Card>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 px-4 overflow-visible">
      <ParticleBackground />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey in web and full-stack application development.
          </p>
        </motion.div>
        <div className="relative flex flex-col items-center justify-center min-h-[1000px]">
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <ExperienceCanvas />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-x-0 md:gap-x-[23vw] gap-y-12 md:gap-y-40 w-full max-w-[2000px] relative z-10 pt-10 md:pt-20 pb-10 md:pb-20 px-0 md:px-4 pointer-events-none">
            <div className="flex justify-end items-end">
              <motion.div whileHover={{ scale: 1.09 }} className="w-full max-w-[540px] min-h-[420px] transition-all duration-300 pointer-events-auto">
                {experiences[0] && <ExperienceCard exp={experiences[0]} />}
              </motion.div>
            </div>
            <div className="flex justify-start items-end">
              <motion.div whileHover={{ scale: 1.07 }} className="w-full max-w-[540px] min-h-[420px] transition-all duration-300 pointer-events-auto">
                {experiences[1] && <ExperienceCard exp={experiences[1]} />}
              </motion.div>
            </div>
            <div className="flex justify-end items-start">
              <motion.div whileHover={{ scale: 1.07 }} className="w-full max-w-[540px] min-h-[420px] transition-all duration-300 pointer-events-auto">
                {experiences[2] && <ExperienceCard exp={experiences[2]} />}
              </motion.div>
            </div>
            <div className="flex justify-start items-start">
              <motion.div whileHover={{ scale: 1.07 }} className="w-full max-w-[540px] min-h-[420px] transition-all duration-300 pointer-events-auto">
                {experiences[3] && <ExperienceCard exp={experiences[3]} />}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;