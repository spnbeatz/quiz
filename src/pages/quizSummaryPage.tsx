import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LoadingSpinner } from "@/components/atoms/loadingSpinner";
import DefaultLayout from "@/layouts/default";
import { QuestionsGroup } from "@/components/organisms/QuestionsGroup";
import { Question as QuestionInterface } from "@/interfaces/questionsInterfaces";

export const QuizSummaryPage = () => {

    const location = useLocation();

    const [ points, setPoints ] = useState<number>(0);
    const [answers, setAnswers] = useState<QuestionInterface[] | null>(null);

    const routeData = location.state?.answers || null;

    useEffect(() => {
        setAnswers(routeData);
    }, [routeData]);
    

    useEffect(()=>{
        if(answers != null) {
            let resultPoints = 0;

            for(let i = 0; i < answers.length; i++){
                if(answers[i].choice != -1){
                    if(answers[i].answers[answers[i].choice].valid == "true"){
                        resultPoints += 1;
                    }
                }
            }
    
            setPoints(resultPoints);
        }

    },[answers]);


    return (
        <DefaultLayout>
            {answers && points ? (
                <>
                <p>Zdobyłeś {points} punktów na {answers.length}</p>
                <QuestionsGroup questions={answers} setQuestion={setAnswers} summary={true} />
                </>
                
            ) : (
                <LoadingSpinner />
            )}
        </DefaultLayout>
    )
}