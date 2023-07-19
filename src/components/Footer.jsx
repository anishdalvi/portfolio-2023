import React from 'react'

const Footer = () => {

  const themeCSS = "bg-dark-bg2 text-gray-400 dark:bg-light-bg dark:text-dark";

  return (
    <div name="footer" className={`${themeCSS} w-full px-10 pt-[25px] `}>
      {/* Container */}
      <div className="text-center h-[40px]">
        <p className="text-sm ">Copyright &copy; 2023</p>
      </div>
    </div>
  );
}

export default Footer