import React from 'react';
import Image from 'next/image';
import { FaDownload } from "react-icons/fa6";

interface HeroProps {
}

const Hero: React.FC<HeroProps> = () => {
    return (
        <div className="w-screen">
            <div className='bg-black h-204'></div>
            <div className='bg-white h-auto pb-24'>
                <div className='flex flex-col mx-20 h-full items-center'>
                    <div className='lg:mx-32 md:mx-12 my-12 items-center'>
                        <div className='w-auto'>
                            <p className='w-auto text-justify font-light'>Nuestro código de ética es la expresión del compromiso de todos los colaboradores de <strong>Kalisch Acero</strong> por mantener los más altos niveles de desempeño y un comportamiento óptimo, que oriente la forma de hacer negocios con honestidad, ética, profesionalismo y los valores de la empresa.</p>
                        </div>
                        <div className='mt-7 w-auto '>
                            <p className='w-auto text-justify font-light'>Nuestros grupos de interés son: <strong>clientes, colaboradores, proveedores, accionistas, competidores, autoridades, acreedores y comunidad.</strong></p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mx-20 h-full items-center'>
                    <div className='lg:mx-32 md:mx-12 my-12 items-center'>
                        <div className=''>
                            <p className='text-2xl'>Construyendo un Entorno Organizacional Favorable</p>
                        </div>
                        <div className='mt-5 w-auto'>
                            <p className='w-auto text-justify font-light'>En <strong>Kalisch Acero</strong> nos preocupamos y ocupamos por construir un Entorno Organizacional Favorable, promover el sentido de pertenencia en la compañía, además de identificar, analizar y prevenir Factores de Riesgo Psicosocial entre nuestros colaboradores.</p>
                        </div>
                        <div className='mt-7 w-auto '>
                            <p className='w-auto text-justify font-light'>Asumimos este compromiso con nuestra Política de Bienestar, la cual fomentamos activamente en nuestra compañía.</p>
                        </div>
                        <div className='mt-7 w-auto '>
                            <p className='w-auto text-justify font-medium'>¡Conócela!</p>
                        </div>
                        <div className='mt-5'>
                        <button className="cursor-pointer transition-all flex flex-row items-center justify-center bg-zinc-100 text-zinc-400 hover:text-white  px-6 py-2 rounded-lg
                            border-zinc-300
                            border-b-[4px] hover:bg-green-700 hover:border-green-800 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                            <div>
                                <p>Politica de Bienestar</p>
                            </div>
                            <div>
                                <FaDownload className="inline-block text-sm text-zinc-400 hover:text-white  ml-2" />
                            </div>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;