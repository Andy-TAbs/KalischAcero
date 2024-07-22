"use client";
import React, { useState } from 'react';

interface buttonText {
  title: string;
  options: { label: string, link: string }[];
}

const DropdownMenu: React.FC<buttonText> = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className="block py-2 pr-4 pl-3 lg:text-sm xl:text-base text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
      >
        {title}
      </button>

      {isOpen && (
        <ul className="absolute z-10 bg-white shadow-lg w-48"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
          {options.map((option, index) => (
            <li key={index} className="">
              <a className='block py-2 my-3 px-4 text-gray-700 hover:bg-gray-100' href={option.link}>{option.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
