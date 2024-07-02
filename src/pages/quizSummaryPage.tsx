import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LoadingSpinner } from "@/components/atoms/loadingSpinner";
import DefaultLayout from "@/layouts/default";
import { QuestionsGroup } from "@/components/organisms/QuestionsGroup";
import { Question as QuestionInterface } from "@/interfaces/questionsInterfaces";

export const QuizSummaryPage = () => {
    const location = useLocation();

    const [points, setPoints] = useState<number>(0);
    const [answers, setAnswers] = useState<QuestionInterface[] | null>(null);

    const routeData = location.state?.answers || null;

    useEffect(() => {
        setAnswers(routeData);
    }, [routeData]);

    useEffect(() => {
        if (answers) {
            let resultPoints = 0;

            for (let i = 0; i < answers.length; i++) {
                if (answers[i].typ === "radio") {
                    if (answers[i].choices.length > 0) {
                        if (answers[i].answers[answers[i].choices[0]].valid === "true") {
                            resultPoints += 1;
                        }
                    }
                } else if (answers[i].typ === "multi") {
                    // Obliczanie liczby poprawnych odpowiedzi
                    const trueResults = answers[i].answers.reduce((count, answer) => answer.valid === "true" ? count + 1 : count, 0);
                
                    const oneAnswerPoint = 1 / trueResults; // Punkt za jedną poprawną odpowiedź
                    console.log(oneAnswerPoint.toFixed(2), 'one answer point');
                    
                    let pointToAdd = 0;
                    let allValid = true;

                    for (let k = 0; k < answers[i].choices.length; k++) {
                        console.log(answers[i].choices[k], 'index');
                        if (answers[i].answers[answers[i].choices[k]].valid === "true") {
                            pointToAdd += oneAnswerPoint;
                        } else {
                            allValid = false;
                            break;
                        }
                    }

                    // Dodajemy punkty tylko, jeśli wszystkie wybrane odpowiedzi są poprawne
                    if (allValid) {
                        resultPoints += pointToAdd;
                    }
                }
            }

            setPoints(resultPoints);
        }
    }, [answers]);

    return (
        <DefaultLayout>
            {answers !== null ? (
                <>
                    <p>Zdobyłeś {points} punktów na {answers.length}</p>
                    <QuestionsGroup questions={answers} setQuestion={setAnswers} summary={true} />
                </>
            ) : (
                <LoadingSpinner />
            )}
        </DefaultLayout>
    );
}
