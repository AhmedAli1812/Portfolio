import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation, faLocationArrow, faLocationCrosshairs, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
    <footer className="bg-black py-8 text-gray-400">
        <div className="container mx-auto flex flex-col md:flex-row justify-between px-14 items-center">
        <div className="text-center mb-8 md:mb-0">
            <h2 className="text-white mb-2">AHMED ALI</h2>
            <ul>
                <li><a href="#" className="hover:text-gray-300">About</a></li>
                <li><a href="#" className="hover:text-gray-300">Skills</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                <li><a href="#" className="hover:text-gray-300">Projects</a></li>
            </ul>
        </div>
        <div className="text-center mb-8 md:mb-0">
            <h2 className="text-white mb-2">CONTACT</h2>
            <p><a href="mailto:contact@company.com" className="hover:text-gray-300">contact@company.com</a></p>
            <p>+1 800 603 6035</p>
            <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.facebook.com/alimedo.ahmedx?mibextid=ZbWKwL" target='_blank' title='Facebook' > <FontAwesomeIcon className='w-7 h-7 inline mr-3 hover:pb-1' icon={faFacebook}/> </a>
            <a href="https://www.linkedin.com/in/ahmed-tawfik1812?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' title='Linkedin' > <FontAwesomeIcon className='w-7 h-7 inline mr-3 hover:pb-1' icon={faLinkedin}/> </a>
            <a href="https://github.com/AhmedAli1812" target='_blank' title='Github'> <FontAwesomeIcon className='w-7 h-7 inline mr-3 hover:pb-1' icon={faGithub}/> </a>
            <a href="https://www.instagram.com/a7med_2125?igsh=cTNwbDc1bTRucHp6" target='_blank' title='Instagram' > <FontAwesomeIcon className='w-7 h-7 inline mr-3 hover:pb-1' icon={faInstagram}/> </a>
            </div>
        </div>
        <div className="text-center mb-8 md:mb-0">
            <h2 className="text-white mb-2">ADDRESS</h2>
            <p>101 The Amazing Road</p>
            <p>Premier Building</p>
            <p>Manchester</p>
            <p>400105</p>
        </div>
    </div>
        <div className="container mx-auto text-center mt-20 text-gray-500">
            <p>Copyright © Ahmed Ali 2024. All Rights Reserved</p>
        </div>
    </footer>
    );
};

export default Footer;
