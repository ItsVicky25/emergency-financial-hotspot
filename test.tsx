// src/pages/Profile.tsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile: React.FC = () => {
  const { currentUser } = useAuth();

  // State to store form data
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    idDocument: null as File | null
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'idDocument' && files) {
      setFormData({ ...formData, idDocument: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to server or sync with backend)
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h1>User Profile</h1>
      {currentUser ? (
        <div>
          <p>Welcome, {currentUser.email}!</p>
          {/* Add more user details here */}
        </div>
      ) : (
        <div>
          <p>Please log in to view your profile.</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Identification Document:</label>
              <input
                type="file"
                name="idDocument"
                accept=".pdf,.jpg,.png"
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
