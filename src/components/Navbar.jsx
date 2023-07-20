import React, { useState } from 'react'
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

    const menuLinkHover = 'hover:bg-light-sign py-1 duration-300 rounded-md hover:dark:bg-light-sign hover:dark:text-dark-bg-color'

    const menuLinkMobileHover = 'hover:bg-light-sign duration-300 rounded-md hover:dark:bg-light-sign hover:dark:text-dark-bg-color py-3 text-3xl'

    return (
        <div className='fixed w-full h-[60px] flex justify-between items-center bg-light-bg text-black-400 dark:bg-dark-bg2 dark:text-gray-400 z-50'>
            <div className="navbar fixed w-full h-[60px] flex justify-between items-center bg-light-bg dark:bg-dark-bg2 px-4 text-black-400   drop-shadow-xl">
                <div className="logo cursor-pointer">

                    <Link to='home' smooth={true} duration={500}>
                        {
                            theme === 'light' ? <img src={Logo_dark} alt="Logo" className='w-[50px]' />
                                : <img src={Logo_light} alt="Logo" className='w-[50px]' />
                        }
                    </Link>



                </div>

                {/* Menu items */}
                <div className='hidden md:block'>
                    <ul className='md:flex gap-2'>
                        <Link to="home" smooth={true} duration={500}>
                            <li className={`${menuLinkHover}`}>
                                Home
                            </li>
                        </Link>
                        <Link to="about" smooth={true} duration={500}>
                            <li className={`${menuLinkHover}`}>
                                About
                            </li>
                        </Link>
                        <Link to="skills" smooth={true} duration={500}>
                            <li className={`${menuLinkHover}`}>
                                Skills
                            </li>
                        </Link>
                        <Link to="projects" smooth={true} duration={500}>
                            <li className={`${menuLinkHover}`}>
                                Projects
                            </li>
                        </Link>
                        <Link to="experiences" smooth={true} duration={500}>
                            <li className={`${menuLinkHover}`}>
                                Experience
                            </li>
                        </Link>
                        <Link to="contact" smooth={true} duration={500}>
                            <li className={`${menuLinkHover}`}>
                                Contact
                            </li>
                        </Link>

                    </ul>
                </div>

                {/* Hamburger */}
                <div className='md:hidden z-20 cursor-pointer' onClick={handleClick}>
                    {!nav ? <FaBars /> : <FaTimes />}

                </div>

                {/* Mobile Menu */}
                <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full'}>
                    <ul className=' h-screen flex flex-col justify-center items-center bg-light-bg text-dark dark:bg-dark-bg2 dark:text-light'>
                        <Link onClick={handleClick} to="home" smooth={true} duration={500} className='py-3'>
                            <li className={`${menuLinkMobileHover}`}>
                                Home
                            </li>
                        </Link>
                        <Link onClick={handleClick} to="about" smooth={true} duration={500} className='py-3'>
                            <li className={`${menuLinkMobileHover}`}>
                                About
                            </li>
                        </Link>
                        <Link onClick={handleClick} to="skills" smooth={true} duration={500} className='py-3'>
                            <li className={`${menuLinkMobileHover}`}>
                                Skills
                            </li>
                        </Link>
                        <Link onClick={handleClick} to="projects" smooth={true} duration={500} className='py-3'>
                            <li className={`${menuLinkMobileHover}`}>
                                Projects
                            </li>
                        </Link>
                        <Link onClick={handleClick} to="experiences" smooth={true} duration={500} className='py-3'>
                            <li className={`${menuLinkMobileHover}`}>
                                Experience
                            </li>
                        </Link>
                        <Link onClick={handleClick} to="contact" smooth={true} duration={500} className='py-3'>
                            <li className={`${menuLinkMobileHover}`}>
                                Contact
                            </li>
                        </Link>
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
                        <FaGithub />
                    </li>

                    <li className='hover:bg-linkedin  hover:text-white p-3'>
                        <FaGithub />
                    </li>
                    <li className='hover:bg-instagram  hover:text-white p-3'>
                        <FaGithub />
                    </li>
                    <li className='hover:bg-email  hover:text-white p-3'>
                        <FaGithub />
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Navbar