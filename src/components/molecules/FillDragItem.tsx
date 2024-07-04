import React, {useRef} from "react";
import { useDrag } from "react-dnd";
import { Answer } from "@/interfaces/questionsInterfaces";

interface DragItem {
    answer: Answer
}

export const FillDragItem = ({answer, index}: {answer: Answer, index: number}) => {

    const ref = useRef<HTMLDivElement>(null);

    const [{isDragging}, drag] = useDrag<DragItem, void, { isDragging: boolean }>({
        type: "fillItem",
        item: { answer },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
          }),

    })

    drag(ref);

    return (
        <div ref={ref} 
            className={`w-32 h-8 flex items-center justify-center bg-gray-200 
            outline-1 outline-gray-300 outline rounded-md ${isDragging && "hidden"}`}
            style={{cursor: isDragging ? "grabbing" : "grab"}}
        >
            {answer.answer}
        </div>
    )
}