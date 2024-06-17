import React from 'react';

interface HeaderProps {
    title: string;
}
const title = "Kalisch Acero";

export const Footer: React.FC<HeaderProps> = ({ title }) => {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-between">
            {/*Hola*/}
        </footer>
    );
};
