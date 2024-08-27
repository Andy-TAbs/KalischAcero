import { useState } from 'react';
import { LuDot } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";

interface AccordionItem {
    titleHealth: string;
    textHealth: string;
}

const HealthAccordion = ({ items }: { items: AccordionItem[] }) => {
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
                <div key={index} className="w-120">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className={`flex flex-row before:text-black pr-8 w-full  items-center  hover:bg-green-900 transition ease-in-out duration-300 py-4 pl-5 ${
                            openIndexes.includes(index) ? 'bg-green-900 text-white' : 'bg-white text-black hover:text-white'
                        }`}
                    >
                        <div className="items-center ">
                            <p className="text-xl font-semibold">{item.titleHealth}</p>
                        </div>
                        <div className=''>
                        <FaPlus />
                        </div>
                    </button>
                    <div 
                        className={`overflow-hidden w-120 ${
                            openIndexes.includes(index) ? 'max-h-screen transition-all ease-in duration-1000' : 'max-h-0 transition-all ease-out duration-100 border-t-2'
                        }`}
                    >
                        {openIndexes.includes(index) && (
                                <div className="py-1 mt-2 px-4 flex flex-row  w-fit items-center font-light">
                                    <LuDot />
                                    <p className="ml-2 w-fit">{item.textHealth}</p>
                                </div>
                            
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HealthAccordion;
