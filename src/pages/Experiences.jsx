import React from 'react'
import Logo_light from '../assets/light_logo.png'
import Logo_dark from '../assets/dark_logo.png'

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
                <div className='max-w-[700px] mx-auto mt-10'>
                    {/* <!-- Timeline Item --> */}
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                        {/* <!-- Purple label --> */}
                        <div className="font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The origin</div>
                        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2020</time>
                            <div className="text-xl font-bold text-slate-900">Acme was founded in Milan, Italy</div>
                        </div>
                        {/* <!-- Content --> */}
                        <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                    </div>

                    {/* <!-- Timeline Item --> */}
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                        {/* <!-- Purple label --> */}
                        <div className="font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The origin</div>
                        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-dark-sign  after:border-4 after:box-content  after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <div className='flex flex-col sm:absolute left-0 translate-y-0.5 items-center justify-center text-xs text-center font-semibold uppercase mb-3 sm:mb-0 text-light-sign '>
                                <span className=" w-20  rounded-full">May, 2020</span>
                                <span> - </span>
                                <span className=" w-20  rounded-full">May, 2020 </span>

                            </div>
                            <div className="text-xl font-bold text-slate-900">Acme was founded in Milan, Italy</div>
                        </div>
                        {/* <!-- Content --> */}
                        <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                    </div>
                    

                    
                </div>

            </div>


        </div>
    )
}

export default Experiences