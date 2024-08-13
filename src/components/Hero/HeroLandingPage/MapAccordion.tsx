import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { LuDot } from "react-icons/lu";

interface AccordionItem {
    stateName: string;
    cities: string[];
}

export const MapAccordion = ({ items }: { items: AccordionItem[] }) => {
const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleAccordion = (index: number) => {
        if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter(i => i !== index));
        } else {
        setOpenIndexes([...openIndexes, index]);
        }
    };

    return (
        <div className="flex flex-col lg:ml-10 xs:w-screen lg:w-160">
        {items.map((item, index) => (
            <div key={index} className="mb-2 w-fit">
            <button
                onClick={() => toggleAccordion(index)}
                className={`flex flex-row before:text-black  xs:w-auto w-full transition ease-in-out duration-300 py-4 sm:pr-72 pl-5 ${
                    openIndexes.includes(index) ? 'bg-green-900 text-white' : 'bg-white text-black hover:text-white hover:bg-green-900'
                  }`}
            >
                <div className="">
                <FaArrowRight className="w-7 h-7" />
                </div>
                <div className="items-center ml-5">
                <p className="text-2xl">{item.stateName}</p>
                </div>
            </button>
            <div 
            className={`overflow-hidden  ${
              openIndexes.includes(index) ? 'max-h-screen transition-all ease-in duration-1000' : 'max-h-0 transition-all ease-out'
            }`}
          >
            {openIndexes.includes(index) && (
                <ul className="mt-2 pl-12">
                {item.cities.map((city, cityIndex) => (
                    <li key={cityIndex} className="py-1 flex flex-row items-center font-light">
                        <LuDot  />
                    {city}
                    </li>
                ))}
                </ul>
            )}
            </div>
            </div>
        ))}
        </div>
    );
    };

