import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Mic, LayoutDashboard, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: <Bot className="w-6 h-6 text-primary" />,
    title: "Agente de IA Humanizado",
    description: "Atendentes de IA operando 24h, qualificando e interagindo de forma totalmente natural e indetectável."
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-accent" />,
    title: "CRM Injetado com IA",
    description: "Painel Kanban visual. Organizamos os leads, agendamos follow-ups e indicamos o momento exato do fechamento."
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-emerald-400" />,
    title: "Central de Automação",
    description: "Material prático e acessível para escalar o uso da plataforma. Casos de sucesso, aulas rápidas e suporte direto."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Services() {
  return (
    <section className="min-h-screen snap-start flex flex-col justify-center py-24 relative z-10" id="solucoes">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Soluções <span className="text-gradient">Completas</span></h2>
          <p className="text-lg text-slate-400">
            De ponta a ponta: tudo o que a sua empresa necessita para alavancar receita, eliminando gargalos operacionais.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="glass-panel p-8 rounded-3xl hover:bg-white/[0.05] transition-colors group cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
