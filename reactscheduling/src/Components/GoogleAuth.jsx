import React, { useEffect, useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function GoogleAuth() {
    const [signedIn,setSignedIn]=useState(false)
    const nav=useNavigate()
    const responseGoogle=(response)=>{
        console.log('responsessss',response)
        const {code}=response
   const userDetails =  JSON.parse(localStorage.getItem('UserDetails'))
   const userId = userDetails.data.data.id
        axios.post('http://localhost:3011/users/work',{code,id: userId}).then((resp)=>{
          console.log('responseData',resp.data.refresh_token)
          localStorage.setItem('refreshToken',resp.data.refresh_token)
          nav('/book')
        }).catch((error)=>{
          console.log('error',error)
        })
        
      }

      const responseError=(error)=>{
        console.log('error',error)
      }

    const login = useGoogleLogin({
        onSuccess: responseGoogle,
        flow: 'auth-code',
        onError:responseError,
        scope:'openid email profile https://www.googleapis.com/auth/calendar',
    });

    const handleSync=()=>{
      setSignedIn(true)
    }

    const handleCancel=()=>{
      nav('/book')
    }

    
    
  return (
    <div style={{marginLeft:'25%'}}>
      <h1>Do you want to sync your calendar with Google?</h1>
      <div className="button-container">
        <center>
        <button onClick={handleSync}>Yes</button>
        <button onClick={handleCancel}>No</button>
        </center>
      </div>
     {signedIn && (<>
      <center>
      <Button onClick={()=>login()} style={{paddingTop:'3%'}}>
      Sign it with Google
      </Button>
      </center>
    </>)}

    </div>
  )
}

export default GoogleAuth