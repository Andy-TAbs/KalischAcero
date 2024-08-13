import React, { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";

interface AccordionItem {
    header: string;
    body: string;
}

interface CustomAccordionProps {
    items: AccordionItem[];
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleToggle = (index: number) => {
        if (isTransitioning) return;

        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setIsTransitioning(true);
            setActiveIndex(null);
            
            setTimeout(() => {
                setActiveIndex(index);
                setIsTransitioning(false);
            }, 570); // La duración de la transición entre cerrarse y abrirse
        }
    };

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <div key={index} className="border border-none rounded-none  ">
                    <button
                        className={`w-full text-left font-semibold text-lg p-4  text-black  hover:text-white focus:outline-none flex flex-row content-evenly items-center justify-between ${activeIndex === index ? 'bg-green-700 text-white transition-all ease-in duration-500' : 'bg-white transition-all text-black ease-out duration-500'}`}
                        onClick={() => handleToggle(index)}
                    >
                        {item.header}
                        <div className='w-7 h-7 '>
                        <CiCirclePlus className={`w-full h-full font-semibold transform duration-200 transition-transform ${activeIndex === index ? 'rotate-45' : 'rotate-0 transform transition-transform'}`}/>
                        </div>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-890 ${
                            activeIndex === index ? 'max-h-screen' : 'max-h-0'
                        }`}
                    >
                        <div className="p-4 border-t border-t-green-700 text-black">
                            {item.body}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomAccordion;
