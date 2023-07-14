import React from 'react'

const ProjectItem = ({ title, demo, github, imgSrc, tags }) => {

    const buttonCSS = 'text-center rounded-lg- px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'

    return (
        <>
            <div className='opacity-100 group-hover:opacity-0 group-hover:hidden'>
                <div className='text-center relative'>
                    <p className='text-2xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] '>
                        { title }
                    </p>
                </div>
            </div>
            
            {/* Hover Effect */}

            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold'>
                    {title}
                </span>
                <div className='pt-8 text-center'>
                    <a href="">
                        <button className={`${buttonCSS}`}>
                            Demo
                        </button>
                    </a>
                    <a href="">
                        <button className={`${buttonCSS}`}>
                            Github
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProjectItem