import Image from "next/image";
import Star from "../../../public/hero-star.png"

export default function StarIcon() {
    return (
      <Image alt="star icon" height={30} width={50} src={Star} className="xs:hidden md:inline-block" />
    )
}