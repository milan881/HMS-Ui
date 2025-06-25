import React, { useState } from 'react'
import TopNavbar from './components/TopNavbar'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <div className="main-content">
        <TopNavbar 
          onThemeToggle={toggleDarkMode}
          darkMode={darkMode}
        />
        <Dashboard />
      </div>
    </div>
  )
}

export default App
