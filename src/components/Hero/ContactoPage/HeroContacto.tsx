"use client";
import React, { useEffect, useRef, useState } from 'react';
import SocialButtons from '@/components/Global/SocialButtons';
import { useRouter } from 'next/navigation';
import ReCAPTCHA from 'react-google-recaptcha';

const HeroContacto = () => {
const targetRef = useRef(null);
const recaptchaRef = useRef<ReCAPTCHA>(null);
const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenum: '',
    city: '',
    suggestion: '',
    asunto: '',
    message: ''
});
const router = useRouter();

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


const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }));
};

const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    let token : string | null = null;
        if (recaptchaRef.current) {
            token = await recaptchaRef.current.executeAsync();
            recaptchaRef.current.reset();
        }
    try {
        const response = await fetch('/api/sendContact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formData, recaptchaToken: token }),
        });
        if (response.ok) {
            router.push('/Contacto/Gracias');
        } else {
            router.push('/Contacto/Error');
        }
    } catch (error) {
        console.error('Error sending email:', error);
        router.push('/Contacto/Error');
    }
};
return (
    <div className='overflow-hidden'>
        <div>
            <SocialButtons />
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:min-h-screen xs:h-auto w-screen items-start justify-center">
            <div className='flex flex-col h-full w-full justify-center bg-white lg:my-0'>
            <div className='flex flex-col w-full h-full items-center justify-center mt-24 mb-1' ref={targetRef}>
                <div>
                <p className='text-5xl font-semibold text-neutral-600'>Contacto</p>
                </div>
                <div className='xs:mx-3 sm:mx-24 my-4 text-justify'>
                <p className='text-neutral-600'>Llena el formulario abajo y a la brevedad nos contactaremos contigo.</p>
                </div>

                <div className='xl:w-156 lg:w-104 md:w-160 sm:w-128 bg-neutral-100 mb-7 p-3 rounded-lg'>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <div className="flex xl:flex-row lg:flex-col md:flex-row xs:flex-col h-fit justify-between items-center w-full">
                        <div className='flex flex-col xl:w-fit lg:w-full md:w-fit xs:w-full'>
                                <label className='text-neutral-600'>Nombre Completo:
                                    <input className='xl:w-64 lg:w-full md:w-64 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300 active:border-neutral-500 border-1 rounded-md h-10'
                                    type="text"
                                    id='name'
                                    name='name'
                                    placeholder='Nombre'
                                    maxLength={100}
                                    value={formData.name}
                                    onChange={handleChange}
                                    required />
                                </label>
                            </div>
                            <div className='flex flex-col xl:w-fit lg:w-full md:w-fit xs:w-full'>
                                <label className='text-neutral-600'>Ciudad:
                                    <input className='xl:w-64 lg:w-full md:w-64 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300 active:border-neutral-500 border-1 rounded-md h-10'
                                    type="text"
                                    id='city'
                                    name='city'
                                    maxLength={100}
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder='Ciudad'
                                    required/>
                                </label>
                            </div>
                        </div>

                        <div className="flex xl:flex-row lg:flex-col md:flex-row xs:flex-col mt-3 h-fit justify-between items-center w-full">
                            <div className='flex flex-col xl:w-fit lg:w-full md:w-fit xs:w-full'>
                                <label className='text-neutral-600'>Correo Electrónico:
                                    <input className='xl:w-64 lg:w-full md:w-64 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300 active:border-neutral-500 border-1 rounded-md h-10'
                                    type="email"
                                    id='email'
                                    name='email'
                                    maxLength={100}
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Correo Electrónico'
                                    required/>
                                </label>
                            </div>
                            <div className='flex flex-col xl:w-fit lg:w-full md:w-fit xs:w-full'>
                                <label className='text-neutral-600'>Teléfono/Celular:
                                    <input className='xl:w-64 lg:w-full md:w-64 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300 active:border-neutral-500 border-1 rounded-md h-10'
                                    type="tel"
                                    id='phone'
                                    name='phonenum'
                                    maxLength={20}
                                    value={formData.phonenum}
                                    onChange={handleChange}
                                    placeholder='Telefono/Celular'
                                    required/>
                                </label>
                            </div>
                        </div>

                        <div className="flex xl:flex-row lg:flex-col md:flex-row xs:flex-col h-fit mt-3 justify-between items-center w-full">
                            <div className='flex flex-col xl:w-fit lg:w-full md:w-fit xs:w-full'>
                            <label className='text-neutral-600'>Selecciona una Opción</label>
                                <select className='xl:w-64 lg:w-full md:w-64 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300 active:border-neutral-500 border-1 rounded-md h-10'
                                    id='suggestion'
                                    name='suggestion'
                                    title='Sugerencia'
                                    value={formData.suggestion}
                                    onChange={handleChange}
                                    required>
                                        <option value='Sugerencia'>Sugerencia</option>
                                        <option value='Queja'>Queja</option>
                                </select>
                            </div>
                            <div className='flex flex-col xl:w-fit lg:w-full md:w-fit xs:w-full'>
                                <label className='text-neutral-600'>Asunto:
                                    <input className='xl:w-64 lg:w-full md:w-64 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300 active:border-neutral-500 border-1 rounded-md h-10'
                                    type="text"
                                    id='asunto'
                                    name='asunto'
                                    maxLength={100}
                                    value={formData.asunto}
                                    onChange={handleChange}
                                    placeholder='Asunto'
                                    required/>
                                </label>
                            </div>
                        </div>

                        <div className='flex flex-col mt-10 w-full'>
                            <label htmlFor="products" className='text-neutral-600'>Tu mensaje:
                                <textarea className='bg-neutral-50 resize-none hover:bg-slate-100 h-32 border-1 w-full border-neutral-300 rounded-md'
                                id="message"
                                name="message"
                                title="message"
                                value={formData.message}
                                onChange={handleChange}
                                maxLength={500}
                                placeholder="Ingrese su mensaje."
                                required />
                            </label>
                        </div>
                        <div className='flex flex-col mt-10 w-full'>
                            <button className='w-full h-10 rounded-lg bg-green-500 text-neutral-50 hover:bg-green-700 hover:text-white transition-all duration-150'>Enviar Mensaje</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            <div className='xl:h-256 lg:h-300 xs:h-0 xs:hidden lg:block BackgroundCotizar'></div>
        </div>
    </div>
    );
};

export default HeroContacto;
