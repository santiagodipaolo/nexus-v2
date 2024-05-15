import Image from "next/image";
import Underline from "../../../public/hero-underline.png"

export default function UnderlineIcon() {
    return (
      <Image alt="underline icon" style={{width:"205px", height:"auto"}} src={Underline} className="xs:hidden md:inline-block mt-[-28px] ml-28" />
    )
}