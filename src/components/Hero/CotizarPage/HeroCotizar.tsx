    "use client";
    import React, { useEffect, useRef } from 'react';
    import SocialButtons from '@/components/Global/SocialButtons';

    const HeroCotizar = () => {
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
            }
            });
        },
        { threshold: 0.1 }
        );

        if (targetRef.current) {
        observer.observe(targetRef.current);
        }

        return () => {
        if (targetRef.current) {
            observer.unobserve(targetRef.current);
        }
        };
    }, []);

    return (
        <div className='overflow-hidden'>
        <div>
            <SocialButtons />
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:min-h-screen xs:h-auto w-screen items-start justify-center">
            <div className='flex flex-col h-full w-full justify-center bg-white dark:bg-neutral-600 lg:my-0'>
            <div className='flex flex-col w-full h-full items-center justify-center mt-24 mb-1' ref={targetRef}>
                <div>
                <p className='text-5xl font-semibold'>Cotizar Aquí</p>
                </div>
                <div className='xs:mx-3 sm:mx-24 my-4 text-justify'>
                <p className='text-neutral-600'>Envía tu cotización y uno de nuestros asesores se comunicará contigo para darle seguimiento. No olvides enviar todos los datos para darte un mejor servicio.</p>
                </div>

                <div className='xl:w-156 lg:w-104 md:w-160 sm:w-128 bg-neutral-100 mb-7 p-3 rounded-lg'>
                <div className="flex xl:flex-row lg:flex-col md:flex-row xs:flex-col h-fit justify-between items-center w-full">
                    <div className='flex flex-col xl:w-fit lg:w-full md:w-fit xs:w-full'>
                    <label>Nombre: </label>
                    <input className='xl:w-64 lg:w-full md:w-64 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300 active:border-neutral-500 border-1 rounded-md h-10' type="text" id='name' name='name' placeholder='Nombre' required></input>
                    </div>
                    <div className='flex flex-col xl:w-fit lg:w-full md:w-fit xs:w-full'>
                    <label>Apellido(s): </label>
                    <input className='xl:w-64 lg:w-full md:w-64 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300 active:border-neutral-500 border-1 rounded-md h-10' type="text" id='lastname' name='lastname' placeholder='Apellido(s)' required></input>
                    </div>
                </div>

                <div className="flex xl:flex-row lg:flex-col md:flex-row xs:flex-col h-fit justify-between items-center w-full">
                    <div className='flex flex-col xl:w-fit lg:w-full md:w-fit xs:w-full'>
                    <label>Correo Electrónico: </label>
                    <input className='xl:w-64 lg:w-full md:w-64 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300 active:border-neutral-500 border-1 rounded-md h-10' type="email" id='email' name='email' placeholder='Correo Electrónico' required></input>
                    </div>
                    <div className='flex flex-col xl:w-fit lg:w-full md:w-fit xs:w-full'>
                    <label>Teléfono/Celular: </label>
                    <input className='xl:w-64 lg:w-full md:w-64 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300 active:border-neutral-500 border-1 rounded-md h-10' type="tel" id='phone' name='phonenum' placeholder='Telefono/Celular' required></input>
                    </div>
                </div>

                <div className="flex xl:flex-row lg:flex-col md:flex-row xs:flex-col xl:mt-10 lg:mt-2 md:mt-6 h-fit justify-between items-center w-full">
                    <div className='flex flex-col xl:w-fit lg:w-full md:w-fit xs:w-full'>
                    <label>Selecciona tu ciudad: </label>
                    <select className='xl:w-40 lg:w-full md:w-40 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300 active:border-neutral-500 border-1 rounded-md h-10' id='State' name='State' required title='State'></select>
                    </div>
                    <div className='flex flex-col xl:w-fit lg:w-full md:w-fit xs:w-full'>
                    <label>RFC: </label>
                    <input className='xl:w-40 lg:w-full md:w-40 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300 active:border-neutral-500 border-1 rounded-md h-10' type="text" id='rfc' name='rfc' placeholder='RFC' required></input>
                    </div>
                    <div className='flex flex-col xl:w-fit lg:w-full md:w-fit xs:w-full'>
                    <label>Empresa: </label>
                    <input className='xl:w-40 lg:w-full md:w-40 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300 active:border-neutral-500 border-1 rounded-md h-10 text-neutral-600 text-sm' type="text" id='namecorp' name='namecorp' placeholder='Empresa' required></input>
                    </div>
                </div>

                <div className='flex flex-col mt-10 w-full'>
                    <label htmlFor="products">Agregar los productos a cotizar</label>
                    <textarea className='bg-neutral-50 resize-none hover:bg-slate-100 h-32 border-1 w-full border-neutral-300 rounded-md' id="products" name="products" title="Products" placeholder="Ingrese los productos a cotizar"></textarea>
                </div>

                <div className='flex flex-col mt-10 w-full'>
                    <button className='w-full h-10 rounded-lg bg-neutral-50 hover:bg-neutral-400 hover:text-white transition-all duration-150'>Subir archivo de cotización (Opcional)</button>
                </div>
                <div className='flex flex-col mt-10 w-full'>
                    <button className='w-full h-10 rounded-lg bg-green-500 text-neutral-50 hover:bg-green-700 hover:text-white transition-all duration-150'>Enviar Cotización</button>
                </div>
                </div>
            </div>
            </div>
            <div className='xl:h-256 lg:h-300 xs:h-0 xs:hidden lg:block BackgroundCotizar'></div>
        </div>
        </div>
    );
    };

export default HeroCotizar;
