import React from "react";
import { Question as QuestionInterface } from "@/interfaces/questionsInterfaces";

export const Question = ({question}: {question: QuestionInterface }) => {
    return (
        <p>{question.question}</p>
    )
}