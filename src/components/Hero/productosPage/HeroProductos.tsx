import React from 'react';
import SocialButtons from '@/components/Global/SocialButtons';
import ScrollTopButton from '@/components/Global/ScrollTopButton';
import Image from 'next/image';

interface Props {
    // Define las propiedades del componente aquí
}

const Hero: React.FC<Props> = () => {
    return (
        <div className="w-screen">
        <div className='h-204 relative '>
            <video autoPlay muted loop id="background-video" className="absolute inset-0 z-0 w-full h-full object-cover">
                <source src="/productos.mp4" type="video/mp4" />
                    Tu navegador no soporta el video.
            </video>
            <div className='absolute inset-0 flex lg:right-144 md:right-80 sm:right-40 xs:right-32 lg:top-52 md:top-52 sm:top-52 xs:top-52 xsm:top-52 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-28 xs:left-10 z-10'>
                <p className='sm:text-sm xs:text-xxs font-Bebas_Neue text-white select-none'>R &nbsp;E &nbsp;D &nbsp;U &nbsp;C &nbsp;I &nbsp;M &nbsp;O &nbsp;S&nbsp;&nbsp; &nbsp;&nbsp;T &nbsp;U &nbsp;&nbsp;  &nbsp;&nbsp;T &nbsp;I &nbsp;E &nbsp;M &nbsp;P &nbsp;O &nbsp;&nbsp;&nbsp;&nbsp;C &nbsp;O &nbsp;N </p>
            </div>
            <div className='absolute inset-0 flex lg:right-144 md:right-80 sm:right-40 xs:right-32 lg:top-56 md:top-56 sm:top-56 xs:top-56 xsm:top-56 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-28 xs:left-10 z-10'>
                <p className='sm:text-sm xs:text-xxs font-Bebas_Neue text-white select-none'>C &nbsp;O &nbsp;R &nbsp;T &nbsp;E &nbsp;S &nbsp;&nbsp;  &nbsp;&nbsp;A &nbsp;&nbsp;  &nbsp;&nbsp;T &nbsp;U&nbsp;&nbsp; &nbsp;&nbsp;M &nbsp;E &nbsp;D &nbsp;I &nbsp;D &nbsp;A</p>
            </div>
            <div className='absolute inset-0 flex lg:right-80 md:right-28 sm:right-20  lg:top-56 md:top-56 sm:top-60 xs:top-60 xsm:top-60 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-28 xs:left-10 z-10'>
                <p className='md:text-11xl xs:text-7xl sm:text-9xl font-Bebas_Neue text-white font-extrabold select-none'>PRODUCTOS</p>
            </div>
        </div>
        <div>
            <SocialButtons />
        </div>
        <div className='bg-white h-auto py-24'>
            <div className="fixed z-50 items-end bottom-5 right-8">
                <div className="sticky-position xs:hidden md:block">
                    <ScrollTopButton />
                </div>
            </div>

            <div className="grid md:grid-cols-4 mx-32 items-center justify-center gap-0 select-none">
                <a className='flex flex-col items-center justify-center' href='/productos/Estructurales'>
                    <div className='flex flex-col h-66 w-66 transition-all duration-300 hover:bg-neutral-800/40 justify-center items-center content-center'>
                            <Image src='/productos/estructura.jpg' alt='productos' width={250} height={250} className="transition-opacity duration-300 hover:opacity-85" />
                    </div>
                    <p className='text-neutral-700 text-xl font-semibold'>Estructurales</p>
                </a>

                <a className='flex flex-col items-center justify-center' href='/productos/Perfileria'>
                    <div className='flex flex-col h-66 w-66 transition-all duration-300 hover:bg-neutral-800/40 justify-center items-center content-center'>
                            <Image src='/productos/PERFILERIA.jpg' alt='productos' width={250} height={250} className="transition-opacity duration-300 hover:opacity-85" />
                    </div>
                    <p className='text-neutral-700 text-xl font-semibold'>Perfilería</p>
                </a>

                <a className='flex flex-col items-center justify-center' href='/productos/Planos'>
                    <div className='flex flex-col h-66 w-66 transition-all duration-300 hover:bg-neutral-800/40 justify-center items-center content-center'>
                            <Image src='/productos/PLANOS.jpg' alt='productos' width={250} height={250} className="transition-opacity duration-300 hover:opacity-85" />
                    </div>
                    <p className='text-neutral-700 text-xl font-semibold'>Planos</p>
                </a>

                <a className='flex flex-col items-center justify-center' href='/productos/Polineria'>
                    <div className='flex flex-col h-66 w-66 transition-all duration-300 hover:bg-neutral-800/40 justify-center items-center content-center'>
                            <Image src='/productos/POLINERIA.jpg' alt='productos' width={250} height={250} className="transition-opacity duration-300 hover:opacity-85" />
                    </div>
                    <p className='text-neutral-700 text-xl font-semibold'>Polinería</p>
                </a>
            </div>

            <div className="grid md:grid-cols-4 mx-32 items-center justify-center gap-0 select-none">
                <a className='flex flex-col items-center justify-center' href='/productos/Recubiertos'>
                    <div className='flex flex-col h-66 w-66 transition-all duration-300  hover:bg-neutral-800/40 justify-center items-center content-center'>
                            <Image src='/productos/RECUBIERTOS.jpg' alt='productos' width={250} height={250} className="transition-opacity duration-300 hover:opacity-85" />
                    </div>
                    <p className='text-neutral-700 text-xl font-semibold'>Recubiertos</p>
                </a>

                <a className='flex flex-col items-center justify-center' href='/productos/Solidos'>
                    <div className='flex flex-col h-66 w-66 transition-all duration-300 hover:bg-neutral-800/40 justify-center items-center content-center'>
                            <Image src='/productos/SOLIDOS.jpg' alt='productos' width={250} height={250} className="transition-opacity duration-300 hover:opacity-85" />
                    </div>
                    <p className='text-neutral-700 text-xl font-semibold'>Sólidos</p>
                </a>

                <a className='flex flex-col items-center justify-center' href='/productos/Trefilados'>
                    <div className='flex flex-col h-66 w-66 transition-all duration-300 hover:bg-neutral-800/40 justify-center items-center content-center'>
                            <Image src='/productos/TREFILADOS.jpg' alt='productos' width={250} height={250} className="transition-opacity duration-300 hover:opacity-85" />
                    </div>
                    <p className='text-neutral-700 text-xl font-semibold'>Trefilados</p>
                </a>

                <a className='flex flex-col items-center justify-center' href='/productos/Tuberia'>
                    <div className='flex flex-col h-66 w-66 transition-all duration-300 hover:bg-neutral-800/40 justify-center items-center content-center'>
                            <Image src='/productos/TUBERIA-1.jpg' alt='productos' width={250} height={250} className="transition-opacity duration-300 hover:opacity-85" />
                    </div>
                    <p className='text-neutral-700 text-xl font-semibold'>Tubería</p>
                </a>
            </div>
        </div>
    </div>
    );
};

export default Hero;