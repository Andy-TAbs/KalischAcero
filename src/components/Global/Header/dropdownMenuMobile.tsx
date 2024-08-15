"use client";
import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

interface DropdownMenuMobileProps {
    // Agrega las propiedades necesarias aquí
}

const DropdownMenuMobile: React.FC<DropdownMenuMobileProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isSubSubMenuOpen, setIsSubSubMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div
                onClick={toggleMenu}
                className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center space-y-1.5"
            >
                <div
                    className={`w-3/4 h-1.5 bg-green-900 rounded-lg transition-all duration-300 origin-right ${isOpen ? 'w-full rotate-[-40deg] translate-y-[-3px]' : ''}`}
                ></div>
                <div
                    className={`w-full h-1.5 bg-green-900 rounded-lg transition-all duration-300 origin-center ${isOpen ? 'rotate-90 -translate-x-3' : ''}`}
                ></div>
                <div
                    className={`w-3/4 h-1.5 bg-green-900 rounded-lg transition-all duration-300 origin-right ${isOpen ? 'w-full rotate-[40deg] translate-y-[3px]' : ''}`}
                ></div>
            </div>

            {isOpen && (
                <div
                    id="mobile-menu-2"
                    className="absolute top-full -left-2 w-screen bg-white dark:bg-gray-700 z-50"
                >
                    <ul className="flex w-full flex-col pl-5 items-start">
                        <li className="py-3 hover:bg-gray-200">
                            <a href="#" className="text-gray-700 dark:text-gray-200 text-2xl">Home</a>
                        </li>
                        <li className=" relative ">
                            <button
                                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                                className={`h-12 text-left  text-2xl flex flex-row w-112 items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 ${isSubMenuOpen ? '' : ''}`}
                            >
                                Hola
                                <IoIosArrowForward className={`${isSubMenuOpen ? 'rotate-90 transition-all ease-in duration-100' : 'rotate-0'}`} />
                            </button>
                            {isSubMenuOpen && (
                                <ul className="">
                                    <li className="relative">
                                        <button
                                            onClick={() => setIsSubSubMenuOpen(!isSubSubMenuOpen)}
                                            className="w-full pl-4 text-left text-2xl flex flex-row items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                                        >
                                            Hola2
                                            <IoIosArrowForward className={`${isSubSubMenuOpen ? 'rotate-90 transition-all ease-in duration-100' : 'rotate-0'}`} />
                                        </button>
                                        {isSubSubMenuOpen && (
                                            <ul className="pl-4">
                                                <li className="pt-3">
                                                    <a href="#" className="text-gray-700 text-2xl dark:text-gray-200">Hola3</a>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="pb-2">
                            <a href="#" className="text-gray-700 text-2xl dark:text-gray-200">About</a>
                        </li>
                        <li className="py-2">
                            <a href="#" className="text-gray-700 text-2xl dark:text-gray-200">Services</a>
                        </li>
                        <li className="py-2">
                            <a href="#" className="text-gray-700 text-2xl dark:text-gray-200">Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownMenuMobile;
