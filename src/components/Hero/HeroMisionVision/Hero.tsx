"use client";
import React from 'react';
import Image from 'next/image';
import { Accordion } from 'react-bootstrap';
import ScrollTopButton from '@/components/Global/ScrollTopButton';
import SocialButtons from '@/components/Global/SocialButtons';
import AccordionItem from '@/components/Global/AccordionItem';
interface HeroProps {
}

const accordionItems = [
    {
        header: 'Misión',
        body: 'Crear un valor superior para nuestros clientes y colaboradores, proporcionando el mejor servicio en la comercialización de productos y soluciones innovadoras de acero a través de nuestra filosofía “Experiencia ÚniKa”.'
    },
    {
        header: 'Visión',
        body: 'Ser líder en el servicio y comercialización de acero en el noroeste y centro de México.  Continuar con la apertura de sucursales en México y optimizar la logística de distribución conforme al crecimiento planeado. Operar con procesos y sistemas ágiles, innovadores y efectivos. Fortalecer el negocio de habilitación y otros servicios integrales de acero. Consolidar la filosofía experiencia ÚniKa, que busca mantener la calidez en el trato, el cumplimiento de promesas, calidad y agilidad en el servicio, colaboradores capacitados y disponibilidad en el producto. Conservar la certificación Great Place to Work, manteniendo un equipo de colaboradores competente, motivado y comprometido. Conservar el distintivo de Empresa Socialmente Responsable. Incrementar la calidad de vida de los colaboradores. Emplear la comercialización de acero y accesorios por internet.'
    },
    {
        header: 'Accordion Item #2',
        body: 'Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        header: 'Accordion Item #2',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
];

const Hero: React.FC<HeroProps> = () => {
    return (
    <div className="w-screen">
        <div className='h-204 relative '>
                <video autoPlay muted loop id="background-video" className="absolute inset-0 z-0 w-full h-full object-cover">
                    <source src="/nosotrostitulos.mp4" type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>
                <div className='absolute inset-0 flex lg:top-56 md:top-56 sm:top-56 xs:top-56 xsm:top-56 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-28 xs:left-10 z-10'>
                    <p className='sm:text-sm xs:text-xxs font-Bebas_Neue text-white'>I N I C I O  /  N O S O T R O S</p>
                </div>
                <div className='absolute inset-0 flex lg:top-56 md:top-56 sm:top-60 xs:top-60 xsm:top-60 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-28 xs:left-10 z-10'>
                    <p className='md:text-11xl xs:text-7xl sm:text-9xl font-Bebas_Neue text-white font-extrabold'>ACERCA DE</p>
                </div>
                <div className='absolute inset-0 flex lg:top-88 md:top-88 sm:top-88 xs:top-76 xsm:top-76 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-28 xs:left-10  z-10'>
                    <p className='md:text-11xl xs:text-7xl sm:text-9xl font-Bebas_Neue text-white font-extrabold'>NOSOTROS</p>
                </div>
            </div>
            <div>
                <SocialButtons />
            </div>
            <div className='bg-white h-auto pb-24 w-auto'>
            <div className="fixed z-50 items-end bottom-5 right-8">
                <div className="sticky-position xs:hidden md:block">
                    <ScrollTopButton />
                </div>
            </div>
                <div className='flex flex-col xl:mx-20 3xl:mx-90 h-full items-center justify-center'>
                    <div className='  mt-20 h-auto w-auto items-center justify-center lg:flex lg:flex-row '>
                    <div className="p-4 w-2/4">
                                <AccordionItem items={accordionItems} />
                            </div>
                        <div className="h-auto w-2/4 items-center  justify-center">
                            <Image width={1200} height={500} src="/mision-valores-etc.png" className="h-64 w-auto" alt="Kalisch_Logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;