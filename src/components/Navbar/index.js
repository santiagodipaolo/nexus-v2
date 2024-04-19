'use client';

import Image from "next/image";
import MenuIcon from "./MenuIcon";
import Logo from "../../../public/nexus-logo.png"

export const Navbar = () => {

    return (
        <nav className="flex justify-between px-20 py-10 items-center bg-white">
            <Image alt="Nexus Logo" width={80} height={80} src={Logo} className="ml-14"/>
            <div className="flex items-center">
                <div className="text-black md:hidden">
                    <MenuIcon />
                </div>
                <ul className="flex items-center space-x-6 xs:hidden md:flex">
                    <button onClick={() => console.log('working')} className="font-semibold text-gray-700">ABOUT</button>
                    <button className="font-semibold text-gray-700">TALENT</button>
                    <button className="font-semibold text-gray-700">CAREERS</button>
                    <button className="font-semibold text-gray-700">PRICING</button>
                    <button className="bg-green-500 p-2 text-white rounded-sm text-sm font-bold">REQUEST A QUOTE</button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;