import React from 'react';
import Image from 'next/image';
import SocialButtons from '@/components/Global/SocialButtons';

interface HeroProps {
}

const Hero: React.FC<HeroProps> = () => {
    return (
        <div className="w-screen">
            <div className='bg-black h-204'></div>
            <div>
                <SocialButtons />
            </div>
            <div className='bg-white h-auto pb-52 flex flex-col  items-start '>
                <div className='flex md:flex-row 2xl:mx-101'>
                    <div>
                        <a href=''>
                            <div className='w-76 h-56'>
                                <Image
                                        src="/Logo-ESR-PNG.png"
                                        alt="Descripción de la imagen"
                                        width={350}
                                        height={120}
                                        className=" xs:h-32 h-auto mt-16"
                                    />
                            <div className='w-fit'>
                                <p className='text-center font-semibold text-xl'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                            <div className='w-fit mt-3'>
                                <p className='text-start font-light text-base'>27 DE MARZO 2023</p>
                            </div>
                            </div>
                        </a>
                    </div>
                    <div className='mx-20'>
                        <a href=''>
                            <div className='w-76 h-56'>
                                <Image
                                        src="/logo-gptw-jpg.webp"
                                        alt="Descripción de la imagen"
                                        width={300}
                                        height={150}
                                        className=" xs:h-32 h-auto mt-16"
                                    />
                            <div className='w-fit'>
                                <p className='text-center font-semibold text-xl'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                            <div className='w-fit mt-3'>
                                <p className='text-start font-light text-base'>27 DE MARZO 2023</p>
                            </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href=''>
                            <div className='w-76 h-56'>
                                <Image
                                        src="/definicion-de-la-educacion-sssssscontinua.jpg"
                                        alt="Descripción de la imagen"
                                        width={350}
                                        height={150}
                                        className=" xs:h-32 h-auto mt-16"
                                    />
                            <div className='w-fit'>
                                <p className='text-center font-semibold text-xl'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                            <div className='w-fit mt-3'>
                                <p className='text-start font-light text-base'>27 DE MARZO 2023</p>
                            </div>
                            </div>
                        </a>
                    </div>
                </div>
                

                <div className='flex md:flex-row 2xl:mx-101'>
                    <div>
                        <a href=''>
                            <div className='w-76 h-56'>
                                <Image
                                        src="/cedis.jpg"
                                        alt="Descripción de la imagen"
                                        width={350}
                                        height={150}
                                        className=" xs:h-32 h-auto mt-16"
                                    />
                            <div className='w-fit'>
                                <p className='text-center font-semibold text-xl'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                            <div className='w-fit mt-3'>
                                <p className='text-start font-light text-base'>27 DE MARZO 2023</p>
                            </div>
                            </div>
                        </a>
                    </div>
                    <div className='mx-20'>
                        <a href=''>
                            <div className='w-76 h-56'>
                                <Image
                                        src="/definicion-de-la-educacion-continuaaaaaaa.jpg"
                                        alt="Descripción de la imagen"
                                        width={350}
                                        height={150}
                                        className=" xs:h-32 h-auto mt-16"
                                    />
                            <div className='w-fit'>
                                <p className='text-center font-semibold text-xl'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                            <div className='w-fit mt-3'>
                                <p className='text-start font-light text-base'>27 DE MARZO 2023</p>
                            </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href=''>
                            <div className='w-76 h-56'>
                                <Image
                                        src="/definicion-de-la-educacion-continua-sdasdas.jpg"
                                        alt="Descripción de la imagen"
                                        width={350}
                                        height={150}
                                        className=" xs:h-32 h-auto mt-16"
                                    />
                            <div className='w-fit'>
                                <p className='text-center font-semibold text-xl'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                            <div className='w-fit mt-3'>
                                <p className='text-start font-light text-base'>27 DE MARZO 2023</p>
                            </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;