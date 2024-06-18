import Image from "next/image";
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col  items-center justify-between">
      <div>
        <Header title="Kalisch Acero" />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
