import React from 'react'
import { getServerSession } from 'next-auth'
import ButtonSignOut from '../ButtonSignOut'
import Image from 'next/image'

const NosotrosHeroDashboard = async () => {

    const session = await getServerSession();
return (
    <div className='h-screen md:pl-48 pt-32'>
        <h1 className='text-3xl flex'>¿Qué sección quieres editar?</h1>
        <div className='grid grid-cols-2 gap-10 mt-5'>
            <div className='min-w-full ml-2'>
                <a className='buttonDashboard1 w-full shadow-md'>Acerca de Nosotros</a>
            </div>
            <div className='min-w-full'>
                <a className='buttonDashboard2 w-full shadow-md'>Misión y Visión</a>
            </div>
            <div className='min-w-full ml-2'>
                <a className='buttonDashboard3 w-full shadow-md'>Código de ética</a>
            </div>
            <div className='min-w-full'>
                <a className='buttonDashboard4 w-full shadow-md'>Cultura</a>
            </div>
            <div className='min-w-full ml-2'>
                <a className='buttonDashboard5 w-full shadow-md'>Talento</a>
            </div>
            <div className='min-w-full'>
                <a className='buttonDashboard6 w-full shadow-md'>Noticias</a>
            </div>
        </div>
    </div>
    )
}

export default NosotrosHeroDashboard