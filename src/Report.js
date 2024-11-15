import React from 'react';
import './Report.css'; // Assuming you have some CSS for styling

function Report() {
  return (
    <div className="app">
      <div className="report-section">
        <div className="ai-report">AI GENERATED REPORT</div>
      </div>
      <div className="controls-section">
        <div className="tabs">
          <button>Emails</button>
          <button>resolved</button>
          <button>Grievance</button>
        </div>
        <button className="logout">Logout</button>
        <div className="reports">
          <div className="department-report">
            <span>Department Name:</span>
            <button>Generate ai report</button>
          </div>
          <div className="head-report">
            <span>Department Head:</span>
            <button>Generate ai report</button>
          </div>
        </div>
        <button className="email">Email</button>
      </div>
    </div>
  );
}

export default Report;
