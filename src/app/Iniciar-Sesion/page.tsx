import Image from "next/image";
import React from "react";
import { Footer } from "../../components/Global/Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import HeroIniciarSesion from "@/components/Hero/HeroiniciarSesion/HeroIniciarSesion";

export default function Home() {
    return (
        <div className="flex-col flex w-full overflow-hidden">
            <div className=" overflow-hidden ">
                <HeroIniciarSesion />
            </div>
            <div className="w-screen overflow-hidden">
                <Footer />
            </div>
            <SpeedInsights />
        </div>
    );
}
