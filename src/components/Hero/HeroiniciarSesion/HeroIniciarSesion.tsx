"use client";
import React, {useState} from 'react';
import Image from 'next/image';
import { RiEyeFill } from "react-icons/ri";
import { RiEyeCloseFill } from "react-icons/ri";


interface Props {
    // Define las propiedades del componente aquí
}

const HeroIniciarSesion: React.FC<Props> = () => {
    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [Error, setError] = useState("");

    const toggleeye = () => {
    setIsEyeOpen(!isEyeOpen);
    };

    return (
        <div className='grid place-items-center h-screen w-screen bg-neutral-50'>
            <div className="shadow-lg p-5 rounded-lg border-t-4  border-green-700 bg-neutral-100">
                <div className='flex flex-col justify-center items-center'>
                    <a href="/" className="">
                        <Image width={200} height={100} src="/kfa_movil_50.png" className="lg:h-9 w-auto sm:h-9 xs:h-10  " alt="Kalisch_Logo"/>
                    </a>
                    <h1 className='px-3 pt-10 font-semibold text-2xl'>Inicio de Sesión</h1>
                </div>
                <div className='flex flex-col pt-4'>
                    <label className='text-lg font-semibold pb-2'>Usuario: </label>
                    <div>
                        <input onChange={e => setUsername(e.target.value)} type="text" placeholder='Usuario' className='border-2 text-lg border-gray-300 rounded-md p-1' />
                    </div>
                    <label className='text-lg font-semibold pb-2'>Contraseña: </label>
                    <div className='flex flex-row items-center'>
                        <input type={isEyeOpen ? 'text' : 'password'} onChange={e => setPassword(e.target.value)}  placeholder='Contraseña' className='border-2 text-lg h-auto w-full border-gray-300 rounded-md p-1' />
                        <div onClick={toggleeye} style={{cursor: 'pointer'}} className='h-5 pl-3'>
                            {isEyeOpen ? <RiEyeFill /> : <RiEyeCloseFill  />}
                        </div>
                    </div>
                    { Error && (
                    <div className='bg-red-600 text-white w-fit text-sm py-1 px-3 rounded-md mt-3'>
                        {Error}
                    </div>
                    )
                    }

                    <div className='w-full flex flex-col items-center justify-center pt-5'>
                    <button className='bg-green-700 text-white p-3 w-full rounded-md'>Iniciar Sesión</button></div>

                    <div className='w-full flex flex-row justify-end items-center pt-7'>
                        <a href='#' className='text-blue-500'>¿Olvidaste tu Contraseña?</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroIniciarSesion;