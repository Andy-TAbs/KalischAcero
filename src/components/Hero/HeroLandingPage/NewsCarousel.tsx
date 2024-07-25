/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from 'react';

    interface NewsCarouselProps {
        news: { title: string; text: string; image: string }[];
    }

    const NewsCarousel: React.FC<NewsCarouselProps> = ({ news }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const newsLength = news.length;

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newsLength);
        }, 20000); // Cambia cada 20 segundos
        return () => clearInterval(interval);
    }, [newsLength]);

    return (
        <div className="overflow-hidden w-full xl:ml-60 xs:pb-80">
        <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
            {news.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-full items-center">
                <div className="lg:flex lg:flex-row  items-center">
                    <div className="md:h-72 md:w-128 sm:h-52 sm:w-104 sm:ml-32  md:ml-44 lg:ml-0 lg:mx-0">
                        <img
                        src={item.image}
                        className="md:h-72 md:w-128 lg:mx-0"
                        alt={item.title}
                        />
                    </div>
                    <div className="flex flex-col items-center h-80 xs:mx-5  lg:mx-0">
                        <div className="flex flex-row mb-3   lg:ml-0">
                            <div className="xs:mt-7 lg:ml-5 lg:mt-0 ">
                                <p className="text-2xl xs:mx-5 lg:mx-0">{item.title}</p>
                            </div>
                        </div>
                        <div className="flex flex-row  lg:ml-0">
                            <div className="lg:ml-5 lg:w-144 xs:w-96 md:w-128">
                                <p className="text-base text-gray-500 xs:mx-5 lg:mx-0 text-justify">
                                {item.text}
                                </p>
                            </div>
                        </div>
                        <div className="flex lg:mr-96 mt-7">
                        <button className="cta flex flex-row items-center">
                            <span>Ver Noticia</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default NewsCarousel;
