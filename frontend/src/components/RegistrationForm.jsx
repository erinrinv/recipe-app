import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setError(''); // Reset error message
  try {
    const response = await axios.post('http://localhost:3001/api/users/register', formData);
    console.log('User registered:', response.data);
    alert('Registration successful!');
  } catch (error) {
    if (error.response && error.response.data) {
      // Server responded with a status code outside the 2xx range
      setError(error.response.data.message || 'Registration failed!');
      console.error('Registration failed:', error.response.data);
    } else if (error.request) {
      // Request was made but no response was received
      setError('No response from server. Please try again later.');
      console.error('No response from server:', error.request);
    } else {
      // Something else happened in setting up the request
      setError('An error occurred. Please try again.');
      console.error('Error:', error.message);
    }
  }
};
  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
}

export default RegistrationForm;