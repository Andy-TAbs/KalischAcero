import React from 'react';
import Image from 'next/image';
import SocialButtons from '@/components/Global/SocialButtons';

interface HeroProps {
}

const Hero: React.FC<HeroProps> = () => {
    return (
        <div className="w-screen">
            <div className='bg-black h-204'></div>
            <div>
                <SocialButtons />
            </div>
            <div className='bg-white h-auto pb-24 flex min-h-screen items-center justify-center'>
                <div><p>hola</p></div>
            </div>
        </div>
    );
};

export default Hero;