import React, { useEffect, useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
const nav=useNavigate()
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Add your login logic here, e.g., send a request to your server
    console.log('Email:', email);
    console.log('Password:', password);

    const formData = {
      email, password
    }
    try {
      console.log('URL',import.meta.env.VITE_BASE_URL)
      //localStorage.setItem('user details')
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, formData);
      console.log('Login successful:', response.data);
      localStorage.setItem('UserDetails',JSON.stringify(response))
      nav('/googlelogin')
    } catch (error) {
      toast.error('Invalid details')
      console.error('Registration error:', error);
    }
  };
 


  return (
    <>
      <div>
   
<Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4">Login</Typography>
        <form>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '10px' }}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
    </div>
    </>
  );
};

export default LoginForm;
