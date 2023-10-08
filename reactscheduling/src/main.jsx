import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"; 
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='731653363711-er5dn3p05n6ht85hr51kikhkc480gadm.apps.googleusercontent.com'>
  <React.StrictMode>
   <BrowserRouter>
    <App /> 
  </BrowserRouter>
  </React.StrictMode>
  </GoogleOAuthProvider>,
)
