import Image from "next/image";
import ArrowDownLeft from "../../../public/arrow-down-left.svg"
import ArrowDownRight from "../../../public/arrow-down-right.svg"
import ArrowUpLeft from "../../../public/arrow-left-up.svg"
import ArrowUpRight from "../../../public/arrow-right-up.svg"

export default function VideoPlayer() {
    return (
       <div className=" mt-20 mb-20">
            <h1 className="flex justify-center md:text-3xl xs:text-2xl font-semibold mb-10 text-black">We need to change <i>this title</i></h1>
            <div
                className="bg-[url('/faq-bg.png')] xs:max-w-xs md:max-w-2xl lg:max-w-4xl"
                style={{
                    position: 'relative',
                    width: '800px', 
                    height: '550px', 
                    margin: '0 auto', 
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', 
                    border: '5px',
                    borderRadius:'2px' 
                }}
            >
                <iframe
                    src="https://www.youtube.com/embed/LWXQdw-YvVM"
                    style={{
                        position: 'relative',
                        padding: '10px',
                        width: '100%',
                        height: '100%',
                        border: '5px',
                        borderRadius:'15px'
                    }}
                ></iframe>
                <div className="absolute top-0 ml-[-30px] mt-[-25px] xs:hidden md:block">
                    <Image alt="question mark" src={ArrowDownRight} height={20} width={20} /> 
                </div>

                <div className="absolute top-0 right-0 mr-[-30px] mt-[-25px] xs:hidden md:block">
                    <Image alt="question mark" src={ArrowDownLeft} height={20} width={20} /> 
                </div>

                <div className="absolute bottom-0 left-0 ml-[-28px] mb-[-25px] xs:hidden md:block">
                    <Image alt="question mark" src={ArrowUpRight} height={20} width={20} /> 
                </div>

                <div className="absolute bottom-0 right-0 mr-[-30px] mb-[-25px] xs:hidden md:block">
                    <Image alt="question mark" src={ArrowUpLeft} height={20} width={20} /> 
                </div>
            </div>
      </div>
    );
}