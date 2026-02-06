'use client';

import Link from "next/link";
import Image from "next/image";
import MenuIcon from "./MenuIcon";
import Logo from "../../../public/nexus-logo.png"

export const Navbar = () => {
    return (
        <nav className="flex justify-between px-20 py-10 items-center bg-[#f5ede5]">
            <Link href="/">
                <Image alt="Nexus Logo" src={Logo} className="xs:ml-0 md:ml-14 cursor-pointer" style={{width:"90px", height:"auto"}}/>
            </Link>
            <div className="flex items-center">
                <div className="text-black lg:hidden">
                    <MenuIcon />
                </div>
                <ul className="flex items-center md:space-x-8 xl:space-x-12 md:mr-0 xl:mr-24 xs:hidden lg:flex">
                    <Link href="/#about" className="text-gray-700">ABOUT</Link>
                    <Link href="/#team" className="text-gray-700">TEAM</Link>
                    <Link href="/#talent" className="text-gray-700">TALENT</Link>
                    <a href="https://careers.nexus.lat" target='_blank' className="text-gray-700">CAREERS</a>
                    <Link href="/#pricing" className="text-gray-700">PRICING</Link>
                    <Link href="/blog" className="text-gray-700">BLOG</Link>
                    <a href="https://quote.nexus.lat" target="_blank" className="hover:pointer bg-green-500 hover:bg-green-600 p-2 text-white rounded-sm text-sm font-bold">REQUEST A QUOTE</a>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
