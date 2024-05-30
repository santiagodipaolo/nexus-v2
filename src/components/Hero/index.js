import Image from "next/image";
import GlobeIcon from "./GlobeIcon";
import GlassIcon from "./SearchGlass";
import StarIcon from "./Star";
import UnderlineIcon from "./Underline";
import HeroLine1 from "../../../public/hero-line-1.png"
import HeroLine2 from "../../../public/hero-line-2.png"

export const Hero = () =>  {
    return (
      <div className="text-black mt-14">
        <section className="flex flex-col items-center justify-center text-center m-auto px-4 py-2">
          <h1 className="xs:text-5xl md:text-6xl font-semibold leading-tigh">
            {/* <div className="flex flex-row gap-4"> */}
              <div className="flex flex-col m-auto">
                <div>
                  <span className="hero-gradient-underline">We&apos;re</span>&nbsp;your gateway
                  {/* <UnderlineIcon /> */}
                </div>
              </div>
              {/* <GlobeIcon />  */}
            {/* </div> */}
            {/* <div className="flex flex-row gap-4 mb-4"> */}
              to find {" "}
              {/* <GlassIcon />  */}
              Latin America&apos;s
            {/* </div> */}
            <div className="flex flex-row mx-4 mt-4">
              <StarIcon />&nbsp;
              <i>top-tier remote professionals</i>
            </div>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            We source, hire, pay and retain first-class <br/> Latin American talent for 40-70% less!
          </p>
          <a href="https://7i7zpal0.forms.app/nexus" target="_blank" className="hover:pointer mt-6 p-2 text-white rounded-sm text-sm font-bold bg-green-500 my-2 mx-2 hover:bg-green-600">REQUEST A QUOTE</a>
        </section>
        <div className="absolute mt-[-30px] ml-[-50px] top-0 left-0 xs:hidden md:hidden xl:block">
          <Image alt="question mark" src={HeroLine1} style={{width:"500px", height:"auto"}} /> 
        </div>
        <div className="absolute top-80 right-0 xs:hidden md:hidden xl:block mt-[-50.5px] mr-[-26px]">
          <Image alt="question mark" src={HeroLine2} style={{width:"500px", height:"auto"}} /> 
        </div>
      </div>
    )
}

export default Hero;