import Image from "next/image";
import Underline from "../../../public/hero-underline.png"

export default function UnderlineIcon() {
    return (
      <Image alt="underline icon" style={{width:"200px", height:"auto"}} src={Underline} className="xs:hidden md:inline-block mt-[-30px] ml-[-13px]" />
    )
}