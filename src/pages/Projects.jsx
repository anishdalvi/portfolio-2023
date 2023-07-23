import React from 'react'
import projects from '../data/projects'
import { ProjectItem } from '../components'



const Projects = () => {

    const themeCSS = 'bg-light-bg text-black-400 dark:bg-dark-bg2 dark:text-gray-400'


    //console.log(projects);

    return (
        <div name="projects" className={`${themeCSS} w-full h-fit px-10 pt-[130px]`}>
            {/* Container */}
            <div className='max-w-[1000px] md:ml-10 lg:mx-auto p-4 flex flex-col'>
                <div>
                    <p className='text-4xl sm:text-5xl font-bold inline border-b-4 border-dark-sign dark:border-light-sign pb-1'>
                        Projects
                    </p>
                    <p className='text-base sm:text-xl font-medium mt-3'>Checkout some of my projects</p>
                </div>

                {/* Grid Container */}
                <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-10 sm:gap-8 mt-10'>

                    {
                        [...projects].reverse().map((item, i) => (
                            <div
                               
                                key={i}
            
                                className=' group container rounded-3xl flex justify-center '>
                    
                                <ProjectItem
                                    title={item.title}
                                    demo={item.demo}
                                    github={item.github}
                                    tags={item.tags}
                                    img={item.img}
                                    desc={item.desc}
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