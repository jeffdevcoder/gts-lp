import React from 'react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  return (
    <section className="min-h-screen snap-start flex flex-col justify-center py-24 relative" id="como-funciona">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Implementação <br/><span className="text-gradient">Fluida e Simples</span></h2>
              <p className="text-lg text-slate-400">
                Uma transição estruturada para a automação inteligente da sua empresa, sem códigos complexos e sem bloqueios técnicos.
              </p>
            </div>

            <div className="space-y-6 relative">
              <div className="absolute left-[23px] top-8 bottom-8 w-[2px] bg-white/10 hidden md:block"></div>
              
              {[
                { n: "01", t: "Configure sua IA", d: "Treine a IA com as particularidades da sua marca, cadastre seus produtos e defina o DNA da linguagem da sua empresa." },
                { n: "02", t: "Conecte Plataformas", d: "Sincronize perfeitamente com seu WhatsApp Business e absorva atendimentos massivos de imediato." },
                { n: "03", t: "Escalonamento de Vendas", d: "A IA qualifica leads e fecha vendas 24/7 enquanto sua equipe se concentra na estratégia de crescimento a longo prazo." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary bg-background flex items-center justify-center text-primary font-bold shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                    {step.n}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold mb-2 text-white">{step.t}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-[2.5rem] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[2.5rem]"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold mb-8">Organizado e Integrado</h3>
              
              <div className="flex justify-center items-center gap-4 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl shadow-lg">
                  💬
                </div>
                <div className="flex-1 max-w-[80px] h-[2px] bg-gradient-to-r from-white/10 via-primary to-white/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-4 h-full bg-white shadow-[0_0_10px_white] animate-[pulse-move_2s_linear_infinite]"></div>
                </div>
                <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(139,92,246,0.4)] z-10">
                  ⚙️
                </div>
                <div className="flex-1 max-w-[80px] h-[2px] bg-gradient-to-r from-white/10 via-secondary to-white/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-4 h-full bg-white shadow-[0_0_10px_white] animate-[pulse-move_2s_linear_infinite_0.5s]"></div>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl shadow-lg">
                  📈
                </div>
              </div>
              
              <p className="text-slate-400">Sincronização ininterrupta do WhatsApp até o painel final do relatório de receita. Simples assim.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
