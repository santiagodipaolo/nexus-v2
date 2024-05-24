'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "./MenuIcon";
import Logo from "../../../public/nexus-logo.png"
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAboutMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
        <nav className="flex justify-between px-20 py-10 items-center bg-[#f5ede5]">
            <Image alt="Nexus Logo" src={Logo} className="xs:ml-0 md:ml-14" style={{width:"90px", height:"auto"}}/>
            <div className="flex items-center">
                <div className="text-black md:hidden">
                    <MenuIcon />
                </div>
                <ul className="flex items-center md:space-x-8 xl:space-x-12 md:mr-0 xl:mr-24 xs:hidden md:flex">
                    <div className="flex flex-row text-gray-700 gap-2 hover:cursor-pointer" onClick={toggleAboutMenu}>
                        <p>ABOUT</p>
                        <IoIosArrowDown className="mt-1"/>
                    </div>
                    {isOpen && (
                        <div className="border rounded-md border-black absolute bg-[#F8F5F2] p-3 top-20 max-h-[120px]">
                            <ul className="flex flex-col space-y-2 text-md">
                                <li className="flex flex-row text-gray-800 gap-2">
                                    <FaArrowCircleRight className="mt-1"/>
                                    <Link href="#about" onClick={toggleAboutMenu} className="text-gray-700">About us</Link>
                                </li>
                                {/* <li className="flex flex-row text-gray-800 gap-2">
                                    <FaArrowCircleRight className="mt-1" />
                                    <Link href="#how-it-works" onClick={toggleAboutMenu} className="text-gray-700">How it works</Link>
                                </li> */}
                            </ul>
                        </div>
                    )}
                    <Link href="#talent" className=" text-gray-700">TALENT</Link>
                    <a href="https://careers-nexus.notion.site/Nexus-18b82946aead40249b07f57091c638c7" target='_blank' className=" text-gray-700">CAREERS</a>
                    <Link href="#pricing" className=" text-gray-700">PRICING</Link>
                    {/* <Link href="#" className=" text-gray-700">BLOG</Link> */}
                    <a href="https://7i7zpal0.forms.app/nexus" target="_blank" className="hover:pointer bg-green-500 hover:bg-green-600 p-2 text-white rounded-sm text-sm font-bold">REQUEST A QUOTE</a>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;