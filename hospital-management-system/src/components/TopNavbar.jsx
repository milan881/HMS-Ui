import React from 'react'
import './TopNavbar.css'

const TopNavbar = () => {
  return (
    <nav className="top-navbar">
      <div className="navbar-left">
        <h2 className="navbar-title">Hospital Name</h2>
      </div>
      <div className="navbar-right">
        <button className="navbar-btn">Configuration</button>
        <button className="navbar-btn">Settings</button>
      </div>
    </nav>
  )
}

export default TopNavbar 