import React from 'react'

const ProjectItem = ({ title, demo, github, imgSrc, tags }) => {

    const buttonCSS = 'text-center rounded-lg px-2 lg:px-3 py-1 lg:py-2 m-2 bg-slate-200 dark:bg-dark-bg2 font-bold text-lg md:text-lg lg:text-xl'

    return (
        <>
            {/* Hover Effect */}

            <div className='opacity-0 group-hover:opacity-100 pt-8 pb-3 flex flex-col justify-between'>
                <span className='text-3xl md:text-2xl lg:text-3xl font-bold text-dark dark:text-light'>
                    {title}
                </span>
                <div className='pt-4 text-center text-dark-sign'>
                    <a href={demo} target='_blank'>
                        <button className={`${buttonCSS}`}>
                            Demo
                        </button>
                    </a>
                    <a href={github} target='_blank'>
                        <button className={`${buttonCSS}`}>
                            Github
                        </button>
                    </a>
                </div>

                <div className='mt-4 flex flex-wrap gap-2 text-xs lg:text-sm justify-center'>
                    { tags.map(item => (
                        <span key={item}
                            className='inline-block mx-1 bg-slate-300 py-1 px-2 rounded-md dark:bg-slate-900'
                        >
                            {item}
                        </span>
                    )) }
                </div>
            </div>
        </>
    )
}

export default ProjectItem