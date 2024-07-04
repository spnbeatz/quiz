import React, { useCallback, useEffect, useState } from "react";
import { DndProvider} from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Question as QueestionInterface, Answer } from "@/interfaces/questionsInterfaces";
import { QuestionSortItem } from "./QuestionSortItem";
import update from "immutability-helper";
import { AnimatePresence, motion } from "framer-motion";
import {Badge} from "@nextui-org/badge";

const ItemType = "QUE_ITEM";

export const QuestionSort = ({
  index,
  question,
  answers,
  summary,
  handleResult
}: {
  index: number;
  question: QueestionInterface;
  answers: Answer[];
  summary: boolean;
  handleResult: (answerValue: number, questionIndex: number, type: string, sortedList?: Answer[]) => void;
}) => {
  const [items, setItems] = useState(answers);

  const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
    const draggedItem = items[dragIndex];
    setItems(update(items, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, draggedItem],
      ],
    }));
  }, [items]);

  useEffect(() => {
    handleResult(-1, index, question.typ, items);
  }, [items]);


  return (
    <div className="bg-gray-100 p-5 rounded-md font-semibold text-sm w-full shadow-lg gap-5">
      <div className="w-full flex flex-col items-center justify-start gap-3 top">
        <DndProvider backend={HTML5Backend}>
          <AnimatePresence initial={false}>
          {items.map((item, i) => {
            const visibleIndex = (item.index ?? 0) + 1;

            return (
                <motion.div
                    key={item.answer}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    layout
                >
                    <Badge 
                        content={visibleIndex} 
                        size="lg" 
                        classNames={{badge: '-translate-y-1/2 top-1/2 right-0 text-xs font-normal'}}
                        color={item.index == i ? "success" : "danger"} 
                        isInvisible={!summary}
                        showOutline={false}
                    >
                        {/* Komponent QuestionSortItem musi być wewnątrz Badge */}
                        <QuestionSortItem
                            index={i}
                            answer={item}
                            moveItem={moveItem}
                            summary={summary}
                        />
                    </Badge>
                </motion.div>
            );
        })}

          </AnimatePresence>
        </DndProvider>
      </div>
    </div>
  );
};
