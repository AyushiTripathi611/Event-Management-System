import React, { useState } from "react";
import "./admindashboard.css";
import { Link } from "react-router-dom";
function AdminDashboard() {
  const [pendingEvents, setPendingEvents] = useState(
    JSON.parse(localStorage.getItem("events")) || []
  );
  const [approvedEvents, setApprovedEvents] = useState(
    JSON.parse(localStorage.getItem("approvedEvents")) || []
  );
  const [deniedEvents, setDeniedEvents] = useState(
    JSON.parse(localStorage.getItem("deniedEvents")) || []
  );

  const handleApproval = (eventData) => {
    const updatedPendingEvents = pendingEvents.filter(
      (event) => event !== eventData
    );

    setPendingEvents(updatedPendingEvents);
    localStorage.setItem("events", JSON.stringify(updatedPendingEvents));

    eventData.approved = true;

    const updatedApprovedEvents = [...approvedEvents, eventData];
    setApprovedEvents(updatedApprovedEvents);
    localStorage.setItem(
      "approvedEvents",
      JSON.stringify(updatedApprovedEvents)
    );
  };

  const handleDeny = (eventData) => {
    const updatedPendingEvents = pendingEvents.filter(
      (event) => event !== eventData
    );

    setPendingEvents(updatedPendingEvents);
    localStorage.setItem("events", JSON.stringify(updatedPendingEvents));

    eventData.denied = true;

    const updatedDeniedEvents = [...deniedEvents, eventData];
    setDeniedEvents(updatedDeniedEvents);
    localStorage.setItem("deniedEvents", JSON.stringify(updatedDeniedEvents));
  };

  const handleDelete = (eventData) => {
    const updatedPendingEvents = pendingEvents.filter(
      (event) => event !== eventData
    );

    setPendingEvents(updatedPendingEvents);
    localStorage.setItem("events", JSON.stringify(updatedPendingEvents));

    const updatedApprovedEvents = approvedEvents.filter(
      (event) => event !== eventData
    );

    setApprovedEvents(updatedApprovedEvents);
    localStorage.setItem("approvedEvents", JSON.stringify(updatedApprovedEvents));

    const updatedDeniedEvents = deniedEvents.filter(
      (event) => event !== eventData
    );

    setDeniedEvents(updatedDeniedEvents);
    localStorage.setItem("deniedEvents", JSON.stringify(updatedDeniedEvents));
  };

  return (
    <div>
      <div className="container">
      <Link to="/eventlist">
          Go to Events
        </Link>
        <div className="admin">
        <h2 className="text-center">Admin Dashboard</h2>
        </div>
        <div className="admin">
        <div id="flex">
          <div className="width text-center">
            <h3>Pending Event Approvals</h3>
            {pendingEvents.map((event, index) => (
              <div key={index} className="event-card">
                <p>Title: {event.title}</p>
                <p>Description: {event.description}</p>
                <button onClick={() => handleApproval(event)}>Approve</button>
                <button onClick={() => handleDeny(event)}>Deny</button>
              </div>
            ))}
          </div>

          <div className="width text-center">
            <h3>Approved Events</h3>
            {approvedEvents.map((event, index) => (
              <div key={index} className="event-card">
                <p>Title: {event.title}</p>
                <p>Description: {event.description}</p>
                <button onClick={() => handleDelete(event)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
