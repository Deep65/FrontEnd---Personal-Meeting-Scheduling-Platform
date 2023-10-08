import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const footerStyle = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: '#f5f5f5',
  padding: '20px',
  textAlign: 'center',
};

function Footer() {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ marginBottom: '100px' }}>
        {/* Your content here */}
      </div>
      <Paper elevation={3} style={footerStyle}>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Meeting Scheduler
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <Link href="/privacy-policy" color="inherit">
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link href="/terms-of-service" color="inherit">
            Terms of Service
          </Link>
        </Typography>
      </Paper>
    </div>
  );
}

export default Footer;
