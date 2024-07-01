import React from "react";
import {CheckboxGroup, Checkbox} from "@nextui-org/checkbox";
import { Question as QuestionInterface, Answer } from "@/interfaces/questionsInterfaces";

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
    return (
        <CheckboxGroup 
            label={`${index + 1}. ${question.question} (pytanie wielokrotnego wyboru)`} 
            className="bg-gray-100 p-5 rounded-md font-semibold text-sm w-full shadow-lg gap-5"
            classNames={{label: "text-sm text-black"}}
            color={"default"}
            isDisabled={summary}
/*             defaultValue={summary ? question.answers[question.choice].answer : null} */
        >
            {answers && answers.map((item, i)=> {
                return (
                    <Checkbox 
                        value={item.answer}
                        key={i}
                        className="items-start mb-2"
                        
                        classNames={
                            {
/*                                 base: `
                                    ${summary ? getValidBg(item, i) : ""}
                                    
                                    `, */
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