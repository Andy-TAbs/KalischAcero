import React from 'react';


export interface FooterProps {
    // Define any props for the Footer component here
}

export const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-between w-screen m-20">
            <div>
                <p>gf</p>
            </div>
        </footer>
    );
};
