import React from "react";
import { Icon } from "../atoms/getIcon";

interface CardHeaderProps {
    icon: string,
    name: string,
    endContent?: React.ReactNode,
    withBackground?: boolean,
    color?: string
}

export const CardHeader:React.FC<CardHeaderProps> = ({icon, name, endContent, withBackground = true, color="white"}) => {
    return (
        <div className={`${withBackground ? "title-gradient" : ""} w-full z-10 uppercase flex justify-between items-center gap-4 px-4 pb-8 pt-4`}>
        <div className="flex flex-row items-center justify-center gap-4">
            <Icon name={icon} size="md" color={color} />
            <h5 
                className={`font-semibold text-md`}
                style={{
                    color: color
                }}
            >{name}</h5>
        </div>
        <div>
            {endContent}
        </div>
    </div>
    )
}