import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    profilePicture: null,
    termsAndConditions: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Perform form submission logic here (e.g., send data to server)
  //   console.log(formData); // Temporary: Log form data to console
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Perform form submission logic here (e.g., send data to server)
      const response = await fetch('your_api_endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        // Form submitted successfully, handle the response
        console.log('Form submitted successfully');
      } else {
        // Handle errors if any
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };
  

  return (
    <div className="signup-container">
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Profile Picture:</label>
          <input type="file" name="profilePicture" onChange={handleChange} accept="image/*" />
        </div>
        <div className="form-group">
          <input type="checkbox" name="termsAndConditions" checked={formData.termsAndConditions} onChange={handleChange} required />
          <label>I agree to the terms and conditions</label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
