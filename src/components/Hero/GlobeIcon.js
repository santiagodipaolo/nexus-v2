import Image from "next/image";
import HeroPlanet from "../../../public/hero-planet.png"

export default function GlobeIcon() {
    return (
      <Image alt="globe icon" height={80} width={80} src={HeroPlanet} className="xs:hidden md:inline-block" />
    )
}