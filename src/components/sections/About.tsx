import Section from '@components/common/Section';
import { MoveRight } from 'lucide-react';
import { Link } from 'react-scroll';
import EarthCanvas from '@components/canvas/Earth';

const About = () => {

  return (
    <Section 
      id="about"
      title="About Me"
      subtitle="Get to know more about my background and approach"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Lado izquierdo: planeta SIEMPRE visible, respetando márgenes */}
        <div className="relative h-[400px] flex items-center justify-center">
          <EarthCanvas />
        </div>

        {/* Lado derecho: contenido estático, sin transición */}
        <div>
          <h3 className="text-2xl font-bold mb-4">I'm Enrique Donaire, a Full-Stack Developer & AI Frontend Engineer</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            With five years of expertise in crafting high-performance web applications, I bring a unique perspective that combines innovative technology solutions with a deep understanding of user-centered design. I specialize in NodeJS, ExpressJS, ReactJS, NextJS, VueJS, TypeScript, MongoDB, MySQL and GraphQL to build seamless digital experiences.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            My background in healthcare gives me a sharp analytical mindset and a strong focus on delivering solutions that truly address user needs. As a proven leader in Agile environments, I excel at collaborating across teams to drive impactful projects while maintaining a commitment to continuous learning and excellence.
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
                To bridge healthcare and technology through innovative software solutions.
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