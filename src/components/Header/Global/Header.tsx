"use client";
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import DropdownMenu from './dropdownMenu';
import { SecHeader } from './secHeader';
import DropdownMenuMobile from '../Mobile/dropdownMenuMobile';

interface HeaderProps {
    title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <div className=''>
            <div className="hidden lg:block h-10">
                <SecHeader title="Header" />
            </div>
            <div className="h-28 ">
                <header className=" w-screen">
                    <nav className="bg-white border-gray-200 px-2  lg:px-4 dark:bg-gray-800 border-b-2 shadow-md ">
                        <div className="flex items-center justify-between w-full lg:justify-start lg:flex-grow-0 lg:order-2">
                            <div className="lg:hidden">
                                <DropdownMenuMobile />
                            </div>
                            <a href="https://flowbite.com" className="mx-auto lg:mx-0 xl::ml-12">
                                <img src="/kfa_movil_50.png" className="lg:h-9 sm:h-9 xs:h-9 2xl:pl-20 2xl:ml-28" alt="Kalisch_Logo"/>
                            </a>
                            <img src="/search.png" className="w-6 h-6 lg:hidden" alt="Search" />
                            <div className="hidden lg:flex flex-col lg:flex-row lg:items-center lg:ml-auto 2xl:mr-52 ">
                                <ul className="flex flex-wrap list-none justify-center lg:justify-start lg:space-x-4 space-y-4 lg:space-y-0 ">
                                <li className="">
                                    <button className="block w-24 h-14 mt-2  bg-green-700 text-white text-sm border-green-700 border-b transition-colors duration-300 ease-in-out hover:bg-green-500 lg:border-0 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                        Cotizar
                                    </button>
                                </li>
                                    <li className="lg:mr-10 pt-5">
                                        <DropdownMenu title="Nosotros"/>
                                    </li>
                                    <li className="lg:mr-10 pt-5">
                                        <DropdownMenu title="Sostenibilidad"/>
                                    </li>
                                    <li className="lg:mr-10 pt-5">
                                        <DropdownMenu title="Divisiones" />
                                    </li>
                                    <li className="lg:mr-10 pt-5">
                                        <DropdownMenu title='Productos' />
                                    </li>
                                    <li className="lg:mr-10 pt-5">
                                        <DropdownMenu title='Promociones' />
                                    </li>
                                    <li className="lg:mr-10 pt-5">
                                        <a href="#" className=" pt-5">Tienda en línea</a>
                                    </li>
                                    <li>
                                        <img src="/search.png" className="w-6 h-6 mt-5" alt="Search" />
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
