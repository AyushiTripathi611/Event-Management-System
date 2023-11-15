import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./userdashboard.css";

function UserDashboard() {
  const [approvalRequests, setApprovalRequests] = useState(
    JSON.parse(localStorage.getItem("events")) || []
  );

  useEffect(() => {
    // Fetch and set approval requests when the component mounts
    setApprovalRequests(JSON.parse(localStorage.getItem("events")) || []);
  }, []);

  return (
    <div>
      <div className="container">
      
        <Link to="/eventlist">
          Go to Events
        </Link>

        <div className="user">
        <h2 className="text-center">User Dashboard</h2>
        <div className="d-flex justify-content-between">
          <h3>Requested Approvals</h3>
        <Link to="/createevent">
          <button>Create Event</button>
        </Link>
        </div>
        </div>
        <div className="user">
        <div className="approval-requests">
          {approvalRequests.map((event, index) => (
            <div
              key={index}
              className={`event-card ${
                event.approved ? "approved" : event.denied ? "denied" : ""
              }`}
            >
              <p>Title: {event.title}</p>
              <p>Description: {event.description}</p>
            </div>
          ))}
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default UserDashboard;
