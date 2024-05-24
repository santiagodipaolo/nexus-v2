import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { AR } from 'country-flag-icons/react/3x2'
import { BR } from 'country-flag-icons/react/3x2'
import { UY } from 'country-flag-icons/react/3x2'
import { CL } from 'country-flag-icons/react/3x2'
import { MX } from 'country-flag-icons/react/3x2'
import { CO } from 'country-flag-icons/react/3x2'
 
interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}
 
export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {

     
const talents = [
    {
      name: "María Rodriguez",
      role: "Creative Director",
      img: "/people/people-1-min.png",
      flag: <MX title="Mexico" className="w-auto h-[10px] mt-2"/> 
    },
    {
        name: "Federico González",
        role: "Software Engineer",
        img: "/people/people-7.png",
        flag: <CO title="Colombia" className="w-auto h-[10px] mt-2"/> 
      },
      {
        name: "Santiago Hernández",
        role: "Full Stack Engineer",
        img: "/people/people-2-min.png",
        flag: <UY title="Uruguay" className="w-auto h-[10px] mt-2"/> 
      },
      {
        name: "Valentina López",
        role: "Brand Designer",
        img: "/people/people-3-min.png",
        flag: <CL title="Chile" className="w-auto h-[10px] mt-2"/> 
      },
      {
        name: "Lucas Muñoz",
        role: "Account Executive",
        img: "/people/people-4-min.png",
        flag: <AR title="Argentina" className="w-auto h-[10px] mt-2"/> 
      },
      {
        name: "Joao Silva",
        role: "Marketing Executive",
        img: "/people/people-5-min.png",
        flag: <BR title="Brasil" className="w-auto h-[10px] mt-2"/> 
      },
      {
        name: "Francisco Herrera",
        role: "Business Intelligence Analyst",
        img: "/people/people-8.png",
        flag: <CL title="Chile" className="w-auto h-[10px] mt-2"/> 
      },
      {
        name: "Eugenia Sanchez M",
        role: "Data Scientist",
        img: "/people/people-10.png",
        flag: <AR title="Argentina" className="w-auto h-[10px] mt-2"/> 
      },
      {
        name: "Adriana Do Lima",
        role: "Solutions Architect",
        img: "/people/people-13.png",
        flag: <BR title="Brasil" className="w-auto h-[10px] mt-2"/> 
      },
  ];

  return (
    <div
      {...props}
      className={cn(
        "group overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] xs:max-w-xs md:max-w-full mt-10 mb-10",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
      id="talent"
    >
        <div className="flex flex-col">
            <div className="lg:text-3xl md:text-xl md:m-5 flex text-black text-center justify-center mb-8">
                {/* <GoArrowUpRight /> */}
                <h1 className="font-semibold xs:text-xl md:text-3xl">
                    We&apos;re sector agnostic and source people from <b><i>all skill levels</i></b> to fit your specific needs
                </h1>
            </div>
            <div className="xl:flex xs:grid xs:grid-cols-1 md:m-10 md:grid-cols-2 xl:flex-row justify-center">
                <div className="badge badge-outline font-thin text-gray-600 m-1 xs:text-xs">SALES AND MARKETING</div>
                <div className="badge badge-outline font-thin text-gray-600 m-1 xs:text-xs">DEVELOPMENT AND SOFTWARE ENGINEERING</div>
                <div className="badge badge-outline font-thin text-gray-600 m-1 xs:text-xs">UX/UI AND DESIGN</div>
                <div className="badge badge-outline font-thin text-gray-600 m-1 xs:text-xs">FINANCE AND ACCOUNTING</div>
                <div className="badge badge-outline font-thin text-gray-600 m-1 xs:text-xs">CUSTOM SUPPORT OPS AND VIRTUAL ASSISTANCE</div>
            </div>
        </div>
        {/* carousel */}
        <div className="carousel carousel-center max-w-full pb-2 space-x-4 bg-[#f5ede5] h-[500px]">
        {talents
            .map((talent, i) => (
            <div
                key={i}
                className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
                })}
            >
                <div className="carousel-item flex flex-col bg-[#e4d0bc]">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                            <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src={talent.img} className="" />
                        </div>
                        <div className="bg-[#fcfbfa] text-black py-5 px-5 text-start text-lg">
                            <div className="flex flex-row gap-1"> 
                                {talent.flag}
                                <p>{talent.name}, <br/></p>
                            </div>
                            <p className="text-xl"><i><b>{talent.role}</b></i></p>
                        </div>
                    </div> 
            </div>
            ))}
        </div>
    </div>
  );
}