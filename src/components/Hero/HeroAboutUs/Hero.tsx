"use client";
import React from 'react';
import Image from 'next/image';
import SocialButtons from '@/components/Global/SocialButtons';
import ScrollTopButton from '@/components/Global/ScrollTopButton';
import { Timeline } from "./TimelineAboutUs";

interface HeroProps {
}

const Hero: React.FC<HeroProps> = () => {
    return (
        <div className="w-screen">
            <div className='h-204 relative '>
                <video autoPlay muted loop id="background-video" className="absolute inset-0 z-0 w-full h-full object-cover">
                    <source src="/nosotrostitulos.mp4" type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>
                <div className='absolute inset-0 flex right-144 lg:top-56 md:top-56 sm:top-56 xs:top-56 xsm:top-56 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-28 xs:left-10 z-10'>
                    <p className='sm:text-sm xs:text-xxs font-Bebas_Neue text-white'>I N I C I O  /  N O S O T R O S</p>
                </div>
                <div className='absolute inset-0 flex right-144 lg:top-56 md:top-56 sm:top-60 xs:top-60 xsm:top-60 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-28 xs:left-10 z-10'>
                    <p className='md:text-11xl xs:text-7xl sm:text-9xl font-Bebas_Neue text-white font-extrabold'>ACERCA DE</p>
                </div>
                <div className='absolute inset-0 flex right-144 lg:top-88 md:top-88 sm:top-88 xs:top-76 xsm:top-76 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-28 xs:left-10  z-10'>
                    <p className='md:text-11xl xs:text-7xl sm:text-9xl font-Bebas_Neue text-white font-extrabold'>NOSOTROS</p>
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
                        <div className=''>
                            <p className='text-2xl'>Nuestros Inicios</p>
                        </div>
                        <div className='mt-5 w-auto'>
                            <p className='w-auto text-justify font-light'>En el año 1979 nació <b>Kalisch Acero</b> en la ciudad de Chihuahua, Chihuahua. Iniciamos con el proyecto de comercialización del acero y posteriormente añadimos una amplia gama de herramienta y ferretería, además, del habilitado de acero. En México contamos con sucursales en los estados de Chihuahua, Sonora, Sinaloa, Durango, Aguascalientes, Guanajuato y Zacatecas, además, en 2009 iniciamos nuestras operaciones en El Paso, Texas con la apertura de Kalisch Steel.</p>
                        </div>
                        <div className='mt-7 w-auto '>
                            <p className='w-auto text-justify font-light'>En <b>Kalisch Acero</b> contamos con maquinaria de vanguardia, equipo innovador y desarrollo de talento que nos ayuda a fortalecer la relación con nuestros clientes y brindarles el mejor servicio. Nuestro código de conducta y normas están basados en nuestros valores, además, constantemente nos esforzamos por ser una empresa sostenible y comprometida con nuestra comunidad.</p>
                        </div>
                    </div>

                    <div className='mx-32 md:mx-12 my-12 items-center '>
                        <div className='sm:ml-5'>
                            <p className='text-2xl '>Conoce Nuestra Historia</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <Timeline />
                </div>
            </div>
        </div>
    );
};

export default Hero;