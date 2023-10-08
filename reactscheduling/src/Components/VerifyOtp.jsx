import React, { useState } from 'react';
import OTPInput, { ResendOTP } from "otp-input-react";
import { Button,Grid } from '@mui/material';
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


const VerifyOtp = ({ length = 6 }) => {
    const [OTP, setOTP] = useState("");
    const nav=useNavigate()
    const location=useLocation()

    const email=location?.state?.email
    console.log('emial',location,email)
  const handleOnChange = (otpValue) => {
    setOtp(otpValue);
  };

  const handleVerify = () => {
    // Handle OTP verification logic here
    const response=axios.post(`${import.meta.env.VITE_BASE_URL}/users/verifyUser`,{'email':email,'otp':OTP})
    .then((resp)=>{
       if(resp.status===200){
        nav('/')
        console.log('Verifying OTP:', OTP);
       }
    }).catch((error)=>{
        toast.error('Invalid Otp')
        console.log('error',error)
    })
   
  };
  const renderButton = buttonProps => {
    return <a {...buttonProps} onClick={()=>{console.log('jjjj')}} style={{cursor:'pointer',paddingLeft:'100px'}}>Resend</a>
  };
  const renderTime = remainingTime => {
    return <span style={{paddingLeft:'50px'}}>{remainingTime}</span>
  };

  return (
    <>
    <div style={{marginLeft:'200%'}}>
    <div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <OTPInput
        value={OTP}
        onChange={setOTP}
        autoFocus
        OTPLength={6}
        otpType="number"
        disabled={false}
        secure
      />
      <ResendOTP renderButton={renderButton} renderTime={renderTime} style={{ paddingTop: '10px' }} />
      <Button variant="contained" color="primary" onClick={handleVerify} style={{ marginTop: '20px' }}>
        <span>Verify OTP</span>
      </Button>
    </div>
    </div>
    </>
    
  );
};

export default VerifyOtp;
{/* <OTPInput
value={OTP}
onChange={setOTP}
autoFocus
OTPLength={6}
otpType="number"
disabled={false}
secure
/>
<ResendOTP renderButton={renderButton} renderTime={renderTime} style={{ paddingTop: '10px' }} />
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
<Button variant="contained" color="primary" onClick={handleVerify} style={{ marginTop: '20px' }}>
Verify OTP
</Button>
</div> */}