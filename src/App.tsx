import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);
  const totalSections = 4;
  const [isDesktop, setIsDesktop] = useState(true); // Default to true, will update on mount

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    // Initial check
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling.current) return;
      
      if (e.deltaY > 0 && currentSection < totalSections - 1) {
        isScrolling.current = true;
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        isScrolling.current = true;
        setCurrentSection(prev => prev - 1);
      }
      
      if (Math.abs(e.deltaY) > 10) {
        setTimeout(() => {
          isScrolling.current = false;
        }, 1200); 
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection, isDesktop]);

  const touchStartY = useRef(0);
  useEffect(() => {
    if (!isDesktop) return;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (isScrolling.current) return;
      const touchEndY = e.touches[0].clientY;
      const delta = touchStartY.current - touchEndY;
      
      if (delta > 50 && currentSection < totalSections - 1) {
        isScrolling.current = true;
        setCurrentSection(prev => prev + 1);
      } else if (delta < -50 && currentSection > 0) {
        isScrolling.current = true;
        setCurrentSection(prev => prev - 1);
      }
      
      if (Math.abs(delta) > 50) {
        setTimeout(() => {
           isScrolling.current = false;
        }, 1200);
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [currentSection, isDesktop]);

  return (
    <div className={`relative w-full bg-background ${isDesktop ? 'h-screen overflow-hidden' : 'min-h-screen overflow-x-hidden'}`}>
      <div className="fixed inset-0 bg-noise z-[9999] pointer-events-none"></div>
      
      {/* Glow Orbs background */}
      <div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px] pointer-events-none" />

      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} isDesktop={isDesktop} />
      
      <motion.main
        className="w-full flex flex-col will-change-transform"
        animate={isDesktop ? { y: `-${currentSection * 100}vh` } : { y: 0 }}
        transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }} 
      >
        <div className={`${isDesktop ? 'h-screen' : ''} w-full relative`} id="inicio"><Hero setCurrentSection={setCurrentSection} /></div>
        <div className={`${isDesktop ? 'h-screen' : ''} w-full relative`} id="solucoes"><Services /></div>
        <div className={`${isDesktop ? 'h-screen' : ''} w-full relative`} id="como-funciona"><HowItWorks /></div>
        <div className={`${isDesktop ? 'h-screen' : ''} w-full relative`} id="contato"><Footer /></div>
      </motion.main>
    </div>
  );
}

export default App;
