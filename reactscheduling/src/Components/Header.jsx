import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import Groups2Icon from '@mui/icons-material/Groups2';
import { useNavigate } from 'react-router-dom';
const appBarStyle = {
    backgroundColor: '#2196F3', // Change the background color
    boxShadow: 'none', // Remove the shadow
  };
  


  const centerItems = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    spaceBetween:'even'
  };

  
  function Header() {
    const nav=useNavigate()
    
  const logout=()=>{
    localStorage.clear()
    nav('/')
  }
    return (
      <AppBar position="fixed" style={appBarStyle}>
        <Toolbar style={centerItems}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Groups2Icon /> {/* Add a menu icon */}
          </IconButton>
          <Typography variant="h6" component="div">
            Meeting Scheduler
          </Typography>
          {localStorage.length === 0 && (<Typography variant="h6" component="div" style={{marginLeft:'80%',cursor:'pointer'}} onClick={logout} >
            Logout
          </Typography>)}

        </Toolbar>
      </AppBar>
    );
  }

export default Header;
