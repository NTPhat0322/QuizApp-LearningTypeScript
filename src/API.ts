import type { Question } from "./types";

type Props = {
  amount: number;
  difficulty: string;
};

export const fetchQuizQuestions = async ({ amount, difficulty }: Props) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const rs = await fetch(endpoint);
  const data = await rs.json();
  const questions: Question[] = mapToQuestions(data.results);
  return questions;
};

const mapToQuestions = (data: any[]) => {
  const questions: Question[] = data.map((item) => {
    const formattedQuestion: Question = {
      ...item,
      answer: [...item.incorrect_answers, item.correct_answer],
    };
    return formattedQuestion;
  });
  return questions;
};
