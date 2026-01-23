
import React, { useState } from 'react';
import { AppState, QuizAnswers } from './types.ts';
import MainSite from './components/MainSite.tsx';
import QuizOverlay from './components/QuizOverlay.tsx';
import ResultPage from './components/ResultPage.tsx';
import InitialChoice from './components/InitialChoice.tsx';
import AnalyzingScreen from './components/AnalyzingScreen.tsx';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppState>(AppState.INITIAL_CHOICE);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const handleStartQuiz = () => setCurrentStep(AppState.QUIZ);
  const handleDirectSite = () => setCurrentStep(AppState.MAIN_SITE);
  
  const handleQuizComplete = (finalAnswers: QuizAnswers) => {
    setAnswers(finalAnswers);
    setCurrentStep(AppState.ANALYZING);
    setTimeout(() => {
      setCurrentStep(AppState.RESULT);
    }, 3000);
  };

  const handleGoToSite = () => setCurrentStep(AppState.MAIN_SITE);

  return (
    <div className="relative min-h-screen">
      {currentStep === AppState.INITIAL_CHOICE && (
        <InitialChoice 
          onStartQuiz={handleStartQuiz} 
          onDirectSite={handleDirectSite} 
        />
      )}

      {currentStep === AppState.QUIZ && (
        <QuizOverlay 
          onComplete={handleQuizComplete} 
          onClose={() => setCurrentStep(AppState.INITIAL_CHOICE)}
        />
      )}

      {currentStep === AppState.ANALYZING && (
        <AnalyzingScreen />
      )}

      {currentStep === AppState.RESULT && (
        <ResultPage 
          onContinue={handleGoToSite} 
          answers={answers}
        />
      )}

      {currentStep === AppState.MAIN_SITE && (
        <MainSite />
      )}
    </div>
  );
};

export default App;
