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
            <div className='bg-white h-auto pb-24'>
                <div className='flex flex-col mx-20 h-full items-center'>
                    <div className='lg:mx-32 md:mx-12 my-12 items-center'>
                        <div className=''>
                            <p className='text-2xl'>Cultura Kalisch</p>
                        </div>
                        <div className='mt-5 w-auto'>
                            <p className='w-auto text-justify font-light'>Nuestro marco cultural está compuesto por comportamientos acorde a la estrategia e identidad de la organización, que nos llevan a cumplir nuestra misión y visión como compañía.</p>
                        </div>
                        <div className='mt-7 w-auto '>
                            <p className='w-auto text-justify font-light'>Te los presentamos aquí:</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex flex-row mx-56 h-52 w-60'>
                        <div className='w-60 h-56'>
                            <button className="buttonCulture h-48 w-48 ButtonCultureOne">
                                Apply Now
                            </button>
                            <div className='w-fit mt-3'>
                                <p className='text-justify font-light text-base w-48'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                        </div>
                        <div className='w-60 h-56 mx-4'>
                            <button className="buttonCulture h-48 w-48 ButtonCultureTwo">
                                Apply Now
                            </button>
                            <div className='w-fit mt-3'>
                                <p className='text-justify font-light text-base w-48'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                        </div>
                        <div className='w-60 h-56'>
                            <button className="buttonCulture h-48 w-48 ButtonCultureThree">
                                Apply Now
                            </button>
                            <div className='w-fit mt-3'>
                                <p className='text-justify font-light text-base w-48'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                        </div>
                        <div className='w-60 h-56 mx-4'>
                            <button className="buttonCulture h-48 w-48 ButtonCultureFour">
                                Apply Now
                            </button>
                            <div className='w-fit mt-3'>
                                <p className='text-justify font-light text-base w-48'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                        </div>
                        <div className='w-60 h-56'>
                            <button className="buttonCulture h-48 w-48 ButtonCultureFive">
                                Apply Now
                            </button>
                            <div className='w-fit mt-3'>
                                <p className='text-justify font-light text-base w-48'>¡TRES AÑOS COMO EMPRESA SOCIALMENTE RESPONSABLE!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;