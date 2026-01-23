
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, EXPERT_NAME, IMAGES } from '../constants';
import { QuizAnswers } from '../types';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface QuizOverlayProps {
  onComplete: (answers: QuizAnswers) => void;
  onClose: () => void;
}

const QuizOverlay: React.FC<QuizOverlayProps> = ({ onComplete, onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const handleOptionSelect = (option: string) => {
    const newAnswers = { ...answers, [QUIZ_QUESTIONS[step].id]: option };
    setAnswers(newAnswers);
    
    if (step < QUIZ_QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const progress = ((step + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-start p-4 md:p-6 overflow-y-auto animate-in fade-in slide-in-from-bottom-10 duration-500">
      
      {/* More Compact Floating Expert Avatar */}
      <div className="flex flex-col items-center gap-2 mt-4 mb-6">
        <div className="w-16 h-16 rounded-full border-2 border-amber-500 p-0.5 bg-white shadow-lg">
          <img 
            src={IMAGES.main} 
            alt={EXPERT_NAME} 
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700 leading-none">Dra. {EXPERT_NAME}</p>
          <p className="text-[8px] text-stone-400 uppercase tracking-widest mt-0.5">Avaliação Digital</p>
        </div>
      </div>

      <div className="w-full max-w-md space-y-6">
        {/* Progress Bar - Slimmer */}
        <div className="w-full h-1 bg-stone-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-amber-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="space-y-4 text-center">
          <span className="text-[9px] font-bold px-2.5 py-0.5 bg-amber-50 text-amber-700 rounded-full uppercase tracking-tighter inline-block">
            Etapa {step + 1} de {QUIZ_QUESTIONS.length}
          </span>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-stone-800 leading-tight">
            {QUIZ_QUESTIONS[step].question}
          </h2>
        </div>

        {/* Grid Gap Reduced for Compactness */}
        <div className="grid gap-2.5">
          {QUIZ_QUESTIONS[step].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionSelect(option)}
              className="group w-full flex items-center justify-between p-4 bg-white border-2 border-stone-100 rounded-2xl hover:border-amber-200 hover:bg-amber-50/30 active:scale-[0.98] transition-all duration-200 text-left shadow-sm"
            >
              <span className="text-stone-700 text-sm font-medium group-hover:text-amber-800 leading-snug">{option}</span>
              <CheckCircle2 className="w-4 h-4 text-transparent group-hover:text-amber-500 transition-colors flex-shrink-0 ml-3" />
            </button>
          ))}
        </div>

        {/* Bottom Navigation Tighter */}
        <div className="pt-2 flex justify-between items-center text-stone-400">
          {step > 0 ? (
            <button 
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-1.5 text-xs font-semibold hover:text-amber-700 transition-colors py-2 pr-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Voltar
            </button>
          ) : <div />}
          <button 
            onClick={onClose}
            className="text-[9px] font-bold uppercase tracking-[0.15em] hover:text-stone-600 py-2 pl-4"
          >
            Sair do Quiz
          </button>
        </div>
      </div>

      {/* Subtle Quote at Bottom */}
      <div className="mt-auto pt-8 pb-4 opacity-40">
        <p className="text-[9px] text-center font-serif italic text-stone-500">"Sua beleza em boas mãos."</p>
      </div>
    </div>
  );
};

export default QuizOverlay;
