import React from "react";
import { List, Fish, PieChart, StatsChart, EllipsisVertical, HardwareChip, AddCircle, InformationCircle } from "react-ionicons";

interface IconType {
    name: string,
    size: "xs" | "sm" | "md" | "lg" | "huge" | undefined,
    color: string
}

export const Icon:React.FC<IconType> = ({name, size, color}) => {

    const getSize = (size: string | undefined) => {
        switch (size) {
            case "xs": return "12px"
            case "sm": return "15px"
            case "md": return "18px"
            case "lg": return "25px"
            case "huge": return "40px"
            default: return "18px"
        }
    }

    switch (name) {
        case "list": return <List width={getSize(size)} height={getSize(size)} color={color} />
        case "fish": return <Fish width={getSize(size)} height={getSize(size)} color={color} />
        case "pie-chart": return <PieChart width={getSize(size)} height={getSize(size)} color={color} />
        case "stats-chart": return <StatsChart width={getSize(size)} height={getSize(size)} color={color} />
        case "elipsis-vertical": return <EllipsisVertical width={getSize(size)} height={getSize(size)} color={color} />
        case "hardware-chip": return <HardwareChip width={getSize(size)} height={getSize(size)} color={color} />
        case "add-circle": return <AddCircle width={getSize(size)} height={getSize(size)} color={color} />
        case "list": return <List width={getSize(size)} height={getSize(size)} color={color} />
        case "info": return <InformationCircle width={getSize(size)} height={getSize(size)} color={color} />
        default: return <div />
            
    }
}