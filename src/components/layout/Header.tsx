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
            className="font-bold text-xl cursor-pointer flex items-center justify-start ml-2 md:ml-6"
        >
          {scrolled ? (
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white dark:bg-gray-900 shadow-md flex items-center justify-center transition-all duration-300 p-0">
              {/* Glow animado */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/40 to-secondary-500/40 blur-[22px] -z-10 pointer-events-none"
                animate={{
                  opacity: [0.22, 0.32, 0.22],
                  scale: [1, 1.13, 1],
                  filter: [
                    'brightness(1.08) saturate(1.05) blur(22px)',
                    'brightness(1.18) saturate(1.12) blur(28px)',
                    'brightness(1.08) saturate(1.05) blur(22px)'
                  ],
                  boxShadow: [
                    '0 0 12px 6px #36aef8, 0 0 18px 9px #8c4fff',
                    '0 0 24px 12px #36aef8, 0 0 32px 16px #8c4fff',
                    '0 0 12px 6px #36aef8, 0 0 18px 9px #8c4fff'
                  ]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
              />
              <img
                src={import.meta.env.BASE_URL + 'planet-gif.gif'}
                alt="Planet Gif"
                className="w-full h-full object-cover rounded-full z-10"
                style={{objectFit:'cover'}}
              />
            </div>
          ) : (
            <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent tracking-tight select-none" style={{fontFamily: 'Raleway, Arial, sans-serif', letterSpacing: '-0.04em'}}>Portfolio</span>
          )}
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