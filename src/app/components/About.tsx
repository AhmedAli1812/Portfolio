import React from 'react'
import Image from 'next/image';

function About() {
    return (
        <div id='About' className="bg-black text-white  flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full p-6 lg:p-12 bg-gray-800 shadow-lg space-y-6 lg:space-y-0 lg:space-x-12">
            <div className="lg:w-1/3 flex justify-center lg:justify-start">
            <Image
                src="/images/my-photo2.png"
                alt="Ahmed Ali"
                width={800}
                height={500}
                className="rounded-full shadow-lg hidden lg:inline"
            />
            </div>
            <div className="lg:w-2/3">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-400 mb-6">I hope one day all my dreams will come true.</p>
            <ul className="text-lg space-y-2 mb-6">
                <li><strong>Name:</strong> <p className='pl-24 inline'>Ahmed Ali</p></li>
                <li><strong>Date of birth:</strong><p className='pl-9 inline'> November 21, 2003</p></li>
                <li><strong>Address:</strong><p className='pl-20 inline'>Fayoum, Egypt</p></li>
                <li><strong>Zip code:</strong><p className='pl-20 inline'>63511</p></li>
                <li><strong>Email:</strong><p className='pl-28 inline'>a7med41114@gmail.com</p></li>
                <li><strong>Phone:</strong><p className='pl-24 inline'>+201003252891</p></li>
            </ul>
            <p className="text-lg mb-6"><strong> <span className='text-[#1810aa] pr-2'>10</span> Project complete</strong></p>
            <a href="https://drive.google.com/file/d/1snwrT2WL471MXPSD2qJvdjBszLjnmIrO/view?usp=drive_link" target='_blank' title='CV'><button  className="bg-[#1810aa] text-black px-6 py-2 rounded hover:bg-[#3c34db]">DOWNLOAD CV</button></a>
            </div>
        </div>
        </div>
    )
}

export default About;
