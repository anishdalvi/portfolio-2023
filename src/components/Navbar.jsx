import React, { useEffect, useState } from 'react'
import Logo_light from '../assets/light_logo.png'
import Logo_dark from '../assets/dark_logo.png'
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { socials } from '../data/socials'

const Navbar = ({ theme }) => {

    const [nav, setnav] = useState(false)
    const handleClick = () => {
        setnav(!nav)
    }

    //console.log(theme);

    return (
        <div className='fixed w-full h-[60px] flex justify-between items-center bg-light-bg text-black-400 dark:bg-dark-bg2 dark:text-gray-400 z-50'>
            <div className="navbar fixed w-full h-[60px] flex justify-between items-center bg-light-bg dark:bg-dark-bg2 px-4 text-black-400   drop-shadow-xl">
                <div className="logo">

                    {
                        theme === 'light' ? <img src={Logo_dark} alt="Logo" className='w-[50px]' />
                            : <img src={Logo_light} alt="Logo" className='w-[50px]' />
                    }



                </div>

                {/* Menu items */}
                <div className='hidden md:block'>
                    <ul className='md:flex'>
                        <li>
                            <Link to="home" smooth={true} duration={500}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="skills" smooth={true} duration={500}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500}>
                                Contact
                            </Link>
                        </li>

                    </ul>
                </div>

                {/* Hamburger */}
                <div className='md:hidden z-20' onClick={handleClick}>
                    {!nav ? <FaBars /> : <FaTimes />}

                </div>

                {/* Mobile Menu */}
                <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full'}>
                    <ul className=' h-screen flex flex-col justify-center items-center bg-light-bg text-dark dark:bg-dark-bg2 dark:text-light'>
                        <li className='py-6 text-3xl'>
                            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                                Home
                            </Link>
                        </li>
                        <li className='py-6 text-3xl'>
                            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                                About
                            </Link>
                        </li>
                        <li className='py-6 text-3xl'>
                            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                                Skills
                            </Link>
                        </li>
                        <li className='py-6 text-3xl'>
                            <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                                Projects
                            </Link>
                        </li>
                        <li className='py-6 text-3xl'>
                            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Social Icons */}
            <div className='hidden md:flex fixed flex-col top-[35%] left-0 '>

                {socials.map((social => (
                    <ul key={social.title}>
                        <li className='flex w-[180px] h-[60px] justify-between items-center ml-[-115px] hover:ml-[-15px] duration-300' >
                            <a
                                className={`hover:bg-${social.bgColor} hover:text-white flex justify-between items-center w-full p-3 hover:bg-${social.bgColor}`}
                                href=""
                            >
                                <span className='font-bold'>
                                    {social.title}
                                </span>

                                {social.icon}
                            </a>

                        </li>
                    </ul>

                )))}

                {/* Below code is kept to solve social bg color glitch */}

                <ul className='hidden'>
                    <li className='hover:bg-github  hover:text-white p-3'>
                        <FaGithub size={30} />
                    </li>

                    <li className='hover:bg-linkedin  hover:text-white p-3'>
                        <FaGithub size={30} />
                    </li>
                    <li className='hover:bg-instagram  hover:text-white p-3'>
                        <FaGithub size={30} />
                    </li>
                    <li className='hover:bg-email  hover:text-white p-3'>
                        <FaGithub size={30} />
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Navbar