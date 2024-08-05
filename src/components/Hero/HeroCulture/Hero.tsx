"use client";
import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import SocialButtons from '@/components/Global/SocialButtons';
import ScrollTopButton from '@/components/Global/ScrollTopButton';
import FlipCard2 from '@/components/Global/FlipCard2';

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
                                <p className='text-center font-light text-base xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-fit md:w-32 lg:w-40 xl:w-48 3xl:w-60'>Ser <strong>responsable</strong>: es apropiarse de los temas y resolverlos.</p>
                            </div>
                        </div>
                        <div className='w-60 h-56 md:mx-2 xl:mx-4'>
                            <button className="buttonCulture xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60 ButtonCultureTwo">
                                Apply Now
                            </button>
                            <div className='w-fit mt-3'>
                                <p className='text-center font-light text-base xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60'>Siempre tener <strong>comunicación abierta y directa</strong>: es crear un ambiente de confianza para compartir y retar puntos de vista.</p>
                            </div>
                        </div>
                        <div className='w-60 h-56'>
                            <button className="buttonCulture xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60 ButtonCultureThree">
                                Apply Now
                            </button>
                            <div className='w-fit mt-3'>
                                <p className='text-center font-light text-base xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60'>Pensar y actuar de manera <strong>simple</strong>: es encontrar las acciones que hagan la diferencia en un ambiente complejo.</p>
                            </div>
                        </div>
                        <div className='w-60 h-56 md:mx-2 xl:mx-4'>
                            <button className="buttonCulture xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60 ButtonCultureFour">
                                Apply Now
                            </button>
                            <div className='w-fit mt-3'>
                                <p className='text-center font-light text-base xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60'><strong>Enfocarnos al mercado</strong>: es trabajar con pasión y tomar acción para ganar la preferencia de los clientes.</p>
                            </div>
                        </div>
                        <div className='w-60 h-56'>
                            <button className="buttonCulture xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60 ButtonCultureFive">
                                Apply Now
                            </button>
                            <div className='w-fit mt-3'>
                                <p className='text-center font-light text-base xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60'>Ser <strong>rápidos y ágiles</strong>: es actuar de forma fácil y rápida.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col xs:mx-5 md:mx-20 '>
                    <div className='h-auto mt-60 mx-32'>
                        <Image src='/konecta_logo.svg' alt='Culture' width={360} height={144} />
                    </div>
                        <div className='lg:mx-32 md:mx-12 my-12 items-center'>
                            <div className='flex flex-row'>
                                <div className='felx-flex-col w-3/5 mr-16'>
                                    <div className=''>
                                        <p className='text-2xl'>Cultura Kalisch</p>
                                    </div>
                                    <div className='mt-5'>
                                        <p className='w-auto text-justify font-light'>Nuestro objetivo es comunicar a los integrantes de nuestro equipo los resultados, avances, retos, estrategias y logros de nuestra compañía durante el semestre.</p>
                                        <p className='w-auto text-justify font-light'>En Kalisch Acero queremos que nuestros colaboradores sean partícipes del esfuerzo que invierten en sus actividades, además, el involucramiento que realizamos con nuestra gente en este tipo de actividades es fundamental para fomentar la participación, comunicación y sentido de pertenencia.</p>
                                    </div>
                                </div>
                                <div className='mt-7 flex w-2/5'>
                                    <Carousel  fade className='flex flex-col w-5/6'>
                                        <Carousel.Item>
                                            <Image src='/saul.png' alt='Culture' width={360} height={144} />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                        <Image src='/Alberto.png' alt='Culture' width={360} height={144} />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                        <Image src='/elizabeth.png' alt='Culture' width={360} height={144} />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col xs:mx-5 md:mx-20 '>
                    <div className='lg:mx-32 md:mx-12 my-12 items-center'>
                        <div className=''>
                            <p className='text-2xl'>Reconocimiento</p>
                        </div>
                        <div className='mt-5 w-auto'>
                            <p className='w-auto text-justify font-light mb-10'>Somos un equipo que constantemente se esfuerza por lograr los objetivos que nos proponemos, en Kalisch Acero reconocemos la excelencia de nuestros colaboradores a través de los siguientes premios:</p>
                        </div>
                        <div className="flex lg:flex-row xs:flex-col ">

                        <div className="xl:mr-8 lg:mr-3 lg:ml-3 xs:mb-10">
                            <FlipCard2
                            image="https://via.placeholder.com/150"
                            title="Título 1"
                            text="Texto adicional 1"
                            link="#link1"
                            />
                        </div>
                        <div className="xl:mr-8 lg:mr-3 xs:mb-10">
                            <FlipCard2
                            image="https://via.placeholder.com/150"
                            title="Título 1"
                            text="Texto adicional 1"
                            link="#link1"
                            />
                        </div>
                        <div className="xl:mr-8 lg:mr-3 xs:mb-10">
                            <FlipCard2
                            image="https://via.placeholder.com/150"
                            title="Título 1"
                            text="Texto adicional 1"
                            link="#link1"
                            />
                        </div>
                        <div className="xl:mr-8  xs:mb-10">
                            <FlipCard2
                            image="https://via.placeholder.com/150"
                            title="Título 1"
                            text="Texto adicional 1"
                            link="#link1"
                            />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;