import React from 'react';
import { FaFacebookF } from "react-icons/fa";

interface Props {
    // Define las propiedades del componente aquí
}

const SocialButtons: React.FC<Props> = () => {
    // Lógica del componente aquí

    return (
        // JSX del componente aquí
        <div className='w-screen items-end justify-end '>
            <div className='fixed '>
            <button className="md:block w-10 h-10 relative mt-28 bg-blue-500 " role="button" title="Button" >
                <div className='w-3 h-3 items-center justify-center text-white'>
                    <FaFacebookF />
                </div>
            </button>
            </div>

        </div>
    );
};

export default SocialButtons;