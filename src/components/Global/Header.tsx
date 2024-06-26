"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect} from 'react';
import DropdownMenu from './dropdownMenu';
import { SecHeader } from './secHeader';
import  DropdownMenuMobile  from '../Mobile/dropdownMenu-Mobile';

interface HeaderProps {
    title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
<div className=''>
    <div className="hidden md:block">
        <SecHeader title="Header" />
    </div>
        <div className="h-20">
            <header className="w-full">
                    <nav className="bg-white border-gray-200 px-2 lg:px-4 py-2.5 dark:bg-gray-800">
                    <div className="flex items-center justify-between w-full lg:justify-start lg:flex-grow-0 lg:order-2">
                                <div className="lg:hidden">
                                    <DropdownMenuMobile />
                                </div>
                                <a href="https://flowbite.com" className="mx-auto lg:mx-0">
                                    <img src="/kfa_movil_50.png" className="h-6 sm:h-9" alt="Kalisch_Logo"/>
                                </a>
                                <img src="/search.png" className="w-6 h-6 lg:hidden" alt="Search" />
                                <div className="hidden justify-between w-full lg:flex lg:w-auto lg:order-2" id="mobile-menu-2">
                                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                        <li className='flex flex-row'>
                                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                            Cotizar
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                            <DropdownMenu title="Nosotros"/>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                            <DropdownMenu title="Sostenibilidad"/>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                            <DropdownMenu title="Divisiones" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                            <DropdownMenu title='Productos' />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                            <DropdownMenu title='Promociones' />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                            <DropdownMenu title='Tienda en línea' />
                                        </a>
                                        </li>
                                        <li>
                                        <img src="/search.png" className="w-6 h-6" alt="Search" />
                                        </li>
                                    </ul>
                                </div>
                        </div>
                    </nav>
            </header>
        </div>
</div>
    );
};
