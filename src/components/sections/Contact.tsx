import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '@components/common/Section';
import { Check, AlertCircle, Send, Phone, Mail, MapPin, Download } from 'lucide-react';
import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setFormStatus('success');
      if (formRef.current) {
        formRef.current.reset();
        setFormData({ name: '', email: '', message: '' });
      }
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <Section
      id="contact"
      title=""
      subtitle=""
      className="bg-gray-50/15 dark:bg-gray-900/50"
    >
      <video 
        src={import.meta.env.BASE_URL + "fondo-contact.mp4"} 
        autoPlay 
        loop 
        muted 
        controls={false}
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20"
      />
      <div className="relative z-10 max-w-5xl mx-auto group">
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/60 via-transparent to-secondary-500/60 blur-3xl opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
        <div className="rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-md p-8 md:p-14 shadow-xl">
          <h2 className="text-4xl font-extrabold mb-2 text-center text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="text-lg mb-10 text-center text-gray-700 dark:text-gray-300">
            Ready to collaborate? Let's make something amazing together!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                    <Mail className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <a 
                      href="mailto:donaire.q2@gmail.com" 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      donaire.q2@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                    <Phone className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                    <a 
                      href="tel:+34662146383" 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      +34 662 14 63 83
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                    <MapPin className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Spain - Available for remote work
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Enriquedonaire" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label="GitHub"
                  >
                    {/* ...svg... */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/enrique-donaire" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    {/* ...svg... */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a 
                    href="https://enriquedonaire.github.io/Portfolio-Web-Dev" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label="Portfolio"
                  >
                    {/* ...svg... */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </a>
                  <a
                    href={import.meta.env.BASE_URL + 'Enrique-Donaire-Full-Stack-Web-Dev-2025.pdf'}
                    download
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label="Descargar CV"
                  >
                    <Download size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-gray-900 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-gray-900 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-gray-900 focus:outline-none transition-colors"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={formStatus === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {formStatus === 'loading' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </motion.button>
                <AnimatePresence>
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-3 rounded-lg flex items-start"
                    >
                      <Check className="mr-2 flex-shrink-0 mt-0.5" size={18} />
                      <span>
                        Your message has been sent successfully! I'll get back to you as soon as possible.
                      </span>
                    </motion.div>
                  )}
                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-4 py-3 rounded-lg flex items-start"
                    >
                      <AlertCircle className="mr-2 flex-shrink-0 mt-0.5" size={18} />
                      <span>
                        Oops! Something went wrong. Please try again or contact me directly via email.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;