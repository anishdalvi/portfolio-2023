import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

const Contact = () => {

    const themeCSS = 'bg-light-bg text-black-400 dark:bg-dark-bg2 dark:text-gray-400'

    const URL = import.meta.env.VITE_FORM_LINK

    return (
        <div name='contact' className={`w-full h-fit ${themeCSS} flex justify-center items-center px-20 pt-[130px]`}>
            <form action={`${URL}`} method='POST' className='flex flex-col  w-full max-w-[600px]'>
                <div className='pb-8'>
                    <p className='text-4xl sm:text-5xl font-bold inline border-b-4 border-dark-sign dark:border-light-sign'>
                        Contact
                    </p>
                    <p className='text-base sm:text-xl font-medium mt-3'> Wanna talk? Fill up the below form to get in touch </p>
                </div>


                <input className='p-3 bg-dark-bg2 dark:bg-light placeholder:text-gray-400 dark:placeholder:text-gray-700 outline-none	text-light-bg-color dark:text-dark-bg-color' type="text" placeholder='Name' name='name' required />

                <input className='p-3 my-3 outline-none	 bg-dark-bg2 dark:bg-light placeholder:text-gray-400 dark:placeholder:text-gray-700 text-light-bg-color dark:text-dark-bg-color' type="email" placeholder='Email' name='email' required />

                <textarea className='p-3 bg-dark-bg2 dark:bg-light outline-none	 placeholder:text-gray-400 dark:placeholder:text-gray-700 text-light-bg-color dark:text-dark-bg-color ' rows='10' placeholder='Message' name='message' required />

                <button className='text-dark dark:text-light  hover:cursor-pointer sm:py-3 sm:px-6 flex items-center gap-2 font-bold border-black border-2 dark:border-light hover:bg-light-sign dark:hover:bg-[black] duration-200 py-1 px-3 group my-8 mx-auto'>
                    Submit
                    <span className='group-hover:-rotate-180 duration-500'>
                        <AiOutlineSend />
                    </span>
                </button>

            </form>
        </div>
    )
}

export default Contact