import Image from "next/image";
import React from "react";
import { Header } from "../components/Header/Global/Header";
import { Footer } from "../components/Footer";
import { Hero }  from "../components/Hero";
import dynamic from 'next/dynamic';

export default function Home() {
    return (
        <div className="flex-col flex w-screen">
            <div className="fixed">
                <Header title="Kalisch Acero" />
            </div>
            <div className="lg:mt-24 md:mt-11 xs:mt-10">
                <Hero />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
