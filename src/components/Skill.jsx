import React from 'react'

const Skill = ({ src, title }) => {
  return (
      <div className='group p-3 sm:p-8 sm:pb-1 mx-auto text-center font-bold hover:cursor-pointer flex flex-col justify-center items-center border-b-2 border-light '>
          <img src={src} className='group-hover:scale-110 duration-500 w-[80px] sm:w-[100px] ' />
          <p className='group-hover:text-dark-sign dark:group-hover:text-light-sign mt-2 text-base sm:text-lg'>
              {title}
          </p>
      </div>
  )
}

export default Skill