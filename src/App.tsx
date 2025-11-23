import { useState } from "react";
import "./App.css";
import type { UserAnswer, Question } from "./types";
import { QuestionHeader } from "./components/Header";
import { QuestionCard } from "./components/QuestionCard";

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h3 className="app-name">Quiz App</h3>
      <QuestionHeader score={score} />
      <QuestionCard />
    </div>
  );
}

export default App;
