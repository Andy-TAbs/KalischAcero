import React from 'react'
import Image from 'next/image'
import { getServerSession } from 'next-auth'
import MenuDropdown from './dropdownmenu'

const  HeaderDashboard = async () => {

const session = await getServerSession();
    return (
        <div>
            <nav aria-label="menu nav" className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
                <div className="flex flex-wrap items-center">

                    <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
                    <Image src="/kfa_movil_50.png" alt="logo" width={250} height={150} />
                    </div>

                    <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                        <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                            <li className="flex-1 md:flex-none md:mr-3">
                                <a className="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
                            </li>
                            <li className="flex-1 md:flex-none md:mr-3">
                                <a className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
                            </li>
                            <li className="flex-1 md:flex-none md:mr-3">
                                <div className="relative inline-block ">
                                    <button className=" text-white py-2 px-2 flex justify-center"><span className="pr-2 flex justify-center items-center"><Image className="rounded-2xl" src={session?.user?.image || ""} alt={session?.user?.name || ""} width={30} height={30} /></span> Hola, {session?.user?.name} <svg className="h-6 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HeaderDashboard
