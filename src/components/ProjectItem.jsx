import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi'

const ProjectItem = ({ title, demo, github, tags }) => {

    const buttonCSS = 'text-center rounded-lg px-2 lg:px-3 py-1 lg:py-2 m-2 bg-light dark:bg-dark-bg2 text-dark dark:text-light md:text-lg lg:text-xl'

    return (
        <>
            {/* Hover Effect */}

            <div className='opacity-0 group-hover:opacity-100 pt-8 pb-3 flex flex-col justify-between'>
                <span className='text-3xl md:text-3xl lg:text-3xl font-bold text-dark dark:text-gray-300'>
                    {title}
                </span>
                {/* <span className='text-sm md:text-lg text-dark dark:text-light px-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quam?
                </span> */}
                <div className='pt-4 text-center text-light flex justify-evenly'>
                    <a href={demo} target='_blank'>
                        <button className={`${buttonCSS} flex items-center gap-2`}>
                            <span className='text-lg md:text-xl'>Demo</span>
                            <BiLinkExternal />
                        </button>
                    </a>
                    <a href={github} target='_blank'>
                        <button className={`${buttonCSS} flex items-center gap-2`} >
                            <span className='text-lg md:text-xl'>Code</span>
                            <FiGithub />
                        </button>
                    </a>
                </div>

                <div className='mt-4 flex flex-wrap gap-2 text-xs md:text-xs justify-center'>
                    {tags.map(item => (
                        <span key={item}
                            className='inline-block mx-1 bg-slate-300 py-1 px-2 rounded-md dark:bg-slate-900'
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProjectItem