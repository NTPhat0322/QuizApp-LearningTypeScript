type Props = {
  score: number;
  gameOver: boolean;
  loading: boolean;
  startQuiz: () => void;
};

export const QuestionHeader = ({
  score,
  gameOver,
  loading,
  startQuiz,
}: Props) => {
  return (
    <div className="header">
      {gameOver && <button onClick={startQuiz}>Start quiz</button>}
      {loading && <p>Loading...</p>}
      {!gameOver && !loading && <p className="score">Score: {score}</p>}
    </div>
  );
};
