import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

import { AR } from 'country-flag-icons/react/3x2'
import { BR } from 'country-flag-icons/react/3x2'
import { UY } from 'country-flag-icons/react/3x2'
import { CL } from 'country-flag-icons/react/3x2'
import { MX } from 'country-flag-icons/react/3x2'
import { CO } from 'country-flag-icons/react/3x2'
import Image from "next/image";

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

const TalentCard = ({
  img,
  name,
  role,
  flag
}: {
  img: string;
  name: string;
  role: string;
  flag: JSX.Element;
}) => {
  return (
    <div className="carousel carousel-center max-w-full pb-2 space-x-4 bg-[#f5ede5] h-[500px]">
        <div className="carousel-item flex flex-col bg-[#e4d0bc]">
        <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src={img} className="" />
        </div>
        <div className="bg-[#fcfbfa] text-black py-5 px-5 text-start text-lg">
        <div className="flex flex-row gap-1"> 
            {flag}
            <p>{name}, <br/></p>
        </div>
        <p className="text-xl"><i><b>{role}</b></i></p>
        </div>
    </div> 
  </div>
  );
};

const Carousel = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg py-10">
      <Marquee pauseOnHover className="[--duration:35s]">
        {talents.map((talent) => (
          <TalentCard key={talent.role} {...talent} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
  );
};

export default Carousel;
