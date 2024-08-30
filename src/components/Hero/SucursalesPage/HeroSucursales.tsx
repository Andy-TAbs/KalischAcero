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
                <div className='absolute inset-0 flex lg:right-144 md:right-80 sm:right-40 xs:right-24 lg:top-56 md:top-56 sm:top-56 xs:top-56 xsm:top-56 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-28 xs:left-10 z-10'>
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
                <div className='flex flex-col xl:mx-20 h-full '>
                    <div className='lg:mx-16 md:mx-10 my-12 items-center'>
                        <div className='flex flex-row'>
                            <div className='md:mr-32 sm:mr-24 xs:mr-10'>
                                <p className='text-3xl font-medium'>Chihuahua</p>
                            </div>
                            <button className='bg-neutral-200 hover:bg-green-900 hover:text-white sm:hover:w-56 xs:hover:w-40 ease-in transition-all duration-150 rounded-md xs:h-14 sm:w-48 xs:w-32  md:h-11 items-center justify-evenly flex md:flex-row xs:flex-col'>
                        <p className='font-medium'>Cotizar Aquí</p>
                        <IoIosMail className='h-8 w-auto' />
                    </button>
                        </div>

                        <div className='items-start justify-center mt-5 xs:w-screen md:w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
                            <Sucursales Lugar={"COLEGIO MILITAR"}       Direccion={"Av. H. Colegio Militar #265, Col. Nombre de Dios C.P. 31150, Chihuahua, Chihuahua, Mex."}   Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"CHUVISCAR"}             Direccion={"Av. Teófilo Borunda 3903, Col. Santo Niño C.P. 31200 Chihuahua, Chihuahua, Mex."}           Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"FLORES MAGÓN"}          Direccion={"Av. Flores Magón #5810,Col. Inalambrica,  C.P. 31460, Chihuahua, Chihuahua, Mex."}          Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"LA CURVA"}              Direccion={"Av. Tecnológico 10711 Col. Deportistas C.P. 31125 Chihuahua, Chihuahua, Mex."}              Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"ESMERALDA"}             Direccion={"Vialidad CH-P #2301-A, Col. Mármol, C.P. 31063, Chihuahua, Chihuahua, Mex."}                Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"LOS NOGALES"}           Direccion={"Vialidad Los Nogales 3105, Col. Rodolfo Fierro C.P. 31137, Chihuahua, Chihuahua, Mex."}     Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"R. ALMADA"}             Direccion={"Periférico R. Almada #9602, Col. 3 de Mayo C.P. 31065, Chihuahua, Chihuahua, Mex."}         Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"OFICINAS CORPORATIVAS"} Direccion={"Av. H. Colegio Militar #265,, Col. Nombre de Dios C.P. 31150,, Chihuahua, Chihuahua, Mex."} Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"DELICIAS"}              Direccion={"Av. 7ª Oriente #609, Col. Centro C.P. 33000, Delicias, Chihuahua, Mex."}                    Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"NVO. CASAS GRANDES"}    Direccion={"Av. Tulipán #4506 Parque Industrial Paquimé C.P. 31755, Casas Grandes, Chihuahua, Mex."}    Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"CUAUHTÉMOC"}            Direccion={"Corredor Comercial #543, Col. Fernando Baeza C.P. 31510, Cuauhtémoc, Chihuahua, Mex."}      Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                        </div>

                        <div className='flex flex-row mt-20'>
                            <div className='mr-32'>
                                <p className='text-3xl font-medium'>Ciudad Juarez</p>
                            </div>
                            <button className='bg-neutral-200 hover:bg-green-900 hover:text-white hover:w-48 ease-in transition-all duration-150 rounded-md w-40 h-11 items-center justify-evenly flex flex-row'>
                            <div className='w-ful flex'>
                                <p className='text-lg'>Cotizar aquí</p>
                            </div>
                            <IoIosMail className='h-7 w-auto' />
                            </button>
                        </div>

                        <div className='items-start justify-center mt-5 xs:w-screen md:w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
                            <Sucursales Lugar={"COLEGIO MILITAR"}       Direccion={"Av. H. Colegio Militar #265, Col. Nombre de Dios C.P. 31150, Chihuahua, Chihuahua, Mex."}   Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"CHUVISCAR"}             Direccion={"Av. Teófilo Borunda 3903, Col. Santo Niño C.P. 31200 Chihuahua, Chihuahua, Mex."}           Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"FLORES MAGÓN"}          Direccion={"Av. Flores Magón #5810,Col. Inalambrica,  C.P. 31460, Chihuahua, Chihuahua, Mex."}          Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"LA CURVA"}              Direccion={"Av. Tecnológico 10711 Col. Deportistas C.P. 31125 Chihuahua, Chihuahua, Mex."}              Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"ESMERALDA"}             Direccion={"Vialidad CH-P #2301-A, Col. Mármol, C.P. 31063, Chihuahua, Chihuahua, Mex."}                Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"LOS NOGALES"}           Direccion={"Vialidad Los Nogales 3105, Col. Rodolfo Fierro C.P. 31137, Chihuahua, Chihuahua, Mex."}     Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"R. ALMADA"}             Direccion={"Periférico R. Almada #9602, Col. 3 de Mayo C.P. 31065, Chihuahua, Chihuahua, Mex."}         Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"OFICINAS CORPORATIVAS"} Direccion={"Av. H. Colegio Militar #265,, Col. Nombre de Dios C.P. 31150,, Chihuahua, Chihuahua, Mex."} Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"DELICIAS"}              Direccion={"Av. 7ª Oriente #609, Col. Centro C.P. 33000, Delicias, Chihuahua, Mex."}                    Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                        </div>

                        <div className='flex flex-row mt-20'>
                            <div className='mr-32'>
                                <p className='text-3xl font-medium'>Sonora</p>
                            </div>
                            <button className='bg-neutral-200 hover:bg-green-900 hover:text-white hover:w-48 ease-in transition-all duration-150 rounded-md w-40 h-11 items-center justify-evenly flex flex-row'>
                            <div className='w-ful flex'>
                                <p className='text-lg'>Cotizar aquí</p>
                            </div>
                            <IoIosMail className='h-7 w-auto' />
                            </button>
                        </div>

                        <div className='items-start justify-center mt-5 xs:w-screen md:w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
                            <Sucursales Lugar={"COLEGIO MILITAR"}       Direccion={"Av. H. Colegio Militar #265, Col. Nombre de Dios C.P. 31150, Chihuahua, Chihuahua, Mex."}   Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"CHUVISCAR"}             Direccion={"Av. Teófilo Borunda 3903, Col. Santo Niño C.P. 31200 Chihuahua, Chihuahua, Mex."}           Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"FLORES MAGÓN"}          Direccion={"Av. Flores Magón #5810,Col. Inalambrica,  C.P. 31460, Chihuahua, Chihuahua, Mex."}          Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"LA CURVA"}              Direccion={"Av. Tecnológico 10711 Col. Deportistas C.P. 31125 Chihuahua, Chihuahua, Mex."}              Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"ESMERALDA"}             Direccion={"Vialidad CH-P #2301-A, Col. Mármol, C.P. 31063, Chihuahua, Chihuahua, Mex."}                Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"LOS NOGALES"}           Direccion={"Vialidad Los Nogales 3105, Col. Rodolfo Fierro C.P. 31137, Chihuahua, Chihuahua, Mex."}     Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"R. ALMADA"}             Direccion={"Periférico R. Almada #9602, Col. 3 de Mayo C.P. 31065, Chihuahua, Chihuahua, Mex."}         Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"OFICINAS CORPORATIVAS"} Direccion={"Av. H. Colegio Militar #265,, Col. Nombre de Dios C.P. 31150,, Chihuahua, Chihuahua, Mex."} Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"DELICIAS"}              Direccion={"Av. 7ª Oriente #609, Col. Centro C.P. 33000, Delicias, Chihuahua, Mex."}                    Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"NVO. CASAS GRANDES"}    Direccion={"Av. Tulipán #4506 Parque Industrial Paquimé C.P. 31755, Casas Grandes, Chihuahua, Mex."}    Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                        </div>

                        <div className='flex flex-row mt-20'>
                            <div className='mr-32'>
                                <p className='text-3xl font-medium'>Durango</p>
                            </div>
                            <button className='bg-neutral-200 hover:bg-green-900 hover:text-white hover:w-48 ease-in transition-all duration-150 rounded-md w-40 h-11 items-center justify-evenly flex flex-row'>
                            <div className='w-ful flex'>
                                <p className='text-lg'>Cotizar aquí</p>
                            </div>
                            <IoIosMail className='h-7 w-auto' />
                            </button>
                        </div>

                        <div className='items-start justify-center mt-5 xs:w-screen md:w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
                            <Sucursales Lugar={"COLEGIO MILITAR"}       Direccion={"Av. H. Colegio Militar #265, Col. Nombre de Dios C.P. 31150, Chihuahua, Chihuahua, Mex."}   Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"CHUVISCAR"}             Direccion={"Av. Teófilo Borunda 3903, Col. Santo Niño C.P. 31200 Chihuahua, Chihuahua, Mex."}           Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                        </div>

                        <div className='flex flex-row mt-20'>
                            <div className='mr-32'>
                                <p className='text-3xl font-medium'>Sinaloa</p>
                            </div>
                            <button className='bg-neutral-200 hover:bg-green-900 hover:text-white hover:w-48 ease-in transition-all duration-150 rounded-md w-40 h-11 items-center justify-evenly flex flex-row'>
                            <div className='w-ful flex'>
                                <p className='text-lg'>Cotizar aquí</p>
                            </div>
                            <IoIosMail className='h-7 w-auto' />
                            </button>
                        </div>

                        <div className='items-start justify-center mt-5 xs:w-screen md:w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
                            <Sucursales Lugar={"COLEGIO MILITAR"}       Direccion={"Av. H. Colegio Militar #265, Col. Nombre de Dios C.P. 31150, Chihuahua, Chihuahua, Mex."}   Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"CHUVISCAR"}             Direccion={"Av. Teófilo Borunda 3903, Col. Santo Niño C.P. 31200 Chihuahua, Chihuahua, Mex."}           Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"FLORES MAGÓN"}          Direccion={"Av. Flores Magón #5810,Col. Inalambrica,  C.P. 31460, Chihuahua, Chihuahua, Mex."}          Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"LA CURVA"}              Direccion={"Av. Tecnológico 10711 Col. Deportistas C.P. 31125 Chihuahua, Chihuahua, Mex."}              Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                        </div>

                        <div className='flex flex-row mt-20'>
                            <div className='mr-32'>
                                <p className='text-3xl font-medium'>Aguascalientes</p>
                            </div>
                            <button className='bg-neutral-200 hover:bg-green-900 hover:text-white hover:w-48 ease-in transition-all duration-150 rounded-md w-40 h-11 items-center justify-evenly flex flex-row'>
                            <div className='w-ful flex'>
                                <p className='text-lg'>Cotizar aquí</p>
                            </div>
                            <IoIosMail className='h-7 w-auto' />
                            </button>
                        </div>

                        <div className='items-start justify-center mt-5 xs:w-screen md:w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
                            <Sucursales Lugar={"COLEGIO MILITAR"}       Direccion={"Av. H. Colegio Militar #265, Col. Nombre de Dios C.P. 31150, Chihuahua, Chihuahua, Mex."}   Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"CHUVISCAR"}             Direccion={"Av. Teófilo Borunda 3903, Col. Santo Niño C.P. 31200 Chihuahua, Chihuahua, Mex."}           Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"FLORES MAGÓN"}          Direccion={"Av. Flores Magón #5810,Col. Inalambrica,  C.P. 31460, Chihuahua, Chihuahua, Mex."}          Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"LA CURVA"}              Direccion={"Av. Tecnológico 10711 Col. Deportistas C.P. 31125 Chihuahua, Chihuahua, Mex."}              Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                        </div>

                        <div className='flex flex-row mt-20'>
                            <div className='mr-32'>
                                <p className='text-3xl font-medium'>León Gto.</p>
                            </div>
                            <button className='bg-neutral-200 hover:bg-green-900 hover:text-white hover:w-48 ease-in transition-all duration-150 rounded-md w-40 h-11 items-center justify-evenly flex flex-row'>
                            <div className='w-ful flex'>
                                <p className='text-lg'>Cotizar aquí</p>
                            </div>
                            <IoIosMail className='h-7 w-auto' />
                            </button>
                        </div>

                        <div className='items-start justify-center mt-5 xs:w-screen md:w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
                            <Sucursales Lugar={"COLEGIO MILITAR"}       Direccion={"Av. H. Colegio Militar #265, Col. Nombre de Dios C.P. 31150, Chihuahua, Chihuahua, Mex."}   Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"CHUVISCAR"}             Direccion={"Av. Teófilo Borunda 3903, Col. Santo Niño C.P. 31200 Chihuahua, Chihuahua, Mex."}           Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                            <Sucursales Lugar={"FLORES MAGÓN"}          Direccion={"Av. Flores Magón #5810,Col. Inalambrica,  C.P. 31460, Chihuahua, Chihuahua, Mex."}          Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                        </div>

                        <div className='flex flex-row mt-20'>
                            <div className='mr-32'>
                                <p className='text-3xl font-medium'>Fresnillo, Zacatecas</p>
                            </div>
                            <button className='bg-neutral-200 hover:bg-green-900 hover:text-white hover:w-48 ease-in transition-all duration-150 rounded-md w-40 h-11 items-center justify-evenly flex flex-row'>
                            <div className='w-ful flex'>
                                <p className='text-lg'>Cotizar aquí</p>
                            </div>
                            <IoIosMail className='h-7 w-auto' />
                            </button>
                        </div>

                        <div className='items-start justify-center mt-5 xs:w-screen md:w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
                            <Sucursales Lugar={"COLEGIO MILITAR"}       Direccion={"Av. H. Colegio Militar #265, Col. Nombre de Dios C.P. 31150, Chihuahua, Chihuahua, Mex."}   Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                        </div>

                        <div className='flex flex-row mt-20'>
                            <div className='mr-32'>
                                <p className='text-3xl font-medium'>El Paso Texas, USA.</p>
                            </div>
                            <button className='bg-neutral-200 hover:bg-green-900 hover:text-white hover:w-48 ease-in transition-all duration-150 rounded-md w-40 h-11 items-center justify-evenly flex flex-row'>
                            <div className='w-ful flex'>
                                <p className='text-lg'>Cotizar aquí</p>
                            </div>
                            <IoIosMail className='h-7 w-auto' />
                            </button>
                        </div>

                        <div className='items-start justify-center mt-5 xs:w-screen md:w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
                            <Sucursales Lugar={"COLEGIO MILITAR"}       Direccion={"Av. H. Colegio Militar #265, Col. Nombre de Dios C.P. 31150, Chihuahua, Chihuahua, Mex."}   Telefono={"614-XXX-XXXX"} Whatsapp={"614-XXX-XXXX"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;