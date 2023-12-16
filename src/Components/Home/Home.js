// Home.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Outlet
import '../../Style/Home/Home.css';

const Home = () => {
  // Simulated data, replace it with actual data fetching logic
  const childPerformanceData = {
    subjects: [
      { name: 'Mathematics', grade: 'A' },
      { name: 'English', grade: 'B' },
      { name: 'Kiswahili', grade: 'A-' },
    ],
    attendance: '95%',
    behavior: 'Excellent',
  };

  return (
    <div className="feature-item">
      <div className="containering">
        <div className="sidebar">
          <ul>
            <li><Link to="/Home/ManageTeam">Manage Team</Link></li>
            <li><Link to="/Home/ContactsInformation">Contacts Information</Link></li>
            <li><Link to="/Home/InvoicesBalances">Invoices Balances</Link></li>
            <li><Link to="/Home/ProfileForm">Profile Form</Link></li>
            <li><Link to="/Home/Calendar">Calendar</Link></li>
          </ul>
        </div>
        <div className="dashboard-box">
          <div className="main-content">
            <h1 id="title">Admin dashboard</h1>
            <div className="performance-summary">
              <h2>s Performance Summary</h2>
              <ul>
                {childPerformanceData.subjects.map((subject, index) => (
                  <li key={index}>
                    <strong>{subject.name}:</strong> {subject.grade}
                  </li>
                ))}
              </ul>
            </div>
            <div className="attendance-behavior">
              <p><strong>Attendance:</strong> {childPerformanceData.attendance}</p>
              <p><strong>Behavior:</strong> {childPerformanceData.behavior}</p>
            </div>
            <Link to="/logout">Logout</Link>

            {/* Outlet to render nested routes */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
