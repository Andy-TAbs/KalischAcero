"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { useInView } from 'react-intersection-observer';
import FlipCardSlider from "../../Global/SliderCards";
import { FaArrowRight } from "react-icons/fa";
import NewsCarousel from "./NewsCarousel";
import FlipCard2 from "../../Global/FlipCard2";
import ScrollTopButton from "@/components/Global/ScrollTopButton";

const newsData = [
    {
        title:"Sucursal Exprés: Mazatlán Delfín",
        text: "El Cuatro de Octubre inauguramos la primera sucursal exprés de Kalisch Acero en la ciudad de Mazatlán. En un terreno de 33m2 y con un total de 5 colaboradores damos inicio la operación de este nuevo modelo de negocio.",
        image: "/definicion-de-la-educacion-sssssscontinua.jpg"
    },
    {
        title:"Sucursal Exprés: Mazatlán Delfín",
        text: "El Cuatro de Octubre inauguramos la primera sucursal exprés de Kalisch Acero en la ciudad de Mazatlán. En un terreno de 33m2 y con un total de 5 colaboradores damos inicio la operación de este nuevo modelo de negocio.",
        image: "/definicion-de-la-educacion-sssssscontinua.jpg"
    },
    {
        title:"Sucursal Exprés: Mazatlán Delfín",
        text: "El Cuatro de Octubre inauguramos la primera sucursal exprés de Kalisch Acero en la ciudad de Mazatlán. En un terreno de 33m2 y con un total de 5 colaboradores damos inicio la operación de este nuevo modelo de negocio.",
        image: "/definicion-de-la-educacion-sssssscontinua.jpg"
    },
    {
        title:"Sucursal Exprés: Mazatlán Delfín",
        text: "El Cuatro de Octubre inauguramos la primera sucursal exprés de Kalisch Acero en la ciudad de Mazatlán. En un terreno de 33m2 y con un total de 5 colaboradores damos inicio la operación de este nuevo modelo de negocio.",
        image: "/definicion-de-la-educacion-sssssscontinua.jpg"
    }
];

const Counter: React.FC<{ value: string }> = ({ value }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = parseInt(value, 10);
            if (start === end) return;

            let totalDuration = 2500; // Duración total de la animación en milisegundos
            let incrementTime = (totalDuration / end) * 1.5; // Intervalo entre incrementos

            const timer = setInterval(() => {
                start += 2;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, incrementTime);

            return () => clearInterval(timer); // Limpia el intervalo al desmontar
        }
    }, [inView, value]);

    return (
        <div ref={ref} className={`transition-transform transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <p className="text-7xl text-white font-extrabold">{count}</p>
        </div>
    );
};

export const Hero = () => {
    const [showCounters, setShowCounters] = useState(false);

    useEffect(() => {

        setTimeout(() => {
            setShowCounters(true);
        }, 500); // Retraso de 2 segundos para mostrar los contadores
    }, []);

    return (
        <div className="bg-white">
            <div>
                <div className="flex flex-row w-full max-h-full overflow-x-hidden">
                    <div className="flex-shrink-0 relative z-0 overflow-x-hidden">
                        <img src="/Portada_K_1.png" className="object-contain " alt="Portada_K_1" />
                    </div>
                    <div className="relative flex-shrink-0 z-10 overflow-x-hidden">
                        <img src="/Portada_K_2.png" className="object-cover overflow-x-clip w-full h-full" alt="Portada_K_2" />
                        <img src="/Logotipo_KA2022_v19.png" className="absolute top-60 left-80 h-44 w-112 max-w-full max-h-full ml-8" alt="Logotipo_KA2022_v19" />
                    </div>
                </div>
                <div className="fixed z-50 items-end bottom-5 right-8">
                    <div className="sticky-position xs:hidden md:block">
                        <ScrollTopButton />
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Carousel />
            </div>
            {/* Seccion de Años*/}
            <div className="xl:h-80 lg:h-auto bg-slate-900 xs:py-16 items-center justify-center lg:flex lg:flex-row">
                {showCounters && (
                    <>
                        <div className="flex flex-col items-center lg:mr-32">
                            <Counter value="44" />
                            <p className="text-white text-2xl font-serif mt-5">Años</p>
                        </div>
                        <div className="flex flex-col items-center lg:mr-32">
                            <Counter value="44" />
                            <p className="text-white text-2xl font-serif mt-5">Sucursales</p>
                        </div>
                        <div className="flex flex-col items-center lg:mr-32">
                            <Counter value="22" />
                            <p className="text-white text-2xl font-serif mt-5">Ciudades</p>
                        </div>
                        <div className="flex flex-col items-center lg:mr-32">
                            <Counter value="8" />
                            <p className="text-white text-2xl font-serif mt-5">Estados</p>
                        </div>
                        <div className="flex flex-col items-center lg:mr-32">
                            <Counter value="2" />
                            <p className="text-white text-2xl font-serif mt-5">Países</p>
                        </div>
                    </>
                )}
                </div>
            <div>
                </div>
            {/* Seccion de Sucursales*/}
            <div className="flex flex-col mb-16 mx-36 items-center">
                <div className="">
                    <p className=" font-normal my-14 text-3xl">Divisiones</p>
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
            <div>
                <FlipCardSlider />
            </div>
            <div className="flex flex-col items-center">
                <div className="items-center mb-5">
                    <p className=" text-3xl">¿Dónde estamos?</p>
                </div>
                <div className="lg:flex lg:flex-row">
                    <div className="">
                        <img src="/Recurso-2.png" className="xs:h-116 xs:w-128" alt="Recurso-2" />
                    </div>
                    <div className="flex flex-col  lg:ml-10">
                        <div className="flex flex-row  hover:bg-green-900 xs:w-auto  hover:text-white transition ease-in-out duration-300 py-4 sm:pr-72 pl-5 ">
                            <div className="">
                                <FaArrowRight className=" w-7 h-7"/>
                            </div>
                            <div className=" items-center ml-5">
                                <p className="text-2xl">Aguascalientes</p>
                            </div>
                        </div>
                        <div className="flex flex-row border-t border-opacity-50 hover:border-transparent hover:bg-green-900  hover:text-white transition ease-in-out duration-300 py-4 sm:pr-72 pl-5 ">
                            <div className="">
                                <FaArrowRight className=" w-7 h-7"/>
                            </div>
                            <div className=" items-center ml-5">
                                <p className="text-2xl">Chihuahua</p>
                            </div>
                        </div>
                        <div className="flex flex-row border-t border-opacity-50 hover:border-transparent hover:bg-green-900  hover:text-white transition ease-in-out duration-300 py-4 sm:pr-72 pl-5 ">
                            <div className="">
                                <FaArrowRight className=" w-7 h-7"/>
                            </div>
                            <div className=" items-center ml-5">
                                <p className="text-2xl">Durango</p>
                            </div>
                        </div>
                        <div className="flex flex-row border-t border-opacity-50 hover:border-transparent hover:bg-green-900  hover:text-white transition ease-in-out duration-300 py-4 sm:pr-72 pl-5 ">
                            <div className="">
                                <FaArrowRight className=" w-7 h-7"/>
                            </div>
                            <div className=" items-center ml-5">
                                <p className="text-2xl">Guanajuato</p>
                            </div>
                        </div>
                        <div className="flex flex-row border-t border-opacity-50 hover:border-transparent hover:bg-green-900  hover:text-white transition ease-in-out duration-300 py-4 sm:pr-72 pl-5 ">
                            <div className="">
                                <FaArrowRight className=" w-7 h-7"/>
                            </div>
                            <div className=" items-center ml-5">
                                <p className="text-2xl">Sinaloa</p>
                            </div>
                        </div>
                        <div className="flex flex-row border-t border-opacity-50 hover:border-transparent hover:bg-green-900  hover:text-white transition ease-in-out duration-300 py-4 sm:pr-72 pl-5 ">
                            <div className="">
                                <FaArrowRight className=" w-7 h-7"/>
                            </div>
                            <div className=" items-center ml-5">
                                <p className="text-2xl">Sonora</p>
                            </div>
                        </div>
                        <div className="flex flex-row border-t border-opacity-50 hover:border-transparent hover:bg-green-900  hover:text-white transition ease-in-out duration-300 py-4 sm:pr-72 pl-5 ">
                            <div className="">
                                <FaArrowRight className=" w-7 h-7"/>
                            </div>
                            <div className=" items-center ml-5">
                                <p className="text-2xl">Texas</p>
                            </div>
                        </div>
                        <div className="flex flex-row border-t border-opacity-50 hover:border-transparent hover:bg-green-900  hover:text-white transition ease-in-out duration-300 py-4 sm:pr-72 pl-5 ">
                            <div className="">
                                <FaArrowRight className=" w-7 h-7"/>
                            </div>
                            <div className=" items-center ml-5">
                                <p className="text-2xl">Zacatecas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mb-16 lg:mx-36 items-center">
                <div className="">
                    <p className=" font-normal my-14 text-3xl">Noticias</p>
                </div>
                <div className=" w-screen">
                    <NewsCarousel news={newsData} />
                </div>
            </div>
            
        </div>
    );
}