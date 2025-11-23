export interface Question {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  answers: string[];
  correct_answer: string;
  incorrect_answers: string[];
}

export interface UserAnswer {
  question: string;
  correctAnswer: string;
  answer: string;
  correct: boolean;
}
