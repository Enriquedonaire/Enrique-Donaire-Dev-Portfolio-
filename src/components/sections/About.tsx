import Section from '@components/common/Section';
import { MoveRight } from 'lucide-react';
import { Link } from 'react-scroll';
import EarthCanvas from '@components/canvas/Earth';

const About = () => {

  return (
    <Section 
      id="about"
      title="About Me"
      subtitle="Two careers, one goal: software that solves real problems"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Lado izquierdo: planeta SIEMPRE visible, respetando márgenes */}
        <div className="relative h-[400px] flex items-center justify-center">
          <EarthCanvas />
        </div>

        {/* Lado derecho: contenido estático, sin transición */}
        <div>
          <h3 className="text-2xl font-bold mb-4">I'm Enrique Donaire, an AI-native full-stack engineer and physician</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I'm the front-end technical lead on international client projects at SQLI: a headless B2B e-commerce platform for IPCOM (isopartner.nl) built on Next.js and a BFF over Payload CMS, Strapi and Vendure, and the global Nespresso e-commerce ecosystem. I set my team's AI-native workflow with Claude Code: shared conventions, prompt patterns, review gates for AI-generated code and agentic MCP flows.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Over 6 years I've moved from freelance MERN projects to atSistemas, isEazy and Henko-AI, where I shipped LLM and speech-AI features to production. Before code, I spent 16 years in medicine, the last 11 as an ophthalmologist. That clinical background shapes how I work: precise, user-focused, and careful with anything that touches people's data.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div>
              <h4 className="font-semibold mb-2">Languages</h4>
              <ul className="space-y-1">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Spanish (Native)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  English (C2)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Italian (B2)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Objective</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Build AI-native products, especially in digital health, where clinical insight and engineering meet.
              </p>
            </div>
          </div>
          <Link 
            to="experience"
            smooth={true}
            duration={500}
            offset={-80}
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline font-medium cursor-pointer group"
          >
            View my experience
            <MoveRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default About;