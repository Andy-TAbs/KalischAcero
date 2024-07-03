import Image from "next/image";
import React from "react";
import { Header } from "../components/Header/Global/Header";
import { Footer } from "../components/Footer";
import { Hero }  from "../components/Hero";
import dynamic from 'next/dynamic';

export default function Home() {
    return (
        <div className="flex-col flex w-screen">
            <div className="">
                <Header title="Kalisch Acero" />
            </div>
            <div className="h-auto ">
                <Hero />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
