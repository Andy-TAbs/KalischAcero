import React from 'react';

interface Props {
   image: string;
   title: string;
   text: string;
   link: string;
}

const FlipCard2: React.FC<Props> = ({ link, text, title, image }) => {
    return (
        <div className="card">
            <div className="card-inner" >
                <div className="card-front" style={{ backgroundImage: `url(${image})` }}>
                    <p>Front Side</p>
                </div>
                <div className="card-back flex flex-col">
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

export default FlipCard2;