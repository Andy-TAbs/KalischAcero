import React from 'react';

interface HeroProps {
    
}

const Hero: React.FC<HeroProps> = () => {
    return (
        <div>
            <button className="bg-red-500 hover:bg-red-800 text-white p-3 w-full rounded-md">Cerrar Sesión</button>
        </div>
    );
};

export default Hero;