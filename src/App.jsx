import { useEffect, useState } from 'react'
import './App.css'
import { Footer, Navbar } from './components/index'
import { Home, About, Skills, Projects, Contact, Experiences } from './pages/index'
import { motion, useScroll, useSpring } from "framer-motion";
import { MdOutlineDarkMode, MdLightMode } from 'react-icons/md'



function App() {

  const [theme, setTheme] = useState(null)
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (window.matchMedia('(prefer-color-scheme: dark)').matches) {
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }



  return (
    <>
      <div className=''>
        <motion.div
          className="fixed top-0 left-0 h-1 bg-dark-sign dark:bg-light-sign right-0 z-[60] origin-top-left"
          style={{ scaleX }}
        />

        <button
          type='button'
          onClick={handleTheme}
          className='fixed z-1 bottom-4 right-2 bg-dark-bg2 text-light dark:bg-light dark:text-dark-bg-color text-xl p-2 rounded-md'
        >
          {theme === 'dark' ? <MdLightMode /> : <MdOutlineDarkMode />}

        </button>

        <Navbar theme={theme} />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experiences theme={theme} />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
