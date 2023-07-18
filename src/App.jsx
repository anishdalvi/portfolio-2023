import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components/index'
import {Home, About, Skills, Projects, Contact } from './pages/index'
import { motion, useScroll, useSpring } from "framer-motion";



function App() {
  
  const [theme, setTheme] = useState(null)
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

    useEffect(()=> {
        if(window.matchMedia('(prefer-color-scheme: dark)').matches){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    },[])

    useEffect(() => {
      if(theme === "dark"){
        document.documentElement.classList.add('dark')
      }
      else{
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
            className="fixed top-0 left-0 h-1 bg-dark-sign dark:bg-light-sign right-0 z-30 origin-top-left"
            style={{ scaleX }}
          />
          <button
            type='button'
            onClick={handleTheme}
            className='fixed z-1 bottom-2 right-2 bg-indigo-200 text-lg p-1 rounded-md'
          >
            { theme === 'dark' ? "Dark" : "Light" }
    
          </button>
          <Navbar theme={theme} />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </>
    )
}

export default App
