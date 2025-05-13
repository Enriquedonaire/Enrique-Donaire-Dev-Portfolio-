import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="font-bold text-2xl cursor-pointer"
            >
              <span className="animate-gradient-text">Enrique Donaire</span>
            </Link>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Full-Stack Developer & AI Frontend Engineer
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
                className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-pointer"
              >
                About
              </Link>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                offset={-80}
                className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-pointer"
              >
                Experience
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-pointer"
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-pointer"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} Enrique Donaire. All rights reserved.
          </p>

          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a 
              href="https://github.com/Enriquedonaire" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/enrique-donaire" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:donaire.q2@gmail.com" 
              aria-label="Email"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href={import.meta.env.BASE_URL + 'Enrique-Donaire-Full-Web-Dev-2025.pdf'}
              download
              aria-label="Descargar CV"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <Download size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;