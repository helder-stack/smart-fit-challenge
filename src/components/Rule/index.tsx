import Image, { StaticImageData } from "next/image"

type IRule = {
    icon: StaticImageData
    text: string
}

export default function Rule({ icon, text }: IRule) {
    return (
        <div className="w-auto h-auto flex flex-col items-center p-2">
            <Image src={icon} alt="" width={60} height={60} />
            {text ?
                <p className="text-black font-GothamBlack">{text}</p>
                : <></>
            }
        </div>
    )
}