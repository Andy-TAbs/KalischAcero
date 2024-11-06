import Image from "next/image";
import React from "react";
import { Header } from "../../../components/Global/Header/Header";
import { Footer } from "../../../components/Global/Footer/Footer";
import  HeroPerfileria   from "../../../components/Hero/productosPage/HeroPerfileria/HeroPerfileria";
import dynamic from 'next/dynamic';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
    return (
        <div className="flex-col flex w-full overflow-hidden">
            <header className="fixed w-full z-30">
                <Header title="Kalisch Acero" />
            </header>
            <main className=" overflow-hidden lg:mt-11 md:mt-5 sm:mt-2">
                <HeroPerfileria />
            </main>
            <footer className="w-screen overflow-hidden">
                <Footer />
            </footer>
            <SpeedInsights />
        </div>
    );
}