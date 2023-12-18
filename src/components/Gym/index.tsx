import RequiredMaskIcon from "@/assets/images/required-mask.png"
import RecommendedMaskIcon from "@/assets/images/recommended-mask.png"
import RecommendedTowelIcon from "@/assets/images/recommended-towel.png"
import RequiredTowelIcon from "@/assets/images/required-towel.png"
import PartialFountainIcon from "@/assets/images/partial-fountain.png"
import ForbiddenFountainIcon from "@/assets/images/forbidden-fountain.png"
import ForbiddenLockerRoomIcon from "@/assets/images/forbidden-lockerroom.png"
import RequiredLockerRoomIcon from "@/assets/images/required-lockerroom.png"
import PartialLockerRoomIcon from "@/assets/images/partial-lockerroom.png"
import Rule from "../Rule"
import { StaticImageData } from "next/image"

const icons: any = {
    "recommended-mask": RecommendedMaskIcon,
    "required-mask": RequiredMaskIcon,
    "recommended-towel": RecommendedTowelIcon,
    "required-towel": RequiredTowelIcon,
    "partial-fountain": PartialFountainIcon,
    "partial-lockerroom": PartialLockerRoomIcon,
    "allowed-lockerroom": RequiredLockerRoomIcon,
    "not_allowed-fountain": ForbiddenFountainIcon,
    "closed-lockerroom": ForbiddenLockerRoomIcon
}

type IGym = {
    title: string;
    content: string;
    opened: boolean;
    mask?: string;
    towel?: string;
    fountain?: string;
    locker_room?: string;
    schedules: Schedule[];
}

type Schedule = {
    weekdays: string;
    hour: string;
}

export default function Gym({
    title,
    content,
    opened,
    mask,
    towel,
    fountain,
    locker_room,
    schedules,
}: IGym) {
    return (
        <div className="
          bg-[#F5F5F5]
            w-[350px]
            h-auto
            border-2
            border-[#808080]
            rounded-md
            p-3
            grid
            gap-[5px]
            mt-5
        ">
            <p className={`
            ${opened ? "text-[#2FC022]" : "text-[#dc0a17]"}              
              font-GothamBold
            `}>{
                    opened ? "Aberto" : "Fechado"
                }</p>
            <p className="
                text-[1.5rem]
                font-GothamBold
                text-[#333333]
            "
                dangerouslySetInnerHTML={{ __html: title }}
            ></p>
            <div className="
                w-full
                pt-2
                pb-2
                border-b-2
                border-[#808080]
                font-GothamLight
            ">
                <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
            <div className="flex pt-2 pb-2">
                {
                    mask ?
                        <Rule text="" icon={icons[`${mask}-mask`] as StaticImageData} />
                        : <></>
                }
                {
                    towel ?
                        <Rule text="" icon={icons[`${towel}-towel`] as StaticImageData} />
                        : <></>
                }
                {
                    fountain ?
                        <Rule text="" icon={icons[`${fountain}-fountain`] as StaticImageData} />
                        : <></>
                }
                {
                    locker_room ?
                        <Rule text="" icon={icons[`${locker_room}-lockerroom`] as StaticImageData} />
                        : <></>
                }
            </div>
            <div className="grid grid-cols-2">
                {
                    schedules?.map((schedule: Schedule, index) => {
                        return (
                            <div className="p-2" key={`schedule-${index}`}>
                                <p className="text-[1.5rem] font-GothamBold text-[#333333]">{schedule.weekdays}</p>
                                <p className="font-GothamLight">{schedule.hour}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}