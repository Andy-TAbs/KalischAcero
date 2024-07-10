import React, { useState } from 'react';

type FlipCardProps = {
    image: string;
    title: string;
    text: string;
    link: string;
};

const FlipCard = ({ image, title, text, link }: FlipCardProps) => {
    const [flipped, setFlipped] = useState(false);

    const handleMouseEnter = () => {
        setFlipped(true);
    };

    const handleMouseLeave = () => {
        setFlipped(false);
    };

    return (
        <div 
            className="relative w-64 h-64 cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`absolute w-full h-full transition-transform transform ${flipped ? 'rotate-y-180' : ''}`}>
                <div className="w-full h-full bg-white rounded shadow-md border border-gray-200 flex items-center justify-center backface-hidden">
                    {flipped ? (
                        <div className="text-center backface-hidden transform rotate-y-180">
                            <p className="text-lg font-semibold mb-4">{title}</p>
                            <p className="transform rotate-y-180">{text}</p>
                            <a href={link} className="text-blue-500 hover:underline transform rotate-y-180">Enlace</a>
                        </div>
                    ) : (
                        <img src={image} alt="Imagen frontal" className="w-full h-full object-cover rounded backface-hidden" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default FlipCard;




