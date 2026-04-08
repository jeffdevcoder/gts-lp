import React from 'react';

export default function Footer() {
  return (
    <footer className="h-full w-full flex flex-col border-t border-white/10 bg-black/40 py-8 lg:py-12" id="contato">
      <div className="container mx-auto px-6 max-w-7xl h-full flex flex-col justify-between">
        
        <div className="flex-1 flex flex-col justify-center items-center">
          {/* CTA Banner inside footer section */}
          <div className="glass-panel p-8 md:p-12 md:py-16 rounded-[2.5rem] text-center max-w-4xl mx-auto w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para elevar o patamar do seu atendimento?</h2>
            <p className="text-slate-400 mb-10 text-base md:text-xl max-w-2xl mx-auto">
              Delegue funções robóticas para a Inteligência Artificial e faça os humanos focarem no crescimento real do seu negócio.
            </p>
            <a href="https://wa.me/5521972706086" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(139,92,246,0.4)]">
              Falar com o Especialista Agora
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex justify-start items-center">
          <p className="text-slate-500 text-xs md:text-sm text-left">
            &copy; 2026 GrobaTech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
