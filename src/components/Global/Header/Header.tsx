"use client";
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import DropdownMenu from './dropdownMenu';
import { SecHeader } from './secHeader';
import DropdownMenuMobile from './dropdownMenuMobile';
import Link from 'next/link';

interface HeaderProps {
    title: string;
}

const headerOptionsNosotros = [
    { label: 'Acerca de nosotros', link: '/AboutUs' },
    { label: 'Misión y Visión', link: '/MisionVision' },
    { label: 'Código de ética', link: '/EthicalCode' },
    { label: 'Cultura', link: '/Culture' },
    { label: 'Talento', link: '/Talent' },
    { label: 'Noticias', link: '/News' }
  ];
  const headerOptionsSostenibilidad = [
    { label: 'Filantropía', link: '/' },
    { label: 'Empresa socialmente responsable', link: '/about' },
    { label: 'Politica de medio ambiente', link: '/services' }
];
const headerOptionsDivisiones = [
    { label: 'Kalisch Steel', link: 'https://kalischsteel.com/' },
    { label: 'Faber', link: 'https://www.faberkalisch.com/' },
    { label: 'Besthal', link: 'https://besthal.com/' },
    { label: 'Boxtool', link: 'https://www.boxtool.mx/' }
];
const headerOptionsProductos = [
    { label: 'Planos', link: '/' },
    { label: 'Estructurales', link: '/about' },
    { label: 'Perfilería', link: '/services' },
    { label: 'Recubiertos', link: '/contact' },
    { label: 'Solidos', link: '/blog' },
    { label: 'Trefilados', link: '/blog' },
    { label: 'Polinería', link: '/blog' },
    { label: 'Tubería', link: '/blog' }
];
const headerOptionsPromociones = [
    { label: 'Promociones', link: '/' },
    { label: 'La hora del hierro', link: '/about' }
];

export const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header>
        <div className=''>
            <div className="hidden lg:block ">
                <SecHeader title="Header" />
            </div>
            <div className="w-full ">
                    <nav className="bg-white px-2 bg-opacity-100 backdrop-blur-md  lg:px-4 dark:bg-gray-800 border-b-2 shadow-md h-16 xs:items-center lg:items-baseline">
                        <div className="flex items-center justify-between w-full lg:justify-start lg:flex-grow-0 lg:order-2">
                            <div className="lg:hidden">
                                <DropdownMenuMobile />
                            </div>
                            <a href="/" className="mx-auto lg:mx-0 ">
                                <img src="/kfa_movil_50.png" className="lg:h-9 sm:h-9 xs:h-10 2xl:pl-20 2xl:ml-20" alt="Kalisch_Logo"/>
                            </a>
                            <img src="/search.png" className="w-6 h-6 lg:hidden" alt="Search" />
                            <div className="hidden lg:flex flex-col lg:flex-row lg:items-center lg:ml-auto 2xl:mr-52 ">
                                <ul className="flex flex-wrap list-none justify-start lg:justify-start lg:space-x-4 space-y-4 lg:space-y-0 ">
                                <li className="">
                                <button className="btnHeader">Cotizar</button>

                                </li>
                                    <li className="lg:mr-10 pt-2">
                                        <DropdownMenu title="Nosotros" options={headerOptionsNosotros}/>
                                    </li>
                                    <li className="lg:mr-10 pt-2">
                                        <DropdownMenu title="Sostenibilidad" options={headerOptionsSostenibilidad}/>
                                    </li>
                                    <li className="lg:mr-10 pt-2">
                                        <DropdownMenu title="Divisiones" options={headerOptionsDivisiones}/>
                                    </li>
                                    <li className="lg:mr-10 pt-2">
                                        <DropdownMenu title='Productos' options={headerOptionsProductos}/>
                                    </li>
                                    <li className="lg:mr-10 pt-2">
                                        <DropdownMenu title='Promociones' options={headerOptionsPromociones}/>
                                    </li>
                                    <li className="lg:mr-10 pt-3">
                                        <a href="#" className=" pt-3">Tienda en línea</a>
                                    </li>
                                    <li>
                                        <img src="/search.png" className="w-6 h-6 mt-3" alt="Search" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
            </div>
        </div>
        </header>
    );
};
