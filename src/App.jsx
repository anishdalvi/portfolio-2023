import { useEffect, useState } from 'react'
import './App.css'
import {Navbar, Home, About, Skills, Projects } from './components/index'


function App() {
  
  const [theme, setTheme] = useState(null)

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
          <button
            type='button'
            onClick={handleTheme}
            className='fixed z-1 bottom-2 right-2 bg-indigo-200 text-lg p-1 rounded-md'
          >
            { theme === 'dark' ? "Dark" : "Light" }
    
          </button>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
        </div>
      </>
    )
}

export default App
