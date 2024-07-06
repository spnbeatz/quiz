import React, {useState} from "react";
import { Answer, Question as QuestionInterface } from "@/interfaces/questionsInterfaces";
import { FillDragItem } from "./FillDragItem";
import { FillDropField } from "./FillDropField";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { QuestionTitle } from "../atoms/QuestionTitle";

export const QuestionFill = ({
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
    handleResult: (answerValue: number, questionIndex: number, type: string, sortedList?: Answer[], choiceIndex?: number) => void,
    summary: boolean
}) => {

    const [ dragElements, setDragElements ] = useState(answers);

    const onDropItem = (item: any, push: boolean) => {
        let elements = [...dragElements]
        if(push){
            elements.push(item);
        } else {    
            elements.splice(elements.indexOf(item), 1);
        }
        setDragElements(elements);

    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="bg-gray-100 p-5 rounded-md text-sm w-full shadow-lg gap-5 flex flex-col">
                <QuestionTitle content={`${index + 1}. Przeciągnij elementy w odpowiednie pola.`}/>
                <div className="w-full leading-10">
                    {Array.isArray(question.question) &&
                        question.question.map((item, ix) => {
                            return (
                                <React.Fragment key={`${item}_${ix}`}>
                                    <div className="inline break-words font-normal">{item}</div>
                                    {ix < question.question.length - 1 && 
                                    
                                    <FillDropField 
                                        index={ix + 1}
                                        questionIndex={index}
                                        handleResult={handleResult}
                                        onDropItem={onDropItem}
                                        summary={summary}
                                        question={question}
                                    />}
                                </React.Fragment>
                    )})}
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    {!summary && dragElements.map((item) => {
                        return <FillDragItem answer={item} key={item.answer}/>
                    })}
                </div>

            </div>
        </DndProvider>

    )
}