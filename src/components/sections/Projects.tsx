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
    description: "Online Game | JavaScript - HTML - CSS - DOM Manipulation",
    image: "https://i.imgur.com/FuihTw0.jpg",
    tags: ["JavaScript", "HTML", "CSS", "Game"],
    link: "https://enriquedonaire.github.io/GOKU-IN-THE-CLOUD-GAME"
  },
  {
    id: 1,
    title: "Portfolio AV",
    description: "Audiovisual Portfolio | Filmmaker's Showcase | Built with ReactJS, Material-UI",
    image: "https://miro.medium.com/v2/da:true/resize:fit:1200/0*gMblHlHipRsjwsU6",
    tags: ["React", "Material UI", "Portfolio"],
    link: "https://enriquedonaire.github.io/Portfolio-AV/"
  },

  {
    id: 2,
    title: "Login Page",
    description: "Form | ReactJS | Tailwind-CSS | BEM",
    image: "https://i.ytimg.com/vi/hlwlM4a5rxg/maxresdefault.jpg",
    tags: ["React", "TailwindCSS", "BEM", "Authentication"],
    link: "https://enriquedonaire.github.io/Alea-Test/"
  },
  {
    id: 3,
    title: "Pic-Finder",
    description: "Image Gallery | A styled Image Searcher | ReactJS | Material UI",
    image: "https://img.freepik.com/vector-gratis/imagen-estructura-metalica-poligonal-tacto-mano-humana-pantalla-electronica-ilustracion-vectorial-abstracta_1284-30756.jpg",
    tags: ["React", "Material UI", "Gallery"],
    link: "https://enriquedonaire.github.io/PicFinder-App"
  },
  {
    id: 4,
    title: "MyTheresa Movie App",
    description: "Film App | A complete Movie App | ReactJS | SCSS | BEM",
    image: "https://i.ytimg.com/vi/_TW4bCSs4gU/maxresdefault.jpg",
    tags: ["React", "SCSS", "BEM", "Movies"],
    link: "https://enriquedonaire.github.io/Mytheresa-movie-App-Test/"
  },
  {
    id: 5,
    title: "InQbus Marketing",
    description: "Marketing Site | Next generation Marketing web site | TypeScript | NextJS | Express | Tailwind-css",
    image: import.meta.env.BASE_URL + 'InQbusPic.jpg',
    tags: ["TypeScript", "NextJS", "NodeJS", "Express", "Tailwind-css"],
    link: "https://inqbus.vercel.app"
  },
  {
    id: 6,
    title: "Miranda Hotel",
    description: "Hotel Site | Next generation Hotel web site | JavaScript | NodeJS | Express | BEM",
    image: "https://www.barcelonairporthotel.com/wp-content/uploads/2023/09/Deluxe-2022-1.jpg",
    tags: ["JavaScript", "NodeJS", "Express", "BEM"],
    link: "https://enriquedonaire.github.io/Hotel-Miranda-WebPage"
  },
  {
    id: 7,
    title: "Dashboard A3M",
    description: "Dashboard | A Full-Responsive Data Dashboard | ReactJS | TailwindCSS | BEM",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*rQ3d_dKG7V2JhX8SrUjs6g.png",
    tags: ["React", "TailwindCSS", "BEM", "Dashboard"],
    link: "https://enriquedonaire.github.io/Dashboard-A3M/"
  },
  {
    id: 8,
    title: "Oxygen-Shop",
    description: "Tech Shop | Responsive App | ReactJS | Material-UI",
    image: "https://f4.bcbits.com/img/a1309081681_65",
    tags: ["React", "Material UI", "E-commerce"],
    link: "https://Enriquedonaire.github.io/Oxygen-Shop-Enrique"
  },

  {
    id: 9,
    title: "CalculatorJS",
    description: "Calculator | JavaScript | NodeJS | Express | BEM",
    image: "https://png.pngtree.com/thumb_back/fw800/background/20230618/pngtree-cartoon-style-3d-render-of-calculator-and-math-symbols-on-background-image_3631042.jpg",
    tags: ["JavaScript", "NodeJS", "Express", "BEM"],
    link: "https://enriquedonaire.github.io/JS-Calculator-Assignment"
  }
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
            className="text-teal-800/75 dark:text-white/80"
          >
            <BsHandIndex size={40} className="transform -scale-x-100" />
          </motion.div>
          <motion.div
            animate={{ x: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-teal-800/75 dark:text-white/80"
          >
            <BsHandIndex size={40} />
          </motion.div>
        </motion.div>

        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards]}
          className="h-[600px] overflow-visible relative"
          initialSlide={Math.floor(filteredProjects.length / 2)}
          onSwiper={swiper => {
            swiper.el.style.overflow = 'visible';
            swiper.slides.forEach(slide => {
              slide.style.overflow = 'visible';
            });
          }}
        >
          {/* 
            Ajuste de separación de tarjetas:
            perSlideOffset: 42 - ajustar este valor para cambiar la separación
            - Aumentar para más separación
            - Disminuir para menos separación
          */}
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
            className="h-[600px] overflow-visible relative"
            initialSlide={filteredProjects.findIndex(p => p.title === "InQbus Marketing")}
            cardsEffect={{
              perSlideRotate: 5,
              perSlideOffset: 90, // Valor ajustado para una separación moderada
              slideShadows: false
            }}
            onSwiper={(swiper) => {
              swiper.el.style.overflow = 'visible';
              swiper.slides.forEach(slide => {
                slide.style.overflow = 'visible';
              });
            }}
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide
                key={project.id}
                className={`rounded-2xl overflow-visible relative transition-transform duration-300
        ${[
                    'bg-primary-500/90',
                    'bg-teal-500/90',
                    'bg-yellow-500/90',
                    'bg-green-500/90',
                    'bg-blue-500/90',
                    'bg-teal-400/90',
                    'bg-orange-500/90',
                    'bg-pink-500/90',
                    'bg-red-500/90'
                  ][index % 7]} text-white backdrop-blur-md
        custom-slide
        shadow-2xl
        dark:shadow-none
      `}
                style={{
                  zIndex: 10 - Math.abs(index - (filteredProjects.findIndex(p => p.title === "InQbus Marketing"))),
                  pointerEvents: 'auto',
                }}
              >
                {/* Glow personalizado por tema */}
                <div
                  className="absolute inset-0 -z-10 rounded-3xl"
                  style={{
                    filter: 'blur(32px)',
                    opacity: 0.85,
                    background:
                      document.documentElement.classList.contains('dark')
                        ? '#0343639e'
                        : 'rgba(124, 124, 124, 0.25)',
                  }}
                />

                <div className="h-full flex flex-col">
                  <div className="relative h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-t-2xl"
                    />
                  </div>

                  <div className="p-6 flex-1">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-white/20 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-white text-primary-500 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </Swiper>

      </motion.div>

      <div className="text-center mt-12">
        <a
          href="https://github.com/Enriquedonaire"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
        >
          <span>See more on GitHub</span>
          <ExternalLink className="ml-2" size={20} />
        </a>
      </div>
    </Section>
  );
};

export default Projects;