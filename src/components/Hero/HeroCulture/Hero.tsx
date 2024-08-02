"use client";
import React from 'react';
import Image from 'next/image';
import SocialButtons from '@/components/Global/SocialButtons';
import ScrollTopButton from '@/components/Global/ScrollTopButton';

interface HeroProps {
}

const Hero: React.FC<HeroProps> = () => {
    return (
        <div className="w-screen">
            <div className='bg-black h-204'></div>
            <div>
                <SocialButtons />
            </div>
            <div className='bg-white min-h-screen h-auto pb-24'>
            <div className="fixed z-50 items-end bottom-5 right-8">
                <div className="sticky-position xs:hidden md:block">
                    <ScrollTopButton />
                </div>
            </div>
                <div className='flex flex-col xs:mx-5 md:mx-20 '>
                    <div className='lg:mx-32 md:mx-12 my-12 items-center'>
                        <div className=''>
                            <p className='text-2xl'>Cultura Kalisch</p>
                        </div>
                        <div className='mt-5 w-auto'>
                            <p className='w-auto text-justify font-light'>Nuestro marco cultural está compuesto por comportamientos acorde a la estrategia e identidad de la organización, que nos llevan a cumplir nuestra misión y visión como compañía.</p>
                        </div>
                        <div className='mt-7 w-auto '>
                            <p className='w-auto text-justify font-light'>Te los presentamos aquí:</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col h-auto items-start'>
                    <div className='flex xs:flex-col md:flex-row md:mx-20 mdl:mx-28 lg:mx-40 lgx:mx-48 xl:mx-48 2xl:mx-72 3xl:mx-101 h-52 w-60 '>
                        <div className='md:w-60 xs:h-80 md:h-56'>
                            <button className="buttonCulture xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60 ButtonCultureOne">
                                Apply Now
                            </button>
                            <div className='w-fit mt-3'>
                                <p className='text-justify font-light text-base xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-fit md:w-32 lg:w-40 xl:w-48 3xl:w-60'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                        </div>
                        <div className='w-60 h-56 md:mx-2 xl:mx-4'>
                            <button className="buttonCulture xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60 ButtonCultureTwo">
                                Apply Now
                            </button>
                            <div className='w-fit mt-3'>
                                <p className='text-justify font-light text-base xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                        </div>
                        <div className='w-60 h-56'>
                            <button className="buttonCulture xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60 ButtonCultureThree">
                                Apply Now
                            </button>
                            <div className='w-fit mt-3'>
                                <p className='text-justify font-light text-base xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                        </div>
                        <div className='w-60 h-56 md:mx-2 xl:mx-4'>
                            <button className="buttonCulture xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60 ButtonCultureFour">
                                Apply Now
                            </button>
                            <div className='w-fit mt-3'>
                                <p className='text-justify font-light text-base xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                        </div>
                        <div className='w-60 h-56'>
                            <button className="buttonCulture xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60 ButtonCultureFive">
                                Apply Now
                            </button>
                            <div className='w-fit mt-3'>
                                <p className='text-justify font-light text-base xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-212'>

            </div>
        </div>
    );
};

export default Hero;