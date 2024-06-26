import Image from "next/image";
import React from "react";
import { Header } from "../components/Global/Header";
import { Footer } from "../components/Global/Footer";
import { Hero } from "../components/Hero";
import dynamic from 'next/dynamic';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
        <div className="">
            <Header title="Kalisch Acero" />
        </div>
        <div>
        <Hero />
        </div>
        <div className="flex flex-shrink-0 mt-auto">
            <Footer />
        </div>
        </div>
    );
}
