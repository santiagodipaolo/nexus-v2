import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { AR } from 'country-flag-icons/react/3x2'
import { BR } from 'country-flag-icons/react/3x2'
import { UY } from 'country-flag-icons/react/3x2'
import { CL } from 'country-flag-icons/react/3x2'
import { MX } from 'country-flag-icons/react/3x2'
import { CO } from 'country-flag-icons/react/3x2'
import Carousel from "./carousel";
 
interface TalentCarouselProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}
 
export default function TalentCarousel({
  className,
  reverse,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 1,
  ...props
}: TalentCarouselProps) {

     
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
      className="xs:max-w-xs md:max-w-full mt-40 mb-10" id="talent"
    >
        <div className="flex flex-col">
            <div className="lg:text-3xl md:text-xl md:m-5 flex text-black text-center justify-center mb-8">
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
        <Carousel />
    </div>
  );
}