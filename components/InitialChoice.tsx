
import React from 'react';
import { EXPERT_NAME, IMAGES } from '../constants';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';

interface InitialChoiceProps {
  onStartQuiz: () => void;
  onDirectSite: () => void;
}

const InitialChoice: React.FC<InitialChoiceProps> = ({ onStartQuiz, onDirectSite }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-amber-100/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-stone-100 rounded-full blur-3xl"></div>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-amber-100 animate-in fade-in zoom-in duration-700">
        <div className="relative h-64">
          <img 
            src={IMAGES.main} 
            alt={EXPERT_NAME}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent flex flex-col justify-end p-6 text-white">
            <h2 className="text-2xl font-serif font-bold tracking-tight uppercase">Dra. {EXPERT_NAME}</h2>
            <p className="text-amber-400 font-medium tracking-widest text-xs uppercase">Biomédica Esteta</p>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-2 text-center">
            <h3 className="text-xl font-bold text-stone-800">Sua jornada de beleza começa aqui.</h3>
            <p className="text-stone-500 text-sm">Escolha como deseja ser atendida hoje:</p>
          </div>

          <div className="space-y-4">
            <button 
              onClick={onStartQuiz}
              className="w-full group flex items-center justify-between p-4 bg-amber-600 text-white rounded-2xl hover:bg-amber-700 transition-all duration-300 active:scale-[0.98] shadow-lg shadow-amber-900/20"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="bg-white/20 p-2 rounded-xl">
                  <Sparkles className="w-5 h-5 text-amber-100" />
                </div>
                <div>
                  <p className="font-bold">Avaliação Personalizada</p>
                  <p className="text-xs text-amber-100/80">Quiz interativo em 1 minuto</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={onDirectSite}
              className="w-full flex items-center justify-between p-4 bg-stone-50 text-stone-700 border border-stone-200 rounded-2xl hover:bg-stone-100 transition-all duration-300 active:scale-[0.98]"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="bg-stone-200 p-2 rounded-xl">
                  <ArrowRight className="w-5 h-5 text-stone-500" />
                </div>
                <div>
                  <p className="font-bold">Acessar Site Direto</p>
                  <p className="text-xs text-stone-500">Explorar fotos e resultados</p>
                </div>
              </div>
            </button>
            
            <a 
              href="https://api.whatsapp.com/send/?phone=5531998346472&text=Olá Dra. Alexandra, gostaria de tirar algumas dúvidas!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-amber-700 border border-amber-200 rounded-2xl hover:bg-amber-50 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialChoice;
