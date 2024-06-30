import React from "react";
import { Question } from "../molecules/Question";
import { Question as QuestionInterface } from "@/interfaces/questionsInterfaces";
import { shuffleAnswers } from "@/helpers/shuffle";



export const QuestionsGroup = ({
    questions, 
    answerResults, 
    setAnswerResults
}:{
    questions:QuestionInterface[],
    answerResults: string[],
    setAnswerResults:React.Dispatch<React.SetStateAction<string[]>>
}) => {

    const handleResult = (answerValue: string, index: number) => {
        const resultsToChange = {...answerResults}
        resultsToChange[index] = answerValue;
        setAnswerResults(resultsToChange);
    }

    return (
        <div className="flex flex-col items-center justify-start overflow-y-scroll w-full h-screen gap-5">
            {questions.map((item: QuestionInterface, index: number) => {
                return (
                    <Question 
                        question={item} 
                        key={index} 
                        index={index} 
                        answers={item.answers} 
                        handleResult={handleResult}
                    />
                )
            })}
        </div>
    )
}