"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from "@/styles/loader.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ScrollTopButton from '@/components/Global/ScrollTopButton';

function HeroPerfilPintado() {
    const [isOpen, setIsOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState('');
    const [loading, SetLoading] = useState(true);

    const openModal = (src: string) => {
        setImageSrc(src);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setImageSrc('');
    };

    const handleImageLoad = () => {
        SetLoading(false);  // Desactiva el estado de carga
        console.log("Imagen cargada correctamente.");
    };

    return (
        <div className='bg-white h-auto'>
            <div className='flex flex-col w-screen min-h-screen h-auto bg-white'>
                <div className='flex lg:flex-row xs:flex-col mt-32 gap-10 justify-center'>
                    <div className='lg:block xs:block md:flex md:flex-col max-w-168 w-auto md:mx-20 xs:mx-20'>
                        <p className='text-neutral-500'>Estructurales</p>
                        <p className='text-neutral-900 text-5xl font-semibold'>Rejilla Irving</p>
                        <p className='text-neutral-800 text-justify font-light mt-2 text-md'>Las rejillas de acero <strong className='font-semibold'>IRVING®</strong> están fabricadas mediante un proceso de electroforjado que asegura la fusión de la varilla y la solera, haciéndolos un solo elemento. Las rejillas se pueden configurar de diferentes maneras, cambiando las distancias entre varillas y entre soleras, así como los espesores y peraltes de las soleras, dependiendo de la carga o uso que se le dará a la rejilla.</p>

                        <h3 className='text-neutral-800 text-justify text-xl font-semibold mt-4'>Dimensiones</h3>
                        <Image src='/productos/Rejilla-IRVING-medidas.jpg' alt='productos' width={250} height={250} className="transition-opacity duration-300 hover:opacity-85 w-52 h-auto cursor-pointer mt-4" onClick={() => openModal('/productos/Rejilla-IRVING-medidas.jpg')}
                        />
                        <p className='text-neutral-800 text-justify text-sm font-extralight mt-2'>
                            Pesos, dimensiones y tolerancias aquí expresados son teóricos y pueden variar a razón de +/- 5%.
                        </p>
                    </div>
                    <div className=' flex flex-col xs:w-screen   lg:w-72 items-center justify-center'>
                        <Image src='/productos/Rejilla-IRVING-2.jpg' alt='productos' width={250} height={250} className="transition-opacity duration-300 hover:opacity-85 w-72 h-auto"/>
                        <p className='text-neutral-400 text-xs text-justify font-light mt-2 xs:mx-28 sm:mx-48 md:mx-64 lg:mx-0 uppercase'>
                            Tenga en cuenta que la forma y los colores reales del producto pueden variar con respecto a los que ve en la pantalla de su equipo.
                        </p>
                        <button className='bg-neutral-100 text-neutral-400 uppercase py-3 px-8 mt-2 transition-all duration-150 hover:text-white hover:bg-green-800 text-lg rounded-md'>
                            Cotizar Ahora
                        </button>
                    </div>
                </div>

                <div className='flex items-center justify-center'>
                    <div className='flex xs:w-screen xs:mx-4 lg:w-252 lg:mx-0 h-14 border-t-2 mt-4 mb-4 items-start justify-between'>
                    <a href='/productos/Perfileria/PTR' className='flex flex-row'>
                    <div className=''>
                                <IoIosArrowBack className='text-neutral-600 h-full w-8'/>
                            </div>
                            <div className='flex flex-col text-neutral-600 justify-end items-end mt-2'>
                                <p className='text-sm'>Estructurales</p>
                                <p className='text-sm font-light '>HSS</p>
                            </div>
                        </a>
                        <a href='/productos/Perfileria/Perfil-Pintado' className='flex flex-row'>
                            <div className='flex flex-col text-neutral-600 justify-end items-end mt-2'>
                                <p className='text-sm'>Estructurales</p>
                                <p className='text-sm font-light '>Viga IPR</p>
                            </div>
                            <div className=''>
                                <IoIosArrowForward className='text-neutral-600 h-full w-8'/>
                            </div>
                        </a>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-start'>
                    <div className='flex md:w-176 lg:w-252 h-14  mt-4  items-start justify-start'>
                        <h3 className='text-neutral-800 font-semibold text-xl'>Related Projects</h3>
                    </div>

                    <div className='flex md:flex-row xs:flex-col items-start justify-start md:w-176 lg:w-252 mb-10'>
                        <a className='flex flex-col items-center justify-center' href='/productos/Estructurales/HSS'>
                            <div className='flex flex-col h-66 w-66 transition-all duration-300  justify-center items-center content-center'>
                                    <Image src='/productos/Viga-IPR-3.jpg' alt='productos' width={250} height={250} className="transition-opacity duration-300 " />
                            </div>
                            <p className='text-neutral-600 text-sm '>VIGA IPR</p>
                            <p className='text-neutral-600 text-sm '>Estructurales</p>
                        </a>

                        <a className='flex flex-col items-center justify-center xs:mt-5 md:mt-0' href='/productos/Perfileria'>
                            <div className='flex flex-col h-66 w-66 transition-all duration-300 hover:bg-neutral-800/40 justify-center items-center content-center'>
                                    <Image src='/productos/HSS-3-1.jpg' alt='productos' width={250} height={250} className="transition-opacity duration-300 hover:opacity-85" />
                            </div>
                            <p className='text-neutral-600 text-sm '>HSS</p>
                            <p className='text-neutral-600 text-sm '>Estructurales</p>
                        </a>
                    </div>
                </div>

                {/* Modal */}
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={closeModal}>
                        <div className="relative p-4 bg-transparent rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
                            {loading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
                                    <div className={styles.loader}>Cargando...</div>
                                </div>
                            )}
                            <Image
                                src={imageSrc}
                                alt="Popup"
                                width={500}
                                height={500}
                                className="max-w-full max-h-screen"
                                onLoad={handleImageLoad} // Usamos onLoad
                            />
                            <button
                                onClick={closeModal}
                                className="absolute top-0 right-0 p-2 text-white  rounded-full"
                            >
                                X
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HeroPerfilPintado;
