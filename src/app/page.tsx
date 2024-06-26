import Image from "next/image";
import React from "react";
import { Header } from "../components/Global/Header";
import { Footer } from "../components/Global/Footer";
import { Hero }  from "../components/Hero";
import dynamic from 'next/dynamic';

export default function Home() {
    return (
        <div className="flex-col w-screen">
                <Header title="Kalisch Acero" />
                <Hero />
            <Footer />
        </div>
    );
}
