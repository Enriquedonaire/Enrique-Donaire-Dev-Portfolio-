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
    id: 0,
    title: "Front-End Developer · Technical Lead",
    company: "SQLI",
    period: "Sep 2025 - Present",
    location: "Barcelona - Hybrid",
    image: "",
    description: [
      "Lead front-end architecture for IPCOM (isopartner.nl), a headless B2B e-commerce platform on Next.js and TypeScript with a BFF over Payload CMS, Strapi, Vendure and the iHub ERP, plus Keycloak/OAuth authentication",
      "Set the team's AI-native workflow with Claude Code: CLAUDE.md conventions, reusable prompt patterns, review gates for AI-generated code and agentic MCP / tool-use flows",
      "Audited a BFF migration across 4 branches and surfaced 12 architectural risks before implementation",
      "Built scalable React/TypeScript components for the Nespresso global e-commerce ecosystem, with WCAG-aligned accessibility improvements",
      "Quality and delivery with Jest/Vitest, React Testing Library, Cypress/Playwright, Docker and GitHub Actions",
    ],
    skills: ["Next.js", "React", "TypeScript", "Claude Code", "MCP", "BFF", "Keycloak", "Vendure", "Playwright", "Vitest"]
  },
  {
    id: 1,
    title: "Front-End Developer",
    company: "Henko-AI",
    period: "Feb 2024 - Aug 2025",
    location: "Remote - Spain",
    image: "henko-ai.jpeg",
    description: [
      "Shipped LLM and speech-AI features to production, integrating OpenAI, Whisper, Gladia and Speech.io APIs into a Progressive Web App",
      "Built advertising-metrics dashboards and AI-driven campaign suggestions based on predictive analytics",
      "Migrated legacy platforms to Next.js, React, Redux, Node.js and Tailwind CSS, with GraphQL and Supabase data layers",
    ],
    skills: ["Next.js", "React", "Redux", "Tailwind CSS", "GraphQL", "Supabase", "OpenAI", "Whisper", "Gladia", "Speech.io"]
  },
  {
    id: 2,
    title: "Front-End Developer (Vue.js)",
    company: "isEazy LMS",
    period: "Mar 2023 - Feb 2024",
    location: "Remote - Spain",
    image: "iseazy-lms.jpeg",
    description: [
      "Evolved and maintained the main product, a mobile-first Progressive Web App for corporate e-learning",
      "Led the migration of the legacy platform (PHP 5.5 and JavaScript ES5) to Laravel, Vite, Vue 3, Next.js and Tailwind CSS",
      "Delivered across 14 Agile-Scrum sprints with GitHub pull-request and code-review workflows",
    ],
    skills: ["Vue 3", "Vite", "Next.js", "Laravel", "Tailwind CSS", "PWA", "Agile/Scrum", "TypeScript"]
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "atSistemas",
    period: "Mar 2022 - Jan 2023",
    location: "Remote - Spain",
    image: "atSitemas2.jpg",
    description: [
      "Built React + TypeScript integrations with SharePoint sites for enterprise clients",
      "Created automations for pharmaceutical shipments and payments",
      "Developed web solutions with Node.js, Express and AWS, and SEO-optimized Next.js applications with server-side rendering and API routes",
    ],
    skills: ["React", "TypeScript", "SharePoint", "Next.js", "Node.js", "Express", "AWS"]
  },
  {
    id: 4,
    title: "Full-Stack Developer (MERN)",
    company: "Freelance",
    period: "May 2020 - Feb 2022",
    location: "Granada - Spain",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: [
      "Delivered custom web applications for more than 10 clients",
      "Built with Node.js, Express, React, Next.js, MongoDB and Supabase, deployed on AWS (EC2, S3, DynamoDB, Lambda)",
      "Gathered requirements directly with clients and provided ongoing support and documentation",
    ],
    skills: ["MongoDB", "Express", "React", "Next.js", "Node.js", "Supabase", "AWS", "REST APIs"]
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
        {exp.company === "SQLI" && (
          <a href="https://www.sqli.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 px-4 py-2 bg-cyan-700 hover:bg-cyan-500 text-white rounded-lg font-semibold transition-colors">Learn more</a>
        )}
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
          <a href="https://github.com/Enriquedonaire" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 px-4 py-2 bg-cyan-700 hover:bg-cyan-500 text-white rounded-lg font-semibold transition-colors ">Learn more</a>
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
            Six years building web platforms, from freelance MERN projects to technical lead on international e-commerce.
          </p>
        </motion.div>
        <div className="relative flex flex-col items-center justify-center min-h-[1000px]">
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <ExperienceCanvas />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-[23vw] gap-y-12 md:gap-y-24 w-full max-w-[2000px] relative z-10 pt-10 md:pt-20 pb-10 md:pb-20 px-0 md:px-4 pointer-events-none">
            {experiences.map((exp, i) => {
              const isLastOdd = i === experiences.length - 1 && experiences.length % 2 === 1;
              const align = isLastOdd ? 'md:col-span-2 justify-center' : i % 2 === 0 ? 'justify-end' : 'justify-start';
              return (
                <div key={exp.id} className={`flex ${align}`}>
                  <motion.div whileHover={{ scale: 1.05 }} className="w-full max-w-[540px] min-h-[420px] transition-all duration-300 pointer-events-auto">
                    <ExperienceCard exp={exp} />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;