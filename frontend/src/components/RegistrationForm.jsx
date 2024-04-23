import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function RegistrationForm() {
  const navigate = useNavigate(); // Initialize the navigate function
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
    setError('');
    try {
      const response = await axios.post('http://localhost:5173/api/users/register', formData);
      console.log('User registered:', response.data);
      navigate('/login'); // Redirect to the login page after successful registration
    } catch (error) {
      setError(error.response.data.message || 'Registration failed!');
      console.error('Registration failed:', error.response.data);
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