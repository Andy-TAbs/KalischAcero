"use client";
import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

interface DropdownMenuMobileProps {
    // Agrega las propiedades necesarias aquí
}

const DropdownMenuMobile: React.FC<DropdownMenuMobileProps> = (DropdownMenuMobileprops) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isSubMenuOpenNosotros, setIsSubMenuOpenNosotros] = useState(false);
    const [isSubMenuOpenDivisiones, setIsSubMenuOpenDivisiones] = useState(false);
    const [isSubMenuOpenProductos, setIsSubMenuOpenProductos] = useState(false);
    const [isSubMenuOpenPromociones, setIsSubMenuOpenPromociones] = useState(false);
    const [isSubSubMenuOpen, setIsSubSubMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div
                onClick={toggleMenu}
                className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center space-y-1.5"
            >
                <div
                    className={`w-3/4 h-1.5 bg-green-900 rounded-lg transition-all duration-300 origin-right ${isOpen ? 'rotate-[-40deg] translate-y-[-3px]' : ''}`}
                ></div>
                <div
                    className={`w-full h-1.5 bg-green-900 rounded-lg transition-all duration-300 origin-center ${isOpen ? 'rotate-90 -translate-x-3' : ''}`}
                ></div>
                <div
                    className={`w-3/4 h-1.5 bg-green-900 rounded-lg transition-all duration-300 origin-right ${isOpen ? 'rotate-[40deg] translate-y-[3px]' : ''}`}
                ></div>
            </div>

            {isOpen && (
                <div
                    id="mobile-menu-2"
                    className="absolute top-full -left-2 w-screen items-center bg-white dark:bg-gray-700 z-50"
                >
                    <ul className="flex w-full flex-col  items-start">
                        <li className=" w-full">
                            <a href="/Cotizar" className="h-12 pl-4 font-semibold text-left text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Cotizar</a>
                        </li>

                        <li className="relative w-full border-y-1 border-neutral-200">
                            <button
                                onClick={() => setIsSubMenuOpenNosotros(!isSubMenuOpenNosotros)}
                                className={`h-12 pl-4 text-left font-semibold text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600`}
                            >
                                Nosotros
                                <IoIosArrowForward className={`${isSubMenuOpenNosotros ? 'rotate-90' : 'rotate-0'} ml-auto mr-7 transition-all ease-in duration-100`} />
                            </button>
                            {isSubMenuOpenNosotros && (
                                <ul className="w-full">
                                    <li className="relative w-full border-t-1 border-neutral-200">
                                    <a href="/Nosotros/Acerca-de-Nosotros" className="pl-8 h-12 text-left text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Acerca de Nosotros</a>
                                    </li>
                                    <li className="relative w-full border-t-1 border-neutral-200">
                                    <a href="/Nosotros/Mision-y-Vision" className="pl-8 h-12 text-left text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Misión y Visión</a>
                                    </li>
                                    <li className="relative w-full border-t-1 border-neutral-200">
                                    <a href="/Nosotros/Codigo-de-etica" className="pl-8 h-12 text-left text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Código de Ética</a>
                                    </li>
                                    <li className="relative w-full border-t-1 border-neutral-200">
                                    <a href="/Nosotros/Cultura" className="pl-8 h-12 text-left text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Cultura</a>
                                    </li>
                                    <li className="relative w-full border-t-1 border-neutral-200">
                                    <a href="/Nosotros/Talent0" className="pl-8 h-12 text-left text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Talento</a>
                                    </li>
                                    <li className="relative w-full border-t-1 border-neutral-200">
                                    <a href="/Nosotros/Noticias" className="pl-8 h-12 text-left text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Noticias</a>
                                    </li>
                                </ul>
                            )}
                        </li>



                        <li className="relative border-b-1 w-full">
                            <button
                                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                                className={`h-12 pl-4 text-left font-semibold text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600`}
                            >
                                Sostenibilidad
                                <IoIosArrowForward className={`${isSubMenuOpen ? 'rotate-90' : 'rotate-0'} ml-auto mr-7 transition-all ease-in duration-100`} />
                            </button>
                            {isSubMenuOpen && (
                                <ul className="w-full">
                                    <li className="relative border-y-1 w-full">
                                        <button
                                            onClick={() => setIsSubSubMenuOpen(!isSubSubMenuOpen)}
                                            className=" h-12 w-full pl-8 text-left  text-2xl flex flex-row items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                                        >
                                            Filantropía
                                            <IoIosArrowForward className={`${isSubSubMenuOpen ? 'rotate-90' : 'rotate-0'} ml-auto mr-7 transition-all ease-in duration-100`} />
                                        </button>
                                        {isSubSubMenuOpen && (
                                            <ul className=" items-center">
                                                <li className="border-y-1">
                                                    <a href="#" className= " pl-12 h-12 w-full text-left  font-light text-2xl flex flex-row items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 ">Contigo</a>
                                                </li>
                                                <li className="">
                                                    <a href="#" className= " pl-12 h-12 w-full text-left font-light text-2xl flex flex-row items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 ">Juguetiza</a>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    <li className="">
                                        <a href="#" className= " pl-8 h-12 w-full border-b-1 text-left  text-2xl flex flex-row items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 ">Empresa Socialmente Responsable</a>
                                    </li>
                                    <li className="border-b-1">
                                        <a href="#" className= " pl-8 h-12 w-full text-left  text-2xl flex flex-row items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 ">Politica de Medio Ambiente</a>
                                    </li>
                                </ul>
                            )}
                        </li>




                        <li className="relative w-full border-y-1 border-neutral-200">
                            <button
                                onClick={() => setIsSubMenuOpenDivisiones(!isSubMenuOpenDivisiones)}
                                className={`h-12 pl-4 text-left font-semibold text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600`}
                            >
                                Divisiones
                                <IoIosArrowForward className={`${isSubMenuOpenDivisiones ? 'rotate-90' : 'rotate-0'} ml-auto mr-7 transition-all ease-in duration-100`} />
                            </button>
                            {isSubMenuOpenDivisiones && (
                                <ul className="w-full">
                                    <li className="relative w-full border-t-1 border-neutral-200">
                                    <a href="#" className="pl-8 h-12 text-left  text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Besthal</a>
                                    </li>
                                    <li className="relative w-full border-t-1 border-neutral-200">
                                    <a href="#" className="pl-8 h-12 text-left  text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Faber</a>
                                    </li>
                                    <li className="relative w-full border-t-1 border-neutral-200">
                                    <a href="#" className="pl-8 h-12 text-left  text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Kalisch Steel</a>
                                    </li>
                                    <li className="relative w-full border-t-1 border-neutral-200">
                                    <a href="#" className="pl-8 h-12 text-left  text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Tienda en linea</a>
                                    </li>
                                </ul>
                            )}
                        </li>



                        <li className="relative w-full border-y-1 border-neutral-200">
                            <button
                                onClick={() => setIsSubMenuOpenProductos(!isSubMenuOpenProductos)}
                                className={`h-12 pl-4 text-left font-semibold text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600`}
                            >
                                Productos
                                <IoIosArrowForward className={`${isSubMenuOpenProductos ? 'rotate-90' : 'rotate-0'} ml-auto mr-7 transition-all ease-in duration-100`} />
                            </button>
                            {isSubMenuOpenProductos && (
                                <ul className="w-full">
                                    <li className="relative w-full border-t-1 border-neutral-200">
                                    <a href="#" className="pl-8 h-12 text-left  text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Productos</a>
                                    </li>
                                    <li className="relative w-full border-t-1 border-neutral-200">
                                    <a href="#" className="pl-8 h-12 text-left  text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Catálogo</a>
                                    </li>
                                </ul>
                            )}
                        </li>



                        <li className="relative w-full border-y-1 border-neutral-200">
                            <button
                                onClick={() => setIsSubMenuOpenPromociones(!isSubMenuOpenPromociones)}
                                className={`h-12 pl-4 text-left font-semibold text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600`}
                            >
                                Promociones
                                <IoIosArrowForward className={`${isSubMenuOpenPromociones ? 'rotate-90' : 'rotate-0'} ml-auto mr-7 transition-all ease-in duration-100`} />
                            </button>
                            {isSubMenuOpenPromociones && (
                                <ul className="w-full">
                                    <li className="relative w-full border-t-1 border-neutral-200">
                                    <a href="#" className="pl-8 h-12 text-left  text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Promociones</a>
                                    </li>
                                    <li className="relative w-full border-t-1 border-neutral-200">
                                    <a href="#" className="pl-8 h-12 text-left  text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">La hora del Herrero</a>
                                    </li>
                                </ul>
                            )}
                        </li>



                        <li className=" w-full  border-neutral-200">
                            <a href="#" className="h-12 pl-4 font-semibold text-left text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Cliente Consentido</a>
                        </li>
                        <li className=" w-full border-t-1 border-neutral-200">
                            <a href="#" className="h-12 pl-4 font-semibold text-left text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Sucursales</a>
                        </li>
                        <li className=" w-full border-t-1 border-neutral-200">
                            <a href="/Contacto" className="h-12 pl-4 font-semibold text-left text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Contáctanos</a>
                        </li>
                        <li className=" w-full border-t-1 border-neutral-200">
                            <a href="#" className="h-12 pl-4 font-semibold text-left text-2xl flex flex-row max-w-screen w-full items-center justify-between text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">Tienda en Línea</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownMenuMobile;
