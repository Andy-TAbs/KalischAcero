"use client";
import React, { useState } from 'react';

interface buttonText {	
    title: string;
}

const DropdownMenu: React.FC<buttonText> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
      >
        {title}
      </button>

      {isOpen && (
        <ul className="absolute z-10 bg-white shadow-lg rounded-lg mt-2 w-48 py-2">
          <li className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
            <a href="#">Opción 1</a>
          </li>
          <li className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
            <a href="#">Opción 2</a>
          </li>
          <li className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
            <a href="#">Opción 3</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
