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
            <Image src="/contigo-banner.jpg" width={1720} height={2060} className="absolute top-10 inset-0 z-0 w-full h-full object-cover" alt='Contigo-banner-kalisch'>
            </Image>
            <div className='absolute inset-0 flex lg:right-144 md:right-80 sm:right-40 xs:right-32 lg:top-56 md:top-56 sm:top-56 xs:top-56 xsm:top-56 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-28 xs:left-10 z-10'>
                <p className='sm:text-sm xs:text-xxs font-Bebas_Neue text-white'>I &nbsp;N &nbsp;I &nbsp;C &nbsp;I &nbsp;O  &nbsp;&nbsp;/  &nbsp;&nbsp;S &nbsp;O &nbsp;S &nbsp;T &nbsp;E &nbsp;N &nbsp;I &nbsp;B &nbsp;I &nbsp;L &nbsp;I &nbsp;D &nbsp;A &nbsp;D &nbsp;&nbsp;/ &nbsp;&nbsp;F &nbsp;I &nbsp;L &nbsp;A &nbsp;N &nbsp;T &nbsp;R &nbsp;O &nbsp;P &nbsp;I &nbsp;A</p>
            </div>
            <div className='absolute inset-0 flex lg:right-80 md:right-28 sm:right-20  lg:top-56 md:top-56 sm:top-60 xs:top-60 xsm:top-60 lg:left-42 md:left-32 mdl:left-48 sm:left-36 xsm:left-28 xs:left-10 z-10'>
                <p className='md:text-11xl xs:text-7xl sm:text-9xl font-Bebas_Neue text-white font-extrabold'>CONTIGO</p>
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

            <div className='flex flex-row lg:mx-52   h-full items-center'>
                    <div className='flex flex-col w-2/6  items-start'>
                        <Image src="/contigo-1-.png" width={1080} height={720} className="w- h-auto" alt='Contigo-kalisch'/>
                    </div>

                <div className='flex flex-col w-4/6  md:mx-12  items-start'>
                    <div className=''>
                        <p className='text-2xl text-neutral-800'>Estamos &quot;Contigo&quot;</p>
                    </div>
                    <div className='mt-4 w-auto'>
                        <p className='w-auto text-justify font-light text-neutral-800'>Una de nuestras principales actividades de responsabilidad social, es el programa “Contigo” que tiene la finalidad de brindar apoyo para asilos de ancianos y contribuir a mejorar su calidad de vida. El programa consiste en realizar donativos en especie a asilos de las comunidades donde tenemos operaciones. Desde que iniciamos esta actividad en el año 2020 hemos logrado beneficiar a más de 400 adultos mayores</p>
                    </div>
                </div>
            </div>

            <div>
            </div>
        </div>
    </div>
    );
};

export default Hero;