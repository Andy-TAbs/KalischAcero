"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { useInView } from 'react-intersection-observer';
import FlipCardSlider from "../../Global/SliderCards";
import { FaArrowRight } from "react-icons/fa";
import NewsCarousel from "./NewsCarousel";
import FlipCard2 from "../../Global/FlipCard2";
import SliderAlliance from "./SliderAlliance";
import ScrollTopButton from "@/components/Global/ScrollTopButton";
import SocialButtons from "@/components/Global/SocialButtons";
import { MapAccordion } from "./MapAccordion";



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
        <main role="main">
            <div className="bg-white">
                <div>
                    <div className="flex flex-row w-full min-h-full overflow-x-hidden">
                        <div className="flex-shrink-0 relative z-0  overflow-x-hidden">
                            <img src="/Portada_K_1.png" className="relative object-contain overflow-visible 3xl:h-220 md:right-44 lg:right-32" alt="Portada_K_1" />
                        </div>
                        <div className="relative flex-shrink-0 z-10 overflow-x-hidden">
                            <img src="/Portada_K_2.png" className="relative object-cover overflow-visible w-full  h-full 3xl:ml-40" alt="Portada_K_2" />
                            <img src="/Logotipo_KA2022_v19.png" className="absolute  lg:top-64 xl:top-64 3xl:top-80 lg:left-60 xl:left-104 3xl:left-144 lg:h-36 xl:h-44 3xl:h-52 xs:w-auto xl:w-112 3xl:w-auto max-w-full max-h-full ml-8" alt="Logotipo_KA2022_v19" />
                        </div>
                        <div className="z-50">
                            <SocialButtons />
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
                            image="/steel_logo_2022.png"
                            title="Kalisch Steel"
                            text="Texto adicional 1"
                            link="#link1"
                            textlink="Ver más Información"
                            />
                        </div>
                        <div className="xl:mr-8 lg:mr-3 xs:mb-10">
                            <FlipCard2
                            image="/besthal_logo_2022.png"
                            title="Título 1"
                            text="Texto adicional 1"
                            link="#link1"
                            textlink="Ver más Información"
                            />
                        </div>
                        <div className="xl:mr-8 lg:mr-3 xs:mb-10">
                            <FlipCard2
                            image="/BOXTOOL512.png"
                            title="Título 1"
                            text="Texto adicional 1"
                            link="#link1"
                            textlink="Ver más Información"
                            />
                        </div>
                        <div className="xl:mr-8  xs:mb-10">
                            <FlipCard2
                            image="/faber_banner.png"
                            title="Título 1"
                            text="Texto adicional 1"
                            link="#link1"
                            textlink="Ver más Información"
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
                            <img src="/Recurso-2.png" className="xs:h-80 xs:w-80 sm:h-116 sm:w-128" alt="Recurso-2" />
                        </div>
                        <div>
                            <MapAccordion 
                            items={[
                                { stateName: "Aguascalientes", cities: ["Aguascalientes", "Calvillo", "Jesús María", "Pabellón de Arteaga"] },
                                { stateName: "Chihuahua", cities: ["Chihuahua", "Delicias", "Cuahutémoc", "Nvo. Casas Grandes", "Cd. Juárez"] },
                                { stateName: "Durango", cities: ["Durango"] },
                                { stateName: "Guanajuato", cities: ["León"] },
                                { stateName: "Sinaloa", cities: ["Mazatlán", "Guasave", "Mochis"] },
                                { stateName: "Sonora", cities: ["Agua Prieta", "Caborca", "Empalme", "Huatabampo", "Navojoa", "Nogales", "Hermosillo", "Guaymas", "Obregón"] },
                                { stateName: "Texas", cities: ["El Paso"] },
                                { stateName: "Zacatecas", cities: ["Fresnillo"] },
                                
                              ]}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mb-16 lg:mx-36 items-center">
                    <div className="">
                        <p className=" font-normal my-14 text-3xl">Noticias</p>
                    </div>
                    <div className=" w-screen flex items-center justify-center pb-10">
                        <NewsCarousel />
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </main>
    );
}
