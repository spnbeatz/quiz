import DefaultLayout from "@/layouts/default";
import { QuestionsGroup } from "@/components/organisms/QuestionsGroup";
import questions from '@/data/ekonomia.json';
import { getRandomElements } from "@/helpers/shuffle";
import { useEffect, useState } from "react";
import { Question } from "@/interfaces/questionsInterfaces";
import {Spinner} from "@nextui-org/spinner";

export default function IndexPage() {

  const [shuffledQuestions, setShuffledQuestions] = useState<Question[] | null>(null);

  useEffect(() => {
    const shuffled = getRandomElements(questions, 20)
    setShuffledQuestions(shuffled);
  },[]);

  return (
    <DefaultLayout>
      {shuffledQuestions !== null ? 
        <QuestionsGroup questions={shuffledQuestions}/> 
        : 
        <div className="w-full flex h-full items-center justify-center"><Spinner /></div>
      }
    </DefaultLayout>
  );
}
