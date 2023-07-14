import React, { useEffect, useState } from 'react'
import Logo_light from '../assets/light_logo.png'
import Logo_dark from '../assets/dark_logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsInstagram } from 'react-icons/bs'

const Navbar = ({ theme }) => {

    const [nav, setnav] = useState(false)
    const handleClick = () => {
        setnav(!nav)
    }

    //console.log(theme);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-light-bg text-black-400 dark:bg-dark-bg2 dark:text-gray-400'>
            <div className="logo">

                {
                    theme === 'light' ? <img src={Logo_dark} alt="Logo" className='w-[50px]' />
                    : <img src={Logo_light} alt="Logo" className='w-[50px]' /> 
                }
                
                   
                
            </div>

            {/* Menu items */}
            <div className='hidden md:block'>
                <ul className='md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* Hamburger */}
            <div className='md:hidden z-20' onClick={handleClick}>
                {!nav ? <FaBars /> : <FaTimes /> }
                
            </div>

            {/* Mobile Menu */}
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full' }>
                <ul className=' h-screen flex flex-col justify-center items-center bg-light-bg text-dark dark:bg-dark-bg2 dark:text-light'>
                        <li className='py-6 text-3xl'>Home</li>
                        <li className='py-6 text-3xl'>About</li>
                        <li className='py-6 text-3xl'>Skills</li>
                        <li className='py-6 text-3xl'>Work</li>
                        <li className='py-6 text-3xl'>Contact</li>
                </ul>
            </div>

            {/* Social Icons */}
            <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='flex w-[180px] h-[60px] justify-between items-center ml-[-115px] hover:ml-[-15px] duration-300 '>
                        <a
                            className='hover:bg-light-signature hover:text-white flex justify-between items-center w-full p-3'
                            href=""
                        >
                            <span className='font-bold'>LinkedIn</span>
                            <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='flex w-[180px] h-[60px] justify-between items-center ml-[-115px] hover:ml-[-15px] duration-300 '>
                        <a
                            className='hover:bg-[#777] hover:text-white flex justify-between items-center w-full p-3'
                            href=""
                        >
                            <span className='font-bold'>Github</span>
                            <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='flex w-[180px] h-[60px] justify-between items-center ml-[-115px] hover:ml-[-15px] duration-300 '>
                        <a
                            className='hover:bg-[#777] hover:text-white flex justify-between items-center w-full p-3'
                            href=""
                        >
                            <span className='font-bold'>E-Mail</span>
                            <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='flex w-[180px] h-[60px] justify-between items-center ml-[-115px] hover:ml-[-20px] duration-300 '>
                        <a
                            className='hover:bg-[#777] hover:text-white flex justify-between items-center w-full p-3'
                            href=""
                        >
                            <span className='font-bold'>Instagram</span>
                            <BsInstagram size={30} />
                        </a>
                    </li>
                    
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar