import Image from "next/image";
import React from "react";
import { Header } from "../components/Header.client";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

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
