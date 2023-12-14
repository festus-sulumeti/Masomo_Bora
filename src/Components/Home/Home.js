// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Home/Home.css';

const Dashboard = () => {
  // Simulated data, replace it with actual data fetching logic
  const childPerformanceData = {
    subjects: [
      { name: 'Mathematics', grade: 'A' },
      { name: 'English', grade: 'B' },
      { name: 'Kiswahili', grade: 'A-' },
      // Add more subjects as needed
    ],
    attendance: '95%', // Replace with actual attendance data
    behavior: 'Excellent', // Replace with actual behavior data
  };

  return (
    <div className="feature-item">
      <div className="container">
        <div className="dashboard-box">
          <h1 id="title">Parent Dashboard</h1>
          <div className="performance-summary">
            <h2>Child's Performance Summary</h2>
            <ul>
              {childPerformanceData.subjects.map((subject, index) => (
                <li key={index}>
                  <strong>{subject.name}:</strong> {subject.grade}
                </li>
              ))}
            </ul>
          </div>
          <div className="attendance-behavior">
            <p>
              <strong>Attendance:</strong> {childPerformanceData.attendance}
            </p>
            <p>
              <strong>Behavior:</strong> {childPerformanceData.behavior}
            </p>
          </div>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
