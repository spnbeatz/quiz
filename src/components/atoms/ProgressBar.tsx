import React from "react";
import { Progress } from "@nextui-org/progress";

interface ProgressBarProps {
    label?: string,
    value: number,
    baseClass?: string
}

export const ProgressBar: React.FC<ProgressBarProps> = ({label, value, baseClass}) => {
    return (
        <Progress
            size="md"
            radius="sm"
            classNames={{
                base: `${baseClass ? baseClass : "w-full"}`,
                track: "drop-shadow-md border border-default bg-white",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-gray-100 text-xs",
                value: "text-gray-100 text-xs",
            }}
            label={label ? label : ""}
            value={value}
            showValueLabel={label ? true : false}
        />
    )
}