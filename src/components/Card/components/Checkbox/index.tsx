import { MouseEventHandler } from "react";

type ICheckbox = {
    label: string;
    isSelected: boolean
    onClick: MouseEventHandler
}

export default function Checkbox({ label, isSelected, onClick }: ICheckbox) {
    return (
        <div className="
        flex
        items-center
        ">
            <div className={`
                rounded-sm
                w-[25px]
                h-[25px]
                border-2
                border-[#808080]
                cursor-pointer
                ${isSelected ? "bg-[#FFB612]" : ''}
            `}
                onClick={onClick}
            ></div>
            <p className="
                text-lg
                pl-2
            ">{label}</p>
        </div>
    )
}