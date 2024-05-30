import Image from "next/image";
import Star from "../../../public/hero-star.png"

export default function StarIcon() {
    return (
      <Image alt="star icon" style={{width:"50px", height:"auto"}} src={Star} className="xs:hidden lg:inline-block" />
    )
}