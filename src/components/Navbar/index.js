
import Link from "next/link";
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
                    <Link href="#about" className="font-semibold text-gray-700">ABOUT</Link>
                    <Link href="#talent" className="font-semibold text-gray-700">TALENT</Link>
                    <Link href="#" className="font-semibold text-gray-700">CAREERS</Link>
                    <Link href="#" className="font-semibold text-gray-700">PRICING</Link>
                    <a href="https://view.forms.app/santiagodipaolo/nexus" target="_blank" className="hover:pointer bg-green-500 hover:bg-green-600 p-2 text-white rounded-sm text-sm font-bold">REQUEST A QUOTE</a>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;