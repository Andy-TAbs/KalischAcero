import React from 'react';

interface Props {
    image: string;
    title: string;
    text: string;
    link: string;
}

const FlipCardsCulture: React.FC<Props> = ({ link, text, title, image }) => {
    return (
        <div className="cardCulture">
            <div className="cardCulture-inner" >
                <div className="cardCulture-front" style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div className="cardCulture-back flex flex-col">
                    <p className=''>{title}</p>
                    <p className='text-sm'>{text}</p>
                    <div className=''>
                        <a href={link} className="text-blue-500  hover:underline transform text-sm">Enlace</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCardsCulture;