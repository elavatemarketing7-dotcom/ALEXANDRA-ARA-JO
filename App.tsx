
import React, { useState, useEffect } from 'react';
import { AppState, QuizAnswers } from './types';
import MainSite from './components/MainSite';
import QuizOverlay from './components/QuizOverlay';
import ResultPage from './components/ResultPage';
import InitialChoice from './components/InitialChoice';
import AnalyzingScreen from './components/AnalyzingScreen';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppState>(AppState.INITIAL_CHOICE);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const handleStartQuiz = () => setCurrentStep(AppState.QUIZ);
  const handleDirectSite = () => setCurrentStep(AppState.MAIN_SITE);
  
  const handleQuizComplete = (finalAnswers: QuizAnswers) => {
    setAnswers(finalAnswers);
    setCurrentStep(AppState.ANALYZING);
    // Simulate processing
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
