'use client';

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
                <div className="border rounded-md absolute">
                  <ul className="flex flex-col flex-start items-center space-x-6">
                    <button className="font-semibold text-gray-700">ABOUT</button>
                    <button className="font-semibold text-gray-700">TALENT</button>
                    <button className="font-semibold text-gray-700">CAREERS</button>
                    <button className="font-semibold text-gray-700">PRICING</button>
                  </ul>
                </div>
            )}
        </div>
    );
}