import React, { useRef, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Answer } from "@/interfaces/questionsInterfaces";
import { motion } from "framer-motion";
import { getEmptyImage } from "react-dnd-html5-backend";


const ItemType = "QUE_ITEM";

interface DragItem {
  index: number;
}

export const QuestionSortItem = ({
  index,
  answer,
  moveItem,
  summary
}: {
  index: number;
  answer: Answer;
  moveItem: (dragIndex: number, hoverIndex: number) => void,
  summary: boolean
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag, preview] = useDrag<DragItem, void, { isDragging: boolean }>({
    type: ItemType,
    item: { index },
    previewOptions: {
        captureDraggingState: true,
         // Zachowuje stan przeciągania podczas przechwytywania podglądu
      },
    
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: () => !summary
  });

  const [, drop] = useDrop<DragItem, void>({
    accept: ItemType,
    hover: (item, monitor) => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      
      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset?.y ?? 0) - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    <motion.div
      ref={ref}
      className={`w-full h-auto outline-dashed outline-1 outline-gray-600 rounded-md duration-300`}
      style={{ cursor: "move" }}
      layout // Enables layout animations
      initial={{ opacity: 1, x: -50 }}
      animate={{ opacity: isDragging ? 1 : 1, x: 0 }}  // Adjust opacity based on dragging state
      exit={{ opacity: 0, x: 50 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      <p className="text-sm p-4">{answer.answer}</p>
    </motion.div>
  );
};

