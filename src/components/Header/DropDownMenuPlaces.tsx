/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';

interface buttonTextPlaces {
    title: string;
    options: { label: string, link: string }[];
}

    const DropdownMenuPlaces: React.FC<buttonTextPlaces> = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };
    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button
            className="block py-2 pr-4 pl-3 lg:text-sm xl:text-base text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
        >
                    <div className="flex flex-row lg:pl-0 2xl:pl-20" >
                        <div className="">
                            <img src="/placeholder_kalisch.svg" className="mr-2 h-4 w-4 sm:h-9" alt="Flowbite Logo" />
                        </div>
                        <div className="flex flex-col  ">
                            <div className="">
                                <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">Kalisch Acero</span>
                            </div>
                            <div>
                                <a className="text-xs">8:00AM - 5:30PM</a>
                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mt-3" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M12 16.5l-8-8 1.5-1.5L12 13.5l6.5-6.5 1.5 1.5z"  fill="currentColor"/>
                            </svg>
                        </div>
                    </div>
        </button>

        {isOpen && (
            <ul className="absolute z-10 bg-white shadow-lg w-96 h-80 overflow-scroll"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
            {options.map((option, index) => (
                <li key={index} className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
                    <a href={option.link}><div className="flex flex-row pl-3" >
                        <div className="">
                            <img src="/placeholder_kalisch.svg" className="mr-2 h-4 w-4 sm:h-9" alt="Flowbite Logo" />
                        </div>
                        <div className="flex flex-col  ">
                            <div className="">
                                <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">{option.label}</span>
                            </div>
                            <div>
                                <a className="text-xs">8:00AM - 5:30PM</a>
                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mt-3" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M12 16.5l-8-8 1.5-1.5L12 13.5l6.5-6.5 1.5 1.5z"  fill="currentColor"/>
                            </svg>
                        </div>
                    </div></a>
                </li>
            ))}
            </ul>
        )}
        </div>
    );
    };

export default DropdownMenuPlaces;
