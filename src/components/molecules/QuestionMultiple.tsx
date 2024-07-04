import React from "react";
import {CheckboxGroup, Checkbox} from "@nextui-org/checkbox";
import { Question as QuestionInterface, Answer } from "@/interfaces/questionsInterfaces";
import { QuestionTitle } from "../atoms/QuestionTitle";

export const QuestionMultiple = (    {
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

    const getDefaultValues = () => {
        let val = [];
        if(question.choices.length > 0){
            for(let i = 0; i < question.choices.length; i++){
                val.push(question.answers[question.choices[i]].answer);
            }
            return val;
        } else return [];

    }

    const getValidBg = (item: any, i: number) => {
        if(item.valid == "true") return "bg-green-200";
        if(question.choices.length > 0){
            if(question.choices.includes(i) && item.valid === "true") return "bg-green-200";
            if(question.choices.includes(i) && item.valid === "false") return "bg-red-200";
        }

        return "";
    }

    return (
        <CheckboxGroup 
            label={<QuestionTitle content={`${index + 1}. ${question.question} (pytanie wielokrotnego wyboru)`}/>} 
            className="bg-gray-100 p-5 rounded-md font-semibold text-sm w-full shadow-lg gap-5"
            classNames={{label: "text-sm text-black"}}
            color={"default"}
            isDisabled={summary}
            defaultValue={summary ? getDefaultValues() : undefined}
        >
            {answers && answers.map((item, i)=> {
                return (
                    <Checkbox 
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
                    >{item.answer}</Checkbox>
                )
            })}
        </CheckboxGroup>
    )
}