import DefaultLayout from "@/layouts/default";
import { QuestionsGroup } from "@/components/organisms/QuestionsGroup";
import temat from '@/data/ekonomia/tematy/temat_1.json';
import { getRandomElements } from "@/helpers/shuffle";
import { useEffect, useState } from "react";
import { Question } from "@/interfaces/questionsInterfaces";
import { LoadingSpinner } from "@/components/atoms/loadingSpinner";
import { Button } from "@nextui-org/button";
import { useNavigate, useParams } from "react-router-dom";
import { chooseData } from "@/helpers/routeParams";

export default function QuizPage() {

  const navigate = useNavigate();

  const [shuffledQuestions, setShuffledQuestions] = useState<Question[] | null>(null);

  const { topicId } = useParams();

  useEffect(() => {
    const data = chooseData(topicId);
    if(data){
      console.log(data, "data do shuffled")
      const shuffled = getRandomElements(data, 5);
      setShuffledQuestions(shuffled);
    }
    

    
  },[]);

  useEffect(()=> {
    console.log(shuffledQuestions, 'changed question');
  },[shuffledQuestions]);

  const goToSummaryPage = () => {
    navigate('/summary', { state: { answers: shuffledQuestions}});
  }

  return (
    <DefaultLayout>
      {shuffledQuestions !== null ? (
        <>
        <QuestionsGroup questions={shuffledQuestions} setQuestion={setShuffledQuestions} summary={false}/> 
        <Button 
          size="lg"
          variant="ghost"
          className="mt-10 text-sm text-gray-600"
          onClick={() => goToSummaryPage()}
        >
          Sprawdź wynik
        </Button>
        </>
        
        
      )
        : 
        <LoadingSpinner />
      }
    </DefaultLayout>
  );
}
