/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';

    function NewsCarousel() {
        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
          setIndex(selectedIndex);
        };

    return (

        <Carousel>
        <Carousel.Item interval={5000}>
        <div className=" w-screen ">
            <div className="flex  w-full  items-center justify-center">
                    <div className="lg:flex lg:flex-row  items-center justify-center">
                        <div className="lg:ml-0 lg:mx-0 flex flex-col items-center justify-center h-80 xs:mx-5">
                            <img
                            src="/definicion-de-la-educacion-sssssscontinua.jpg"
                            className="md:h-72 md:w-128 lg:mx-0"
                            alt="Sucursal Exprés: Mazatlán Delfín"
                            />
                        </div>
                        <div className="flex flex-col items-center h-80 xs:mx-5  lg:mx-0">
                            <div className="flex flex-row mb-3   lg:ml-0">
                                <div className="xs:mt-7 lg:ml-5 lg:mt-0 ">
                                    <p className="text-2xl xs:mx-5 lg:mx-0">Sucursal Exprés: Mazatlán Delfín</p>
                                </div>
                            </div>
                            <div className="flex flex-row  lg:ml-0">
                                <div className="lg:ml-5 lg:w-144 xs:w-96 md:w-128">
                                    <p className="text-base text-gray-500 xs:mx-5 lg:mx-0 text-justify">
                                        El Cuatro de Octubre inauguramos la primera sucursal exprés de Kalisch Acero en la ciudad de Mazatlán. En un terreno de 33m2 y con un total de 5 colaboradores damos inicio la operación de este nuevo modelo de negocio.
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
            </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <div className="w-screen">
            <div className="flex  w-full items-center justify-center">
                    <div className="lg:flex lg:flex-row md:flex-col items-center justify-center">
                        <div className=" lg:ml-0 lg:mx-0">
                            <img
                            src="/definicion-de-la-educacion-sssssscontinua.jpg"
                            className="md:h-72 md:w-128 lg:mx-0"
                            alt="Sucursal Exprés: Mazatlán Delfín"
                            />
                        </div>
                        <div className="flex flex-col items-center h-80 xs:mx-5  lg:mx-0">
                            <div className="flex flex-row mb-3   lg:ml-0">
                                <div className="xs:mt-7 lg:ml-5 lg:mt-0 ">
                                    <p className="text-2xl xs:mx-5 lg:mx-0">Sucursal Exprés: Mazatlán Delfín</p>
                                </div>
                            </div>
                            <div className="flex flex-row  lg:ml-0">
                                <div className="lg:ml-5 lg:w-144 xs:w-96 md:w-128">
                                    <p className="text-base text-gray-500 xs:mx-5 lg:mx-0 text-justify">
                                        El Cuatro de Octubre inauguramos la primera sucursal exprés de Kalisch Acero en la ciudad de Mazatlán. En un terreno de 33m2 y con un total de 5 colaboradores damos inicio la operación de este nuevo modelo de negocio.
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
            </div>
        </Carousel.Item>
        </Carousel>
    );
};

export default NewsCarousel;
