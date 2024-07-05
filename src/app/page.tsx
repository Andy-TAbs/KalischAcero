import Image from "next/image";
import React from "react";
import { Header } from "../components/Header/Global/Header";
import { Footer } from "../components/Footer";
import { Hero }  from "../components/Hero";
import dynamic from 'next/dynamic';

export default function Home() {
    return (
        <div className="flex-col flex w-screen">
            <div className="fixed z-50">
                <Header title="Kalisch Acero" />
            </div>
            <div className="lg:mt-11 md:mt-5 sm:mt-2">
                <Hero />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
