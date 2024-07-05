/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Header } from "./Header/Global/Header";
import { useMediaQuery } from "react-responsive";
import CarouselMobile from "./Header/Mobile/carouselMobile";
import Carousel from "./Header/Global/Carousel";

export const Hero = () => {
return (
<div>
    <div className="flex flex-row w-full max-h-full overflow-x-hidden">
        <div className="flex-shrink-0 relative z-0 overflow-x-hidden">
            <img src="/Portada_K_1.png" className="object-contain " alt="Logo_KalischFA_white" />
        </div>
        <div className="relative lg:flex-shrink-0 z-10 overflow-x-hidden">
            <img src="/Portada_K_2.png" className="object-cover w-full h-full" alt="Logo_KalischFA_black" />
            <img src="/Logotipo_KA2022_v19.png" className="absolute top-60 left-80 h-44 w-112 max-w-full max-h-full ml-8" alt="Logo_KalischFA_black" />
        </div>
    </div>
    <div className="w-full">
        <Carousel />
    </div>
</div>
    );
}