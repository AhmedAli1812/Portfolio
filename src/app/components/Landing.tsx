import React from 'react';
import Image from 'next/image'


function Landing() {
    return (
        <main className="bg-black text-white sm:m-0 sm:w-full">
        <div className=" flex items-center justify-center ">
        <div className="flex flex-col lg:flex-row items-center w-full  lg:mt-0 sm:m-0 xl:w-full sm:w-full  bg-gray-900  shadow-lg ">
            <div className="lg:w-1/2 mb-6 pl-20 lg:mb-0 ">
                <h1 className="text-[#3c34db] text-xl mb-2">HELLO!</h1>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4"> I am <span className="text-[#3c34db]">Ahmed Ali</span></h2>
                <p className="text-xl mb-6">Frontend Web Developer</p>
                <div className="flex space-x-4">
                    <button className="bg-[#3c34db] text-black px-4 py-2 rounded hover:bg-[#1810aa]">HIRE ME</button>
                    <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">MY WORKS</button>
                </div>
            </div>
            <div className="lg:w-1/2 lg:pl-8 ">
            <Image
                src="/images/my-photo.jpeg"
                alt="Picture of the author"
                className='rounded-full shadow-lg'
                width={500}
                height={500}
            />
            </div>
        </div>
    </div>
    </main>
    );
}

export default Landing;