import React from 'react'
import { experiencesData } from '../data/experiences'

const Experiences = ({theme}) => {

    const themeCSS = 'bg-light-bg text-black-400 dark:bg-dark-bg2 dark:text-gray-400'



    return (
        <div name="projects" className={`${themeCSS} w-full h-fit px-10 pt-[130px]`}>
            {/* Container */}
            <div className='max-w-[1000px] md:ml-10 lg:mx-auto p-4 flex flex-col'>
                <div>
                    <p className='text-4xl sm:text-5xl font-bold inline border-b-4 border-dark-sign dark:border-light-sign pb-1'>
                        Experiences
                    </p>
                    <p className='text-base sm:text-xl font-medium mt-3'>These are some of my</p>
                </div>

                {/* Timeline Container */}
                <div className='max-w-[700px]  mx-auto mt-10'>

                    {experiencesData.map(experience => (
                        <>
                            {/* <!-- Timeline Item --> */}
                            <div className="relative pl-8 sm:pl-32 py-6 group" >
                                {/* <!-- Purple label --> */}
                                <div className="cursor-default text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-400 sm:mb-0" key={experience.id}> {experience.post} </div>
                                {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-400  sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-light-sign  dark:after:bg-dark-sign  after:border-4 after:box-content after:border-slate-500 dark:after:border-slate-200 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs sm:text-sm font-semibold uppercase w-20 h-5 sm:w-20 sm:h-6 mt-1 sm:mt-0 mb-2 sm:mb-0 text-light-sign bg-dark-sign dark:text-dark-sign dark:bg-light-sign rounded-full">{experience.date}</time>
                                    <div className="cursor-pointer text-lg sm:text-xl font-bold text-dark-sign dark:text-light-sign  ">{experience.company}</div>
                                </div>
                                {/* <!-- Content --> */}
                                <div className="text-slate-600 dark:text-slate-500 cursor-default text-sm sm:text-base">{experience.desc}</div>
                            </div>
                        </>
                    )) }

                    

                    {/* <!-- Bottom Timeline Item --> */}
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                        {/* <!-- Purple label --> */}
                        <div className=" text-base font-semibold text-slate-800 dark:text-slate-400 sm:mb-0">‎ </div>
                        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-400  sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-8 after:h-1 after:bg-slate-400  dark:after:bg-slate-400  after:rounded-md   sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-2">
                            
                            <div className="text-base font-light uppercase tracking-widest  text-slate-500 dark:text-slate-400  "></div>
                        </div>

                    </div>
                    

                    
                </div>

            </div>


        </div>
    )
}

export default Experiences