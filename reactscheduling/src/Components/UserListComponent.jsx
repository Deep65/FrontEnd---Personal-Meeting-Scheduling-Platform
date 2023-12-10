import React from 'react';
import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const styles = {
  container: {
    width: '80%', // Set the desired width
    margin: '0 auto', // Center horizontally
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  button: {
    marginRight: '10px',
  },
};

function UserListComponent() {

    const navigate = useNavigate()
  // Sample user data
  const users = [
    { id: 1, name: 'Deep Gandhi' },
    { id: 2, name: 'Titus Varghase' },
    { id: 3, name: 'Jay Parikh' },
    // Add more users as needed
  ];

  const schedule=()=>{
    nav('/schedulemeet')
  }
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <Button variant="contained" color="primary" style={styles.button} onClick={()=> navigate('/calendar')}>
            View Calendar
          </Button>
         
        </div>
        <NotificationsIcon />
      </div>

      <Table>
        <TableHead>
          <TableRow>
           
            <TableCell>Name</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              
              <TableCell>{user.name}</TableCell>
              <TableCell><Typography style={{cursor:'pointer',color:'blue'}}onClick={()=> navigate('/schedulemeet')}>Schedule</Typography></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default UserListComponent;
