/* eslint-disable @next/next/no-img-element */
import React from 'react';


export interface FooterProps {
    // Define any props for the Footer component here
}

export const Footer: React.FC<FooterProps> = () => {
    return (
        <div>
            <footer className="flex flex-col md:flex-row items-center justify-between w-screen h-72  bg-black">
                <div>
                    <div className="flex flex-col">
                        <img src="/kfa_movil_40_white.png" alt="Logo_KalischFA_white" />
                        <div className="flex flex-row">

                        </div>
                    </div>

                </div>
            </footer>

            <footer className="flex flex-col md:flex-row items-center justify-between w-screen h-20 lg:max-h-20 bg-gray-500">
            <div className="flex flex-row ">
                <div>
                <p className=" text-gray-300 text-xs">© 2022 Todos los derechos reservados.</p>
                </div>
                <div className="w-100 items-end">
                <a className="text-gray-300 text-xs">Términos y Condiciones | Aviso de Privacidad</a>
                </div>
            </div>
        </footer>
    </div>
    );
};
