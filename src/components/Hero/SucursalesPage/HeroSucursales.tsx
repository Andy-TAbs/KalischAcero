"use client";
import React from 'react';
import Image from 'next/image';
import SocialButtons from '@/components/Global/SocialButtons';
import ScrollTopButton from '@/components/Global/ScrollTopButton';
import { IoIosMail } from "react-icons/io";
import Sucursales from './Sucursales';

interface HeroProps {
}

const Hero: React.FC<HeroProps> = () => {
    return (
        <div className="w-screen">
            <div className='h-204 relative '>
                <video autoPlay muted loop id="background-video" className="absolute inset-0 z-0 w-full h-full object-cover">
                    <source src="/mexico.mp4" type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>
                <div className='absolute inset-0 flex right-144 lg:top-56 md:top-56 sm:top-56 xs:top-56 xsm:top-56 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-28 xs:left-10 z-10'>
                    <p className='sm:text-sm xs:text-xxs font-Bebas_Neue text-white'>E &nbsp;S &nbsp;T &nbsp;A &nbsp;M &nbsp;O &nbsp;S &nbsp;&nbsp;&nbsp;&nbsp; D &nbsp;O &nbsp;N &nbsp;D &nbsp;E &nbsp;&nbsp;&nbsp;&nbsp; T &nbsp;U &nbsp;&nbsp;&nbsp;&nbsp; N &nbsp;E &nbsp;C &nbsp;E &nbsp;S &nbsp;I &nbsp;T &nbsp;E &nbsp;S</p>
                </div>
                <div className='absolute inset-0 flex right-144 lg:top-56 md:top-56 sm:top-60 xs:top-60 xsm:top-60 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-28 xs:left-10 z-10'>
                    <p className='md:text-11xl xs:text-7xl sm:text-9xl font-Bebas_Neue text-white font-extrabold'>SUCURSALES</p>
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
                <div className='flex flex-col mx-20 h-full '>
                    <div className='lg:mx-32 md:mx-12 my-12 '>
                        <div className='flex flex-row'>
                            <div className='mr-32'>
                                <p className='text-3xl font-medium'>Chihuahua</p>
                            </div>
                            <button className='bg-neutral-200 hover:bg-green-900 hover:text-white hover:w-48 ease-in transition-all duration-150 rounded-md w-40 h-11 items-center justify-evenly flex flex-row'>
                            <div className='w-ful flex'>
                                <p className='text-lg'>Cotizar aquí</p>
                            </div>
                            <IoIosMail className='h-7 w-auto' />
                            </button>
                        </div>

                        <div className='mt-5 w-auto'>
                            <p className='w-auto text-justify font-light'>En el año 1979 nació <b>Kalisch Acero</b> en la ciudad de Chihuahua, Chihuahua. Iniciamos con el proyecto de comercialización del acero y posteriormente añadimos una amplia gama de herramienta y ferretería, además, del habilitado de acero. En México contamos con sucursales en los estados de Chihuahua, Sonora, Sinaloa, Durango, Aguascalientes, Guanajuato y Zacatecas, además, en 2009 iniciamos nuestras operaciones en El Paso, Texas con la apertura de Kalisch Steel.</p>
                        </div>
                        <div className='mt-7 w-auto '>
                            <p className='w-auto text-justify font-light'>En <b>Kalisch Acero</b> contamos con maquinaria de vanguardia, equipo innovador y desarrollo de talento que nos ayuda a fortalecer la relación con nuestros clientes y brindarles el mejor servicio. Nuestro código de conducta y normas están basados en nuestros valores, además, constantemente nos esforzamos por ser una empresa sostenible y comprometida con nuestra comunidad.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;