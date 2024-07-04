import React, { useState, useRef, useEffect } from "react";
import { FillDragItem } from "./FillDragItem";
import { useDrop } from "react-dnd";
import { Answer, Question as QuestionInterface } from "@/interfaces/questionsInterfaces";

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
            handleResult(item.answer.index || -1, questionIndex, "fill", undefined, index);
            // Aktualizuj stan droppedItem
            setDroppedItem(item.answer);
            onDropItem(item.answer, false);

        }
    });
    drop(ref);

    useEffect(()=>{
        console.log(index, 'index of droop');
    },[])

    const returnItem = () => {
        if(droppedItem){
            onDropItem(droppedItem, true);
            setDroppedItem(null);
            handleResult(-1, questionIndex, "fill", undefined, index);
        }

    }

    const getValidBg = () => { 
        if(question.choices[index] == index - 1) return "bg-green-200"
        if(question.choices[index] !== index - 1) return "bg-red-200"
    }

/*     const getSummaryValue = () => {
        const filtered = question.answers.filter((item) => item.index === question.choices[index] - 1);
        console.log(filtered[0].answer, 'filtered');
        if (filtered.length > 0) {
            return filtered[0].answer;
        }
        return ''; // Dodaj odpowiednią obsługę, gdy nie znajdziesz pasującego elementu
    } */
    

    return (
        <div ref={ref} className={`h-8 w-28 outline-dotted outline-1 outline-gray-300 rounded-md inline-block mx-4 ${summary && getValidBg()}`}>
            {summary ? 
            (
                <div 
                    className={`w-28 h-8 flex items-center justify-center ${droppedItem ? "bg-gray-200" : "text-xs text-transparent"} outline-1 outline-gray-300 outline rounded-md`}
                >
{/*                     {getSummaryValue()} */}
                </div>
            ) : (
                <div 
                    className={`w-28 h-8 flex items-center justify-center ${droppedItem ? "bg-gray-200" : "text-xs text-transparent"} outline-1 outline-gray-300 outline rounded-md`}
                    onClick={()=>returnItem()}
                >
                    {droppedItem ? droppedItem.answer : "upuść tutaj"}
                </div>
            )}

        </div>
    )
}