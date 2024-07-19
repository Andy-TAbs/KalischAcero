/* eslint-disable @next/next/no-img-element */
import React from 'react';
import DropdownMenuPlaces from './DropDownMenuPlaces';

interface HeaderProps {
    title: string;
}

const headerOptionsPlaces = [
    { label: 'Colegio Militar', text: "Av. H. Colegio Militar #265, Col. Nombre de Dios C.P. 31150, Chihuahua, Chihuahua, Mex.", phone: "614-xxx-xxxx" },
    { label: 'Chuviscar',  text: "Av. Teófilo Borunda 3903 Col. Santo Niño C.P. 31200, Chihuahua, Chihuahua, Mex.", phone: "614-xxx-xxxx"  },
    { label: 'Flores Magón', text: "Av. Flores Magón #5810 Col. Inalambrica,  C.P. 31460, Chihuahua, Chihuahua, Mex.", phone: "614-xxx-xxxx"  },
    { label: 'La curva', text: "Av. Tecnológico 10711 Col. Deportistas C.P. 31125, Chihuahua, Chihuahua, Mex.", phone: "614-xxx-xxxx"  },
    { label: 'Esmeralda', text: "Vialidad CH-P #2301-A Col. Mármol, C.P. 31063Chihuahua, Chihuahua, Mex.", phone: "614-xxx-xxxx"  },
    { label: 'Los Nogales', text: "Vialidad Los Nogales 3105 Col. Rodolfo Fierro C.P. 31137, Chihuahua, Chihuahua, Mex.", phone: "614-xxx-xxxx"  },
    { label: 'R. Almada',  text: "Periférico R. Almada #9602 Col. 3 de Mayo C.P. 31065, Chihuahua, Chihuahua, Mex.", phone: "614-xxx-xxxx"  },
    { label: 'Oficinas Corporativas', text: "Av. H. Colegio Militar #265, Col. Nombre de Dios C.P. 31150, Chihuahua, Chihuahua, Mex.", phone: "614-xxx-xxxx"  },
    { label: 'Delicias', text: "Av. 7ª Oriente #609, Col. Centro C.P. 33000, Delicias, Chihuahua, Mex.", phone: "614-xxx-xxxx"  },
    { label: 'Nvo. Casas Grandes', text: "Av. Tulipán #4506 Parque Industrial Paquimé C.P. 31755, Casas Grandes, Chihuahua, Mex.", phone: "614-xxx-xxxx"  },
    { label: 'Cuauhtémoc', text: "Corredor Comercial #543, Col. Fernando Baeza C.P. 31510, Cuauhtémoc, Chihuahua, Mex.", phone: "614-xxx-xxxx"  }
];

export const SecHeader: React.FC<HeaderProps> = ({ title }) => {
    return (
<div className="hidden lg:block">
    <header className='w-screen '>
        <nav className="bg-white bg-opacity-90 backdrop-blur-md px-6 lg:px-6 py-1 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-end mx-auto max-w-screen-xl">
                    <DropdownMenuPlaces title="Colegio Militar" options={headerOptionsPlaces}/>
                <div className="hidden xl:pr-32 pb-5 justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li className='flex flex-row transition duration-200 ease-in-out  transform hover:scale-110'>
                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><img src="/cc_logo.png"  className="mr-2  sm:h-4" alt="cc_logo" /></a>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 transition duration-200 ease-in-out hover:text-green-900 transform hover:scale-110">Cliente consentido</a>
                        </li>
                        <li className='flex flex-row transition duration-200 ease-in-out  transform hover:scale-110'>
                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><img src="/placeholder_kalisch.svg"  className="mr-2  sm:h-4" alt="placeholder_kalisch" /></a>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 transition duration-200 ease-in-out hover:text-green-900 transform hover:scale-110">Sucursales</a>
                        </li>
                        <li className='flex flex-row transition duration-200 ease-in-out  transform hover:scale-110'>
                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><img src="/contacto1_kalischacero_svg-1.svg"  className="mr-2  sm:h-4" alt="contacto1_kalischacero_svg-1" /></a>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 transition duration-200 ease-in-out hover:text-green-900 transform hover:scale-110">Contacto</a>
                        </li>
                        <li className='flex flex-row transition duration-200 ease-in-out  transform hover:scale-110'>
                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><img src="/catalogo_kalischacero_svg-1.svg"  className="mr-2  sm:h-4" alt="catalogo_kalischacero_svg-1" /></a>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 transition duration-200 ease-in-out hover:text-green-900 transform hover:scale-110">Catálogo</a>
                        </li>
                        <li className='flex flex-row transition duration-200 ease-in-out  transform hover:scale-110'>
                        <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><img src="/usa.png"  className="mr-2  sm:h-3" alt="english_lang" /></a>
                            <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 transition duration-200 ease-in-out hover:text-green-900 transform hover:scale-110">English</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</div>
    );
};

