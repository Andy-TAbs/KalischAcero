"use client";
import React from 'react';
import Image from 'next/image';
import SocialButtons from '@/components/Global/SocialButtons'
import ScrollTopButton from '@/components/Global/ScrollTopButton';

interface HeroProps {
}

const Hero: React.FC<HeroProps> = () => {
    return (
        <div className="w-screen">
            <div className='h-204 xs:h-screen relative'>
                <div className='image-background-News'></div>
            <div className='absolute inset-0 flex lg:top-56 md:top-56 sm:top-56 xs:top-56 xsm:top-56 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-16 xs:left-10 z-10'>
                    <p className='sm:text-sm xs:text-xxs font-Bebas_Neue text-white'>L&nbsp; O &nbsp;&nbsp;&nbsp;&nbsp; M&nbsp; A&nbsp; S &nbsp;&nbsp;&nbsp;&nbsp; A&nbsp; C&nbsp; T&nbsp; U&nbsp; A&nbsp; L &nbsp;&nbsp;&nbsp;&nbsp; D&nbsp; E &nbsp;&nbsp;&nbsp;&nbsp; K&nbsp; A&nbsp; L&nbsp; I&nbsp; S&nbsp; C&nbsp; H &nbsp;&nbsp;&nbsp;&nbsp; A&nbsp; C&nbsp; E&nbsp; R&nbsp; O&nbsp;</p>
                </div>
                <div className='absolute inset-0 flex lg:top-56 md:top-56 sm:top-60 xs:top-60 xsm:top-60 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-16 xs:left-10 z-10'>
                    <p className='md:text-11xl xs:text-9xl sm:text-9xl font-Bebas_Neue text-white font-extrabold'>NOTICIAS</p>
                </div>
            </div>
            <div>
                <SocialButtons />
            </div>
            <div className='bg-white h-auto pb-52 flex flex-col  items-start '>
                <div className="fixed z-50 items-end bottom-5 right-8">
                    <div className="sticky-position xs:hidden md:block">
                        <ScrollTopButton />
                    </div>
                </div>
                <div className='flex xs:flex-col lg:flex-row xs:mx-5 xsm:mx-32 sm:mx-52 md:mx-72 mdl:mx-90 lg:mx-16 xl:mx-32 2xl:mx-52 3xl:mx-101'>
                    <div>
                        <a href=''>
                            <div className='w-76 h-56'>
                                <Image
                                        src="/Logo-ESR-PNG.png"
                                        alt="Descripción de la imagen"
                                        width={350}
                                        height={120}
                                        className="  h-auto mt-16"
                                    />
                            <div className='w-fit'>
                                <p className='text-center font-semibold text-xl'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                            <div className='w-fit mt-3'>
                                <p className='text-start font-light text-base'>27 DE MARZO 2023</p>
                            </div>
                            </div>
                        </a>
                    </div>
                    <div className='lg:mx-4 xl:mx-20'>
                        <a href=''>
                            <div className='w-76 h-56'>
                                <Image
                                        src="/logo-gptw-jpg.webp"
                                        alt="Descripción de la imagen"
                                        width={300}
                                        height={150}
                                        className=" h-auto mt-16"
                                    />
                            <div className='w-fit'>
                                <p className='text-center font-semibold text-xl'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                            <div className='w-fit mt-3'>
                                <p className='text-start font-light text-base'>27 DE MARZO 2023</p>
                            </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href=''>
                            <div className='w-76 h-56'>
                                <Image
                                        src="/definicion-de-la-educacion-sssssscontinua.jpg"
                                        alt="Descripción de la imagen"
                                        width={350}
                                        height={150}
                                        className="h-auto mt-16"
                                    />
                            <div className='w-fit'>
                                <p className='text-center font-semibold text-xl'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                            <div className='w-fit mt-3'>
                                <p className='text-start font-light text-base'>27 DE MARZO 2023</p>
                            </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='flex xs:flex-col lg:flex-row xs:mx-5 xsm:mx-32 sm:mx-52  md:mx-72 mdl:mx-90 lg:mx-16 xl:mx-32 2xl:mx-52 3xl:mx-101'>
                    <div>
                        <a href=''>
                            <div className='w-76 h-56'>
                                <Image
                                        src="/cedis.jpg"
                                        alt="Descripción de la imagen"
                                        width={350}
                                        height={150}
                                        className=" xs:h-32 h-auto mt-16"
                                    />
                            <div className='w-fit'>
                                <p className='text-center font-semibold text-xl'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                            <div className='w-fit mt-3'>
                                <p className='text-start font-light text-base'>27 DE MARZO 2023</p>
                            </div>
                            </div>
                        </a>
                    </div>
                    <div className='lg:mx-4 xl:mx-20'>
                        <a href=''>
                            <div className='w-76 h-56'>
                                <Image
                                        src="/definicion-de-la-educacion-continuaaaaaaa.jpg"
                                        alt="Descripción de la imagen"
                                        width={350}
                                        height={150}
                                        className=" xs:h-32 h-auto mt-16"
                                />
                                <div className='w-fit'>
                                    <p className='text-center font-semibold text-xl'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                                </div>
                                <div className='w-fit mt-3'>
                                    <p className='text-start font-light text-base'>27 DE MARZO 2023</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href=''>
                            <div className='w-76 h-56'>
                                <Image
                                        src="/definicion-de-la-educacion-continua-sdasdas.jpg"
                                        alt="Descripción de la imagen"
                                        width={350}
                                        height={150}
                                        className=" xs:h-32 h-auto mt-16"
                                    />
                            <div className='w-fit'>
                                <p className='text-center font-semibold text-xl'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                            <div className='w-fit mt-3'>
                                <p className='text-start font-light text-base'>27 DE MARZO 2023</p>
                            </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;