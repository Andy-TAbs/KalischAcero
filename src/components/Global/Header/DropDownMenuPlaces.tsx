import React, { useState } from 'react';
import { MdPhone } from "react-icons/md";

interface buttonTextPlaces {
    title: string;
    options: { label: string, text: string, phone: string }[];
}

const DropdownMenuPlaces: React.FC<buttonTextPlaces> = ({ title, options }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState("");

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    const handleItemClick = (selectedTitle: string) => {
        setSelectedTitle(selectedTitle);
        setIsVisible(false); // Close the dropdown after selecting an item
    };

    return (
        <div className="z-50 relative transition duration-200 ease-in  transform hover:scale-110 " onClick={handleClick}>
            <button
                className="block py-2 pr-4 pl-3 lg:text-sm xl:text-base text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
                <div className="flex flex-row lg:pl-0 2xl:pl-20">
                    <div className="">
                        <img src="/placeholder_kalisch.svg" className="mr-2 h-4 w-4 sm:h-9" alt="Flowbite Logo" />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <div>
                            <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">
                                {selectedTitle || title}
                            </span>
                        </div>
                        <div>
                            <a className="text-xs">8:00AM - 5:30PM</a>
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mt-3" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M12 16.5l-8-8 1.5-1.5L12 13.5l6.5-6.5 1.5 1.5z" fill="currentColor"/>
                        </svg>
                    </div>
                </div>
            </button>

            {isVisible && (
                <ul className="absolute z-10 bg-white shadow-lg w-96 h-80 overflow-y-scroll rounded-xl scrollbar-rounded"
                    onClick={handleClick}
                >
                    {options.map((option, index) => (
                        <li key={index} className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
                            <a onClick={() => handleItemClick(option.label)}>
                                <div className="flex flex-row pl-3">
                                    <div className="">
                                        <img src="/placeholder_kalisch.svg" className="mr-2 h-4 w-4 sm:h-9" alt="Flowbite Logo" />
                                    </div>
                                    <div className="flex flex-col ml-3">
                                        <div>
                                            <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">{option.label}</span>
                                        </div>
                                        <div>
                                            <a className="text-xs">8:00AM - 5:30PM</a>
                                        </div>
                                        <div>
                                            <p className="text-xs">{option.text}</p>
                                        </div>
                                        <div className='flex flex-row items-center justify-start mt-1'>
                                            <div className=''>
                                                <MdPhone />
                                            </div>
                                            <div className='ml-3'>
                                                <p className='text-xs'>{option.phone}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenuPlaces;
