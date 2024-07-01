import React, { useEffect } from "react";
import { QuestionRadio } from "../molecules/QuestionRadio";
import { Question as QuestionInterface } from "@/interfaces/questionsInterfaces";

export const QuestionsGroup = ({
    questions, 
    setQuestion,
    summary
}:{
    questions:QuestionInterface[],
    setQuestion:React.Dispatch<React.SetStateAction<QuestionInterface[] | null>>,
    summary: boolean
}) => {

    const handleResult = (answerValue: number, questionIndex: number) => {
        if(!summary){
            const updatedQuestions = questions.map((question, index) =>
                index === questionIndex ? { ...question, choice: answerValue } : question
            );
            setQuestion(updatedQuestions);
        }

    }

    const renderQuestionByType = (typ: string | undefined, item: QuestionInterface, index: number) => {
        switch(typ){
            case "radio":
                return (
                    <QuestionRadio 
                        question={item} 
                        key={index} 
                        index={index} 
                        answers={item.answers}
                        summary={summary} 
                        handleResult={handleResult}
                    />
                )
            default:
                break;
        }
    }

    return (
        <div className="flex flex-col items-center justify-start sm:w-full md:w-3/4 lg:w-1/2 h-full gap-5">
            {questions.map((item: QuestionInterface, index: number) => {
                return renderQuestionByType(item.typ, item, index);
            })}
        </div>
    )
}