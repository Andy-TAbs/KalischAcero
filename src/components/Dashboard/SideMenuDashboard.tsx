import React from 'react'
import { getServerSession } from 'next-auth'

const SideMenuDashboard = () => {
return (
    <div className='md:block xs:hidden fixed'>
        <nav aria-label="alternative nav">
            <div className="shadow-xl fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
            <div className="md:mt-12 px-3 bg-gray-800 h-screen flex flex-col md:w-48 md:fixed md:left-0 md:top-0 text-center md:text-left justify-between">
                <ul className="list-reset flex flex-col pt-3 md:py-3 px-1 md:px-2 text-center">
                <li className="mr-3 flex-1">
                    <a href="/dashboard" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-green-500">
                    <i className="fas fa-tasks pr-0 md:pr-3"></i>
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block">Inicio</span>
                    </a>
                </li>
                <li className="mr-3 flex-1">
                    <a href="/dashboard/Nosotros" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                    <i className="fa fa-envelope pr-0 md:pr-3"></i>
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block">Nosotros</span>
                    </a>
                </li>
                <li className="mr-3 flex-1">
                    <a href="/dashboard/Sostenibilidad" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-600">
                    <i className="fas fa-chart-area pr-0 md:pr-3"></i>
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block">Sostenibilidad</span>
                    </a>
                </li>
                <li className="mr-3 flex-1">
                    <a href="/dashboard/Productos" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                    <i className="fa fa-wallet pr-0 md:pr-3"></i>
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block">Productos</span>
                    </a>
                </li>
                <li className="mr-3 flex-1">
                    <a href="/dashboard/Promociones" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-yellow-500">
                    <i className="fa fa-wallet pr-0 md:pr-3"></i>
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block">Promociones</span>
                    </a>
                </li>
                <li className="mr-3 flex-1">
                    <a href="/dashboard/Sucursales" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                    <i className="fa fa-wallet pr-0 md:pr-3"></i>
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block">Sucursales</span>
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>

    )
}

export default SideMenuDashboard
