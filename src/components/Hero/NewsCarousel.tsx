"use client";
import React, { useRef, useEffect, useState } from 'react';

const NewsCarousel = () => {

return (
    <div className="flex flex-col">
    <div className="lg:flex lg:flex-row">
        <div className="">
            <img src="/definicion-de-la-educacion-sssssscontinua.jpg" className="h-72 w-128" alt="Recurso-2" />
        </div>
        <div className="flex flex-col">
            <div className="flex flex-row mb-3 ">
                <div className=" items-center ml-5">
                    <p className="text-2xl">Sucursal Exprés: Mazatlán Delfín</p>
                </div>
            </div>
            <div className="flex flex-row ">
                <div className=" items-center ml-5 w-144">
                    <p className="text-base text-gray-500">El Culturatro de Octubre inauguramos la primera sucursal exprés de Kalisch Acero en la ciudad de Mazatlán. En un terreno de 33m2 y con un total de 5 colaboradores damos inicio la operación de este nuevo modelo de negocio.</p>
                </div>
            </div>
            <div className="flex flex-row mr-72 mt-7">
                <button className="cta flex flex-row items-center">
                <span>Ver Noticia</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
                </button>
            </div>
        </div>
    </div>
</div>
  );
};

export default NewsCarousel;
