'use client';

import Image from "next/image";

import { BsLinkedin } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";

import Logo from "../../../public/nexus-logo.png"

export const Footer = () => {

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    return (
        <footer >
          <div className="flex flex-row xs:flex-col md:flex-row justify-between px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
            <div className="flex flex-col justify-between gap-8">
              <p className="text-xl text-center font-semibold ">
                Want to know more? <br/>
                <b><i>Get in touch</i></b>
              </p>
              <form className="w-full max-w-sm xs:mb-5">
                <div className="flex flex-col w-full lg:flex-row">
                  <label htmlFor="email-address" className="sr-only">Email Address</label>
                  <input name="email" id="email-address" type="email" placeholder="Email Address" className="block w-full h-12 px-5 py-3 duration-200 text-white bg-chalk border-zinc-300 text-accent-500 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm" />
                  <button type="submit" aria-label="Primary action" className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 text-sm text-white duration-200 bg-green-500 md:w-auto hover:bg-green-800 focus:ring-2 focus:ring-offset-2 focus:ring-black">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
            
            <div>
              <h3 className="text-base text-white font-semibold"><i>Company</i></h3>
              <ul role="list" className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:underline">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href="https://careers-nexus.notion.site/Nexus-18b82946aead40249b07f57091c638c7" className="hover:underline">
                    CAREERS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    TERMS & CONDITIONS
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:mt-[-19px]">
              <h3 className="text-base text-white font-semibold xs:mt-5"><i>Product</i></h3>
              <ul role="list" className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#pricing" className="hover:underline">
                    PRICING
                  </a>
                </li>
                <li>
                  <a href="#talent" className="hover:underline">
                    TALENT
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col mt-12 md:flex-row md:items-center md:justify-between bg-[#F8F5F2] px-8 py-12 mx-auto md:px-12 lg:px-32">
            <div className="xs:text-center xs:flex justify-center md:pl-0 lg:pl-0 xl:pl-32">
              <Image alt="Nexus Logo" width={80} height={80} src={Logo} />
            </div>
            <ul className="mt-8 flex justify-center gap-2 sm:mt-0 lg:justify-center text-black xs:mb-7 md:mb-0 xl:pl-28">
              <li><a href="http://x.com/nexus_lat" target="_blank"><BsTwitterX /></a></li>
              <li><a href="https://www.linkedin.com/company/nexus-lat/" target="_blank"><BsLinkedin /></a></li>
              <li><a href="https://t.me/nexus_lat" target="_blank"><BiLogoTelegram /></a></li>
            </ul>
            <div className="flex flex-row gap-2 text-gray-800 xs:m-auto md:m-0">
              <button className="text-sm font-medium text-balance" onClick={scrollToTop}>
                BACK TO TOP 
              </button>
              <FaArrowUp />
            </div> 
          </div>
          <div className="bg-[url('/faq-bg.png')] h-[10px]"></div>
      </footer>
    )
}

export default Footer;