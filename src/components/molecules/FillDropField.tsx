import React, { useState, useRef, useEffect } from "react";
import { FillDragItem } from "./FillDragItem";
import { useDrop } from "react-dnd";
import { Answer, Question as QuestionInterface } from "@/interfaces/questionsInterfaces";
import {Tooltip} from "@nextui-org/tooltip";

interface DragItem {
    answer: Answer
}

export const FillDropField = (
    {index, questionIndex, handleResult, onDropItem, summary, question}: 
    {
        index: number,
        questionIndex: number,
        handleResult: (answerValue: number, questionIndex: number, type: string, sortedList?: Answer[], choiceIndex?: number) => void,
        onDropItem: (item: any, push: boolean) => void,
        summary: boolean,
        question: QuestionInterface
    }) => {

    const ref = useRef<HTMLDivElement>(null);

    const [droppedItem, setDroppedItem] = useState<Answer | null>(null);

    const [, drop] = useDrop<DragItem, void>({
        accept: 'fillItem',
        drop: (item: DragItem) => {
            console.log(item.answer.index, 'item.answer.index');
            // Wywołaj handleResult bezpośrednio z item.answer.index
            console.log(questionIndex, 'question index');
            console.log(index, 'index');
            handleResult(item.answer.index, questionIndex, "fill", undefined, index);
            // Aktualizuj stan droppedItem
            setDroppedItem(item.answer);
            onDropItem(item.answer, false);

        }
    });
    drop(ref);

    useEffect(()=>{
        console.log(droppedItem, 'dropped item');
    },[droppedItem])

    const returnItem = () => {
        if(droppedItem && !summary){
            onDropItem(droppedItem, true);
            setDroppedItem(null);
            handleResult(-1, questionIndex, "fill", undefined, index);
        }

    }

    const getValidBg = () => {
        console.log(question.choices[index], "index - 1")
        if(question.choices[index] == index - 1) return "bg-green-200"
        if(question.choices[index] !== index - 1) return "bg-red-200"
    }

    const findElement = (index: number) => {
        const foundItem = question.answers.find((item) => item.index === index);
        console.log(foundItem, 'found item')
        return foundItem ? foundItem.answer : "pusty"
    }



    

    return (
        <div ref={ref} className={`h-8 w-32 outline-dotted outline-1 outline-gray-300 rounded-md inline-block mx-4 ${summary && getValidBg()}`}>
            <Tooltip 
                content={summary ? "Poprawna odpowiedź: " + findElement(index - 1) + (getValidBg() == "bg-green-200" ? "  \u2714" : "  \u2716") : ""} 
                isDisabled={!summary} closeDelay={0}
                radius="sm"
                size="lg"
                color="default"
                shadow="md"
                showArrow={true}
                className="text-xs font-medium"
                classNames={{content: "px-4 py-2"}}
            >  
                <div 
                    className={`w-32 h-8 flex items-center justify-center ${droppedItem ? "bg-gray-200 shadow-md cursor-pointer" : ""} outline-1 outline-gray-300 outline rounded-md`}
                    onClick={()=>returnItem()}
                >
                    {summary ? (
                        <p className={`
                            ${findElement(question.choices[index]) === "pusty" ? "text-xs" : "font-normal"}
                            ${getValidBg() == "bg-green-200" ? "text-lime-950" : "text-red-950"}
                        `}>{findElement(question.choices[index])}</p>
                    ): droppedItem ? (
                        <p>{droppedItem.answer}</p>
                    ) : (
                        <p className="text-transparent">upuść tutaj</p>
                    )}
                </div>
            </Tooltip>    
        </div>
    )
}