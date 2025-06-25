import React from 'react'
import './Sidebar.css'

const Sidebar = ({ collapsed, onToggle }) => {
  const menuItems = [
    { id: 'reports', label: 'Reports', icon: '📈' },
    { id: 'appointments', label: 'Appointments', icon: '📅' },
    { id: 'billing', label: 'Billing', icon: '💰' },
    { id: 'inventory', label: 'Inventory', icon: '📦' },
    { id: 'lab-reports', label: 'Lab Reports', icon: '🧪' },
    { id: 'ambulance', label: 'Ambulance', icon: '🚑' },
    { id: 'insurance', label: 'Insurance', icon: '🛡️' },
    { id: 'logout', label: 'Logout', icon: '🚪' }
  ]

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h2 className="logo">
          {collapsed ? '🏥' : 'Hospital HMS'}
        </h2>
        <button 
          className="sidebar-toggle"
          onClick={onToggle}
          aria-label="Toggle sidebar"
        >
          {collapsed ? '☰' : '✕'}
        </button>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a 
                href={`#${item.id}`} 
                className={`nav-link`}
              >
                <span className="nav-icon">{item.icon}</span>
                {!collapsed && <span className="nav-label">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">👨‍⚕️</div>
          {!collapsed && (
            <div className="user-details">
              <p className="user-name">Dr. Smith</p>
              <p className="user-role">Administrator</p>
              <div className="user-quick-links">
                <a href="#profile" className="quick-link">Edit Profile</a>
                <a href="#settings" className="quick-link">Settings</a>
                <a href="#avatar" className="quick-link">Upload Avatar</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sidebar 