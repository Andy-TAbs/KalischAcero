/* eslint-disable @next/next/no-img-element */
import React from 'react';


export interface FooterProps {
    // Define any props for the Footer component here
}

export const Footer: React.FC<FooterProps> = () => {
    return (
        <div>
            <footer className="flex flex-col md:flex-row items-center justify-between w-screen h-72 bg  bg-black">
                <div>
                    <div className="flex flex-col">
                        <img src="/kfa_movil_40_white.png" alt="Logo_KalischFA_white" />
                        <div className="flex flex-row">
                            <div className="flex flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">    <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path></svg>
                            </div>
                            <div>
                                <img src="/instagram.png" className="w-3 h-3 flex" alt="Instagram" />
                            </div>
                            <div>
                                <img src="/twitter.png" className="w-3 h-3 flex" alt="Twitter" />
                            </div>
                            <div>
                                <img src="/youtube.png" className="w-3 h-3 flex" alt="Youtube" />
                            </div>
                            <div>
                                <img src="/linkedin.png" className="w-3 h-3 flex" alt="Linkedin" />
                            </div>
                            <div>
                                <img src="/tiktok.png" className="w-3 h-3 flex" alt="tik tok"/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className="flex flex-col md:flex-row items-center justify-between w-screen h-20 mr-96 lg:max-h-20 bg-gray-500">
            <div className="flex mr-16 items-end ">
                <a className=" text-gray-300 text-xs">© 2022 Todos los derechos reservados.</a>
                </div>
                <div className="w-100 items-end">
                <a className="text-gray-300 text-xs">Términos y Condiciones | Aviso de Privacidad</a>
                </div>
            
        </footer>
    </div>
    );
};
