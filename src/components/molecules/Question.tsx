import React, { useEffect, useState } from "react";
import { Question as QuestionInterface, Answer } from "@/interfaces/questionsInterfaces";
import {RadioGroup, Radio} from "@nextui-org/radio";
import { shuffleAnswers } from "@/helpers/shuffle";

export const Question = (
    {
        question, 
        index, 
        answers, 
        handleResult
    }
        : 
    {
        question: QuestionInterface, 
        index:number, 
        answers: Answer[],
        handleResult: (answerValue: string, index: number) => void
    }) => {

    const [selectedAnswer, setSelectedAnswer] = useState<string>("");


    return (
        <RadioGroup 
            label={`${index + 1}. ${question.question}`} 
            className="sm:w-1/3 bg-gray-100 p-5 rounded-md font-semibold text-sm w-full shadow-lg gap-5"
            classNames={{label: "text-sm text-black"}}
            color={"default"}

        >
            {answers && answers.map((item)=> {
                return (
                    <Radio 
                        value={item.answer}
                        className="items-start mb-2"
                        classNames={
                            {
                                label: `text-xs font-normal ${item.valid == "true" ? "bg-green-100" : ""}`,
                            }
                        }
                        onClick={() => {
                            handleResult(item.valid, index);
                        }}
                    >{item.answer}</Radio>
                )
            })}
        </RadioGroup>

    )
}