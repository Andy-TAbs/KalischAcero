import Image from "next/image";
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="">
        <Header title="Kalisch Acero" />
      </div>
      <div className="flex flex-shrink-0 mt-auto">
        <Footer />
      </div>
    </div>
  );
}
