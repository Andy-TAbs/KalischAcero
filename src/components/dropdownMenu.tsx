import React, { useState } from 'react';

const DropdownMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={toggleMenu}>
                Menu
            </button>
            {isOpen && (
                <ul className="absolute top-10 right-0 bg-white border border-gray-300 rounded shadow">
                    <li className="px-4 py-2 hover:bg-gray-100">Item 1</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Item 2</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Item 3</li>
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;