import React, { useState } from 'react';

const DropdownMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-menu">
            <button className="dropdown-toggle" onClick={toggleMenu}>
                Menu
            </button>
            {isOpen && (
                <ul className="dropdown-items">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;