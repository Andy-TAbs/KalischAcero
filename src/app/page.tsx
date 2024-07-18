import Image from "next/image";
import React from "react";
import { Header } from "../components/Global/Header/Header";
import { Footer } from "../components/Global/Footer/Footer";
import { Hero }  from "../components/Hero/HeroLandingPage/Hero";
import dynamic from 'next/dynamic';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
    return (
        <div className="flex-col flex w-full overflow-hidden">
            <div className="fixed w-full z-50">
                <Header title="Kalisch Ac0ero" />
            </div>
            <div className=" overflow-hidden lg:mt-11 md:mt-5 sm:mt-2">
                <Hero />
            </div>
            <div className="w-screen overflow-hidden">
                <Footer />
            </div>
            <SpeedInsights />
        </div>
    );
}
