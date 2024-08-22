import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

interface Contenido{
    Lugar: String;
    Direccion: String;
    Telefono: String;
    Whatsapp: String;
}

const Sucursales: React.FC<Contenido> = ({Lugar, Direccion, Telefono, Whatsapp}) => {
    return (
        <div className='flex flex-col w-64 text-pretty'>
            <div className='text-lg font-semibold pb-2'>
                <h4>{Lugar}</h4>
            </div>
            <div className='font-light text-neutral-500'>
                <p>{Direccion}</p>
            </div>
            <div className='flex flex-row items-center my-1 font-light text-neutral-500'>
                <FaPhone className='mr-2' />
                <p>{Telefono}</p>
            </div>
            <div className='flex flex-row items-center my-1 font-light text-neutral-500'>
                <FaWhatsapp className='mr-2'/>
                <p>{Whatsapp}</p>
            </div>
            <button className='w-full bg-neutral-100 h-14 mt-4'>
                Más Información
            </button>
        </div>
    );
};

export default Sucursales;