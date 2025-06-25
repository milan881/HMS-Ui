import React, { useState } from 'react'
import './Dashboard.css'

const Dashboard = () => {
  // Simulated live data (replace with real API calls in production)
  const [liveData] = useState({
    patients: 1234,
    medicines: 456,
    staff: 89,
    doctors: 45,
    rooms: 120,
    vendors: 23,
    inventory: 320,
    labReports: 78,
    ambulance: 5,
    insurance: 210,
    availableBeds: 18,
    avgWaitTime: '22 min',
    patientSatisfaction: '92%',
    revenueTrends: '+8%',
    appointments: 34,
    billing: '$12,500',
    todaySales: [200, 400, 350, 500, 700, 650, 800], // Simulated sales data for the day
    review: 4.6
  })

  const dashboardTiles = [
    {
      id: 'patients',
      title: 'Patients',
      icon: '👥',
      count: liveData.patients,
      description: 'Total registered patients',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 'appointments',
      title: 'Appointments',
      icon: '📅',
      count: liveData.appointments,
      description: 'Upcoming appointments',
      gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)'
    },
    {
      id: 'billing',
      title: 'Billing',
      icon: '💰',
      count: liveData.billing,
      description: 'Total billing this month',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 'medicines',
      title: 'Medicines',
      icon: '💊',
      count: liveData.medicines,
      description: 'Available medicines',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 'staff',
      title: 'Staff',
      icon: '👨‍⚕️',
      count: liveData.staff,
      description: 'Hospital staff members',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 'doctors',
      title: 'Doctors',
      icon: '👩‍⚕️',
      count: liveData.doctors,
      description: 'Specialist doctors',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 'rooms',
      title: 'Rooms',
      icon: '🏥',
      count: liveData.rooms,
      description: 'Available rooms',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 'vendors',
      title: 'Vendors',
      icon: '🏪',
      count: liveData.vendors,
      description: 'Medical suppliers',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      id: 'inventory',
      title: 'Inventory',
      icon: '📦',
      count: liveData.inventory,
      description: 'Inventory items in stock',
      gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)'
    },
    {
      id: 'labReports',
      title: 'Lab Reports',
      icon: '🧪',
      count: liveData.labReports,
      description: 'Lab reports generated',
      gradient: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)'
    },
    {
      id: 'ambulance',
      title: 'Ambulance',
      icon: '🚑',
      count: liveData.ambulance,
      description: 'Ambulances available',
      gradient: 'linear-gradient(135deg, #ff5858 0%, #f09819 100%)'
    },
    {
      id: 'insurance',
      title: 'Insurance',
      icon: '🛡️',
      count: liveData.insurance,
      description: 'Active insurance policies',
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
    },
    // Present Day Sales tile with a simple graph
    {
      id: 'todaySales',
      title: 'Present Day Sales',
      icon: '📈',
      gradient: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
      customContent: (
        <div className="tile-graph">
          <svg width="80" height="32" viewBox="0 0 80 32">
            <polyline
              fill="none"
              stroke="#667eea"
              strokeWidth="3"
              points={liveData.todaySales ? liveData.todaySales.map((v, i) => `${i * 13},${32 - v / 30}`).join(' ') : ''}
            />
          </svg>
          <div className="tile-graph-label">₹{liveData.todaySales ? liveData.todaySales.reduce((a, b) => a + b, 0) : 0}</div>
        </div>
      ),
      description: "Today's sales (₹)"
    },
    // Review of the Hospital tile
    {
      id: 'review',
      title: 'Review of the Hospital',
      icon: '⭐',
      count: liveData.review,
      description: 'Average rating from patients',
      gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
      customContent: (
        <div className="tile-review">
          <span style={{ fontSize: '1.3rem', color: '#FFD700' }}>⭐⭐⭐⭐⭐</span>
          <div className="tile-review-label">Excellent</div>
        </div>
      )
    }
  ]

  const recentActivities = [
    { id: 1, activity: 'New patient John Doe registered', time: '2 minutes ago', type: 'patient' },
    { id: 2, activity: 'Medicine inventory updated', time: '15 minutes ago', type: 'medicine' },
    { id: 3, activity: 'Dr. Smith completed surgery', time: '1 hour ago', type: 'doctor' },
    { id: 4, activity: 'Room 101 cleaned and ready', time: '2 hours ago', type: 'room' },
    { id: 5, activity: 'New vendor contract signed', time: '3 hours ago', type: 'vendor' },
    { id: 6, activity: 'Lab report for patient Jane ready', time: '4 hours ago', type: 'lab' },
    { id: 7, activity: 'Ambulance dispatched to emergency', time: '5 hours ago', type: 'ambulance' },
    { id: 8, activity: 'Insurance claim processed', time: '6 hours ago', type: 'insurance' }
  ]

  const handleTileClick = (tileId) => {
    console.log(`Navigating to ${tileId} section`)
    // Handle navigation to specific sections
  }

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div className="tiles-section">
          <div className="tiles-grid">
            {dashboardTiles.map((tile) => (
              <div
                key={tile.id}
                className={`dashboard-tile${tile.id === 'todaySales' || tile.id === 'review' ? ' large-tile' : ''}`}
                onClick={() => handleTileClick(tile.id)}
                style={{ '--tile-gradient': tile.gradient }}
              >
                <div className="tile-icon">{tile.icon}</div>
                <div className="tile-content">
                  <h3 className="tile-title">{tile.title}</h3>
                  {tile.customContent ? (
                    tile.customContent
                  ) : (
                    <>
                      <div className="tile-count">{tile.count}</div>
                      <p className="tile-description">{tile.description}</p>
                    </>
                  )}
                </div>
                <div className="tile-overlay"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-sidebar">
          <div className="recent-activities">
            <h3>Recent Activities</h3>
            <div className="activities-list">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">
                    {activity.type === 'patient' && '👥'}
                    {activity.type === 'medicine' && '💊'}
                    {activity.type === 'doctor' && '👩‍⚕️'}
                    {activity.type === 'room' && '🏥'}
                    {activity.type === 'vendor' && '🏪'}
                    {activity.type === 'lab' && '🧪'}
                    {activity.type === 'ambulance' && '🚑'}
                    {activity.type === 'insurance' && '🛡️'}
                  </div>
                  <div className="activity-content">
                    <p className="activity-text">{activity.activity}</p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="quick-stats">
            <h3>Quick Stats</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">{liveData.availableBeds}</div>
                <div className="stat-label">Available Beds</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{liveData.avgWaitTime}</div>
                <div className="stat-label">Avg. Wait Time</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{liveData.patientSatisfaction}</div>
                <div className="stat-label">Patient Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{liveData.revenueTrends}</div>
                <div className="stat-label">Revenue Trends</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 