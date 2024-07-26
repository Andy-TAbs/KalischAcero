import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTiktok } from "react-icons/fa6";

interface Props {
    // Define las propiedades del componente aquí
}

const SocialButtons: React.FC<Props> = () => {
    // Lógica del componente aquí

    return (
        // JSX del componente aquí
        <div className='w-screen items-end justify-end overflow-hidden z-50'>
            <div className='fixed right-0 top-60  items-start justify-start xs:hidden md:block'>
                <button className="md:block w-10 h-10 relative  bg-blue-500 hover:bg-blue-300 transition-all ease-in hover:-translate-x-3 flex items-center justify-center" role="button" title="Facebook">
                    <div className='w-full h-full flex items-center justify-center text-white'>
                        <FaFacebookF className='w-5 h-5'/>
                    </div>
                </button>
            </div>
            <div className='fixed right-0 top-70 xs:hidden md:block'>
                <button className="md:block w-10 h-10 relative  bg-neutral-950 hover:bg-neutral-500 transition-all ease-in hover:-translate-x-3 flex items-center justify-center" role="button" title="Twitter">
                    <div className='w-full h-full flex items-center justify-center text-white'>
                        <FaXTwitter className='w-5 h-5'/>
                    </div>
                </button>
            </div>
            <div className='fixed right-0 top-80 xs:hidden md:block'>
                <button className="md:block w-10 h-10 relative  bg-rose-600 hover:bg-rose-300 transition-all ease-in hover:-translate-x-3 flex items-center justify-center" role="button" title="Instagram">
                    <div className='w-full h-full flex items-center justify-center text-white'>
                        <FaInstagram className='w-5 h-5'/>
                    </div>
                </button>
            </div>
            <div className='fixed right-0 top-90 xs:hidden md:block'>
                <button className="md:block w-10 h-10 relative  bg-red-500 hover:bg-red-300 transition-all ease-in hover:-translate-x-3 flex items-center justify-center" role="button" title="Youtube">
                    <div className='w-full h-full flex items-center justify-center text-white'>
                        <IoLogoYoutube className='w-5 h-5'/>
                    </div>
                </button>
            </div>
            <div className='fixed right-0 top-101 xs:hidden md:block'>
                <button className="md:block w-10 h-10 relative  bg-neutral-950 hover:bg-neutral-500 transition-all ease-in hover:-translate-x-3 flex items-center justify-center" role="button" title="TikTok">
                    <div className='w-full h-full flex items-center justify-center text-white'>
                        <FaTiktok className='w-5 h-5'/>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SocialButtons;