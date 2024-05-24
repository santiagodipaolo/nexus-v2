import React from "react";
import Carousel from "./carousel";

 
export default function TalentCarousel() {
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
            <div className="xl:flex xs:grid xs:grid-cols-1 md:m-5 md:grid-cols-2 xl:flex-row justify-center">
                <div className="badge badge-outline font-thin text-gray-600 m-1 xs:text-xs">SALES AND MARKETING</div>
                <div className="badge badge-outline font-thin text-gray-600 m-1 xs:text-xs">DEVELOPMENT AND SOFTWARE ENGINEERING</div>
                <div className="badge badge-outline font-thin text-gray-600 m-1 xs:text-xs">UX/UI AND DESIGN</div>
                <div className="badge badge-outline font-thin text-gray-600 m-1 xs:text-xs">FINANCE AND ACCOUNTING</div>
                <div className="badge badge-outline font-thin text-gray-600 m-1 xs:text-xs">CUSTOM SUPPORT OPS AND VIRTUAL ASSISTANCE</div>
            </div>
        </div>
        <Carousel />
    </div>
  );
}