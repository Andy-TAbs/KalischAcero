import React from 'react';

interface Props {
    image: string;
    title: string;
    text: React.ReactNode;
    link: string;
    linktext: string;
}

const FlipCardsCulture: React.FC<Props> = ({ link, text, title, image, linktext }) => {
    return (
        <div className="cardCulture">
            <div className="cardCulture-inner" >
                <div className="cardCulture-front" style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div className="cardCulture-back flex flex-col items-center justify-center">
                    <p className=''>{title}</p>
                    <p className='text-xs text-center font-extralight'>{text}</p>
                    <div className=''>
                        <a href={link} className="text-blue-500 hover:underline transform text-sm">{linktext}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCardsCulture;