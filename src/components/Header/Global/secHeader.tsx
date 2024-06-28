/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface HeaderProps {
    title: string;
}

export const SecHeader: React.FC<HeaderProps> = ({ title }) => {
    return (
<div className="hidden lg:block">
    <header className='w-screen '>
        <nav className="bg-white border-gray-200 px-6 lg:px-6 py-1 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-end mx-auto max-w-screen-xl">
                    <div className="flex flex-row pl-20" >
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
                <div className="hidden pr-40 pb-5 justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li className='flex flex-row'>
                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><img src="/cc_logo.png"  className="mr-2  sm:h-4" alt="cc_logo" /></a>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Cliente consentido</a>
                        </li>
                        <li className='flex flex-row'>
                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><img src="/placeholder_kalisch.svg"  className="mr-2  sm:h-4" alt="placeholder_kalisch" /></a>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Sucursales</a>
                        </li>
                        <li className='flex flex-row'>
                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><img src="/contacto1_kalischacero_svg-1.svg"  className="mr-2  sm:h-4" alt="contacto1_kalischacero_svg-1" /></a>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contacto</a>
                        </li>
                        <li className='flex flex-row'>
                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><img src="/catalogo_kalischacero_svg-1.svg"  className="mr-2  sm:h-4" alt="catalogo_kalischacero_svg-1" /></a>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Catálogo</a>
                        </li>
                        <li className='flex flex-row'>
                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><img src="/usa.png"  className="mr-2  sm:h-3" alt="english_lang" /></a>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">English</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</div>
    );
};

