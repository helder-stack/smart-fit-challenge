'use client'

import Image from "next/image"
import Clock from "@/assets/images/icon-hour.png"
import Line from "./components/Line"
import Radio from "./components/Radio"
import Checkbox from "./components/Checkbox"
import Button from "@/components/Button"
import { useState } from "react"
import axios from "axios"
import useAppData from "@/data/hook/useAppData"

export function Card() {


    const [morningTurn, setMorningTurn] = useState(false)
    const [afternoonTurn, setAfternoonTurn] = useState(false)
    const [nightTurn, setNightTurn] = useState(false)
    const [showClosedLocations, setShowClosedLocations] = useState(false)
    const { locations, setLocations } = useAppData()

    function setTurn(turn: string) {
        setMorningTurn(turn == 'morning')
        setAfternoonTurn(turn == 'afternoon')
        setNightTurn(turn == 'night')
    }

    function clearFilter() {
        setMorningTurn(false)
        setAfternoonTurn(false)
        setNightTurn(false)
        setShowClosedLocations(false)
        setLocations([])
    }

    async function requestLocations() {
        const { data: { locations } } = await axios.get("https://test-frontend-developer.s3.amazonaws.com/data/locations.json")
        const filteredLocations = filterLocations(locations)
        setLocations(filteredLocations)
    }

    function filterLocations(locations: any) {
        if (!showClosedLocations) {
            locations = locations.filter((location: any) => location.opened)
        }
        const filteredLocations = []
        if (!morningTurn && !afternoonTurn && !nightTurn) return locations
        for (const location of locations) {
            const { schedules } = location
            if (schedules) {
                for (const { hour } of schedules) {
                    if (hour.includes("às")) {
                        const closingTime = parseInt(hour.substr(hour.length - 3, 3).replace('h', ''))
                        const openingTime = parseInt(hour.substr(0, 2).replace('h', ''))
                        if ((openingTime >= 6 && closingTime <= 23) && morningTurn) {
                            filteredLocations.push(location)
                            break
                        } else if ((openingTime <= 12 && closingTime <= 23) && afternoonTurn) {
                            filteredLocations.push(location)
                            break
                        } else if ((openingTime <= 18 && closingTime <= 23) && nightTurn) {
                            filteredLocations.push(location)
                            break
                        }
                    }
                }
            }
        }
        return filteredLocations
    }

    return (
        <div className="
            w-full
            p-5
            border-2
            border-[#808080]
            rounded-md
            grid
            gap-[30px]
        ">

            <div className="
                w-full
                h-auto
                flex
                items-center
            ">
                <Image src={Clock} alt="clock" width={30} height={30} />
                <p className="pl-2 font-GothamLight">
                    Horário
                </p>
            </div>

            <div
                className="
                w-full
                h-auto
            ">
                <Line>
                    <p className="text-lg lg:text-[1.5rem] font-GothamBook">Qual período quer treinar?</p>
                </Line>
                <Line className="mt-5">
                    <div className="
                        w-auto
                        h-auto
                    ">
                        <Radio label="Manhã" isSelected={morningTurn} onClick={function () {
                            if (morningTurn) {
                                setMorningTurn(false)
                            } else {
                                setTurn("morning")
                            }
                        }} />
                    </div>
                    <div>
                        <p className="text-lg">
                            06:00 às 12:00
                        </p>
                    </div>
                </Line>
                <Line className="mt-5">
                    <div className="
                        w-auto
                        h-auto
                    ">
                        <Radio label="Tarde" isSelected={afternoonTurn} onClick={function () {
                            if (afternoonTurn) {
                                setAfternoonTurn(false)
                            } else {
                                setTurn("afternoon")
                            }
                        }} />
                    </div>
                    <div>
                        <p className="text-lg">
                            12:01 às 18:00
                        </p>
                    </div>
                </Line>
                <Line className="mt-5">
                    <div className="
                        w-auto
                        h-auto
                    ">
                        <Radio label="Noite" isSelected={nightTurn} onClick={function () {
                            if (nightTurn) {
                                setNightTurn(false)
                            } else {
                                setTurn("night")
                            }
                        }} />
                    </div>
                    <div>
                        <p className="text-lg">
                            18:01 às 23:00
                        </p>
                    </div>
                </Line>
            </div>

            <div
                className="
                    w-full
                    pl-2
                    flex
                    flex-col
                    justify-between
                    items-start
                    md:flex-row
                    md:items-center
                "
            >
                <div className="">
                    <Checkbox label="Exibir unidades fechadas" isSelected={showClosedLocations} onClick={() => setShowClosedLocations(!showClosedLocations)} />
                </div>
                <div>
                    <p className="text-lg flex items-center justify-evenly pt-5 md:pt-0">
                        Resultados encontrados: <span className="text-[1.5rem] font-GothamBold text-black pl-2">{locations.length}</span>
                    </p>
                </div>
            </div>

            <div
                className="
                    w-full
                    p-2
                    flex
                    flex-col
                    justify-evenly
                    items-center
                    md:flex-row
                "
            >
                <Button
                    className="
                    bg-[#FFB612]
                    w-full
                    md:w-[250px]
                    lg:w-[350px]
                    "
                    text="Encontrar unidade"
                    onClick={requestLocations}
                />
                <Button
                    className="
                    bg-white
                    border-2
                    border-[#808080]
                    w-full
                    mt-5
                    md:mt-0
                    md:w-[250px]
                    lg:w-[350px]
                    "
                    text="Limpar"
                    onClick={clearFilter}
                />
            </div>

        </div>
    )
}