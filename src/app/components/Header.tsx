import React from 'react';
import { Link }  from 'react-scroll';

function Header()  {
    return (
        <header
    className="bg-gray-950 text-white pl-4 pr-4  w-full "
    >
    <nav className="flex flex-col items-center justify-between  p-4 md:flex-row">
        <div className="flex items-center space-x-4 m-4 lg:m-0 ">
            <a href="/src/app/components/Header.tsx"><h1>AHMED ALI</h1></a>
        </div>
        <div className="flex space-x-8 sm:block  m-4 lg:m-0">
            <a href="#About.tsx" className="hover:text-[#3c34db]">About</a>
            <a href="#" className="hover:text-[#3c34db]">Skills</a>
            <a href="#" className="hover:text-[#3c34db]">Projects</a>
            <a href="#" className="hover:text-[#3c34db]">Contact</a>
        </div>
        <div>
            <a href="#" className="bg-[#4f46e5] p-1 rounded-lg hover:bg-[#6e69d8] sm:block ">Log in</a>
        </div>
    </nav>
        </header>
    )
}

export default Header;
