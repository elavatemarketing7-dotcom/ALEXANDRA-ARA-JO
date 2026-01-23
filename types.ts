
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

export enum AppState {
  INITIAL_CHOICE = 'INITIAL_CHOICE',
  QUIZ = 'QUIZ',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT',
  MAIN_SITE = 'MAIN_SITE'
}

export interface QuizAnswers {
  [key: number]: string;
}
