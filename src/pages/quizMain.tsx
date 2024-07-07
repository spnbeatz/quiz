import React from "react";
import DefaultLayout from "@/layouts/default";
import { useNavigate } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { SubjectCard } from "@/components/molecules/SubjectCard";

export const QuizMain = () => {
    const navigate = useNavigate();

    return (
        <DefaultLayout>
            <div className="flex flex-row justify-start items-start h-full w-screen gap-6 px-6">
                {siteConfig.subjectItems.map((item) => {
                    return (
                        <SubjectCard />
                    )
                })}
            </div>
            <button type="button" onClick={() => navigate("/quiz/ekonomia_temat_1")}>Ekonomia Temat 1</button>
        </DefaultLayout>
    )
}