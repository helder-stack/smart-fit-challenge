import Image, { StaticImageData } from "next/image";
import Rule from "../Rule";

export type IRecomendation = {
    name: string;
    required: boolean
    recommended: boolean
    partial: boolean
    forbidden: boolean;
    close: boolean;
    free: boolean;
    requiredIcon?: StaticImageData
    recommendedIcon?: StaticImageData
    partialIcon?: StaticImageData
    forbiddenIcon?: StaticImageData
    closeIcon?: StaticImageData
    freeIcon?: StaticImageData
}

export default function Recomendation({
    name,
    required,
    requiredIcon,
    partial,
    partialIcon,
    recommended,
    recommendedIcon,
    close,
    closeIcon,
    forbidden,
    forbiddenIcon,
    free,
    freeIcon
}: IRecomendation) {
    return (
        <div className="
            flex
            flex-col
            items-center
            p-2
        ">

            <p className="text-black w-full text-center font-GothamBold p-2">{name}</p>

            <div className="w-auto p-1 flex">
                {
                    free ?
                        <Rule icon={freeIcon as StaticImageData} text="Liberado" />
                        : <></>
                }
                {
                    required ?
                        <Rule icon={requiredIcon as StaticImageData} text="Obrigatório" />
                        : <></>
                }
                {
                    partial ?
                        <Rule icon={partialIcon as StaticImageData} text="Parcial" />
                        : <></>
                }
                {
                    recommended ?
                        <Rule icon={recommendedIcon as StaticImageData} text="Recomendado" />
                        : <></>
                }
                {
                    close ?
                        <Rule icon={closeIcon as StaticImageData} text="Fechado" />
                        : <></>
                }
                {
                    forbidden ?
                        <Rule icon={forbiddenIcon as StaticImageData} text="Proibido" />
                        : <></>
                }
            </div>
        </div>
    )
}