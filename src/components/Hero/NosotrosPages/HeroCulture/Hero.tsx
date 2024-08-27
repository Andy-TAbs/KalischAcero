"use client";
import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import SocialButtons from '@/components/Global/SocialButtons';
import ScrollTopButton from '@/components/Global/ScrollTopButton';
import FlipCardsCulture from './FlipcardsCulture';
import { TimelineCulture } from './TimelineCulture';
import  HealthAccordion  from './HealthAccordion';
interface HeroProps {
}

const accordionItems = [
    {
        header: 'Nutrición',
        body: 'Crear un valor superior para nuestros clientes y colaboradores, proporcionando el mejor servicio en la comercialización de productos y soluciones innovadoras de acero a través de nuestra filosofía “Experiencia ÚniKa”.'
    },
    {
        header: 'Mente Sana',
        body: 'hola'
    },
    {
        header: 'Salud física',
        body: 'Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        header: 'Libre de Adicciones',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        header: 'Conoce tus números',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        header: 'Salud Financiera',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
];

const Hero: React.FC<HeroProps> = () => {
    return (
        <div className="w-screen">
            <div className='h-204 relative '>
                <video autoPlay muted loop id="background-video" className="absolute inset-0 z-0 w-full h-full object-cover">
                    <source src="/Cultura.mp4" type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>
                <div className='absolute inset-0 flex lg:top-56 right-48 md:top-56 sm:top-56 xs:top-56 xsm:top-56 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-28 xs:left-10 z-10'>
                    <p className='sm:text-sm xs:text-xxs font-Bebas_Neue text-white'>I N I C I O  /  N O S O T R O S</p>
                </div>
                <div className='absolute inset-0 flex right-10 lg:top-56 md:top-56 sm:top-60 xs:top-60 xsm:top-60 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-28 xs:left-10 z-10'>
                    <p className='md:text-11xl xs:text-7xl sm:text-9xl font-Bebas_Neue text-white font-extrabold'>CULTURA</p>
                </div>
            </div>
            <div>
                <SocialButtons />
            </div>
            <div className='bg-white min-h-screen h-auto pb-24'>
            <div className="fixed z-50 items-end bottom-5 right-8">
                <div className="sticky-position xs:hidden md:block">
                    <ScrollTopButton />
                </div>
            </div>
                <div className='flex flex-col xs:mx-5 md:mx-20  justify-center'>
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

                <div className='flex flex-col items-start xs:min-h-screen md:min-h-32'>
                    <div className='flex xs:flex-col xs:items-center xs:mx-20 xsm:mx-40 sm:mx-52 md:flex-row md:mx-20 mdl:mx-28 lg:mx-40 lgx:mx-48 xl:mx-48 2xl:mx-72 3xl:mx-101 h-52 w-60 '>
                        <div className='md:w-60 xs:h-80 md:h-56'>
                            <button className="buttonCulture xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60 ButtonCultureOne">
                                Apply Now
                            </button>
                            <div className='w-fit mt-3'>
                                <p className='text-center font-light text-base xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-fit md:w-32 lg:w-40 xl:w-48 3xl:w-60'>Ser <strong>responsable</strong>: es apropiarse de los temas y resolverlos.</p>
                            </div>
                        </div>
                        <div className='w-60 xs:h-101 md:h-56 md:mx-2 xl:mx-4'>
                            <button className="buttonCulture xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60 ButtonCultureTwo">
                                Apply Now
                            </button>
                            <div className='w-fit mt-3'>
                                <p className='text-center font-light text-base xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60'>Siempre tener <strong>comunicación abierta y directa</strong>: es crear un ambiente de confianza para compartir y retar puntos de vista.</p>
                            </div>
                        </div>
                        <div className='w-60 xs:h-96 md:h-56'>
                            <button className="buttonCulture xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60 ButtonCultureThree">
                                Apply Now
                            </button>
                            <div className='w-fit mt-3'>
                                <p className='text-center font-light text-base xs:h-60 md:h-32 lg:h-40 xl:h-48 3xl:h-60 xs:w-60 md:w-32 lg:w-40 xl:w-48 3xl:w-60'>Pensar y actuar de manera <strong>simple</strong>: es encontrar las acciones que hagan la diferencia en un ambiente complejo.</p>
                            </div>
                        </div>
                        <div className='w-60 xs:h-90 md:h-56 md:mx-2 xl:mx-4'>
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
                <div className='xs:h-256 md:h-0'></div>
                <div className='flex flex-col xs:mx-5 md:mx-20 '>
                    <div className=' md:h-auto mt-60 flex justify-center '>
                        <Image src='/konecta_logo.svg' alt='Culture' width={360} height={144} className='xs:h-40 xs:w-56 md:h-32 md:w-auto' />
                    </div>
                        <div className='xl:mx-32 lg:mx-16 md:mx-12 my-12 items-center'>
                            <div className='flex lg:flex-row xs:flex-col'>
                                <div className='flex flex-col lg:w-3/5 md:w-fit '>
                                    <div className=''>
                                        <p className='text-2xl'>Cultura Kalisch</p>
                                    </div>
                                    <div className='mt-5'>
                                        <p className='w-auto text-justify font-light'>Nuestro objetivo es comunicar a los integrantes de nuestro equipo los resultados, avances, retos, estrategias y logros de nuestra compañía durante el semestre.</p>
                                        <p className='w-auto text-justify font-light'>En Kalisch Acero queremos que nuestros colaboradores sean partícipes del esfuerzo que invierten en sus actividades, además, el involucramiento que realizamos con nuestra gente en este tipo de actividades es fundamental para fomentar la participación, comunicación y sentido de pertenencia.</p>
                                    </div>
                                </div>
                                <div className='mt-7 flex 2xl:w-2/5 xs:w-full items-center justify-center'>
                                    <Carousel  fade className='flex flex-col w-5/6'>
                                        <Carousel.Item>
                                            <Image src='/saul.png' alt='Culture' width={360} height={144} className='w-full h-auto' />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                        <Image src='/Alberto.png' alt='Culture' width={360} height={144} className='w-full h-auto'/>
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                        <Image src='/elizabeth.png' alt='Culture' width={360} height={144} className='w-full h-auto'/>
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col xs:mx-5  '>
                    <div className=' my-12 items-center'>
                        <div className='md:mx-32'>
                            <p className='text-2xl'>Reconocimiento</p>
                        </div>
                        <div className='mt-5 w-auto md:mx-32'>
                            <p className='w-auto text-justify font-light mb-10'>Somos un equipo que constantemente se esfuerza por lograr los objetivos que nos proponemos, en Kalisch Acero reconocemos la excelencia de nuestros colaboradores a través de los siguientes premios:</p>
                        </div>
                        <div className="flex lg:flex-row xs:flex-col justify-center xs:justify-center xs:items-center  xl:mx-32 xs:mb-10">

                            <div className="xl:mr-8 lg:mr-3 lg:ml-3">
                                <FlipCardsCulture
                                image="/servicio.jpg"
                                title=""
                                text={<> <strong>Servicio:</strong> consiste en demostrar una actitud permanente de atención y colaboración hacia los demás en busca de su satisfacción.</>}
                                link=""
                                linktext=''
                                />
                            </div>
                            <div className="xl:mr-8 lg:mr-3 ">
                                <FlipCardsCulture
                                image="/creatividad.jpg"
                                title=""
                                text={<> <strong>Creatividad:</strong> radica en resolver problemas en la organización, ofreciendo soluciones novedosas.</>}
                                link=""
                                linktext=''
                                />
                            </div>
                            <div className="xl:mr-8 lg:mr-3 ">
                                <FlipCardsCulture
                                image="/motivacion.jpg"
                                title=""
                                text={<> <strong>Motivación:</strong> capacidad para impulsar a los demás al logro de resultados extraordinarios</>}
                                link=""
                                linktext=''
                                />
                            </div>
                            <div className="xl:mr-8 lg:mr-3">
                                <FlipCardsCulture
                                image="/desempenoextraordinario.jpg"
                                title=""
                                text={<> <strong>Desempeño Extraordinario:</strong> asumir responsabilidad más allá de lo esperado, con entrega y disposición, mostrando un desempeño general sobresaliente. </>}
                                link=""
                                linktext=''
                                />
                            </div>
                            <div className="  ">
                                <FlipCardsCulture
                                image="/dejandohuella.jpg"
                                title=""
                                text={<> <strong>Dejando Huella:</strong> premio especial para aquellos colaboradores que demuestren consistentemente vivir las cuatro actitudes premiadas.</>}
                                link=""
                                linktext=''
                                />
                        </div>
                    </div>
                    </div>
                </div>

                <div className='flex flex-col xs:mx-5 md:mx-20 items-center justify-center '>
                    <div className='flex justify-center lg:mx-32 md:mx-12 my-12 items-center'>
                        <div className='flex md:flex-row xs:flex-col justify-center items-center'>
                            <div className='flex flex-col'>
                                <div className=''>
                                    <p className='text-2xl'>Cultura Kalisch</p>
                                </div>
                                <div className='md:w-10/12'>
                                    <p className='w-auto text-justify font-light'>En Kalisch Acero reconocemos que nuestro equipo de trabajo es lo más importante y un pilar fundamental para lograr el crecimiento de nuestra compañía, por eso nuestros esfuerzos están enfocados en el desarrollo de nuestra gente, buscamos siempre contar con óptimas condiciones para trabajar, en un ambiente basado en la confianza y el respeto.</p>
                                </div>
                            </div>
                            <div className='xs:h-auto mt-5 md:w-6/12'>
                                <Image src='/gptk_kalisch_acero.jpg' alt='gptk_kalisch_acero' width={150} height={150} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <TimelineCulture />
                </div>
                <div className="flex flex-col lg:w-3/5 md:w-fit mt-40 mx-auto ">
                    <div>
                        <p className="text-2xl">Cultura Kalisch</p>
                    </div>
                    <div className="mt-5">
                        <p className="w-auto text-justify font-light">Nuestro objetivo es comunicar a los integrantes de nuestro equipo los resultados, avances, retos, estrategias y logros de nuestra compañía durante el semestre.</p>
                    </div>
                    <div className='flex flex-col xl:mx-20 3xl:mx-90 h-full items-center justify-center'>
                </div>
                <div className='  mt-20 h-auto w-auto items-center justify-center lg:flex lg:flex-row '>
                        <div className="h-auto w-2/4 items-center  justify-center">
                            <Image width={1200} height={500} src="/Pilares-de-la-salud.png" className="h-64 w-auto" alt="Kalisch_Logo"/>
                        </div>
                        <div className="p-4 w-2/4">
                            <HealthAccordion
                            items={[
                                { titleHealth: "Nutrición", textHealth: "Promovemos buenos hábitos alimenticios y estilos de vida saludable." },
                                { titleHealth: "Mente Sana", textHealth: "Buscamos el bienestar emocional y psicológico en nuestros colaboradores." },
                                { titleHealth: "Salud Física", textHealth: "Fomentamos la práctica regular y sistemática de actividad física en los colaboradores." },
                                { titleHealth: "Libre de Adicciones", textHealth: "Fomentamos un autocuidado libre de cualquier tipo de adicción." },
                                { titleHealth: "Conoce tus números", textHealth: "Diagnóstico de salud básico en los colaboradores en el que podamos identificar y prevenir enfermedades." },
                                { titleHealth: "Salud Financiera", textHealth: "Promovemos buenas prácticas financieras para lograr una situación de tranquilidad en su futuro financiero." },
                            ]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;