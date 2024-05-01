'use client';

import Link from 'next/link';
import React, { useState } from 'react';

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
                <div className="border rounded-md absolute bg-[#F8F5F2] top-0 right-0 left-0 h-screen p-10 max-h-[320px] border-b border-gray-700">
                  <div className='flex justify-end'>
                    <button onClick={toggleMenu} className='flex justify-end text-xl font-bold'>X</button>
                  </div>
                  <ul className="flex flex-col flex-start items-center space-y-6 text-xl">
                    <Link href="#about" onClick={toggleMenu} className="font-semibold text-gray-700">ABOUT</Link>
                    <Link href="#talent" onClick={toggleMenu} className="font-semibold text-gray-700">TALENT</Link>
                    <Link href="#" onClick={toggleMenu} className="font-semibold text-gray-700">CAREERS</Link>
                    <Link href="#" onClick={toggleMenu} className="font-semibold text-gray-700">PRICING</Link>
                    <Link href="#" onClick={toggleMenu} className="font-semibold text-gray-700">BLOG</Link>
                  </ul>
                </div>
            )}
        </div>
    );
}