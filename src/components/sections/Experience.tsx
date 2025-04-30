import { motion } from 'framer-motion';
import Section from '@components/common/Section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Experience as ExperienceType } from '@/types';
import { Calendar, MapPin } from 'lucide-react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const experiences: ExperienceType[] = [
  {
    id: 1,
    title: "Front-End Developer & Web Designer",
    company: "Henko-AI",
    period: "February 2024 - Present",
    location: "Remote - Spain",
    image: "henko-ai.jpeg",
    description: [
      "Spearheading the development of a Progressive Web App with an emphasis on intuitive interfaces and responsive designs",
      "Successfully migrated legacy platforms to modern frameworks, utilizing ReactJS, Redux, and TailwindCSS",
      "Designed and implemented dynamic interfaces with GraphQL and AI APIs to enhance functionality and user experience",
      "Automated business-critical operations, improving efficiency across pharmaceutical shipment and payment processes",
      "Integrated advanced AI technologies including OpenAI, Whisper AI, Gladia AI, and Speech.io to build intuitive interfaces"
    ],
    skills: ["ReactJS", "Redux", "TailwindCSS", "GraphQL", "AI Integration", "PWA"]
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
      "Championed a comprehensive migration from outdated technologies (JavaScript ES5) to a modern stack using Vite, Vue 3, and TailwindCSS",
      "Improved code quality and collaboration through consistent contributions to private and open-source projects, leveraging GitHub workflows"
    ],
    skills: ["Vue.js", "Vite", "TailwindCSS", "PWA", "Agile/Scrum", "GitHub"]
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
      "Streamlined development workflows by integrating cutting-edge technologies, driving performance optimization across multiple projects"
    ],
    skills: ["React", "JavaScript", "RESTful APIs", "GitHub", "Front-end Development"]
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
      "Cultivated expertise in AWS (EC2, S3, DynamoDB and Lambda), REST APIs, MongoDB, and the MERN stack, ensuring robust application performance"
    ],
    skills: ["MongoDB", "Express.js", "React", "Node.js", "AWS", "REST APIs"]
  }
];

const Experience = () => {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="A detailed breakdown of my professional journey"
      className="bg-gray-50/15 dark:bg-gray-900/50"
    >
      <motion.div 
        className="w-full max-w-screen-6xl mx-auto px-4 md:px-8 rounded-2xl" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      >
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true} 
        slidesPerView={3} 
        initialSlide={1} 
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="py-1 w-screen-xl max-w-screen-2xl" 
      >
        {experiences.map((experience) => (
        <SwiperSlide 
          key={experience.id} 
          className="!flex !justify-center !items-center !p-0"
          style={{ width: '800px', height: '400px' }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden group m-0 shadow-xl">
            {/* Imagen */}
            <img
              src={experience.image}
              alt={experience.company}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl z-0"
            />
            {/* Overlay gradiente animado - cubre todo el slide sin márgenes */}
            <div className="absolute inset-0 w-full h-full rounded-2xl pointer-events-none before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-[#AA367C] before:to-[#4A2FBD] before:opacity-85 before:transition-all before:duration-400 before:ease-in-out before:h-0 group-hover:before:h-full before:w-full before:z-10"></div>
            {/* Texto sobre la imagen, ocupa todo el slide */}
            <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full text-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-20 p-8">
              <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{experience.title}</h3>
              <span className="italic font-normal text-lg text-white mb-2 drop-shadow">{experience.company}</span>
              <div className="flex items-center justify-center text-white text-sm mb-2 gap-4">
                <span className="flex items-center"><Calendar size={16} className="mr-1" />{experience.period}</span>
                <span className="flex items-center"><MapPin size={16} className="mr-1" />{experience.location}</span>
              </div>
              <ul className="text-white text-base mb-4 list-disc pl-5 text-left max-h-40 overflow-y-auto mx-auto w-full max-w-2xl">
                {experience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 justify-center">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs bg-white/30 rounded-full text-white border border-white/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
      </motion.div>
    </Section>
  );
};

export default Experience;