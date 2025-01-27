"use client";
import React from 'react';
import Image from 'next/image';
import { FaDownload } from "react-icons/fa6";
import SocialButtons from '@/components/Global/SocialButtons';
import ScrollTopButton from '@/components/Global/ScrollTopButton';

interface HeroProps {
}

const Hero: React.FC<HeroProps> = () => {
    return (
        <div className="w-screen">
            <div className='h-204 relative'>
                <video autoPlay muted loop id="background-video" className="absolute inset-0 z-0 w-full h-full object-cover select-none">
                    <source src="/Codigo_Etica.mp4" type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>
                <div className='absolute inset-0 flex lg:right-144 md:right-80 sm:right-40 xs:right-32 lg:top-48 md:top-48 sm:top-48 xs:top-48 xsm:top-48 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-28 xs:left-10 z-10'>
                    <p className='sm:text-sm xs:text-xxs font-Bebas_Neue text-white select-none'>I &nbsp;N &nbsp;I &nbsp;C &nbsp;I &nbsp;O  &nbsp;&nbsp;/&nbsp;&nbsp;  N &nbsp;O &nbsp;S &nbsp;O &nbsp;T &nbsp;R &nbsp;O &nbsp;S</p>
                </div>
                <div className='absolute inset-0 flex right-144 lg:top-56 md:top-56 sm:top-60 xs:top-60 xsm:top-60 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-28 xs:left-10 z-10'>
                    <p className='md:text-11xl xs:text-7xl sm:text-9xl font-Bebas_Neue text-white font-extrabold select-none'>CÓDIGO DE</p>
                </div>
                <div className='absolute inset-0 flex right-144 lg:top-88 md:top-88 sm:top-88 xs:top-76 xsm:top-76 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-28 xs:left-10  z-10'>
                    <p className='md:text-11xl xs:text-7xl sm:text-9xl font-Bebas_Neue text-white font-extrabold select-none'>ÉTICA</p>
                </div>
            </div>
            <div>
                <SocialButtons />
            </div>
            <div className='bg-white h-auto pb-24'>
                <div className="fixed z-50 items-end bottom-5 right-8">
                    <div className="sticky-position xs:hidden md:block">
                        <ScrollTopButton />
                    </div>
                </div>
                <div className='flex flex-col mx-20 h-full items-center'>
                    <div className='lg:mx-32 md:mx-12 my-12 items-center'>
                        <div className='w-auto'>
                            <p className='w-auto text-justify font-light text-neutral-800'>Nuestro código de ética es la expresión del compromiso de todos los colaboradores de <strong>Kalisch Acero</strong> por mantener los más altos niveles de desempeño y un comportamiento óptimo, que oriente la forma de hacer negocios con honestidad, ética, profesionalismo y los valores de la empresa.</p>
                        </div>
                        <div className='mt-7 w-auto '>
                            <p className='w-auto text-justify font-light text-neutral-800'>Nuestros grupos de interés son: <strong>clientes, colaboradores, proveedores, accionistas, competidores, autoridades, acreedores y comunidad.</strong></p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mx-20 h-full items-center'>
                    <div className='lg:mx-32 md:mx-12 my-12 items-center'>
                        <div className=''>
                            <p className='text-2xl text-neutral-800'>Construyendo un Entorno Organizacional Favorable</p>
                        </div>
                        <div className='mt-5 w-auto'>
                            <p className='w-auto text-justify font-light text-neutral-800'>En <strong>Kalisch Acero</strong> nos preocupamos y ocupamos por construir un Entorno Organizacional Favorable, promover el sentido de pertenencia en la compañía, además de identificar, analizar y prevenir Factores de Riesgo Psicosocial entre nuestros colaboradores.</p>
                        </div>
                        <div className='mt-7 w-auto '>
                            <p className='w-auto text-justify font-light text-neutral-800'>Asumimos este compromiso con nuestra Política de Bienestar, la cual fomentamos activamente en nuestra compañía.</p>
                        </div>
                        <div className='mt-7 w-auto '>
                            <p className='w-auto text-justify font-medium text-neutral-800'>¡Conócela!</p>
                        </div>
                        <div className='mt-5'>
                        <button className="cursor-pointer transition-all flex flex-row items-center justify-center bg-zinc-100 text-zinc-400 hover:text-white  px-6 py-2 rounded-lg
                            border-zinc-300
                            border-b-[4px] hover:bg-green-700 hover:border-green-800 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                            <div>
                                <p className=' '>Politica de Bienestar</p>
                            </div>
                            <div>
                                <FaDownload className="inline-block text-sm text-zinc-400 hover:text-white  ml-2" />
                            </div>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;