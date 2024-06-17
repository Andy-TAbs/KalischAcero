import React from 'react';

interface HeaderProps {
    title: string;
}
const title = "Kalisch Acero";

export const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-2xl md:text-4xl">{title}</h1>
            <nav className="mt-4 md:mt-0">
                <ul className="flex space-x-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};
