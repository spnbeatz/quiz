import React from "react";
import { ProgressBar } from "../atoms/ProgressBar";


interface TopicItemProps {
    title: string,
    index: number
}

export const TopicListItem:React.FC<TopicItemProps> = ({title, index}) => {
    return (
        <div className={`w-full h-14 flex text-black justify-between items-center px-4 hover:bg-gray-200/80 duration-250 rounded-md`}>

            <p className="text-xs w-1/3">{(index + 1) + ". " + title}</p>
            <ProgressBar value={15} baseClass="w-2/5"/>
        </div>
    )
}