import { MouseEventHandler } from "react";

export type IButton = {
    text: string;
    className: string;
    onClick?: MouseEventHandler
}

export default function Button({
    text,
    className,
    onClick
}: IButton) {
    return (
        <button onClick={onClick} className={`
        text-black
        rounded-md
        ${className}
        font-GothamBold
        p-3
        `}>
            {text.toUpperCase()}
        </button>
    )
}