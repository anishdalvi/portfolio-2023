import React from 'react'
import { Chrono } from 'react-chrono';

const ExperiencesOld = () => {

    const themeCSS = 'bg-light-bg text-black-400 dark:bg-dark-bg2 dark:text-gray-400'

    const items = [
        {
            title: "January 2022",
            cardTitle: "Event 1",
            cardSubtitle: "Event 1 Subtitle",
            cardDetailedText: "This is the first event on the timeline.",
        },
        {
            title: "February 2022",
            cardTitle: "Event 2",
            cardSubtitle: "Event 2 Subtitle",
            cardDetailedText: "This is the second event on the timeline.",
        },
        {
            title: "March 2022",
            cardTitle: "Event 3",
            cardSubtitle: "Event 3 Subtitle",
            cardDetailedText: "This is the third event on the timeline.",
        }
    ];

    return (
        <>
            <div name="projects" className={`${themeCSS} w-full h-fit px-10 pt-[130px]`}>
                {/* Container */}
                <div className='max-w-[1000px] md:ml-10 lg:mx-auto p-4 flex flex-col'>
                    <div>
                        <p className='text-4xl sm:text-5xl font-bold inline border-b-4 border-dark-sign dark:border-light-sign pb-1'>
                            Experiences
                        </p>
                        <p className='text-base sm:text-xl font-medium mt-3'>These are some of my</p>
                    </div>

                    {/* Grid Container */}
                    <div>
                        <Chrono
                            items={items}
                            slideItemDuration={2000}
                            slideshow
                        />
                    </div>

                </div>


            </div>

            <ol className="relative border-l dark:border-gray-200 border-gray-700">
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Application UI v2.0.0 <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span></h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        Download ZIP</a>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-7 h-7 bg-light-sign rounded-full -left-3.5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      {/*   {
                            theme === 'light' ? <img src={Logo_dark} alt="Logo" className='w-5 h-5' />
                                : <img src={Logo_light} alt="Logo" className='w-5 h-5' />
                        } */}

                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>


                </li>

                <li className='mb-10 ml-6'>
                    <span className="absolute flex items-center justify-center w-7 h-7 bg-light-sign rounded-full -left-3.5 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        {/* {
                            theme === 'light' ? <img src={Logo_dark} alt="Logo" className='w-5 h-5' />
                                : <img src={Logo_light} alt="Logo" className='w-5 h-5' />
                        } */}

                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>

                </li>

            </ol>
        
        </>
    )
}

export default Experiences