import React, { useState } from 'react';

interface AccordionItem {
    header: string;
    body: string;
}

interface CustomAccordionProps {
    items: AccordionItem[];
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <div key={index} className="border border-green-700 rounded-none hover:border-white">
                    <button
                        className="w-full text-left p-4 bg-white text-black hover:bg-green-700 hover:text-white focus:outline-none"
                        onClick={() => handleToggle(index)}
                    >
                        {item.header}
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${
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
