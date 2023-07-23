import React from 'react'

const About = () => {

    const themeCSS = 'bg-light-bg text-black-400 dark:bg-dark-bg2 dark:text-gray-400'

    return (
        <div name='about' className={`w-full h-fit sm:h-screen ${themeCSS} pt-[130px] sm:pt-0`}>
            <div className="flex flex-col justify-center items-center w-full h-full px-10">
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl sm:text-5xl font-bold inline border-b-4 border-dark-sign dark:border-light-sign'>
                            About
                        </p>
                    </div>
                    <div>

                    </div>
                </div>
                {/*  */}
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-3xl sm:text-4xl font-bold'>
                        <p>
                            Hi, nice to meet you. Please take a look around.
                        </p>
                    </div>
                    <div className="font-medium">
                        <p>
                            Keen Coder. Currently, I am pursuing BE in Information Technology from Vidyavardhini's College of Engineering and Technology, Vasai. I have made many websites using the skills mentioned below and lately I have started building RESPONSIVE websites. I have created many posters and designs using Photoshop and Adobe Illustrator. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About