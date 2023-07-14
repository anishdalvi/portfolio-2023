import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'


const Home = () => {

    const themeCSS = 'bg-light-bg text-black-400 dark:bg-dark-bg2 dark:text-gray-400'

    return (
        <div name='home' className={`w-full h-screen ${themeCSS}`} >

            {/* Container */}
            <div className="max-w-[1000px] md:ml-10 lg:mx-auto px-10 flex flex-col justify-center h-full">
                <p className='text-lg sm:text-xl font-extralight dark:text-light'>Hello, this is</p>
                <h1 className='text-5xl sm:text-7xl font-bold text-dark-sign dark:text-light-sign'>Anish Dalvi</h1>
                <h2 className='text-3xl sm:text-5xl font-bold text-dark dark:text-light'>Full Stack Developer</h2>
                <p className='text-lg sm:text-xl font-light dark:text-light'>
                    Also, a passionate Graphic Designer
                </p>
                <div>
                    <button className='text-dark dark:text-light  hover:cursor-pointer sm:py-3 sm:px-6 my-2 flex items-center gap-2 font-bold border-black border-2 dark:border-light hover:bg-light-sign dark:hover:bg-[black] duration-200 py-1 px-3 group'>
                        Resume 
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight size={20}/>
                        </span>
                    </button>
                </div>

            </div>
            
        </div>
    )
}

export default Home