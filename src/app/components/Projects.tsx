import React from 'react';
import Image from 'next/image';

const Projects = () => {
    return (
    <div className='bg-gray-800 text-white p-8'> 
        <h1 className="text-4xl font-bold mb-10 grid justify-items-center">Projects</h1>
    <div className="bg-gray-800 text-white p-8  grid grid-cols-3 gap-5">
    <div className="bg-black p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">sign-up-form</h3>
        <p>Frontend Mentor - Newsletter sign-up form with success message</p>
        <Image
                src="/images/desktop-design.jpg"
                alt=""
                width={800}
                height={500}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex space-x-4">
                <a href="https://github.com/AhmedAli1812/Newsletter-sign-up-form-with-success-message" target='_blank'><button className="bg-[#3c34db] text-black px-4 py-2 rounded hover:bg-[#1810aa]">Code on GitHub</button></a>
                <a href="https://ahmedali1812.github.io/Newsletter-sign-up-form-with-success-message/" target='_blank'><button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">Website</button></a>
                </div>
    </div>
    <div className="bg-black p-6 rounded-lg text-center mx-4">
        <h3 className="text-xl font-bold mb-2">multi-step-form-main</h3>
        <p>Frontend Mentor - Multi-step form-main</p>
        <br />
        <Image
                src="/images/desktop-design-step-1.jpg"
                alt=""
                width={800}
                height={500}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex space-x-4">
                <a href="https://github.com/AhmedAli1812/multi-step-form-main-" target='_blank'><button className="bg-[#3c34db] text-black px-4 py-2 rounded hover:bg-[#1810aa]">Code on GitHub</button></a>
                <a href="https://ahmedali1812.github.io/multi-step-form-main-/" target='_blank'><button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">Website</button></a>
                </div>
    </div>
    <div className="bg-black p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">portfolio design</h3>
        <p>Portfolio website design with html&css</p>
        <br />
        <Image
                src="/images/portfolio.png"
                alt=""
                width={800}
                height={500}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex space-x-4">
                <a href="https://github.com/AhmedAli1812/personal" target='_blank'><button className="bg-[#3c34db] text-black px-4 py-2 rounded hover:bg-[#1810aa]">Code on GitHub</button></a>
                <a href="https://ahmedali1812.github.io/personal/" target='_blank'><button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">Website</button></a>
                </div>
    </div>
    <div className="bg-black p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">Portfolio design</h3>
        <p>Portfolio website design with Bootstarp5</p>
        <br />
        <Image
                src="/images/portfolio2.png"
                alt=""
                width={800}
                height={500}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex space-x-4">
                <a href="https://github.com/AhmedAli1812/AHMED" target='_blank'><button className="bg-[#3c34db] text-black px-4 py-2 rounded hover:bg-[#1810aa]">Code on GitHub</button></a>
                <a href="https://ahmedali1812.github.io/AHMED/" target='_blank'><button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">Website</button></a>
                </div>
    </div>
    <div className="bg-black p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">Market design</h3>
        <p>Market website design with Bootstrap&css</p>
        <br />
        <Image
                src="/images/market.png"
                alt=""
                width={800}
                height={500}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex space-x-4">
                <a href="https://github.com/AhmedAli1812/market" target='_blank'><button className="bg-[#3c34db] text-black px-4 py-2 rounded hover:bg-[#1810aa]">Code on GitHub</button></a>
                <a href="https://ahmedali1812.github.io/market/" target='_blank'><button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">Website</button></a>
                </div>
    </div>
    <div className="bg-black p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">Portfolio design</h3>
        <p>Portfolio website design with Tailwind & react</p>
        <br />
        <Image
                src="/images/portfolio3.png"
                alt=""
                width={800}
                height={500}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex space-x-4">
                <a href="https://github.com/AhmedAli1812/market" target='_blank'><button className="bg-[#3c34db] text-black px-4 py-2 rounded hover:bg-[#1810aa]">Code on GitHub</button></a>
                <a href="https://ahmedali1812.github.io/market/" target='_blank'><button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">Website</button></a>
                </div>
    </div>
    </div>
    </div>
    );
};

export default Projects;
