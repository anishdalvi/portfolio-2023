import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show-beauty-scroll')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hide-beauty-scroll')
hiddenElements.forEach(el => observer.observe(el))

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />

)
