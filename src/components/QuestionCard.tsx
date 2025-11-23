import type { Question } from "../types";

type Props = {
  index: number;
  questionObject: Question;
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const QuestionCard = ({ index, questionObject, checkAnswer }: Props) => {
  return (
    <div className="question-card">
      <h5>Question: {index + 1}</h5>
      <h4 className="question">{questionObject.question}</h4>
      <div className="answers">
        {questionObject.answers.map((answer, i) => (
          <button key={i} value={answer} onClick={checkAnswer}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};
