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
        <div>
    <footer className="flex flex-col md:flex-row items-start justify-between w-full h-72 bg-black">
        <div className=' mt-7 ml-48'>
            <div className='flex flex-row mt-5 ml-5'>
                <div className="flex-col flex">
                    <img src="/kfa_movil_40_white.png" alt="Logo_KalischFA_white" />
                    <div className="flex flex-row">
                        <div className="flex flex-row h-7 w-7 mt-3 ml-2">
                            <FaFacebookSquare className='bg-black h-7 w-7 text-zinc-400' />
                        </div>
                        <div className="flex flex-row h-7 w-7 mt-3 ml-2">
                            <FaInstagram className='bg-black h-7 w-7 text-zinc-400' />
                        </div>
                        <div className="flex flex-row h-7 w-7 mt-3 ml-2">
                            <FaXTwitter className='bg-black h-7 w-7 text-zinc-400' />
                        </div>
                        <div className="flex flex-row h-7 w-7 mt-3 ml-2">
                            <FaYoutube className='bg-black h-8 w-8 text-zinc-400' />
                        </div>
                        <div className="flex flex-row h-7 w-7 mt-3 ml-2">
                            <FaLinkedin className='bg-black h-7 w-7 text-zinc-400' />
                        </div>
                        <div className="flex flex-row h-7 w-7 mt-3 ml-2">
                            <FaTiktok className='bg-black h-7 w-7 text-zinc-400' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col '>
                    <p className='pl-7 text-sm text-white'>Empresa</p>
                    <div className='flex flex-col pt-7'>
                        <p className='pl-7 pt-2 text-sm text-zinc-400 hover:text-white hover:transition'>Acerca de Nosotros</p>
                        <p className='pl-7 pt-2 text-sm text-zinc-400 hover:text-white hover:transition'>Misión y Visión</p>
                        <p className='pl-7 pt-2 text-sm text-zinc-400 hover:text-white hover:transition '>Código de ética</p>
                        <p className='pl-7 pt-2 text-sm text-zinc-400 hover:text-white hover:transition'>Cultura</p>
                        <p className='pl-7 pt-2 text-sm text-zinc-400 hover:text-white hover:transition'>Bolsa de Trabajo</p>
                    </div>
                </div>
                <div className='flex h-60 w-60'>
                    <img src="/esr_gptw-1.png" className=" ml-32 w-60 h-24 " alt="Kalisch_Logo"/>
                </div>
                <div className='flex flex-col ml-32'>
                    <p className='pl-7 text-sm text-white'>Suscribete a nuestras noticias</p>
                    <div className='flex flex-col w-72 pt-3'>
                        <div className=' ml-7 mt-2 py-4 justify-items-center bg-white flex mr-32 items-center rounded-md'>
                            <a className=' text-xs text-gray-400 pl-4'>Suscribete</a>
                        </div>
                        <p className='pl-7 pt-2 text-xs text-zinc-400 '>Al suscribirse, usted, está de acuerdo con nuestro <a className='text-xs text-zinc-600 hover:text-white hover:transition'>Aviso de privacidad</a> y proporciona su consentimiento para recibir actualizaciones de kalisch Acero.</p>
                        </div>
                </div>
            </div>
        </div>
    </footer>

    <footer className="flex flex-col md:flex-row items-center justify-between w-full h-20 lg:max-h-20 bg-gray-500">
        <div className='flex flex-row'>
            <div className="flex items-end mr-4">
                <a className="text-gray-300 text-xs">© 2022 Todos los derechos reservados.</a>
            </div>
            <div className="flex items-end w-full md:w-auto">
                <a className="text-gray-300 text-xs">Términos y Condiciones | Aviso de Privacidad</a>
            </div>
        </div>
    </footer>
</div>

    );
};
