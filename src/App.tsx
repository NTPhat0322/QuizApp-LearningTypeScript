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

  return (
    <div>
      <h3 className="app-name">Quiz App</h3>
      <QuestionHeader
        startQuiz={startQuiz}
        gameOver={gameOver}
        score={score}
        loading={loading}
      />
      <QuestionCard />
    </div>
  );
}

export default App;
