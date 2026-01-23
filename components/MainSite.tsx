
import React, { useEffect } from 'react';
import { 
  EXPERT_NAME, 
  EXPERT_ROLE, 
  IMAGES, 
  WHATSAPP_URL, 
  INSTAGRAM_URL, 
  DIFFERENTIATORS, 
  RESULTS_GALLERY, 
  STEPS, 
  BASTIDORES_GALLERY,
  FEEDBACK_GALLERY
} from '../constants';
import { 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Play, 
  CheckCircle, 
  ChevronRight,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const MainSite: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Ticker / Logradouro */}
      <div className="bg-white text-stone-800 py-3 overflow-hidden whitespace-nowrap border-b border-amber-100 sticky top-0 z-40 shadow-sm">
        <div className="animate-ticker">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center space-x-10 px-4">
              <button onClick={() => scrollToSection('sobre')} className="text-[10px] uppercase tracking-widest font-bold hover:text-amber-600 transition-colors">SOBRE MIM</button>
              <span className="text-amber-200">/</span>
              <button onClick={() => scrollToSection('resultados')} className="text-[10px] uppercase tracking-widest font-bold hover:text-amber-600 transition-colors">PROVA VISUAL</button>
              <span className="text-amber-200">/</span>
              <button onClick={() => scrollToSection('metodo')} className="text-[10px] uppercase tracking-widest font-bold hover:text-amber-600 transition-colors">HARMONIZAÇÃO DE <span className="text-amber-600">❤️</span></button>
              <span className="text-amber-200">/</span>
              <button onClick={() => scrollToSection('endereco')} className="text-[10px] uppercase tracking-widest font-bold hover:text-amber-600 transition-colors">LOCALIZAÇÃO</button>
              <span className="text-amber-200">/</span>
              <button onClick={() => window.open(WHATSAPP_URL, '_blank')} className="text-[10px] uppercase tracking-widest font-bold hover:text-amber-600 transition-colors">CONTATO</button>
              <span className="text-amber-200">/</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col justify-end overflow-hidden">
        <img 
          src={IMAGES.main} 
          alt={EXPERT_NAME} 
          className="absolute inset-0 w-full h-full object-cover object-top brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
        
        <div className="relative z-10 p-6 md:p-12 max-w-4xl mx-auto w-full space-y-6 pb-24">
          <div className="space-y-2 animate-in slide-in-from-bottom-10 duration-700">
            <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase">
              Excelência em Estética
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-stone-900 leading-[1.1]">
              Dra. <br/><span className="text-amber-600 italic">{EXPERT_NAME}</span>
            </h1>
            <p className="text-lg md:text-2xl text-stone-700 font-light max-w-lg leading-relaxed">
              Realçando sua beleza com técnica refinada e o propósito de manter sua <span className="text-amber-700 font-bold italic">essência intacta</span>.
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-4 animate-in slide-in-from-bottom-20 duration-1000">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              className="group flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 text-white py-6 px-8 rounded-2xl text-lg font-bold transition-all duration-300 shadow-2xl shadow-amber-900/30 active:scale-[0.98] btn-glow uppercase tracking-widest"
            >
              <MessageCircle className="w-6 h-6" />
              AGENDAR CONSULTA
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-center text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em]">
              Exclusividade & Naturalidade
            </p>
          </div>
        </div>
      </section>

      {/* Video Highlight */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="aspect-[9/16] max-w-[340px] mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(184,134,11,0.2)] border-8 border-stone-50 relative transform hover:scale-[1.02] transition-transform duration-500">
              <video 
                src={IMAGES.video} 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors pointer-events-none"></div>
              <div className="absolute bottom-8 left-6 right-6 p-5 glass rounded-2xl flex items-center gap-4">
                <div className="bg-amber-600 p-2.5 rounded-full shadow-lg">
                  <Play className="w-4 h-4 text-white fill-current" />
                </div>
                <p className="text-[10px] font-bold text-stone-800 tracking-[0.2em] uppercase">A Arte do Cuidado</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight italic">
              "A beleza real é aquela que realça quem você é, sem mascarar sua identidade."
            </h2>
            <p className="text-stone-600 text-xl font-light leading-relaxed">
              Utilizo técnicas de última geração para entregar resultados que são ao mesmo tempo <span className="text-amber-700 font-bold">impactantes e invisíveis</span>.
            </p>
            <div className="pt-8 grid grid-cols-2 gap-6 border-t border-amber-100">
              <div className="flex items-center gap-3 text-amber-800 font-bold uppercase text-[10px] tracking-widest">
                <CheckCircle className="w-4 h-4 text-amber-500" />
                <span>Anatomia Única</span>
              </div>
              <div className="flex items-center gap-3 text-amber-800 font-bold uppercase text-[10px] tracking-widest">
                <CheckCircle className="w-4 h-4 text-amber-500" />
                <span>Protocolo VIP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Sou Eu */}
      <section id="sobre" className="py-32 bg-stone-50 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-4 border-2 border-amber-200 rounded-[3rem] -z-10 translate-x-4 translate-y-4"></div>
              <img 
                src={IMAGES.tertiary} 
                alt="Dra. Alexandra Araújo" 
                className="w-full rounded-[2.5rem] shadow-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <span className="text-amber-600 font-bold tracking-[0.3em] text-[10px] uppercase">Sobre a Dra. Alexandra</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-[1.2]">Expertise Refinada com Olhar Clínico</h2>
              <p className="text-stone-600 text-lg leading-relaxed font-light italic">
                Minha formação como Biomédica Esteta é guiada por um compromisso inabalável com a segurança e a harmonia facial.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-amber-100 p-3 rounded-2xl">
                    <Sparkles className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 uppercase text-sm tracking-widest">Biomédica Esteta de ❤️</p>
                    <p className="text-sm text-stone-500 font-light mt-1">Paixão por transformar vidas através da autoestima.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-amber-100 p-3 rounded-2xl">
                    <CheckCircle className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 uppercase text-sm tracking-widest">Excelência Técnica</p>
                    <p className="text-sm text-stone-500 font-light mt-1">Sempre um passo à frente com as melhores tecnologias.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Reais - AUTO SLIDING */}
      <section id="resultados" className="py-32 bg-white overflow-hidden">
        <div className="space-y-16">
          <div className="text-center space-y-4 px-6">
            <span className="text-amber-600 font-bold tracking-[0.4em] text-[10px] uppercase">Portfólio de Luxo</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">Resultados Reais</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="overflow-hidden">
            <div className="animate-slider-fast">
              {[...RESULTS_GALLERY, ...RESULTS_GALLERY].map((img, idx) => (
                <div key={idx} className="w-[280px] md:w-[350px] aspect-square flex-shrink-0 px-2">
                  <div className="w-full h-full relative overflow-hidden rounded-3xl shadow-sm border-2 border-transparent hover:border-amber-200 transition-all duration-500">
                    <img 
                      src={img} 
                      alt={`Resultado ${idx + 1}`} 
                      className="w-full h-full object-cover transition-all duration-700" 
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-[10px] text-amber-800 uppercase tracking-[0.3em] font-bold italic px-6">
            *Resultados individuais baseados na anatomia de cada paciente.
          </p>
        </div>
      </section>

      {/* Por Que Confiar */}
      <section id="metodo" className="py-32 bg-stone-950 text-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
              A Ciência por trás da <span className="text-amber-500 italic">Beleza</span>.
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {DIFFERENTIATORS.map((item, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="text-amber-500">{item.icon}</div>
                  <h3 className="font-bold text-lg uppercase tracking-widest">{item.title}</h3>
                  <p className="text-stone-400 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-amber-600/10 blur-[100px] rounded-full"></div>
            <img 
              src={IMAGES.secondary} 
              alt="Dra. Alexandra Araújo" 
              className="rounded-[3rem] shadow-[0_0_50px_rgba(184,134,11,0.2)] relative z-10"
            />
            <div className="absolute -bottom-10 -left-10 p-10 glass rounded-[2.5rem] text-stone-900 shadow-2xl max-w-[320px] z-20">
              <p className="text-lg font-bold leading-tight italic font-serif">
                "Minha maior satisfação é ver você sorrir para o espelho com confiança renovada."
              </p>
              <p className="text-3xl font-signature text-amber-700 mt-6">Alexandra Araújo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="text-amber-600 font-bold tracking-[0.4em] text-[10px] uppercase">O Processo Dra. Alexandra</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">Sua Experiência Exclusiva</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative p-10 bg-stone-50 rounded-[2.5rem] border border-stone-100 hover:border-amber-200 transition-all duration-500 hover:shadow-xl group">
              <div className="w-14 h-14 bg-amber-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg mb-8 group-hover:scale-110 transition-transform">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4 uppercase tracking-widest">{step.title}</h3>
              <p className="text-stone-600 leading-relaxed font-light">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* O Que Dizem as Pacientes - AUTO SLIDING */}
      <section className="py-32 bg-stone-50 overflow-hidden">
        <div className="space-y-20">
          <div className="text-center space-y-4 px-6">
            <h2 className="text-4xl font-serif font-bold text-stone-900 italic">Vozes da Satisfação</h2>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />)}
            </div>
          </div>
          
          <div className="overflow-hidden">
            <div className="animate-slider-slow">
              {[...FEEDBACK_GALLERY, ...FEEDBACK_GALLERY].map((img, idx) => (
                <div key={idx} className="w-[300px] md:w-[400px] flex-shrink-0 px-4">
                  <div className="bg-white p-3 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-amber-50 transform hover:-translate-y-2 transition-all duration-500">
                    <img src={img} alt={`Feedback ${idx}`} className="w-full rounded-[1.5rem]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bastidores e Cuidados - AUTO SLIDING */}
          <div className="pt-24 space-y-12">
            <h3 className="text-3xl font-serif font-bold text-center uppercase tracking-widest text-stone-400">Ambiente de Cuidado</h3>
            <div className="overflow-hidden">
              <div className="animate-slider-fast">
                {[...BASTIDORES_GALLERY, ...BASTIDORES_GALLERY].map((img, idx) => (
                  <div key={idx} className="w-[200px] md:w-[250px] aspect-[4/5] flex-shrink-0 px-2">
                    <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl border-4 border-white hover:border-amber-200 transition-colors">
                      <img src={img} alt="Bastidores" className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-40 px-6 relative overflow-hidden bg-white text-stone-900">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/pinstripe.png')]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <h2 className="text-5xl md:text-8xl font-serif font-bold leading-[1.1]">
            Pronta para a sua <br/><span className="text-amber-600 italic underline decoration-amber-200">melhor versão</span>?
          </h2>
          <p className="text-stone-500 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
            Sua beleza merece o cuidado de quem entende que o luxo está na <span className="font-bold text-amber-700 uppercase tracking-widest text-base">naturalidade absoluta</span>.
          </p>
          <div className="flex flex-col items-center gap-8 pt-8">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              className="group flex items-center justify-center gap-4 bg-amber-600 hover:bg-amber-700 text-white py-7 px-16 rounded-[2rem] text-xl font-bold transition-all duration-300 shadow-2xl shadow-amber-900/40 active:scale-[0.98] uppercase tracking-[0.2em]"
            >
              <MessageCircle className="w-7 h-7" />
              Saber Mais Agora
            </a>
            <p className="text-[10px] font-bold text-amber-700 animate-pulse uppercase tracking-[0.5em]">
              Vagas Exclusivas Disponíveis
            </p>
          </div>
        </div>
      </section>

      {/* Onde nos Encontrar / Mapa */}
      <section id="endereco" className="py-32 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-amber-700 font-bold uppercase text-[10px] tracking-[0.3em]">
              <MapPin className="w-5 h-5" /> Nosso Espaço
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">Sofisticação no Coração de BH</h2>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              Ambiente planejado para oferecer uma experiência de relaxamento e segurança total durante seus procedimentos.
            </p>
            <div className="p-8 bg-white rounded-[2rem] shadow-sm border border-stone-200 flex items-start gap-6">
              <div className="bg-amber-100 p-4 rounded-2xl">
                <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0" />
              </div>
              <div>
                <p className="font-bold text-stone-900 uppercase tracking-widest text-sm mb-1">Localização:</p>
                <p className="text-stone-500 text-sm font-light">Consulte nossa recepção digital para o endereço completo e agendamento de horário.</p>
              </div>
            </div>
            <div className="flex gap-6 pt-6">
              <a href={INSTAGRAM_URL} target="_blank" className="flex items-center gap-3 py-4 px-6 bg-white border border-stone-200 rounded-2xl hover:border-amber-300 transition-all shadow-sm">
                <Instagram className="w-5 h-5 text-amber-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Siga @dra.alexandraraujo</span>
              </a>
            </div>
          </div>
          <div className="h-[500px] rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border-[12px] border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15004.83296155605!2d-43.940643!3d-19.9216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU1JzE3LjciUyA0M8KwNTYnMjYuMyJX!5e0!3m2!1sen!2sbr!4v1620000000000!5m2!1sen!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-amber-50 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <p className="font-signature text-5xl text-amber-700">Alexandra Araújo</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em]">
            <span className="text-stone-600 underline decoration-amber-200">{EXPERT_ROLE}</span>
            <span className="hidden md:block text-amber-200">|</span>
            <span>Belo Horizonte - MG</span>
            <span className="hidden md:block text-amber-200">|</span>
            <span>CRBM Ativo</span>
          </div>
          <p className="text-[10px] text-stone-300 max-w-md mx-auto leading-relaxed">
            © {new Date().getFullYear()} Dra. Alexandra Araújo. Todos os direitos reservados. 
            Beleza com propósito e ciência.
          </p>
        </div>
      </footer>

      {/* Floating CTA (Mobile Only) */}
      <div className="md:hidden fixed bottom-8 left-8 right-8 z-50">
        <a 
          href={WHATSAPP_URL} 
          target="_blank" 
          className="flex items-center justify-center gap-3 bg-amber-600 text-white py-5 rounded-[1.5rem] font-bold shadow-[0_10px_40px_rgba(184,134,11,0.4)] active:scale-[0.98] btn-glow uppercase tracking-widest text-xs"
        >
          <MessageCircle className="w-6 h-6" />
          Falar com a Dra.
        </a>
      </div>
    </div>
  );
};

export default MainSite;
