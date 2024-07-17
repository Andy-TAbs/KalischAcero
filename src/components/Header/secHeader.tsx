/* eslint-disable @next/next/no-img-element */
import React from 'react';
import DropdownMenuPlaces from './DropDownMenuPlaces';

interface HeaderProps {
    title: string;
}

const headerOptionsPlaces = [
    { label: 'Acerca de nosotros', link: '/' },
    { label: 'Misión y Visión', link: '/about' },
    { label: 'Código de ética', link: '/services' },
    { label: 'Cultura', link: '/contact' },
    { label: 'Talento', link: '/blog' },
    { label: 'Noticias', link: '/blog' }
  ];

export const SecHeader: React.FC<HeaderProps> = ({ title }) => {
    return (
<div className="hidden lg:block">
    <header className='w-screen '>
        <nav className="bg-white border-gray-200 px-6 lg:px-6 py-1 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-end mx-auto max-w-screen-xl">
                    
                    <DropdownMenuPlaces title="Holacomo estas" options={headerOptionsPlaces}/>
                <div className="hidden xl:pr-32 pb-5 justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li className='flex flex-row'>
                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><img src="/cc_logo.png"  className="mr-2  sm:h-4" alt="cc_logo" /></a>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Cliente consentido</a>
                        </li>
                        <li className='flex flex-row'>
                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><img src="/placeholder_kalisch.svg"  className="mr-2  sm:h-4" alt="placeholder_kalisch" /></a>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Sucursales</a>
                        </li>
                        <li className='flex flex-row'>
                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><img src="/contacto1_kalischacero_svg-1.svg"  className="mr-2  sm:h-4" alt="contacto1_kalischacero_svg-1" /></a>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contacto</a>
                        </li>
                        <li className='flex flex-row'>
                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><img src="/catalogo_kalischacero_svg-1.svg"  className="mr-2  sm:h-4" alt="catalogo_kalischacero_svg-1" /></a>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Catálogo</a>
                        </li>
                        <li className='flex flex-row'>
                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><img src="/usa.png"  className="mr-2  sm:h-3" alt="english_lang" /></a>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">English</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</div>
    );
};

