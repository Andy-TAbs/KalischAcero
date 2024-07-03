/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Header } from "./Header/Global/Header";
import { useMediaQuery } from "react-responsive";
import CarouselMobile from "./Header/Mobile/carouselMobile";
import Carousel from "./Header/Global/Carousel";

export const Hero = () => {
return (
    <div className="w-full contents">
        <div className="flex flex-row">
            <div className="">
            <img src="/Portada_K_1.png" alt="Logo_KalischFA_white" />
            </div>
            <div>
                <img src="/Portada_K_2.png" alt="Logo_KalischFA_black" />
            </div>
        </div>
</div>
    );
}