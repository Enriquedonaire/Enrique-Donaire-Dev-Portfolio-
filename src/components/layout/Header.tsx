import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '@components/providers/ThemeProvider';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-dark/80 backdrop-blur-md py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="font-bold text-xl cursor-pointer"
        >
          <span className="animate-gradient-text">ED</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="text-primary-500 dark:text-primary-400"
              className="font-medium hover:text-primary-500 dark:hover:text-primary-400 cursor-pointer transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/Enriquedonaire" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/enrique-donaire" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:donaire.q2@gmail.com" 
              aria-label="Email"
              className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[60px] bg-white dark:bg-dark z-40 md:hidden"
            >
              <div className="flex flex-col h-full px-6 py-8 overflow-y-auto">
                <nav className="flex flex-col space-y-6 text-lg">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={() => setIsOpen(false)}
                      activeClass="text-primary-500 dark:text-primary-400"
                      className="font-medium py-2 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto flex justify-center space-x-8 py-6">
                  <a 
                    href="https://github.com/Enriquedonaire" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/enrique-donaire" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="mailto:donaire.q2@gmail.com" 
                    aria-label="Email"
                    className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;