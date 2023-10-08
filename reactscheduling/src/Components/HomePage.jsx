import React,{useState} from 'react'
import { Container, Typography, Paper, Button, Grid } from '@mui/material';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm'

function HomePage() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
      setIsLogin(!isLogin);
    };
  
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',paddingLeft:'500px' }}>
      
      <Container maxWidth="sm" style={{ textAlign: 'center' }}>
        <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
              Welcome to Our Gateway Meeting Scheduling Service
            </Typography>
            <Typography variant="body1" paragraph>
              Effortlessly schedule and manage your meetings with ease.
            </Typography>
          {isLogin ? <LoginForm /> : <RegistrationForm />}
          <Grid container justifyContent="center">
            <Button onClick={toggleForm} color="primary">
              {isLogin ? 'Switch to Registration' : 'Switch to Login'}
            </Button>
          </Grid>
        </Paper>
      </Container>
    </div>
    </>
  )
}

export default HomePage