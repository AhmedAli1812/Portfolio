import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation, faLocationArrow, faLocationCrosshairs, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
    <div className=" bg-gray-800 flex items-center justify-center p-5  ">
        <div className="bg-gray-800 shadow-lg rounded-lg  overflow-hidden mt-16 mb-16 w-2/3 h-full flex flex-col lg:flex-row">
        <div className="bg-gray-900 text-white p-8 w-full lg:w-1/3  ">
            <h2 className="text-2xl mb-10 mt-6">Contact Us</h2>
        <ul className="space-y-2">
            <li className="flex items-start">
            <span className="material-icons mr-2 mb-3">
                    <div className='w-6 h-6'><FontAwesomeIcon icon={faMapLocation} />
                    </div>
                    </span>
            <div>
                <p>Fayoum, Egypt</p>
            </div>
            </li>
            <li className="flex items-start">
                <span className="material-icons mr-2 mb-3">
                    <div className='w-6 h-6'><FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    </span>
                <p>a7med41114@gmail.com</p>
            </li>
            <li className="flex items-start">
                <span className="material-icons mr-2 mb-3">
                <div className='w-6 h-6'><FontAwesomeIcon icon={faPhone} />
                </div>
                    </span>
                <p>+201003252891</p>
            </li>
        </ul>
        <div className='mt-10'>
        <a href="https://www.facebook.com/alimedo.ahmedx?mibextid=ZbWKwL" target='_blank' title='Facebook' > <FontAwesomeIcon className='w-7 h-7 inline mr-3 hover:pb-1' icon={faFacebook}/> </a>
        <a href="https://www.linkedin.com/in/ahmed-tawfik1812?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' title='Linkedin' > <FontAwesomeIcon className='w-7 h-7 inline mr-3 hover:pb-1' icon={faLinkedin}/> </a>
        <a href="https://github.com/AhmedAli1812" target='_blank' title='Github'> <FontAwesomeIcon className='w-7 h-7 inline mr-3 hover:pb-1' icon={faGithub}/> </a>
        <a href="https://www.instagram.com/a7med_2125?igsh=cTNwbDc1bTRucHp6" target='_blank' title='Instagram' > <FontAwesomeIcon className='w-7 h-7 inline mr-3 hover:pb-1' icon={faInstagram}/> </a>
        </div>
        </div>
        <div className="bg-white p-8 w-full  lg:w-2/3">
            <h2 className="text-2xl text-black mb-6">Get in Touch</h2>
            <p className="text-gray-500 mb-6">Feel free to drop us a line below!</p>
        <form>
            <div className="mb-4">
                <input className="w-full p-3 border rounded text-black" type="text" placeholder="Your Name" />
            </div>
            <div className="mb-4">
                <input className="w-full p-3 border rounded text-black" type="email" placeholder="Your Email" />
            </div>
            <div className="mb-4">
                <textarea className="w-full p-3 border rounded text-black" placeholder="Typing your message here..."></textarea>
            </div>
            <button className="bg-[#1810aa] hover:bg-[#141052] text-white px-4 py-2 rounded-full">SEND</button>
        </form>
        </div>
        </div>
    </div>
    );
};

export default Contact;