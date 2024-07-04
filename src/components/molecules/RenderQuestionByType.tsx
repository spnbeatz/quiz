import React from "react";
import { QuestionRadio } from "./QuestionRadio";
import { QuestionMultiple } from "./QuestionMultiple";
import { QuestionSort } from "./QuestionSort";
import { QuestionFill } from "./QuestionFill";
import { Question as QuestionInterface, Answer } from "@/interfaces/questionsInterfaces";

interface SwitchInterface {
    index: number,
    item: QuestionInterface,
    summary: boolean,
    handleResult: (answerValue: number, questionIndex: number, type: string, sortedList?: Answer[], choiceIndex?: number) => void,

}

export const RenderQuestionByType:React.FC<SwitchInterface> = ({index, item, summary, handleResult}) => {
    switch(item.typ){
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
        case "multi":
            return (
                <QuestionMultiple
                    question={item}
                    key={index}
                    index={index}
                    answers={item.answers}
                    summary={summary} 
                    handleResult={handleResult}
                />
            )
        case "sort":
            return (
                <QuestionSort
                    question={item}
                    key={index}
                    index={index}
                    answers={item.answers}
                    summary={summary}
                    handleResult={handleResult}

                />
            )
        case "fill":
            return (
                <QuestionFill
                    question={item}
                    key={index}
                    index={index}
                    answers={item.answers}
                    summary={summary}
                    handleResult={handleResult}
                />
            )
        default:
            return <></>
    }
}