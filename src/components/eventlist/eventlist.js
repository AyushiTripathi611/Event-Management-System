import React from "react";
import "./eventlist.css";

function EventList() {
  const approvedEvents = JSON.parse(localStorage.getItem("approvedEvents")) || [];

  return (
    <div>
      <div className="container">
        <div className="back">
        <h2 className="text-center">Upcoming Events</h2>
        </div>
        <div className="back">
        {approvedEvents.map((event, index) => (
          <div key={index}>
            <div className="event-card">
              <p>Title: {event.title}</p>
              <p>Description: {event.description}</p>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
            </div>
            {/* Render other event details here */}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default EventList;
