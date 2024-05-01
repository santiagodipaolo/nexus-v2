import Image from "next/image";
import HeroPlanet from "../../../public/hero-planet.png"

export default function GlobeIcon() {
    return (
      <Image alt="globe icon" style={{width:"70px", height:"auto"}} src={HeroPlanet} className="xs:hidden md:inline-block" />
    )
}