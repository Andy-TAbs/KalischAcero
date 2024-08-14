import React from 'react';

interface Props {
    image: string;
    title: string;
    text: string;
    link: string;
    textlink: string;
}

const FlipCard2: React.FC<Props> = ({ link, text, title, image, textlink }) => {
    return (
        <div className="card">
            <div className="card-inner" >
                <div className="card-front" style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div className="card-back flex flex-col items-center">
                    <p className='text-center'>{title}</p>
                    <p className='text-sm'>{text}</p>
                    <div className=' justify-center'>
                        <a href={link} className="text-blue-500 text-center hover:underline transform text-sm font-light">{textlink}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard2;