/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export interface FooterProps {
    // Define any props for the Footer component here
}

export const Footer: React.FC<FooterProps> = () => {
    return (
<div className='w-full'>
<div role='contentinfo'>
    <div  className="flex flex-col items-start justify-between w-full lg:h-80 2xl:items-center xs:h-auto sm:h-auto bg-black">
        <div className='xl:mt-7 xl:ml-48 sm:ml-10 sm:mr-16 sm:flex-col md:flex'>
            <div className='flex flex-col lg:flex-row ml-5'>
                    {/* Sección de redes sociales */}
                            <div className="flex-col flex mb-5 sm:mb-0 xs:pt-5 ">
                                <img src="/kfa_movil_40_white.png" className='xs:h-1/4 xs:w-2/4 md:w-80 md:h-auto' alt="Logo_KalischFA_white" />
                                <div className="flex flex-row mt-3">
                                    <div className="flex flex-row h-7 w-7 mt-2 mr-2">
                                        <FaFacebookSquare className='bg-black h-7 w-7 text-zinc-400 transition duration-200 ease-in-out hover:text-white transform hover:scale-105' />
                                    </div>
                                    <div className="flex flex-row h-7 w-7 mt-2 mr-2">
                                        <FaInstagram className='bg-black h-7 w-7 text-zinc-400 transition duration-200 ease-in-out hover:text-white transform hover:scale-105' />
                                    </div>
                                    <div className="flex flex-row h-7 w-7 mt-2 mr-2">
                                        <FaXTwitter className='bg-black h-7 w-7 text-zinc-400 transition duration-200 ease-in-out hover:text-white transform hover:scale-105' />
                                    </div>
                                    <div className="flex flex-row h-7 w-7 mt-2 mr-2">
                                        <FaYoutube className='bg-black h-8 w-8 text-zinc-400 transition duration-200 ease-in-out hover:text-white transform hover:scale-105' />
                                    </div>
                                    <div className="flex flex-row h-7 w-7 mt-2 mr-2">
                                        <FaLinkedin className='bg-black h-7 w-7 text-zinc-400 transition duration-200 ease-in-out hover:text-white transform hover:scale-105' />
                                    </div>
                                    <div className="flex flex-row h-7 w-7 mt-2 mr-2">
                                        <FaTiktok className='bg-black h-7 w-7 text-zinc-400 transition duration-200 ease-in-out hover:text-white transform hover:scale-105' />
                                    </div>
                                </div>
                            </div>
                            {/* Sección de empresa */}
                            <div className='lg:ml-3 flex flex-col mb-5 sm:mb-0  sm:pt-3 '>
                                <p className='text-sm  text-white'>Empresa</p>
                                <div className='flex flex-col lg:pt-3'>
                                    <p className='pt-2 text-sm text-zinc-400 hover:text-white hover:transition'>Acerca de Nosotros</p>
                                    <p className='pt-2 text-sm text-zinc-400 hover:text-white hover:transition'>Misión y Visión</p>
                                    <p className='ppt-2 text-sm text-zinc-400 hover:text-white hover:transition'>Código de ética</p>
                                    <p className='pt-2 text-sm text-zinc-400 hover:text-white hover:transition'>Cultura</p>
                                    <p className='pt-2 text-sm text-zinc-400 hover:text-white hover:transition'>Bolsa de Trabajo</p>
                                </div>
                            </div>
                            {/* Sección del logo */}
                            <div className='lg:ml-5 xl:ml-0 flex lg:h-20 lg:w-3/12 xs:w-2/5 xs:h-10 lg:mb-5  xs:mb-16 sm:mb-5 sm:mt-3 sm:w-2/6 sm:h-1/6 md:w-2/6 md:h-24'>
                                <img src="/esr_gptw-1.png" className="xl:ml-32 xs:w-60 xs:h-24 sm:w-auto md:w-auto md:h-auto lg:w-auto " alt="Kalisch_Logo"/>
                            </div>
                            {/* Sección de suscripción */}
                            <div className='flex flex-col  xl:ml-32  sm:mb-5 pb-5 md:pr-14'>
                    <p className=' text-base sm:text-sm md:text-md lg:text-lg text-white'>
                        Suscríbete a nuestras noticias
                    </p>
                    <div className='flex flex-col lg:w-72 md:w-auto pt-3'>
                        <div className=" xs:mr-60 lg:mt-2 lg:mr-32">
                            <a className="flex items-center h-10 justify-center xs:w-32 lg:w-auto py-2 bg-gray-300 hover:bg-green-800 text-gray-700 hover:text-white text-xs font-semibold tracking-wide rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                                Suscríbete
                            </a>
                        </div>
                        <div>
                            <p className='pt-2 text-xs md:w-auto text-zinc-300 text-justify'>
                                Al suscribirse, usted, está de acuerdo con nuestro <a className='text-xs text-zinc-400 hover:text-white hover:transition'>Aviso de privacidad</a> y proporciona su consentimiento para recibir actualizaciones de Kalisch Acero.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


        <div className="lg:flex flex-col md:flex-row  items-center justify-between w-full h-20 lg:max-h-20 bg-zinc-700">
            <div className='w-screen flex xs:flex-col sm:flex-row  lg:flex-row items-center'>
                <div className="lg:flex  lg:ml-16 lg:pl-16">
                    <a className="text-gray-300 text-xs">© 2022 Todos los derechos reservados.</a>
                </div>
                <div className="flex xl:ml-96 lg:ml-80 md:ml-72 mt-10 xl:pl-96 lg:pl-80 md:pl-72">
                    <a className="text-gray-300 text-xs sm:pb-10">Términos y Condiciones | Aviso de Privacidad</a>
                </div>
            </div>
        </div>
</div>
</div>
    );
};