import React from "react";
import ekonomiaImage from "@/assets/ekonomia_image.jpg";

interface CardImageType {
    name: string | undefined,
    className?: string | undefined
}

export const CardImage:React.FC<CardImageType> = ({ name, className }) => {
    switch(name){
        case "ekonomia": 
            return <img src={ekonomiaImage} className={`${className ? className : "h-full"}`}/>
        default: return <div/>
    }
}