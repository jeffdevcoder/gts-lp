import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero({ setCurrentSection }: { setCurrentSection?: (i: number) => void }) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number, targetId: string) => {
    const isDesktop = window.innerWidth >= 1024;
    if (isDesktop && setCurrentSection) {
      e.preventDefault();
      setCurrentSection(index);
    } else {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative min-h-screen snap-start flex flex-col justify-center pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/20 blur-[120px] pointer-events-none -z-10" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
            
            {/* Left Content */}
            <div className="flex flex-col items-start z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                Onde ideias se tornam solução
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
              >
                Aumente suas conversões em até <span className="text-gradient">300%</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg lg:text-xl text-slate-400 mb-8 max-w-xl leading-relaxed"
              >
                Agente de inteligência artificial avançado para escalar sua operação. Atendimento 24h customizado, treinado com os seus dados, focado em fechar negócios.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <a href="#contato" onClick={(e) => handleNavClick(e, 3, 'contato')} className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 active:scale-95 transition-all">
                  Começar Agora
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#como-funciona" onClick={(e) => handleNavClick(e, 2, 'como-funciona')} className="flex items-center justify-center px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all pointer-events-auto cursor-pointer">
                  Ver na prática
                </a>
              </motion.div>
            </div>

            {/* Right Content - Video Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full h-[600px] hidden lg:flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-[80px] -z-10 rounded-full"></div>
              
              {/* Crop Box with Border */}
              <div className="w-full max-w-[650px] aspect-video relative flex items-center justify-center rounded-[3rem] border-2 border-white/20 overflow-hidden bg-black/20 backdrop-blur-xl shadow-2xl">
                <video
                  src="/whatsapp-robo.mp4"
                  className="w-full h-full object-cover mix-blend-screen"
                  muted
                  playsInline
                  autoPlay
                  loop
                ></video>
              </div>
            </motion.div>

          </div>
        </div>
    </section>
  );
}
