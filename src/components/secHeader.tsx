/* eslint-disable @next/next/no-img-element */
import React from 'react';
import DropdownMenu from './dropdownMenu';

interface HeaderProps {
    title: string;
}

export const SecHeader: React.FC<HeaderProps> = ({ title }) => {
    return (
<div>
    <header className='w-screen h-10'>
        <nav className="bg-white border-gray-200 px-6 lg:px-6 py-1 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-end mx-auto max-w-screen-xl">
                    <div className="flex flex-row" >
                        <div className="">
                            <img src="/placeholder_kalisch.svg" className="mr-2 h-4 w-4 sm:h-9" alt="Flowbite Logo" />
                        </div>
                        <div className="flex flex-col ">
                            <div className="">
                                <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">Kalisch Acero</span>
                            </div>
                            <div>
                                <a className="text-xs">8:00AM - 5:30PM</a>
                            </div>
                        </div>
                        <div>
                            <img src="/flecha.png" className="h-4 w-3 ml-3 mt-3 sm:h-3" alt="Flowbite Logo" />
                        </div>
                    </div>
                <div className="flex items-center lg:order-2">
                <a href="#" className="text-gray-800 text-xs dark:text-white mr-60 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">English</a>
                </div>
                <div className="hidden justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li className='flex flex-row'>
                            <img src="/cc_logo.png"  className="mr-2 h-3 w-4 sm:h-9" alt="Cliente consentido" />
                            <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Cliente consentido</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Sucursales</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contacto</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Catálogo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</div>
    );
};

