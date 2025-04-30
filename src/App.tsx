import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '@components/layout/Header';
import Hero from '@components/sections/Hero';
import About from '@components/sections/About';
import Experience from '@components/sections/Experience';
import Skills from '@components/sections/Skills';
import Projects from '@components/sections/Projects';
import Contact from '@components/sections/Contact';
import Footer from '@components/layout/Footer';
import ScrollToTop from '@components/common/ScrollToTop';
import Loader from '@components/common/Loader';
import ThemeProvider from '@components/providers/ThemeProvider';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {loading ? (
          <Loader key="loader" />
        ) : (
          <>
            <Header />
            <main className="overflow-hidden">
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
          </>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;