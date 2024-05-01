import Image from "next/image";
import SearchGlass from "../../../public/hero-searchGlass.png"

export default function GlassIcon() {
    return (
      <Image alt="glass icon" style={{width:"50px", height:"auto"}} src={SearchGlass} className="xs:hidden md:inline-block" />
    )
}