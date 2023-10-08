import React, { useState } from 'react';
import { Container, Typography, Paper, Button, Grid,AppBar,Toolbar,IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginForm from './Components/LoginForm';
import RegistrationForm from './Components/RegistrationForm';
import HomePage from './Components/HomePage';
import { Routes, Route } from "react-router-dom"
import CalendarView from './Components/CalendarView';
import Book from './Components/Book'
import Groups2Icon from '@mui/icons-material/Groups2';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ReactScheduling from './Components/ReactScheduling';
import MyCalendar from './Components/MyCalendar';
import { GoogleLogin } from '@react-oauth/google';
import GoogleAuth from './Components/GoogleAuth';
import VerifyOtp from './Components/VerifyOtp'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  

  return (
    <>
     <Header/>
     <ToastContainer />
     <Container style={{ marginTop: '64px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<LoginForm />} />
          <Route path="/signup" element={<RegistrationForm />} />
          <Route path='/book' element={<Book />} />
          <Route path='/schedulemeet' element={<ReactScheduling/>}/>
          <Route path='/calendar' element={<MyCalendar/>}/>
          <Route path='/googlelogin' element={<GoogleAuth/>}/>
          <Route path='/verifyotp' element={<VerifyOtp/>}/>
        </Routes>
      </Container>
      {/* <Footer /> */}

  </>
  );
}

export default App;
