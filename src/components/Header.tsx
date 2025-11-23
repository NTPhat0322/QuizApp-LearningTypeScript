type Props = {
  score: number;
};

export const QuestionHeader = ({ score }: Props) => {
  return (
    <div className="header">
      <h4 className="score">Score: {score}</h4>
      <p>Loading...</p>
    </div>
  );
};
