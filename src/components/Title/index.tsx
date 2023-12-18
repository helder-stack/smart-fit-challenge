type ITitle = {
    text: string
}

export default function Title({ text }: ITitle) {
    return (
        <div
            className="
            w-[250px] relative 
            pb-5
            before:absolute
            before:content-['']
            before:w-[40%]
            before:h-[10px]
            before:bg-[#333333]
            before:bottom-0
            font-GothamBold
            "
        >
            <h1 className="text-[2rem] text-[#333333] leading-[45px]">{text.toUpperCase()}</h1>
        </div>
    )
}