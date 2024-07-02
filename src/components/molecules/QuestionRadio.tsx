import React, { useEffect, useState } from "react";
import { Question as QuestionInterface, Answer } from "@/interfaces/questionsInterfaces";
import {RadioGroup, Radio} from "@nextui-org/radio";

export const QuestionRadio = (
    {
        question, 
        index, 
        answers, 
        handleResult,
        summary
    }
        : 
    {
        question: QuestionInterface, 
        index:number, 
        answers: Answer[],
        handleResult: (answerValue: number, index: number, type: string) => void,
        summary: boolean
    }) => {

    const getValidBg = (item: any, i: number) => {
        if(item.valid == "true") return "bg-green-200";
        if(question.choices.length > 0){
            if(question.choices[0] === i && item.valid === "true") return "bg-green-200";
            if(question.choices[0] === i && item.valid === "false") return "bg-red-200";
        }

        return "";
    }

    const getDefaultValues = () => {
        if (question.choices.length > 0) {
            return question.answers[question.choices[0]].answer || "";
        }
        return "";
    }
    

    return (
        <RadioGroup 
            label={`${index + 1}. ${question.question}`} 
            className="bg-gray-100 p-5 rounded-md font-semibold text-sm w-full shadow-lg gap-5"
            classNames={{label: "text-sm text-black"}}
            color={"default"}
            isDisabled={summary}
            defaultValue={summary ? getDefaultValues() : undefined}
        >
            {answers && answers.map((item, i)=> {
                return (
                    <Radio 
                        value={item.answer}
                        key={i}
                        className="items-start mb-2"
                        
                        classNames={
                            {
                                base: `
                                    ${summary ? getValidBg(item, i) : ""}
                                    
                                    `,
                                label: `text-xs font-normal `,
                            }
                        }
                        onClick={() => {
                            handleResult(i, index, question.typ);
                        }}
                    >{item.answer}</Radio>
                )
            })}
        </RadioGroup>

    )
}