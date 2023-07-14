import React from 'react'
import projects from '../data/projects'
import { ProjectItem } from '../components'


const Projects = () => {

    const themeCSS = 'bg-light-bg text-black-400 dark:bg-dark-bg2 dark:text-gray-400'


    //console.log(projects);

    return (
        <div name="projects" className={`${themeCSS} w-full md:h-screen px-10 `}>
            {/* Container */}
            <div className='max-w-[1000px] md:ml-10 lg:mx-auto p-4 flex flex-col'>
                <div>
                    <p className='text-4xl sm:text-5xl font-bold inline border-b-4 border-dark-sign dark:border-light-sign'>
                        Projects
                    </p>
                    <p className='text-base sm:text-xl font-medium mt-3'>Checkout some of my projects</p>
                </div>

                {/* Grid Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8'>

                    {
                        projects.map((item, i) => (
                            <div
                                style={{ backgroundImage: `url(${item.img})` }}
                                key={i}
                                className='shadow-lg shadow-[#525151] group container rounded-md content-div'>
                                {/* content-div is used for Hover feature */}
                                <ProjectItem
                                        title={item.title} 
                                        demo={item.demo}
                                        github={item.github}
                                        tags={item.tags}
                                >
                                    
                                </ProjectItem>
                                
                            </div>
                        ))
                    }

                    
                </div>
            </div>

            
        </div>
    )
}

export default Projects