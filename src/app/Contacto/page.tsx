import Image from "next/image";
import React from "react";
import { Header } from "../../components/Global/Header/Header";
import { Footer } from "../../components/Global/Footer/Footer";
import  HeroContacto   from "../../components/Hero/ContactoPage/HeroContacto";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
    return (
        <div className="flex-col flex w-full overflow-hidden">
            <div className="fixed w-full z-30">
                <Header title="Kalisch Acero" />
            </div>
            <div className=" overflow-hidden lg:mt-11 md:mt-5 sm:mt-2">
                <HeroContacto />
            </div>
            <div className="w-screen overflow-hidden">
                <Footer />
            </div>
            <SpeedInsights />
        </div>
    );
}
