import React, { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [unsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(() => {
    // Load form data from local storage when the component mounts
    const savedFormData = JSON.parse(localStorage.getItem("userData"));
    if (savedFormData) {
      setFormData(savedFormData);
    }

    // Check for unsaved changes before unloading the window
    const handleWindowClose = (event) => {
      if (unsavedChanges) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleWindowClose);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("beforeunload", handleWindowClose);
    };
  }, [unsavedChanges]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setUnsavedChanges(true); // Set unsavedChanges to true when form data changes
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);

    // Retrieve existing data from local storage
    const existingData = JSON.parse(localStorage.getItem("userData")) || [];

    // Ensure existingData is an array
    const dataArray = Array.isArray(existingData)
      ? existingData
      : [existingData];

    // Add new form data to existing data
    const newData = [...dataArray, formData];

    // Save updated data to local storage
    localStorage.setItem("userData", JSON.stringify(newData));
    console.log("Form data saved to local storage.");

    // Clear form data
    setFormData({
      name: "",
      email: "",
      address: "",
      phone: "",
    });

    setUnsavedChanges(false); // Reset unsavedChanges to false after saving
  };

  return (
    <div className="container">
      <h1>User Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            required
            rows="auto"
            cols="50"
          />
        </div>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
