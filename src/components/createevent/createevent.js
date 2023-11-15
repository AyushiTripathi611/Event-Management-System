import React, { useState } from "react";
import './createevent.css';
import { Link } from "react-router-dom";

function EventForm() {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    image: "",
    date: "",
    time: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleApproval = () => {
    // Save the event data to localStorage
    const events = JSON.parse(localStorage.getItem("events")) || [];
    events.push(eventData);
    localStorage.setItem("events", JSON.stringify(events));
  };

  return (
    <div>
      <div className="container">
        <div className="event-card">
        <h2>Create/Edit Event</h2>
        <input
        className="textboxes"
          type="text"
          name="title"
          placeholder="Event Title"
          value={eventData.title}
          onChange={handleInputChange}
        />
        <textarea
        className="textboxes"
          name="description"
          placeholder="Event Description"
          value={eventData.description}
          onChange={handleInputChange}
        />
        <input
        className="textboxes"
          type="date"
          name="date"
          placeholder="Event Date"
          value={eventData.date}
          onChange={handleInputChange}
        />
        <input
        className="textboxes"
          type="time"
          name="time"
          placeholder="Event Time"
          value={eventData.time}
          onChange={handleInputChange}
        />
        <Link to="/user"><button className="a-btn" onClick={handleApproval}>Get Approval</button></Link>
        </div>
      </div>
    </div>
  );
}

export default EventForm;
