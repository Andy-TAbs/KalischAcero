import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaClock } from "react-icons/fa6";

interface Contenido {
    Lugar: string;
    Direccion: string;
    Telefono: string;
    Whatsapp: string;
}

const Sucursales: React.FC<Contenido> = ({ Lugar, Direccion, Telefono, Whatsapp }) => {
    const [showAccordion, setShowAccordion] = useState<boolean>(false);

    const toggleAccordion = () => {
        setShowAccordion(prevState => !prevState);
    };

    return (
        <div className='flex flex-col w-64 text-pretty mr-5 justify-center'>
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
                <FaWhatsapp className='mr-2' />
                <p>{Whatsapp}</p>
            </div>
            <button 
                className='sm:w-full xs:w-screen bg-neutral-200 font-semibold hover:bg-green-900 hover:text-white ease-in transition-all duration-150 h-14 mt-4'
                onClick={toggleAccordion}
            >
                Más Información
            </button>
            {showAccordion && (
                <div className='flex flex-col mt-4 p-4 bg-neutral-100 rounded-md xs:w-screen sm:w-full'>
                    <button className='bg-neutral-200 hover:bg-green-900 hover:text-white hover:w-full ease-in transition-all duration-150 rounded-md xs:h-14 sm:w-48  md:h-11 items-center justify-evenly flex md:flex-row xs:flex-col'>
                        <p className='font-medium'>Indicaciones</p>
                        <FaMapMarkerAlt />
                    </button>
                    <button className='bg-neutral-200 hover:bg-green-900 hover:text-white hover:w-full ease-in transition-all duration-150 rounded-md xs:h-14 sm:w-48  md:h-11 items-center justify-evenly flex md:flex-row xs:flex-col mt-3'>
                        <p className='font-medium'>Cotizar Aquí</p>
                        <IoIosMail />
                    </button>
                    <div className='flex flex-row items-center w-full justify-around mt-5 mb-2'>
                        <p className='font-medium'>Horarios</p>
                        <FaClock />
                    </div>
                    <div className='flex-col w-full'>
                        <div className='flex flex-row items-center justify-between text-sm mb-1'>
                            <p className='font-light text-neutral-500'>Lunes</p>
                            <p className='font-light text-neutral-500 '>8:00 am - 5:30 pm</p>
                        </div>
                        <div className='flex flex-row items-center justify-between text-sm mb-1'>
                            <p className='font-light text-neutral-500 '>Martes</p>
                            <p className='font-light text-neutral-500 '>8:00 am - 5:30 pm</p>
                        </div>
                        <div className='flex flex-row items-center justify-between text-sm mb-1'>
                            <p className='font-light text-neutral-500'>Miércoles</p>
                            <p className='font-light text-neutral-500'>8:00 am - 5:30 pm</p>
                        </div>
                        <div className='flex flex-row items-center justify-between text-sm mb-1'>
                            <p className='font-light text-neutral-500'>Jueves</p>
                            <p className='font-light text-neutral-500'>8:00 am - 5:30 pm</p>
                        </div>
                        <div className='flex flex-row items-center justify-between text-sm mb-1'>
                            <p className='font-light text-neutral-500'>Viernes</p>
                            <p className='font-light text-neutral-500'>8:00 am - 5:30 pm</p>
                        </div>
                        <div className='flex flex-row items-center justify-between text-sm mb-1'>
                            <p className='font-light text-neutral-500'>Sábado</p>
                            <p className='font-light text-neutral-500'>8:00 am - 1:30 pm</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sucursales;
