import Image from "next/image";
import Logo from '@/assets/images/logo.svg'

export default function Header() {
    return (
        <div className="p-5 bg-black flex justify-center">
            <Image src={Logo} alt="Logo" width={150} height={2150} />
        </div>
    )
}