import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import AnishImg from '../assets/anish_image.jpeg'
import { socialsMobile } from '../data/socials'
import { FaGithub } from 'react-icons/fa'


const Home = () => {

    const themeCSS = 'bg-light-bg text-black-400 dark:bg-dark-bg2 dark:text-gray-400'

    return (
        <div name='home' className={`w-full h-screen ${themeCSS}`} >

            {/* Container */}
            <div className="max-w-[1000px] md:ml-10 lg:mx-auto px-10 flex items-center flex-col-reverse gap-10 sm:gap-10 md:gap-20 sm:flex-row-reverse sm:items-center justify-center h-full pt-10 sm:pt-0">
                <div className="intro-text">
                    <p className='text-lg sm:text-xl font-extralight d2:text-lg dark:text-light'>Hello, this is</p>
                    <h1 className='text-5xl sm:text-7xl d0:text-5xl d1:text-5xl d2:text-6xl  font-bold text-dark-sign dark:text-light-sign '>Anish Dalvi</h1>
                    <h2 className='text-3xl sm:text-5xl d0:text-3xl d1:text-3xl  d2:text-4xl font-bold text-dark dark:text-light '>Full Stack Developer</h2>
                    <p className='text-lg sm:text-xl d0:text-base d1:text-base d2:text-lg font-light dark:text-light '>
                        Also, a passionate Graphic Designer
                    </p>
                    <div>
                        <a href="https://drive.google.com/file/d/1duYFliVkWBSjXluPzh1lDjo_WvFrI_jU/view?usp=drive_link" target='_blank'>
                            <button className='text-dark dark:text-light  hover:cursor-pointer sm:py-3 sm:px-6 my-2 flex items-center gap-2 font-bold border-black border-2 dark:border-light hover:bg-light-sign dark:hover:bg-[black] duration-200 py-1 px-3 group'>
                                Resume
                                <span className='group-hover:rotate-90 duration-300'>
                                    <HiArrowNarrowRight size={20} />
                                </span>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="intro-img">
                    <div className="anish-img w-[280px] d0:w-[260px] d1:w-[280px] md:w-[300px] lg:w-[350px]  ">
                        <img src={AnishImg} alt="Image" className='w-full rounded-full' />
                        {/* <img src="https://github.com/anishdalvi/Portfolio-2022/blob/master/images/2023/anish_img.jpg?raw=true" alt="Image" className='w-full rounded-full' /> */}

                        <div className='flex md:hidden mt-2 justify-center gap-2 '>
                            {socialsMobile.map(social => (
                                <ul key={social.title}>
                                    <a href={social.link || `mailto:${social.email}`} target='_blank'>
                                        <li className={`hover:bg-light-sign rounded-full p-3 duration-300 text-2xl 
                                    text-${social.color || social.bgColor}
                                    hover:text-dark-bg-color`}>
                                            {social.icon}
                                        </li>
                                    </a>
                                </ul>
                            ))}
                        </div>

                        {/* Below code is kept to solve social bg color glitch */}

                        <ul className='hidden'>
                            <li className='text-github'>
                                <FaGithub />
                            </li>

                            <li className='text-linkedin'>
                                <FaGithub />
                            </li>
                            <li className='text-instagram'>
                                <FaGithub />
                            </li>
                            <li className='text-email'>
                                <FaGithub />
                            </li>
                        </ul>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home