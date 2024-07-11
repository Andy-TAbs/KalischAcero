import Image from "next/image";
import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer";
import { Hero }  from "../components/Global/Hero";
import dynamic from 'next/dynamic';

export default function Home() {
    return (
        <div className="flex-col flex w-full overflow-hidden">
            <div className="fixed w-full z-50">
                <Header title="Kalisch Acero" />
            </div>
            <div className=" overflow-hidden">
                <Hero />
            </div>
            <div className="w-screen overflow-hidden">
                <Footer />
            </div>
        </div>
    );
}
