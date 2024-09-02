"use client";
import React, { useState } from 'react';

interface SubmenuOption {
    label: string;
    link: string;
}

interface Option {
    label: string;
    link: string;
    submenu?: SubmenuOption[];
}

interface ButtonText {
    title: string;
    options: Option[];
}

const DropdownMenuWSubMenu: React.FC<ButtonText> = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);

    const handleSubmenuMouseEnter = (index: number) => setActiveSubmenu(index);
    const handleSubmenuMouseLeave = () => setActiveSubmenu(null);

    return (
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button
                className="block py-2 pr-4 pl-3 lg:text-sm xl:text-base hover:text-green-800 transition text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
                <span className="relative">
                    {title}
                </span>
            </button>

            {isOpen && (
                <ul className="absolute z-10 bg-white shadow-lg w-48 border-b-4"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="relative"
                            onMouseEnter={() => option.submenu && handleSubmenuMouseEnter(index)}
                            onMouseLeave={() => option.submenu && handleSubmenuMouseLeave()}
                        >
                            <a className='block py-3 px-4 text-gray-700 hover:text-green-700 transition-all ease-in hover:bg-gray-100' href={option.link}>
                                {option.label}
                            </a>
                            {option.submenu && activeSubmenu === index && (
                                <ul className="absolute left-full top-0 bg-white shadow-lg w-40 border border-gray-200 ">
                                    {option.submenu.map((subOption, subIndex) => (
                                        <li key={subIndex} className='flex items-center justify-center'>
                                            <a className='block py-3 px-3 w-full h-14  text-gray-700 hover:text-green-700 transition-all ease-in hover:bg-gray-100' href={subOption.link}>
                                                {subOption.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenuWSubMenu;
