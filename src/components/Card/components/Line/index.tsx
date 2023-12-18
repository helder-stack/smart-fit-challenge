export type ILine = {
    children: React.ReactNode
    className?: string
}

export default function Line({
    children,
    className
}: ILine) {
    return (
        <div className={`
            border-b-2
            border-[#808080]
            w-auto
            h-auto
            flex
            justify-between
            pb-2
            font-GothamBook
            ${className}
        `}>
            {children}
        </div>
    )
}