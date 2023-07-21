import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi'

const ProjectItem = ({ title, demo, github, tags, img, desc }) => {

    const buttonCSS = 'text-center rounded-sm px-2 lg:px-3 py-1 lg:py-1 m-2 sm:text-base md:text-lg lg:text-xl flex items-center gap-2 border border-light text-light bg-transparent dark:text-dark-bg2 dark:border-dark-bg2'

    const themeCSS = 'bg-dark-bg2 text-gray-400 dark:bg-light-bg dark:text-black'


    return (
        <>

            <div className={`${themeCSS}  pt-6 pb-5 flex flex-col px-5 rounded-3xl lg:w-[500px] sm:w-full shadow-md shadow-[#525151] hover:shadow-xl hover:shadow-[#525151] group`}>
                
                <span className='cursor-default text-xl md:text-2xl lg:text-3xl font-bold text-gray-300 dark:text-black'>
                    {title}
                </span>

                <div className='div2 pt-4'>
                    <div className='flex flex-col gap-2 lg:flex-row lg:justify-between '>
                        <div className='lg:w-[270px] lg:h-[200px] w-[98%] md:h-[200px] sm:h-[40vh] h-[230px] overflow-hidden border-solid border-2 border-dark-bg-2  dark:border-dark rounded-xl  '>
                            <img src={img} className=' w-full h-full object-cover hover:drop-shadow-xl group-hover:scale-110 transition duration-500 ' />
                        </div>
                        {/* Buttons */}
                        <div className='text-center text-light flex lg:flex-col lg:items-center gap-8 lg:gap-10 lg:justify-evenly justify-center lg:pr-3'>
                            <a href={demo} target='_blank'>
                                <button className={`${buttonCSS} hover:bg-light hover:text-dark hover:dark:bg-dark-bg2 hover:dark:text-light`}>
                                    <span className='text-sm sm:text-base md:text-lg'>Demo</span>
                                    <BiLinkExternal />
                                </button>
                            </a>
                            <a href={github} target='_blank'>
                                <button className={`${buttonCSS} hover:bg-light hover:text-dark hover:dark:bg-dark-bg2 hover:dark:text-light `} >
                                    <span className='text-sm sm:text-base md:text-lg'>Code</span>
                                    <FiGithub />
                                </button>
                            </a>
                        </div>
                    </div>
                    
                </div>

                
                    
                    
                <div className="div 3 lg:pt-4 pt-2">
                    <div className='flex flex-col'>
                        {/* Desc */}
                        <div>
                            <span className='cursor-default text-sm sm:text-base' >
                                
                                {
                                    (desc.length > 150) ? desc.substring(0, 150) + '...' : desc
                                     
                                }
                            </span>
                        </div>

                        <div className='mt-4 flex flex-wrap gap-2 text-[10px] sm:text-xs'>
                            {tags.map(item => (
                                <span key={item}
                                    className='inline-block mx-1 bg-slate-300 text-slate-900 py-1 px-2 rounded-md dark:bg-slate-900 dark:text-slate-300 '
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
                
                
            </div>
        </>
    )
}

export default ProjectItem