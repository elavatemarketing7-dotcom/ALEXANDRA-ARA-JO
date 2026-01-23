
import React from 'react';
import { EXPERT_NAME, IMAGES, WHATSAPP_URL } from '../constants';
import { QuizAnswers } from '../types';
import { Check, Send, ArrowRight, MessageCircle } from 'lucide-react';

interface ResultPageProps {
  onContinue: () => void;
  answers: QuizAnswers;
}

const ResultPage: React.FC<ResultPageProps> = ({ onContinue, answers }) => {
  const handleWhatsAppAssessment = () => {
    const text = encodeURIComponent(`Olá Dra. Alexandra! Acabei de completar o quiz no site. Meus resultados indicaram perfil compatível! Respostas: ${JSON.stringify(answers)}`);
    window.open(`${WHATSAPP_URL}&text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[80] bg-white overflow-y-auto flex flex-col items-center">
      <div className="w-full max-w-md min-h-full flex flex-col justify-center p-4 md:p-6">
        {/* Compact Card Container with Higher Emphasis on Hero */}
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in slide-in-from-bottom-10 duration-700 border border-amber-100 flex flex-col relative">
          
          {/* Prominent Hero Image Section */}
          <div className="relative h-64 md:h-80 flex-shrink-0 group">
            <img 
              src={IMAGES.main} 
              alt={EXPERT_NAME} 
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Visual Overlay for text readability on top if needed, though we use a badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            
            <div className="absolute top-5 left-5">
              <span className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-full text-xs font-bold shadow-2xl animate-pulse uppercase tracking-widest border border-amber-400/30">
                <Check className="w-4 h-4" /> Perfil Compatível
              </span>
            </div>

            {/* Floating Name Overlay for Authority */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <div className="inline-block bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-100 shadow-lg">
                <p className="text-[10px] font-bold text-amber-800 uppercase tracking-[0.2em]">Dra. {EXPERT_NAME}</p>
              </div>
            </div>
          </div>

          <div className="px-6 pb-8 pt-2 text-center space-y-5 flex-grow">
            <div className="space-y-1">
              <h1 className="text-3xl font-serif font-bold text-stone-900 leading-tight">
                Paciente Ideal Identificada.
              </h1>
              <p className="text-stone-600 text-[13px] leading-relaxed max-w-[280px] mx-auto">
                Seu perfil está <span className="text-amber-700 font-bold uppercase">100% alinhado</span> ao Método de naturalidade da Dra. Alexandra.
              </p>
            </div>

            {/* Action Buttons Group - Optimized Tighter Spacing */}
            <div className="grid gap-3 pt-1">
              <button 
                onClick={handleWhatsAppAssessment}
                className="group relative w-full flex items-center justify-center gap-2.5 p-4 bg-amber-600 text-white rounded-2xl font-bold shadow-xl hover:bg-amber-700 transition-all duration-300 active:scale-[0.98] btn-glow uppercase text-[11px] tracking-widest"
              >
                <Send className="w-4 h-4" />
                <span>1- ENVIAR AVALIAÇÃO À DRA</span>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                </span>
              </button>

              <button 
                onClick={() => window.open(WHATSAPP_URL, '_blank')}
                className="w-full flex items-center justify-center gap-2.5 p-4 bg-white border-2 border-amber-200 text-amber-700 rounded-2xl font-bold hover:bg-amber-50 transition-all duration-300 active:scale-[0.98] uppercase text-[11px] tracking-widest shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                2- CHAMAR NO WHATSAPP AGORA
              </button>

              <button 
                onClick={onContinue}
                className="w-full flex items-center justify-center gap-2 p-2 bg-transparent text-stone-400 rounded-xl font-bold hover:text-amber-700 transition-all duration-300 uppercase text-[9px] tracking-[0.3em]"
              >
                3- CONTINUAR NO SITE
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Secondary info below card */}
        <div className="mt-6 flex flex-col items-center space-y-2 opacity-80">
          <p className="text-[9px] text-amber-700 font-bold uppercase tracking-[0.4em] text-center">
            Excelência Dra. Alexandra Araújo
          </p>
          <div className="w-12 h-0.5 bg-amber-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
