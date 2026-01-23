
import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const AnalyzingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 90 ? prev + Math.random() * 15 : prev));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[70] bg-white flex flex-col items-center justify-center p-8 text-center space-y-6 animate-in fade-in duration-300">
      <div className="relative">
        <Loader2 className="w-16 h-16 text-amber-500 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] font-bold text-amber-700">{Math.floor(progress)}%</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-2xl font-serif font-bold text-stone-800">Processando sua Avaliação...</h2>
        <p className="text-stone-500">Alinhando seu perfil ao Método Dra. Alexandra Araújo</p>
      </div>

      <div className="w-full max-w-xs h-1 bg-stone-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-amber-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <p className="text-xs text-amber-600 font-bold uppercase tracking-widest italic">Personalizando seu protocolo de beleza...</p>
    </div>
  );
};

export default AnalyzingScreen;
