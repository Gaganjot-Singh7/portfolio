import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl hidden lg:block ">
                    <Link to="home">GAGANJOT SINGH</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
                    <ul className="md:flex md:space-x-4">
                        <li><Link to="home" className="block py-2 px-4 text-white hover:bg-gray-700 rounded">HOME</Link></li>
                        <li><Link to="about" className="block py-2 px-4 text-white hover:bg-gray-700 rounded">ABOUT</Link></li>
                        <li><Link to="knowledge" className="block py-2 px-4 text-white hover:bg-gray-700 rounded">KNOWLEDGE</Link></li>
                        <li><Link to="portfolio" className="block py-2 px-4 text-white hover:bg-gray-700 rounded">PORTFOLIO</Link></li>
                        <li><Link to="contact" className="block py-2 px-4 text-white hover:bg-gray-700 rounded">CONTACT</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
