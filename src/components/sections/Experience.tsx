import { motion } from 'framer-motion';
import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, RotateCw } from "lucide-react";
import { Experience as ExperienceType } from '@/types';
import ExperienceCanvas from "@/components/canvas/ExperienceCanvas";
import ParticleBackground from "@/components/common/ParticleBackground";

const BASE = import.meta.env.BASE_URL;

// Card covers: a photo where the company publishes one, otherwise its logo.
// Logos are rendered as a mask so they always use our palette colour.
type Cover = { kind: 'photo'; src: string } | { kind: 'logo'; src: string };
const covers: Record<string, Cover> = {
  'SQLI': { kind: 'logo', src: 'experience/sqli-mask.png' },
  'Henko-AI': { kind: 'photo', src: 'experience/henko-cover.jpg' },
  'isEazy LMS': { kind: 'photo', src: 'experience/iseazy-cover.jpg' },
  'atSistemas': { kind: 'photo', src: 'experience/knowmad-cover.jpg' },
  'Freelance': { kind: 'photo', src: 'experience/freelance-cover.jpg' },
};

const companyLinks: Record<string, string> = {
  'SQLI': 'https://www.sqli.com',
  'Henko-AI': 'https://henko-ai.com',
  'isEazy LMS': 'https://www.iseazy.com/es/lms',
  'atSistemas': 'https://www.knowmadmood.com/es',
  'Freelance': 'https://github.com/Enriquedonaire',
};

const experiences: ExperienceType[] = [
  {
    id: 0,
    title: "Front-End Developer",
    company: "SQLI",
    period: "Sep 2025 - Present",
    location: "Barcelona - Hybrid",
    image: "",
    description: [
      "Front-end lead for IPCOM (isopartner.nl), a headless B2B e-commerce platform on Next.js and TypeScript with a BFF over Payload CMS, Strapi, Vendure and the iHub ERP, plus Keycloak/OAuth authentication",
      "Defined the team's AI-assisted workflow with Claude Code: shared conventions, reusable prompt patterns, review gates for AI-generated code and agentic MCP / tool-use flows",
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

const CardFront = ({ exp }: { exp: ExperienceType }) => {
  const cover = covers[exp.company];
  return (
    <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden] bg-gradient-to-br from-[#1b1440] via-[#141a2e] to-[#06283a] border border-white/10 shadow-xl">
      {cover?.kind === 'photo' && (
        <img src={BASE + cover.src} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      )}
      {cover?.kind === 'logo' && (
        <div
          aria-hidden="true"
          className="absolute inset-x-10 top-10 bottom-36 bg-gradient-to-r from-purple-300 to-cyan-300 opacity-90"
          style={{
            WebkitMaskImage: `url(${BASE + cover.src})`, maskImage: `url(${BASE + cover.src})`,
            WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center', maskPosition: 'center',
            WebkitMaskSize: 'contain', maskSize: 'contain',
          }}
        />
      )}
      {/* Covers keep their original colours; only the bottom fades to dark so the text stays readable */}
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#0b0f1a] via-[#0b0f1a]/85 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold leading-tight">{exp.title}</h3>
        <div className="flex items-center mt-2 text-purple-300">
          <Briefcase className="h-4 w-4 mr-2" aria-hidden="true" />
          <span className="font-medium">{exp.company}</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-cyan-200">
          <span className="inline-flex items-center"><Calendar className="h-4 w-4 mr-1.5" aria-hidden="true" />{exp.period}</span>
          <span className="inline-flex items-center"><MapPin className="h-4 w-4 mr-1.5" aria-hidden="true" />{exp.location}</span>
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-gray-300">
          <RotateCw className="h-3.5 w-3.5" aria-hidden="true" /> Hover or tap for details
        </span>
      </div>
    </div>
  );
};

const CardBack = ({ exp }: { exp: ExperienceType }) => (
  <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white dark:bg-gradient-to-br dark:from-[#181c2a] dark:to-[#0a0a0a] border border-gray-200 dark:border-white/10 shadow-xl flex flex-col">
    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-400 via-cyan-400 to-purple-400" />
    <div className="p-6 pb-3">
      <h3 className="text-lg font-bold text-blue-900 dark:text-white">{exp.title} · <span className="text-purple-700 dark:text-purple-300">{exp.company}</span></h3>
    </div>
    <div className="px-6 flex-1 overflow-y-auto">
      <ul className="space-y-2 mb-4 text-sm">
        {exp.description.map((item, i) => (
          <li key={i} className="text-gray-800 dark:text-gray-300 flex">
            <span className="text-purple-600 dark:text-purple-400 mr-2" aria-hidden="true">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
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
    </div>
    <div className="p-6 pt-4">
      {companyLinks[exp.company] && (
        <a href={companyLinks[exp.company]} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-cyan-700 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors">Learn more</a>
      )}
    </div>
  </div>
);

const FlipCard = ({ exp }: { exp: ExperienceType }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="group relative h-[480px] w-full [perspective:1400px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-2xl"
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      aria-label={`${exp.title} at ${exp.company}, ${exp.period}. Show details`}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFlipped((f) => !f); } }}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 motion-reduce:transition-none [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        <CardFront exp={exp} />
        <CardBack exp={exp} />
      </div>
    </div>
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
            Six years building web platforms, from freelance MERN projects to leading the front-end of an international B2B platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Robot: sticky while the timeline scrolls */}
          <div className="relative h-[420px] lg:h-auto">
            <div className="lg:sticky lg:top-24 h-[420px] lg:h-[calc(100vh-8rem)]">
              <ExperienceCanvas />
            </div>
          </div>

          {/* Timeline */}
          <ol className="relative border-l-2 border-purple-500/30 dark:border-purple-400/30 ml-3 space-y-14">
            {experiences.map((exp) => (
              <motion.li
                key={exp.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className="relative pl-8"
              >
                <span aria-hidden="true" className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 ring-4 ring-white dark:ring-[#121212]" />
                <p className="mb-3 text-sm font-semibold text-cyan-700 dark:text-cyan-400">{exp.period}</p>
                <FlipCard exp={exp} />
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
