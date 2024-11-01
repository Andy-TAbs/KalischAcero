// src/components/Hero.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import SocialButtons from '@/components/Global/SocialButtons';
import ScrollTopButton from '@/components/Global/ScrollTopButton';

const Hero: React.FC = () => {

    return (
        <div className="w-screen">
            <div className='h-204 xs:h-screen relative'>
                <div className='image-background-News select-none'></div>
                <div className='absolute inset-0 flex lg:right-144 md:right-80 sm:right-40 xs:right-32 lg:top-56 md:top-56 sm:top-56 xs:top-56 xsm:top-56 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-16 xs:left-10 z-10'>
                    <p className='sm:text-sm xs:text-xxs font-Bebas_Neue text-white'>L&nbsp; O &nbsp;&nbsp;&nbsp;&nbsp; M&nbsp; A&nbsp; S &nbsp;&nbsp;&nbsp;&nbsp; A&nbsp; C&nbsp; T&nbsp; U&nbsp; A&nbsp; L &nbsp;&nbsp;&nbsp;&nbsp; D&nbsp; E &nbsp;&nbsp;&nbsp;&nbsp; K&nbsp; A&nbsp; L&nbsp; I&nbsp; S&nbsp; C&nbsp; H &nbsp;&nbsp;&nbsp;&nbsp; A&nbsp; C&nbsp; E&nbsp; R&nbsp; O&nbsp;</p>
                </div>
                <div className='absolute inset-0 flex right-144 lg:top-56 md:top-56 sm:top-60 xs:top-60 xsm:top-60 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-16 xs:left-10 z-10'>
                    <p className='md:text-11xl xs:text-9xl sm:text-9xl font-Bebas_Neue text-white font-extrabold'>NOTICIAS</p>
                </div>
            </div>
            <div>
                <SocialButtons />
            </div>
            <div className='bg-white h-auto pb-10 w-auto'>
                <div className="fixed z-50 items-end bottom-5 right-8">
                    <div className="sticky-position xs:hidden md:block">
                        <ScrollTopButton />
                    </div>
                </div>
            </div>
            <div className='bg-white flex items-center justify-center'>
                <div className='grid grid-cols-3  items-center justify-items-center bg-white w-3/4 h-auto mx-28 pb-20'>
                    <a href='#' className='flex flex-col items-center justify-center w-76 h-48'>
                        <Image src='/Logo-ESR-PNG.png' alt='noticia1' width={500} height={500} />
                        <p className='min-w-full text-2xl mt-2 text-neutral-800'> Hola como estas</p>
                        <p className='text-left min-w-full mt-3 text-neutral-800'>27/04/2023</p>
                    </a>
                    <a href='#' className='flex flex-col items-center justify-center w-76 h-48'>
                        <Image src='/Logo-ESR-PNG.png' alt='noticia1' width={500} height={500} />
                        <p className='min-w-full text-2xl mt-2 text-neutral-800'> Hola como estas</p>
                        <p className='text-left min-w-full mt-3 text-neutral-800'>27/04/2023</p>
                    </a>
                    <a href='#' className='flex flex-col items-center justify-center w-76 h-48'>
                        <Image src='/Logo-ESR-PNG.png' alt='noticia1' width={500} height={500} />
                        <p className='min-w-full text-2xl mt-2 text-neutral-800'> Hola como estas</p>
                        <p className='text-left min-w-full mt-3 text-neutral-800'>27/04/2023</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
