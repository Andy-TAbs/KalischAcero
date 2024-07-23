import React from 'react';
import Image from 'next/image';

interface HeroProps {
}

const Hero: React.FC<HeroProps> = () => {
    return (
        <div className="w-screen">
            <div className='bg-black h-204'></div>
            <div className='bg-white h-auto pb-24'>
                <div className='flex flex-col mx-20 h-full items-center'>
                    <div className='lg:mx-32 md:mx-12 my-12 items-center'>
                        <div className=''>
                            <p className='text-2xl'>Nuestros Inicios</p>
                        </div>
                        <div className='mt-5 w-auto'>
                            <p className='w-auto text-justify font-light'>En el año 1979 nació <b>Kalisch Acero</b> en la ciudad de Chihuahua, Chihuahua. Iniciamos con el proyecto de comercialización del acero y posteriormente añadimos una amplia gama de herramienta y ferretería, además, del habilitado de acero. En México contamos con sucursales en los estados de Chihuahua, Sonora, Sinaloa, Durango, Aguascalientes, Guanajuato y Zacatecas, además, en 2009 iniciamos nuestras operaciones en El Paso, Texas con la apertura de Kalisch Steel.</p>
                        </div>
                        <div className='mt-7 w-auto '>
                            <p className='w-auto text-justify font-light'>En <b>Kalisch Acero</b> contamos con maquinaria de vanguardia, equipo innovador y desarrollo de talento que nos ayuda a fortalecer la relación con nuestros clientes y brindarles el mejor servicio. Nuestro código de conducta y normas están basados en nuestros valores, además, constantemente nos esforzamos por ser una empresa sostenible y comprometida con nuestra comunidad.</p>
                        </div>
                    </div>

                    <div className='mx-32 md:mx-12 my-12 items-center '>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;