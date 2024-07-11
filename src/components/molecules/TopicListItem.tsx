import React from "react";

interface TopicItemProps {
    title: string
}

export const TopicListItem:React.FC<TopicItemProps> = ({title}) => {
    return (
        <div className="w-full h-full flex justify-between items-center px-4 bg-black/50">
            <p className="text-white text-xs">{title}</p>
        </div>
    )
}