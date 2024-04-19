import Image from "next/image";
import SearchGlass from "../../../public/hero-searchGlass.png"

export default function GlassIcon() {
    return (
      <Image alt="glass icon" height={30} width={50} src={SearchGlass} className="xs:hidden md:inline-block" />
    )
}