import React, { useEffect, useState } from "react";
import "./UpdateEvent.css";

const UpdateEvent = () => {
  const [events, setEvents] = useState([]);
  const [editingEventId, setEditingEventId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    description: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/events");
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  const handleUpdateClick = (event) => {
    setEditingEventId(event.id);
    setFormData({
      name: event.name,
      location: event.location,
      price: event.price,
      description: event.description,
      image: null,
    });
    setImagePreview(event.image ? `http://localhost:5000${event.image}` : "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, image: file }));
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    const form = new FormData();
    form.append("name", formData.name);
    form.append("location", formData.location);
    form.append("price", formData.price);
    form.append("description", formData.description);
    if (formData.image) {
      form.append("image", formData.image);
    }

    try {
      const res = await fetch(`http://localhost:5000/api/events/${editingEventId}`, {
        method: "PUT",
        body: form,
      });

      if (res.ok) {
        alert("Event updated successfully!");
        setEditingEventId(null);
        setFormData({ name: "", location: "", price: "", description: "", image: null });
        setImagePreview("");
        fetchEvents();
      } else {
        alert("Update failed.");
      }
    } catch (err) {
      console.error("Error updating event:", err);
    }
  };

  return (
    <div className="update-container">
      {/* <h2 className="title">Update Event</h2> */}

      {editingEventId && (
        <div className="update-form-card">
          <h3>Edit Event</h3>
          <div className="event-form">
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Event Name" />
            <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Location" />
            <input type="number" name="price" value={formData.price} onChange={handleInputChange} placeholder="Price" />
            <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" />

            <input type="file" accept="image/*" onChange={handleImageChange} />
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" />
              </div>
            )}

            <div className="button-group">
              <button onClick={handleSave} className="save-btn">Save</button>
              <button onClick={() => setEditingEventId(null)} className="cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className="card-wrapper">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <div className="event-details">
              <h3>{event.name}</h3>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Price:</strong> ₹{event.price}</p>
              <p><strong>Description:</strong> {event.description}</p>
              <button className="card-update-btn" onClick={() => handleUpdateClick(event)}>
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateEvent;
