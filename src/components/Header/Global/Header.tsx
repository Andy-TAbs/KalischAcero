"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect} from 'react';
import DropdownMenu from './dropdownMenu';
import { SecHeader } from './secHeader';
import  DropdownMenuMobile  from '../Mobile/dropdownMenuMobile';

interface HeaderProps {
    title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
<div className=''>
            <div className="hidden md:block h-10">
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
                                <img src="/kfa_movil_50.png" className="h-6 sm:h-9 pl-48" alt="Kalisch_Logo"/>
                            </a>
                            <img src="/search.png" className="w-6 h-6 lg:hidden " alt="Search" />
                            <div className="hidden lg:flex flex-col lg:flex-row lg:items-center mr-36 lg:ml-auto">
                                <ul className="flex flex-wrap list-none justify-center lg:justify-start">
                                    <li className="mr-3">
                                        <button className="block border-green-700 w-full bg-green-700 text-white py-2 my-5 pl-3 text-sm border-b lg:hover:bg-green-300 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 mr-10">Cotizar</button>
                                    </li>
                                    <li className=" mr-10 my-5">
                                            <DropdownMenu title="Nosotros"/>
                                    </li>
                                    <li className="mr-10 my-5">
                                        <DropdownMenu title="Sostenibilidad"/>
                                    </li>
                                    <li className="mr-10 my-5">
                                        <DropdownMenu title="Divisiones" />
                                    </li>
                                    <li className="mr-10 my-5">
                                        <DropdownMenu title='Productos' />
                                    </li>
                                    <li className="mr-10 my-5">
                                        <DropdownMenu title='Promociones' />
                                    </li>
                                    <li className="mr-10 my-5">
                                        <DropdownMenu title='Tienda en línea' />
                                    </li>
                                    <li>
                                        <img src="/search.png" className="w-6 h-6 mr-10 my-5" alt="Search" />
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
