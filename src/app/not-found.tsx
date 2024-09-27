import Image from "next/image";
import React from "react";
import { Header } from "../components/Global/Header/Header";
import { Footer } from "../components/Global/Footer/Footer";
import SocialButtons from "@/components/Global/SocialButtons";
import dynamic from 'next/dynamic';
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function Custom404() {
return (
    <div className="flex-col flex w-full overflow-hidden">
            <div className="fixed w-full z-30">
                <Header title="Kalisch Acero" />
            </div>
            <div className=" overflow-hidden lg:mt-11 bg-404 md:mt-5 h-screen sm:mt-2">
                <div className="bg-404"></div>
                <div className="flex flex-col justify-center items-center w-full h-screen">
                    <SocialButtons />
                    <p className="text-white text-5xl font-semibold mb-10">¡Parece que la pagina que estas</p>
                    <p className="text-white text-5xl font-semibold mb-20">intentando buscar no existe!</p>
                    <a href="/" className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-green-500 hover:before:[box-shadow:_20px_20px_20px_30px_#2ecc71] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-green-500 relative bg-green-800 h-16 w-64 border text-left p-3 text-white text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-green-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-green-500 after:right-8 after:top-3 after:rounded-full after:blur-lg">Volver al Inicio</a>
                </div>
            </div>
            <div className="w-screen overflow-hidden">
                <Footer />
            </div>
            <SpeedInsights />
        </div>
    )
}

