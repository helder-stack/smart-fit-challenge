"use client"


import { Card } from "@/components/Card";
import Header from "@/components/Header";
import Recomendation from "@/components/Recomendation";
import Title from "@/components/Title";
import RequiredMaskIcon from "@/assets/images/required-mask.png"
import RecommendedMaskIcon from "@/assets/images/recommended-mask.png"
import RecommmendedTowelIcon from "@/assets/images/recommended-towel.png"
import RequiredTowelIcon from "@/assets/images/required-towel.png"
import PartialFountainIcon from "@/assets/images/partial-fountain.png"
import ForbiddenFountainIcon from "@/assets/images/forbidden-fountain.png"
import ForbiddenLockerRoomIcon from "@/assets/images/forbidden-lockerroom.png"
import RequiredLockerRoomIcon from "@/assets/images/required-lockerroom.png"
import PartialLockerRoomIcon from "@/assets/images/partial-lockerroom.png"
import Footer from "@/components/Footer";
import Gym from "@/components/Gym";
import useAppData from "@/data/hook/useAppData";

export default function Home() {

  const { locations } = useAppData()

  return (
    <main className="
    ">
      <Header />
      <div
        className="
        h-auto
        w-full
        md:w-[90%]
        lg:w-[70%]
        p-5
        m-auto      
        grid
        gap-[40px]
      ">
        <Title
          text="Reabertura smart fit"
        />
        <p className="text-[#808080] font-GothamLight">O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</p>

        <Card />

        <div className="
          w-full
          p-5
          bg-[#F5F5F5]  
          flex
          flex-col
          items-center
          md:flex-row
          md:flex-wrap
          md:justify-center
          lg:justify-evenly
        ">
          <Recomendation
            name="Máscara"
            required={true}
            requiredIcon={RequiredMaskIcon}
            close={false}
            forbidden={false}
            partial={false}
            recommended={true}
            recommendedIcon={RecommendedMaskIcon}
            free={false}
          />

          <Recomendation
            name="Toalha"
            required={true}
            requiredIcon={RequiredTowelIcon}
            close={false}
            forbidden={false}
            partial={false}
            recommended={true}
            recommendedIcon={RecommmendedTowelIcon}
            free={false}
          />

          <Recomendation
            name="Bebedouro"
            required={false}
            close={false}
            forbidden={true}
            forbiddenIcon={ForbiddenFountainIcon}
            partial={true}
            partialIcon={PartialFountainIcon}
            recommended={false}
            free={false}
          />

          <Recomendation
            name="Vestiários"
            required={false}
            close={false}
            forbidden={true}
            forbiddenIcon={ForbiddenLockerRoomIcon}
            partial={true}
            partialIcon={PartialLockerRoomIcon}
            recommended={false}
            free={true}
            freeIcon={RequiredLockerRoomIcon}
          />
        </div>

        <div className="w-full m-auto h-auto flex flex-wrap justify-between">
          {
            locations.length ?
              locations.map((data: any) => {
                return (

                  <Gym
                    key={data.id}
                    content={data.content}
                    fountain={data.fountain}
                    locker_room={data.locker_room}
                    mask={data.mask}
                    opened={data.opened}
                    schedules={data.schedules}
                    title={data.title}
                    towel={data.towel}
                  />

                )
              })
              :
              <h4 className="w-full text-center text-center text-[1.5rem] font-GothamBold text-black">Nenhuma unidade encontrada</h4>
          }
        </div>
      </div>



      <Footer />
    </main>
  )
}
