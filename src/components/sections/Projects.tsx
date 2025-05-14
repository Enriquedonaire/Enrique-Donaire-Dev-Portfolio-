import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '@components/common/Section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { ExternalLink } from 'lucide-react';
import { BsHandIndex } from 'react-icons/bs';
import { Project } from '@/types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

const projects: Project[] = [
  {
    id: 0,
    title: "Goku in the Cloud",
    description: "Interactive game built with vanilla JavaScript and DOM manipulation. Optimized for browser performance.",
    image: "https://i.imgur.com/FuihTw0.jpg",
    tags: ["JavaScript", "HTML", "CSS", "Game"],
    link: "https://enriquedonaire.github.io/GOKU-IN-THE-CLOUD-GAME"
  },
  {
    id: 1,
    title: "Portfolio AV",
    description: "Audiovisual portfolio for filmmakers. Built with React and Material UI with responsive design and visual focus.",
    image: "https://miro.medium.com/v2/da:true/resize:fit:1200/0*gMblHlHipRsjwsU6",
    tags: ["React", "Material UI", "Portfolio"],
    link: "https://enriquedonaire.github.io/Portfolio-AV/"
  },
  {
    id: 2,
    title: "Login Page",
    description: "Clean and functional login form. Built with React, TailwindCSS and BEM methodology for maintainable styles.",
    image: "https://i.ytimg.com/vi/hlwlM4a5rxg/maxresdefault.jpg",
    tags: ["React", "TailwindCSS", "BEM", "Authentication"],
    link: "https://enriquedonaire.github.io/Alea-Test/"
  },
  {
    id: 3,
    title: "Pic-Finder",
    description: "Modern-styled image search app built with React and Material UI. Integrated with an external image API.",
    image: "https://img.freepik.com/vector-gratis/imagen-estructura-metalica-poligonal-tacto-mano-humana-pantalla-electronica-ilustracion-vectorial-abstracta_1284-30756.jpg",
    tags: ["React", "Material UI", "Gallery"],
    link: "https://enriquedonaire.github.io/PicFinder-App"
  },
  {
    id: 4,
    title: "MyTheresa Movie App",
    description: "Movie application with search system and custom styling. Built using React, SCSS and BEM architecture.",
    image: "https://i.ytimg.com/vi/_TW4bCSs4gU/maxresdefault.jpg",
    tags: ["React", "SCSS", "BEM", "Movies"],
    link: "https://enriquedonaire.github.io/Mytheresa-movie-App-Test/"
  },
  {
    id: 5,
    title: "La Aldea Cabins",
    description: "Book cabins in the heart of Argentina's nature. A modern, responsive platform to find and reserve unique accommodations across the country. Built with React, Redux Toolkit, TailwindCSS, React Router, and EmailJS for a seamless experience, reservation management, and direct contact.",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1920&q=80",
    tags: ["React", "Redux Toolkit", "TailwindCSS", "React Router", "EmailJS", "Booking", "Travel"],
    link: "https://enriquedonaire.github.io/La-Aldea-Cabins"
  },
  {
    id: 6,
    title: "InQbus Marketing",
    description: "Next-gen marketing website with SSR architecture using Next.js and Express. SEO-first and mobile-ready design.",
    image: import.meta.env.BASE_URL + 'InQbusPic.jpg',
    tags: ["TypeScript", "NextJS", "NodeJS", "Express", "Tailwind-css"],
    link: "https://inqbus.vercel.app"
  },
  {
    id: 7,
    title: "Miranda Hotel",
    description: "Hotel landing page with Express backend. Classical style using BEM and responsive layout design.",
    image: "https://www.barcelonairporthotel.com/wp-content/uploads/2023/09/Deluxe-2022-1.jpg",
    tags: ["JavaScript", "NodeJS", "Express", "BEM"],
    link: "https://enriquedonaire.github.io/Hotel-Miranda-WebPage"
  },
  {
    id: 8,
    title: "Dashboard A3M",
    description: "Fully responsive data dashboard with metric panels. Built with React and Tailwind for clean data visualization.",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*rQ3d_dKG7V2JhX8SrUjs6g.png",
    tags: ["React", "TailwindCSS", "BEM", "Dashboard"],
    link: "https://enriquedonaire.github.io/Dashboard-A3M/"
  },
  {
    id: 9,
    title: "Oxygen-Shop",
    description: "Responsive e-commerce app built with React and Material UI. Great for testing business logic and layout.",
    image: "https://f4.bcbits.com/img/a1309081681_65",
    tags: ["React", "Material UI", "E-commerce"],
    link: "https://Enriquedonaire.github.io/Oxygen-Shop-Enrique"
  },
  {
    id: 10,
    title: "CalculatorJS",
    description: "Simple and efficient web calculator with backend in Node and Express. Styled using BEM structure.",
    image: "https://png.pngtree.com/thumb_back/fw800/background/20230618/pngtree-cartoon-style-3d-render-of-calculator-and-math-symbols-on-background-image_3631042.jpg",
    tags: ["JavaScript", "NodeJS", "Express", "BEM"],
    link: "https://enriquedonaire.github.io/JS-Calculator-Assignment"
  },
];


const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags))).sort();
  const filteredProjects = filter ? projects.filter(project => project.tags.includes(filter)) : projects;

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Check out some of my recent work"
    >
      <div className="flex flex-wrap justify-center mb-10 gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setFilter(null)}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${filter === null
            ? 'bg-primary-500 text-white'
            : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
        >
          All
        </motion.button>

        {allTags.map(tag => (
          <motion.button
            key={tag}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(tag)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${filter === tag
              ? 'bg-primary-500 text-white'
              : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
          >
            {tag}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="max-w-3xl mx-auto px-4 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Indicadores de deslizamiento */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute top-1/2 -translate-y-1/2 -left-20 -right-20 flex justify-between pointer-events-none z-50"
        >
          <motion.div
            animate={{ x: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-100/75 dark:text-white/80"
          >
            <BsHandIndex size={40} className="transform -scale-x-100" />
          </motion.div>
          <motion.div
            animate={{ x: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-100/75 dark:text-white/80"
          >
            <BsHandIndex size={40} />
          </motion.div>
        </motion.div>

        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards]}
          className="h-[420px] sm:h-[520px] md:h-[420px] lg:h-[600px] overflow-visible relative max-w-[95vw] sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto px-2"
          initialSlide={filteredProjects.findIndex(p => p.id === 6)}
          cardsEffect={{
            perSlideRotate: 15,
            perSlideOffset: 25,
            slideShadows: false,
            ...(window.innerWidth >= 1024 && {
              perSlideRotate: 11, // Incremento de rotación para efecto abanico en pantallas grandes
              perSlideOffset: 8, // Reducción de separación para unir más las tarjetas en la parte inferior
            }),
            ...(window.innerWidth < 1024 && {
              perSlideRotate: 3, // Rotación más pronunciada para dispositivos más pequeños
              perSlideOffset: 4, // Más unidas por debajo y separadas por arriba
            })
          }}
          onSwiper={swiper => {
            swiper.el.style.overflow = 'visible';
            swiper.slides.forEach(slide => {
              slide.style.overflow = 'visible';
            });
          }}
        >
          {filteredProjects.map((project, index) => (
            <SwiperSlide
              key={project.id}
              className={`rounded-2xl overflow-visible relative transition-transform duration-300 mt-6
                ${
                  project.id === 6
                    ? 'bg-teal-500/90' // InQbus Marketing - celeste
                    : project.id === 7
                    ? 'bg-orange-900/90' // Miranda Hotel - marrón
                    : project.id === 5
                    ? 'bg-green-600/90' // La Aldea Cabins - verde
                    : [
                        'bg-primary-500/90',
                        'bg-teal-500/90',
                        'bg-yellow-500/90',
                        'bg-green-500/90',
                        'bg-blue-500/90',
                        'bg-teal-400/90',
                        'bg-orange-500/90',
                        'bg-pink-500/90',
                        'bg-red-500/90'
                      ][index % 7]
                } text-white backdrop-blur-md
                custom-slide
                shadow-2xl
                dark:shadow-none
              `}
              style={{
                zIndex: 10 - Math.abs(index - (filteredProjects.findIndex(p => p.title === "InQbus Marketing"))),
                pointerEvents: 'auto',
                minHeight: '480px',
                maxHeight: '600px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'stretch',
                overflow: 'hidden',
                marginLeft: 0,
                marginRight: 0,
              }}
            >
              {/* Glow personalizado por tema */}
              <div
                className="absolute inset-0 -z-10 rounded-3xl pointer-events-none"
                style={{
                  filter: 'blur(32px)',
                  opacity: 0.85,
                  background:
                    document.documentElement.classList.contains('dark')
                      ? '#2c2f309e'
                      : 'rgba(124, 124, 124, 0.25)',
                }}
              />

              <div className="h-full flex flex-col justify-between overflow-y-auto px-0">
                <div className="relative h-40 sm:h-56 md:h-72 lg:h-80 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-2xl border-none shadow-none m-0"
                    style={{ display: 'block', marginLeft: 0, marginRight: 0 }}
                  />
                </div>

                <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">{project.title}</h3>
                    <p className="mb-2 sm:mb-4 text-sm sm:text-base">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2 sm:mb-4">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-white/20 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 sm:mt-4 px-4 py-2 bg-white text-primary-500 rounded-lg hover:bg-gray-100 transition-colors duration-300 w-full text-center font-semibold md:w-auto md:text-base md:px-4 md:py-2 md:rounded-lg md:inline-block md:mx-0 md:mt-0 md:mb-0 md:font-normal"
                    style={{ minWidth: 'unset' }}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </motion.div>

      <div className="text-center mt-24">
        <a
          href="https://github.com/Enriquedonaire"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white px-6 py-3 pt-4 rounded-md font-medium transition-colors"
        >
          <span>See more on GitHub</span>
          <ExternalLink className="ml-2" size={20} />
        </a>
      </div>
    </Section>
  );
};

export default Projects;