import Logo from '@/assets/images/logo.svg'
import Image from "next/image"

export default function Footer() {
    return (
        <div className="
        bg-[#333333]
        w-full
        p-10
        flex-col
        ">
            <Image src={Logo} alt="Logo" width={150} height={2150} className='m-auto' />
            <p className='text-white text-center mt-5'>Todos os direitos reservados - 2020</p>
        </div>
    )
}