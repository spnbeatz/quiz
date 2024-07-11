import { SubjectType } from "@/data/config"
import React, { useEffect, useState } from "react";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import { Icon } from "../atoms/getIcon";
import {Progress} from "@nextui-org/progress";
import subjects from "@/data/subjects.json";
import "animate.css"
import { CardImage } from "../atoms/cardImages";
import { CardHeader } from "./CardHeader";
import { ProgressBar } from "../atoms/ProgressBar";


interface SubjectCardProps {
    id: string,
    index:number,
    navigate: (to: string) => void,
    animationClass: string
}

interface SubjectDataType {
    id: string;
    name: string;
    image: string;
    icon: string;
    topics: string[]
}

export const SubjectCard:React.FC<SubjectCardProps> = ({id, index, navigate, animationClass}) => {
    const [ data, setData ] = useState<SubjectDataType>();

    useEffect(()=>{
        const foundData = subjects.find((item) => item.id === id);
        if(foundData) {
            setData(foundData);
        }
    },[])

    return (
        <div 
            className={`h-full w-1/4 bg-gray-200 shadow-md rounded-lg flex flex-col justify-between items-center overflow-hidden relative hover:brightness-150 hover:scale-105 duration-200 ease-in ${animationClass}`}
            style={{
                animationDuration: "200ms",
                animationDelay: (index * 0.1).toString() + "s"
            }}
            onClick={()=>navigate(`/learn/${id}`)}
        >
            <div className="h-full flex items-center justify-center aspect-square overflow-hidden absolute">
                <CardImage name={data?.image} />
            </div>
            <CardHeader 
                name={data ? data.name : ""} 
                icon={data ? data.icon : ""} 
                endContent={(
                    <Dropdown placement="right-start">
                        <DropdownTrigger>
                            <div className="cursor-pointer">
                                <Icon name="elipsis-vertical" size="md" color="white" />
                            </div>
                            
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="new">New file</DropdownItem>
                            <DropdownItem key="copy">Copy link</DropdownItem>
                            <DropdownItem key="edit">Edit file</DropdownItem>
                            <DropdownItem key="delete" className="text-danger" color="danger">
                            Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                )}
            />
            <div className="flex flex-col justify-start items-center w-full h-full p-4 z-10">
                <div className="w-full flex flex-col items-start justify-center p-2 rounded-md bg-black/70 backdrop:blur-md text-gray-100">
                    <p className="text-sm font-semibold">
                        Ostatni temat
                    </p>
                    <p className="text-xs">Ekonomia - Wprowadzenie do ekonomii</p>
                </div>
            </div>
            <div className="w-full h-20 p-4 z-10 flex flex-col justify-end prigress-gradient">
                <ProgressBar label="Twój postęp" value={35} />
            </div>
        </div>
    )
}