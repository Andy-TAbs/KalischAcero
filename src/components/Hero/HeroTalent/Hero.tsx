/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react';
import Image from 'next/image';
import { Accordion } from 'react-bootstrap';
import SocialButtons from '@/components/Global/SocialButtons';
import { REM } from 'next/font/google';
import CarouselTalent from './CarouselTalent';
import ScrollTopButton from '@/components/Global/ScrollTopButton';
import AccordionItem from '@/components/Global/AccordionItem';

interface HeroProps {
}
const accordionItems = [
    {
      header: 'Accordion Item #1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      header: 'Accordion Item #2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ];

const Hero: React.FC<HeroProps> = () => {
    return (
        <div className="w-screen items-center">
            <div className='bg-black h-204'></div>
            <div className='z-50'>
                <SocialButtons />
            </div>
            <div className='bg-white h-auto pb-24 items-center justify-center'>
            <div className="fixed z-50 items-end bottom-5 right-8">
                <div className="sticky-position xs:hidden md:block">
                    <ScrollTopButton />
                </div>
            </div>
                <div className='flex flex-col h-full items-center'>
                    <div className='lg:mx-52 md:mx-12 my-12 items-center'>
                        <div className=''>
                            <p className='text-2xl'>Formando Lideres</p>
                        </div>
                        <div className='mt-7 w-auto '>
                            <p className='w-auto text-justify font-light'>En <strong><b>Kalisch Acero</b></strong> ofrecemos programas de desarrollo de competencias de liderazgo para que nuestros colaboradores tengan un plan de vida y carrera dentro de la organización.</p>
                        </div>
                    </div>
                </div>
                    <div className=' lg:mx-20 xs:mx-5 h-full before:w-11/12 after:w-11/12 flex items-center justify-center'>
                        <div className='lg:mx-32  my-8 w-fit items-center'>
                            <div className='mb-5'>
                                <p className='text-2xl'>¿Cúales son nuestras  competencias de liderazgo?</p>
                            </div>
                            <div className="p-4 w-256">
                                <AccordionItem items={accordionItems} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className="flex items-center justify-center mt-5 mb-2">
                            <Image
                                src="/postulate1.png"
                                alt="Postulate"
                                width={300}
                                height={100}
                                className=""
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='lg:mx-52 justify-center md:mx-12 my-12 items-center'>
                                <div className=''>
                                    <p className='text-2xl'>Desarrollo de Talento</p>
                                </div>
                                <div className='my-10 w-auto '>
                                    <p className='w-auto text-justify font-light'>En <strong><b>Kalisch Acero</b></strong> creemos en el potencial de nuestros colaboradores por lo cual ofrecemos oportunidades de desarrollo personal y profesional a través de nuestra plataforma interna “Postúlate”.</p>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className=' flex lg:flex-row xs:flex-col lg:mx-52'>
                                    <div className='ml-5 '>
                                        <div className="cardSecond CardSecondOne xs:my-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"
                                                ></path>
                                            </svg>
                                            <div className="cardSecond__content flex items-center justify-center">
                                                <p className="cardSecond__title">Mejora calidad de vida</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ml-5'>
                                        <div className="cardSecond  CardSecondTwo xs:my-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"
                                                ></path>
                                            </svg>
                                            <div className="cardSecond__content flex items-center justify-center">
                                                <p className="cardSecond__title">Crecimiento personal</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ml-5'>
                                        <div className="cardSecond CardSecondThree xs:my-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"
                                                ></path>
                                            </svg>
                                            <div className="cardSecond__content flex items-center justify-center">
                                                <p className="cardSecond__title">Capacidad de adaptabilidad</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ml-5'>
                                        <div className="cardSecond CardSecondFour xs:my-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"
                                                ></path>
                                            </svg>
                                            <div className="cardSecond__content flex items-center justify-center">
                                                <p className="cardSecond__title">Crecimiento profesional</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ml-5'>
                                        <div className="cardSecond CardSecondFive xs:my-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"
                                                ></path>
                                            </svg>
                                            <div className="cardSecond__content flex items-center justify-center">
                                                <p className="cardSecond__title text">Nuevas responsabili- dades</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex lg:flex-row xs:flex-col lg:mx-52 items-center justify-center'>
                                    <div className='ml-5 '>
                                        <div className="cardSecond  CardSecondSix xs:my-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"
                                                ></path>
                                            </svg>
                                            <div className="cardSecond__content flex items-center justify-center">
                                                <p className="cardSecond__title">Desarrollo de habilidades y competencias funcionales</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ml-5'>
                                        <div className="cardSecond CardSecondSeven xs:my-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"
                                                ></path>
                                            </svg>
                                            <div className="cardSecond__content flex items-center justify-center">
                                                <p className="cardSecond__title">Desarrollo de conocimientos</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ml-5'>
                                        <div className="cardSecond CardSecondEight xs:my-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"
                                                ></path>
                                            </svg>
                                            <div className="cardSecond__content flex items-center justify-center">
                                                <p className="cardSecond__title">Nuevos logros</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ml-5'>
                                        <div className="cardSecond CardSecondNine xs:my-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"
                                                ></path>
                                            </svg>
                                            <div className="cardSecond__content flex items-center justify-center">
                                                <p className="cardSecond__title">Inspira a otros</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center mt-60'>
                            <p className='text-2xl'>Testimonios</p>
                        </div>
                        <div className='mb-40'>
                        <CarouselTalent />
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Hero;