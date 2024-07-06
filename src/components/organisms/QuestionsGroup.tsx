import React from "react";
import { Question as QuestionInterface, Answer } from "@/interfaces/questionsInterfaces";
import { RenderQuestionByType } from "../molecules/RenderQuestionByType";


export const QuestionsGroup = ({
    questions, 
    setQuestion,
    summary
}:{
    questions:QuestionInterface[],
    setQuestion:React.Dispatch<React.SetStateAction<QuestionInterface[] | null>>,
    summary: boolean
}) => {

    const handleResult = (
        answerValue: number, 
        questionIndex: number, 
        type: string, 
        sortedList?: Answer[],
        choiceIndex?: number
    ) => {
        if(!summary){
            const updatedQuestions = questions.map((question, index) => {
                if (index === questionIndex) {
                  const questionCopy = {...question};
                  if (type === "radio") {
                    return { ...question, choices: [answerValue] };
                  } else if (type === "multi") {
                    
                    if(questionCopy.choices.includes(answerValue)){
                        questionCopy.choices.splice(questionCopy.choices.indexOf(answerValue),1);
                    } else {
                        questionCopy.choices.push(answerValue);
                    }
                    return questionCopy;
                  } else if (type === "sort") {
                    return { ...question, answers: sortedList ? sortedList : question.answers };
                  } else if (type === "fill"){
                    if(choiceIndex){
                        questionCopy.choices[choiceIndex] = answerValue;
                        return questionCopy;
                    }
                    
                  }
                }
                return question;
            });
            setQuestion(updatedQuestions);
/*             if(type == "radio"){
                const updatedRadioQuestions = questions.map((question, index) =>
                    index === questionIndex ? { ...question, choices: [answerValue] } : question
                );
                setQuestion(updatedRadioQuestions);
            } else if (type == "multi"){
                const updatedMultiQuestions = questions.map((question, index) => {
                    if (index === questionIndex) {
                        const questionCopy = {...question};
                        if(questionCopy.choices.includes(answerValue)){
                            questionCopy.choices.splice(questionCopy.choices.indexOf(answerValue),1);
                        } else {
                            questionCopy.choices.push(answerValue);
                        }
                        return questionCopy;
                    }
                    return question;
                }) 
                setQuestion(updatedMultiQuestions);
            } else if (type === "sort"){
                const updatedSortQuestions = questions.map((question, index) => {
                    if(index === questionIndex){
                        return { ...question, answers: sortedList ? sortedList : question.answers }
                    } else return question
                    
                })
                setQuestion(updatedSortQuestions);
            } else if (type === "fill"){
                
            } */

        }

    }

    return (
        <div className="flex flex-col items-center justify-start sm:w-full md:w-3/4 lg:w-1/2 h-full gap-5">
            {questions.map((item: QuestionInterface, index: number) => {
                return (
                    <RenderQuestionByType
                        key={index}
                        index={index}
                        item={item}
                        summary={summary}
                        handleResult={handleResult}
                    />
                );
            })}
        </div>
    )
}