'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from "../../../public/nexus-logo.png"
import { IoIosArrowForward } from "react-icons/io";

export default function MenuIcon(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div>
          <button onClick={toggleMenu}>
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
            {isOpen && (
                <div className="z-10 border rounded-md absolute bg-[#f5ede5] top-0 right-0 left-0 h-screen p-10 max-h-[750px] border-b border-gray-700">
                  <div className='flex justify-between'>
                    <Link href="/">
                      <Image alt="Nexus Logo" src={Logo} className="mt-2 cursor-pointer" style={{width:"90px", height:"auto"}}/>
                    </Link>
                    <button onClick={toggleMenu} className='flex justify-end text-xl font-bold'>X</button>
                  </div>
                  <ul className="flex flex-col flex-start items-left mt-16 space-y-12 text-xl">
                    <div className="flex justify-between">
                      <Link href="#about" onClick={toggleMenu} className="text-gray-700">About</Link>
                      <IoIosArrowForward className="text-gray-700 mt-1"/>
                    </div>
                    <div className="flex justify-between">
                      <Link href="#talent" onClick={toggleMenu} className="text-gray-700">Talent</Link>
                      <IoIosArrowForward className="text-gray-700 mt-1"/>
                    </div>
                    <div className="flex justify-between">
                      <a href="https://careers-nexus.notion.site/Nexus-18b82946aead40249b07f57091c638c7" target='_blank' onClick={toggleMenu} className="text-gray-700">Careers</a>
                      <IoIosArrowForward className="text-gray-700 mt-1"/>
                    </div>
                    <div className="flex justify-between">
                      <Link href="#pricing" onClick={toggleMenu} className="text-gray-700">Pricing</Link>
                      <IoIosArrowForward className="text-gray-700 mt-1"/>
                    </div>
                    {/* <Link href="#" onClick={toggleMenu} className="text-gray-700">BLOG</Link> */}
                  </ul>
                  <div className="flex flex-col justify-between gap-8 mt-32">
                    <p className="text-3xl text-center font-semibold ">
                      <i>Want to know more?</i> <br/>
                    </p>
                  </div>
                  <div className="text-center mt-8">
                    <a href="https://7i7zpal0.forms.app/nexus" target="_blank" className="hover:pointer mt-6 p-3 text-white rounded-sm text-lg font-bold bg-green-500 my-2 mx-2 hover:bg-green-600">REQUEST A QUOTE</a>
                  </div>
                </div>
            )}
        </div>
    );
}