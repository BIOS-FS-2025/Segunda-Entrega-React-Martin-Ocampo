import "./DarkMode.css"
import React from 'react'

const DarkMode = () => {
  const toggleTheme = () => {
    document.body.classList.toggle('dark')
    // guarda en localStorage para que quede
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark')
    } else {
      localStorage.setItem('theme', 'light')
    }
  }

  // al cargar leo LS y si es dark, añado la clase dark
  React.useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      document.body.classList.add('dark')
    }
  }, [])

  return (
    <button className='dark-mode-button' onClick={toggleTheme}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><g fill="none"><circle cx={12} cy={12} r={8.5} stroke="currentColor" strokeWidth={1.7}></circle><path fill="currentColor" d="M16.243 7.757a6 6 0 1 0-8.486 8.486L12 12z"></path></g></svg>
      
    </button>
  )
}

export default DarkMode
