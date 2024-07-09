/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useRef } from "react";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const images = [
        '/Banner_HH-1980-x-300-px-1920x300.jpg',
        '/WP_KALISCH_Mineria.png',
    ];

    // Duplicar las imágenes para el efecto de bucle infinito
    const extendedImages = [...images, ...images, ...images];
    const totalImages = images.length;

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    useEffect(() => {
        if (currentIndex === -1) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(totalImages - 1);
            }, 500); // La duración de la transición
            return () => clearTimeout(timer);
        } else if (currentIndex === totalImages * 2) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(totalImages);
            }, 500); // La duración de la transición
            return () => clearTimeout(timer);
        }
        setIsTransitioning(false);
    }, [currentIndex, totalImages]);

    return (
        <div className="relative mx-auto w-full">
            <div className="overflow-hidden w-full h-full">
                <div className={`flex transition-transform duration-500 ${isTransitioning ? '' : 'duration-0'}`} style={{ transform: `translateX(-${(currentIndex + totalImages) * 100}%)` }}>
                    {extendedImages.map((image, index) => (
                        <img key={index} src={image} className="w-full h-full object-cover flex-shrink-0" alt={`Slide ${index}`} />
                    ))}
                </div>
            </div>
            <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 p-1 bg-white/30 hover:bg-white/50 transition duration-200 ease-in-out hover:scale-105 rounded-full"
                onClick={prevSlide}
            >
                <span className="w-3 hidden">Hola</span>
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>
            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-1 bg-white/30 hover:bg-white/50 transition duration-200 ease-in-out hover:scale-105 rounded-full"
                onClick={nextSlide}
            >
                <span className="w-3 hidden">Hola</span>
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
    );
};

export default Carousel;
