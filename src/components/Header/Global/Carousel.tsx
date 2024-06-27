"use client";
import React, {useState} from "react";

const Carousel = () => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const images = [
        '/Banner_HH-1980-x-300-px-1920x300.jpg',
        '/WP_KALISCH_Mineria.png',
        ];
        const prevSlide = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
        };
    
        const nextSlide = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        };
        return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg">
            <img src={images[currentIndex]} className="w-full h-64 object-cover md:h-96" alt={`Slide ${currentIndex}`} />
            </div>
            <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-white/30 hover:bg-white/50 rounded-full"
            onClick={prevSlide}
            ><span className="w-3 hidden">Hola</span>
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            </button>
            <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-white/30 hover:bg-white/50 rounded-full"
            onClick={nextSlide}
            ><span className="w-3 hidden">Hola</span>
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            </button>
        </div>
        );
    };
    
  export default Carousel;