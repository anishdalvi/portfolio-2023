import React from 'react'

const Footer = () => {

  const themeCSS = "bg-dark-bg2 text-gray-400 dark:bg-light-bg dark:text-dark";

  return (
    <div name="footer" className={`${themeCSS} w-full px-10 pt-2 sm:pt-[20px] `}>
      {/* Container */}
      <div className="text-center h-[30px] sm:h-[40px">
        <p className="text-sm font-semibold">&copy; 2023, Anish Dalvi</p>
      </div>
    </div>
  );
}

export default Footer