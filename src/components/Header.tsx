/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface HeaderProps {
    title: string;
}
const title = "Kalisch Acero";

export const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <div className="w-screen justify-start m-20">
            <header className='justify-end items-end'>
                <div className="">
                    <p>hola</p>
                </div>
            </header>
            <header className="flex-column">
                <div className='justify-start'>
                    <img src="/kfa_movil_50.png" alt="logo_KalischAcero" className="w-48 h-auto items-start" />
                </div>
                <div className=''>
                    <nav className="mt-4 md:mt-0">
                        <ul className="flex space-x-4">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};
