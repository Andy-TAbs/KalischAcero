"use client";
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import DropdownMenu from './dropdownMenu';
import { SecHeader } from './secHeader';
import DropdownMenuMobile from './dropdownMenuMobile';
import Link from 'next/link';
import Image from 'next/image';
import DropdownMenuWSubMenu from './DropDownMenuWSubMenu';

interface HeaderProps {
    title: string;
}

const headerOptionsNosotros = [
    { label: 'Acerca de nosotros', link: '/Nosotros/Acerca-de-Nosotros' },
    { label: 'Misión y Visión', link: '/Nosotros/Mision-y-Vision' },
    { label: 'Código de ética', link: '/Nosotros/Codigo-de-etica' },
    { label: 'Cultura', link: '/Nosotros/Cultura' },
    { label: 'Talento', link: '/Nosotros/Talento' },
    { label: 'Noticias', link: '/Nosotros/Noticias' }
  ];
const headerOptionsSostenibilidad = [
    {
        label: 'Filantropía',
        link: '#',
        submenu: [
            { label: 'Contigo', link: '/Sostenibilidad/Filantropia/Contigo' },
            { label: 'Juguetiza', link: '/Sostenibilidad/Filantropia/Juguetiza' },
            { label: 'Tapatón', link: '/Sostenibilidad/Filantropia/Tapaton' },
        ],
    },
    {
        label: 'Empresa Socialmente Responsable',
        link: '/Sostenibilidad/Empresa-Socialmente-Responsable',
    },
    {
        label: 'Política de Medio Ambiente',
        link: '/Sostenibilidad/Politica-de-Medio-Ambiente',
    },
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
        <div>
        <div className=''>
            <div className="hidden lg:block z-50">
                <SecHeader title="Header" />
            </div>
            <div className="w-full ">
                    <nav className="bg-white px-2 bg-opacity-100  lg:px-4 border-b-2 shadow-md lg:h-16 xs:items-center lg:items-baseline xs:h10 z-40">
                        <div className="flex items-center justify-between w-full lg:justify-start lg:flex-grow-0 lg:order-2  ">
                        <div className="lg:hidden">
                                <DropdownMenuMobile />
                            </div>
                            <a href="/" className="mx-auto lg:mx-0 ">
                                <Image width={200} height={100} src="/kfa_movil_50.png" className="lg:h-9 w-auto sm:h-9 xs:h-10 2xl:pl-16 2xl:ml-20 z-40 " alt="Kalisch_Logo"/>
                            </a>
                            <img src="/search.png" className="w-6 h-6 lg:hidden" alt="Search" />
                            <div className="hidden lg:flex flex-col lg:flex-row lg:items-center lg:ml-auto 2xl:mr-52 ">
                                <ul className="flex flex-wrap list-none justify-start lg:justify-start lg:space-x-4 space-y-4 lg:space-y-0 ">
                                <li className="">
                                <a href='/Cotizar'><button className="btnHeader">Cotizar</button></a>
                                </li>
                                    <li className="lg:mr-10 pt-2">
                                        <DropdownMenu title="Nosotros" options={headerOptionsNosotros}/>
                                    </li>
                                    <li className="lg:mr-10 pt-2">
                                        <DropdownMenuWSubMenu title="Sostenibilidad" options={headerOptionsSostenibilidad}/>
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
                                        <a href="#" className=" pt-3 text-neutral-600">Tienda en línea</a>
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
        </div>
    );
};
