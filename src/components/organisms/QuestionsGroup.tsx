import React from "react";
import { Question } from "../molecules/Question";
import { Question as QuestionInterface } from "@/interfaces/questionsInterfaces";



export const QuestionsGroup = ({questions}: {questions:QuestionInterface[]}) => {
    return (
        <div className="flex flex-col items-center justify-start overflow-y-scroll w-full h-screen">
            {questions.map((item: QuestionInterface, index: number) => {
                return (
                    <Question question={item} key={index}/>
                )
            })}
        </div>
    )
}