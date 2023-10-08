import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    userName: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const nav = useNavigate();

  const onRegister = async () => {
    try {
      console.log('URL',import.meta.env.VITE_BASE_URL)
      //localStorage.setItem('user details')
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, formData);
      console.log('Registration successful:', response.data);
      nav('/verifyotp',{ state:{email:response?.data?.userData?.email}});  
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4">Register</Typography>
        <form>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            label="User Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <TextField
            label="Number"
            variant="outlined"
            fullWidth
            margin="normal"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <Button
            type="button" // Change to "button" to prevent form submission
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '10px' }}
            onClick={onRegister}
          >
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;
