import { useState } from "react";
import DefaultLayout from "@/layouts/default";
import { useNavigate } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { SubjectCard } from "@/components/molecules/SubjectCard";
import { SubjectType } from "@/data/config";
import { Icon } from "@/components/atoms/getIcon";
import { user } from "@/data/exampleUser";

export interface SubjectInterface {
    title: string,
    route: string,
    data: SubjectType
}

export const QuizMain = () => {
    const navigate = useNavigate();

    const [ animationClass, setAnimationClass ] = useState("animate-appearance-in");

    const navigateToSubject = (to: string) => {
        setAnimationClass("animate-appearance-out");
        setTimeout(() => {
            navigate(to);
        },400)
    }

    return (
        <DefaultLayout>
            <div className="w-full flex gap-2 mb-2 items-center">
                <p className="big-header">Twoje przedmioty</p>
                
            </div>
            <div className="flex flex-row justify-start items-center h-full w-screen gap-6 px-10">
                {user.subjects.map((item: string, index: number) => {
                    
                    return (
                        <SubjectCard 
                            id={item} 
                            key={item + "subject_card"} 
                            index={index} 
                            navigate={navigateToSubject}
                            animationClass={animationClass}
                        />
                    )
                })}
                <div 
                    className={`h-full w-1/4 bg-gray-200 shadow-md rounded-lg flex flex-col justify-center items-center overflow-hidden relative hover:scale-105 duration-200 ease-in ${animationClass}`}
                    style={{
                        animationDuration: "200ms",
                        animationDelay: (siteConfig.subjectItems.length * 0.1).toString() + "s"
                    }}
                >
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Icon name="add-circle" size="huge" color="gray"/>
                        <p className="text-gray text-md">Dodaj nowy przedmiot</p>
                    </div>
                </div>
            </div>
            <button type="button" onClick={() => navigate("/quiz/topic/1")}>Ekonomia Temat 1</button>
        </DefaultLayout>
    )
}