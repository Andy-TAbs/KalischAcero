import Image from 'next/image';
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
            className="relative lg:w-64 lg:h-64 xs:h-64 md:w-80 xs:w-screen sm:w-116  cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`absolute w-full h-full transition-transform transform ${flipped ? 'rotate-y-180' : ''}`}>
                <div className="w-full h-full bg-white rounded shadow-md border border-gray-200 flex items-center justify-center backface-hidden">
                    {flipped ? (
                        <div className="text-center backface-hidden transform ">
                            <p className="text-lg font-semibold mb-4 rotate-y-180">{title}</p>
                            <p className="transform rotate-y-180">{text}</p>
                            <div className='rotate-y-180'>
                                <a href={link} className="text-blue-500  hover:underline transform">Enlace</a>
                            </div>
                        </div>
                    ) : (
                        <Image src={image} width={520} height={520} alt="Imagen frontal" className="w-full h-full object-cover rounded backface-hidden" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
