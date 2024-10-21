"use client";
import React, { useEffect, useRef, useState } from 'react';
import SocialButtons from '@/components/Global/SocialButtons';
import router from 'next/router';

    const HeroCotizar = () => {
        const targetRef = useRef(null);
        const [formData, setFormData] = useState({
          name: '',
          lastname: '',
          email: '',
          phonenum: '',
          city: '',
          rfc: '',
          company: '',
          products: ''
        });

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
            const currentTarget = targetRef.current;
            if (currentTarget) {
              observer.unobserve(currentTarget);
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
          try {
            const response = await fetch('/api/sendEmail', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
            if (response.ok) {
              alert('Email sent successfully');
            } else {
              alert('Failed to send email');
            }
          } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email');
          }
        };


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
                    <form onSubmit={handleSubmit} className='flex flex-col'>
                        <div className="flex xl:flex-row lg:flex-col md:flex-row xs:flex-col h-fit justify-between items-center w-full">
                            <div className='flex flex-col xl:w-fit lg:w-full md:w-fit xs:w-full'>
                              <label className='flex flex-col'>Nombre:
                                <input
                                  className='xl:w-64 lg:w-full md:w-64 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300  border-1 focus:outline-none focus:border-transparent rounded-md h-10 transition-colors duration-200'
                                  type="text"
                                  id='name'
                                  name='name'
                                  maxLength={100}
                                  value={formData.name}
                                  onChange={handleChange}
                                  placeholder='Nombre'
                                  required
                                />
                              </label>
                            </div>
                            <div className='flex flex-col xl:w-fit lg:w-full md:w-fit xs:w-full'>
                              <label className='flex flex-col'>Apellido(s):
                                <input
                                  className='xl:w-64 lg:w-full md:w-64 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300 border-1 rounded-md h-10  focus:outline-none focus:border-transparent transition-colors duration-200'
                                  type="text"
                                  id='lastname'
                                  name='lastname'
                                  maxLength={100}
                                  value={formData.lastname}
                                  onChange={handleChange}
                                  placeholder='Apellido(s)'
                                  required />
                              </label>
                            </div>
                        </div>

                        <div className="flex xl:flex-row lg:flex-col md:flex-row xs:flex-col h-fit justify-between items-center w-full">
                            <div className='flex flex-col xl:w-fit lg:w-full md:w-fit xs:w-full'>
                            <label className='flex flex-col'>Correo Electrónico:
                                <input
                                  className='xl:w-64 lg:w-full md:w-64 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300  border-1 rounded-md h-10 focus:outline-none focus:border-transparent transition-colors duration-200'
                                  type="email"
                                  id='email'
                                  name='email'
                                  maxLength={100}
                                  value={formData.email}
                                  onChange={handleChange}
                                  placeholder='Correo Electrónico'
                                  required />
                            </label>
                            </div>
                            <div className='flex flex-col xl:w-fit lg:w-full md:w-fit xs:w-full'>
                              <label>Teléfono/Celular:
                                <input className='xl:w-64 lg:w-full md:w-64 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300  border-1 rounded-md h-10 focus:outline-none focus:border-transparent transition-colors duration-200'
                                type="tel"
                                id='phone'
                                name='phonenum'
                                maxLength={50}
                                value={formData.phonenum}
                                onChange={handleChange}
                                placeholder='Telefono/Celular'
                                required />
                              </label>
                            </div>
                        </div>

                        <div className="flex xl:flex-row lg:flex-col md:flex-row xs:flex-col xl:mt-10 lg:mt-2 md:mt-6 h-fit justify-between items-center w-full">
                            <div className='flex flex-col xl:w-44 lg:w-full md:w-fit xs:w-full'>
                                <label>Selecciona tu ciudad:
                                    <select
                                      className='xl:w-40 lg:w-full md:w-40 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300  border-1 rounded-md h-10 focus:outline-none focus:border-transparent transition-colors duration-200'
                                      id='city'
                                      name='city'
                                      value={formData.city}
                                      onChange={handleChange}
                                      title='city'
                                      required>
                                          <option value=''>Selecciona tu ciudad</option>
                                          <option value='CDMX'>CDMX</option>
                                          <option value='Monterrey'>Monterrey</option>
                                          <option value='Guadalajara'>Guadalajara</option>
                                          <option value='Puebla'>Puebla</option>
                                          <option value='Querétaro'>Querétaro</option>
                                    </select>
                                </label>
                            </div>
                            <div className='flex flex-col xl:w-44 lg:w-full md:w-fit xs:w-full'>
                              <label className="flex flex-col">RFC:
                                <input
                                  className='xl:w-40 lg:w-full md:w-40 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300  border-1 rounded-md h-10 focus:outline-none focus:border-transparent transition-colors duration-200'
                                  type="text"
                                  id='rfc'
                                  name='rfc'
                                  placeholder='RFC'
                                  maxLength={100}
                                  value={formData.rfc}
                                  onChange={handleChange}
                                  required />
                              </label>
                            </div>
                            <div className='flex flex-col xl:w-44 lg:w-full md:w-fit xs:w-full'>
                            <label className="flex flex-col">Empresa:
                                <input
                                  className='xl:w-40 lg:w-full md:w-40 xs:w-full bg-neutral-50 hover:bg-slate-100 border-neutral-300  border-1 rounded-md h-10 focus:outline-none focus:border-transparent transition-colors duration-200'
                                  type="text"
                                  id='empresa'
                                  name='company'
                                  placeholder='Empresa'
                                  maxLength={100}
                                  value={formData.company}
                                  onChange={handleChange}
                                  required />
                              </label>
                            </div>
                        </div>

                        <div className='flex flex-col mt-10 w-full'>
                            <label>Agregar los productos a cotizar
                              <textarea
                                className='bg-neutral-50 resize-none hover:bg-slate-100 h-32 border-1 w-full border-neutral-300 rounded-md  focus:outline-none focus:border-transparent transition-colors duration-200'
                                id="products"
                                name="products"
                                title="Products"
                                maxLength={300}
                                value={formData.products}
                                onChange={handleChange}
                                placeholder="Ingrese los productos a cotizar"/>
                            </label>
                        </div>

                        <div className='flex flex-col mt-10 w-full'>
                            <label>Subir tu Cotización (Opcional)
                            <input
                            type='file'
                            id='file'
                            name='file'
                            className='file:w-full file:h-10 file:rounded-lg file:border-none file:bg-neutral-50 file:hover:bg-neutral-400 file:hover:text-white file:transition-all file:duration-150' />
                            </label>
                        </div>
                        <div className='flex flex-col mt-10 w-full'>
                            <button className='w-full h-10 rounded-lg bg-green-500 text-neutral-50 hover:bg-green-700 hover:text-white transition-all duration-150'>Enviar Cotización</button>
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

export default HeroCotizar;
