import React from 'react'
import {skillData} from '../data/skills'
import { Skill } from '../components'

const Skills = () => {

    const themeCSS = 'bg-light-bg text-black-400 dark:bg-dark-bg2 dark:text-gray-400'
    return (
        <div name='skills' className={`${themeCSS} w-full h-screen px-10`}>
            {/* Container */}
            <div className='max-w-[1000px] md:ml-10 lg:mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl sm:text-5xl font-bold inline border-b-4 border-dark-sign dark:border-light-sign'>
                        Skills
                    </p>
                    <p className='text-base sm:text-xl font-medium mt-3'> These are the technologies I've worked with: </p>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-10 gap-2 z-1'>
                    { skillData.map((item, i) => (
                        <Skill key={i} src={item.icon} title={item.title} >
                            
                        </Skill>
                        
                    )) }
                </div>
            </div>
        </div>
    )
}

export default Skills