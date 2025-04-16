import React, { useState } from "react";
import "./AdminDashboard.css";

const AddEvent = ({ onEventAdded }) => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    price: "",
    description: "",
    image: null,
    category: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("location", form.location);
    formData.append("price", form.price);
    formData.append("description", form.description);
    formData.append("image", form.image);
    formData.append("category", form.category);

    try {
      const res = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("AddEvent response:", data);

      if (res.ok) {
        alert("✅ Event added successfully!");
        setForm({
          name: "",
          location: "",
          price: "",
          description: "",
          image: null,
          category: "",
        });
        setImagePreview(null);
        if (onEventAdded) onEventAdded(); // optional callback
      } else {
        alert(data.message || "❌ Failed to add event.");
      }
    } catch (err) {
      console.error("Add event error:", err);
      alert("⚠️ Server error occurred.");
    }
  };

  return (
    <div className="dashboard-content">
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Event Name"
          required
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          required
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          type="number"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Wedding">Wedding</option>
          <option value="party">Party</option>
          <option value="seminar">Seminar</option>
          <option value="meetup">Meetup</option>
        </select>

        <div className="image-upload">
          <label>Event Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" />
          </div>
        )}

        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
