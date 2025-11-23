import { useState } from "react";
import "./App.css";
import type { UserAnswer, Question } from "./types";
import { QuestionHeader } from "./components/Header";
import { QuestionCard } from "./components/QuestionCard";
import { fetchQuizQuestions } from "./API";

const TOTAL_QUESTIONS = 10;

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [gameOver, setGameOver] = useState(true);
  const [loading, setLoading] = useState(false);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    try {
      const newQuestions = await fetchQuizQuestions({
        amount: TOTAL_QUESTIONS,
        difficulty: "easy",
      });
      setQuestions(() => newQuestions);
      setIndex(0);
      setScore(0);
      setUserAnswers(() => []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setGameOver(true);
      console.error("Failed to fetch questions:", error);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;
    const correct = questions[index].correct_answer;
    if (correct === answer) setScore((prev) => prev + 1);

    //save user answer object
    const userAnswerObject: UserAnswer = {
      question: questions[index].question,
      correctAnswer: correct,
      answer: answer,
      correct: correct === answer,
    };
    setUserAnswers((prev) => [...prev, userAnswerObject]);

    if (index + 1 === TOTAL_QUESTIONS) {
      resetQuiz();
      return;
    }
    setIndex((prev) => prev + 1);
  };

  const resetQuiz = () => {
    setGameOver(true);
    setQuestions(() => []);
    setIndex(0);
    setScore(0);
    setUserAnswers([]);
  };
  return (
    <div>
      <h3 className="app-name">Quiz App</h3>
      <QuestionHeader
        startQuiz={startQuiz}
        gameOver={gameOver}
        score={score}
        loading={loading}
      />
      {/* cau hoi chi hien khi not game over && not loading && questions.length > 0 */}
      {!gameOver && !loading && questions.length > 0 && (
        <QuestionCard
          questionObject={questions[index]}
          index={index}
          checkAnswer={checkAnswer}
        />
      )}
    </div>
  );
}

export default App;
