import Image from "next/image";
import GlobeIcon from "./GlobeIcon";
import GlassIcon from "./SearchGlass";
import StarIcon from "./Star";
import UnderlineIcon from "./Underline";
import HeroLine1 from "../../../public/hero-line-1.png"
import HeroLine2 from "../../../public/hero-line-2.png"

export const Hero = () =>  {
    return (
      <div className="bg-white text-black mt-14">
        <section className="flex flex-col items-center justify-center text-center m-auto px-4 py-2">
          <h1 className="text-6xl font-semibold leading-tigh">
            <div className="flex flex-row gap-4">
              <div className="flex flex-col">
                We&apos;re your gateway
                <UnderlineIcon />
              </div>
              <GlobeIcon /> 
            </div>
            <div className="flex flex-row gap-4 mb-4">
              to find <GlassIcon /> Latin America&apos;s{" "} 
            </div>
            <div className="flex flex-row mx-4">
              <StarIcon />
              top-tier
              professionals
            </div>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            We source, hire, pay and retain first-class <br/> Latin American talent. You save a ton!
          </p>
          <button className="mt-6 p-2 text-white rounded-sm text-sm font-bold bg-green-500 my-2 mx-2 hover:bg-green-600">REQUEST A QUOTE</button>
        </section>
        <div className="absolute mt-[-30px] ml-[-50px] top-0 left-0 xs:hidden md:hidden xl:block">
          <Image alt="question mark" src={HeroLine1} height={500} width={500} /> 
        </div>
        <div className="absolute top-80 right-0 xs:hidden md:hidden xl:block mt-[-25px] mr-[-26px]">
          <Image alt="question mark" src={HeroLine2} height={500} width={500} className="" /> 
        </div>
      </div>
    )
}

export default Hero;