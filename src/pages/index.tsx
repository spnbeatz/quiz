import DefaultLayout from "@/layouts/default";
import { QuestionsGroup } from "@/components/organisms/QuestionsGroup";
import questions from '@/data/ekonomia.json';
import { getRandomElements, shuffleAnswers } from "@/helpers/shuffle";
import { useEffect, useState } from "react";
import { Question } from "@/interfaces/questionsInterfaces";
import {Spinner} from "@nextui-org/spinner";

export default function IndexPage() {

  const [shuffledQuestions, setShuffledQuestions] = useState<Question[] | null>(null);
  const [answerResults, setAnswerResults] = useState<string[]>([
    "false", "false", "false", "false", "false",
    "false", "false", "false", "false", "false",
    "false", "false", "false", "false", "false",
    "false", "false", "false", "false", "false"

  ])

  useEffect(()=> {
    console.log(answerResults, 'answer results');
  },[answerResults]);


  useEffect(() => {
    const shuffled = getRandomElements(questions, 20);
    setShuffledQuestions(shuffled);
  },[]);

  return (
    <DefaultLayout>
      {shuffledQuestions !== null ? 
        <QuestionsGroup questions={shuffledQuestions} answerResults={answerResults} setAnswerResults={setAnswerResults}/> 
        : 
        <div className="w-full flex h-full items-center justify-center"><Spinner /></div>
      }
    </DefaultLayout>
  );
}
