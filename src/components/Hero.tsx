/* eslint-disable @next/next/no-img-element */
import React from "react";

import CarouselMobile from "./Header/Mobile/carouselMobile";
import Carousel from "./Header/Global/Carousel";

export const Hero = () => {
return (
<div>
    <div>
        <div className="flex flex-row w-full max-h-full overflow-x-hidden">
            <div className="flex-shrink-0 relative z-0 overflow-x-hidden">
                <img src="/Portada_K_1.png" className="object-contain " alt="Logo_KalischFA_white" />
            </div>
            <div className="relative flex-shrink-0 z-10 overflow-x-hidden">
                <img src="/Portada_K_2.png" className="object-cover overflow-x-clip w-full h-full" alt="Logo_KalischFA_black" />
                <img src="/Logotipo_KA2022_v19.png" className="absolute top-60 left-80 h-44 w-112 max-w-full max-h-full ml-8" alt="Logo_KalischFA_black" />
            </div>
        </div>
    </div>
    <div className="w-full">
            <Carousel />
    </div>
    <div className="xl:h-80 lg:h-auto bg-slate-900 xs:py-16 items-center justify-center lg:flex lg:flex-row">
        <div className="flex flex-col items-center lg:mr-32">
            <p className="text-7xl text-white font-extrabold">44</p>
            <p className="text-white text-2xl font-serif mt-5">Años</p>
        </div>
        <div className="flex flex-col items-center lg:mr-32">
            <p className="text-7xl text-white font-extrabold">44</p>
            <p className="text-white text-2xl font-serif mt-5">Sucursales</p>
        </div>
        <div className="flex flex-col items-center lg:mr-32">
            <p className="text-7xl text-white font-extrabold">22</p>
            <p className="text-white text-2xl font-serif mt-5">Ciudades</p>
        </div>
        <div className="flex flex-col items-center lg:mr-32">
            <p className="text-7xl text-white font-extrabold">8</p>
            <p className="text-white text-2xl font-serif mt-5">Estados</p>
        </div>
        <div className="flex flex-col items-center lg:mr-32">
            <p className="text-7xl text-white font-extrabold">2</p>
            <p className="text-white text-2xl font-serif mt-5">Países</p>
        </div>
    </div>
</div>
    );
}