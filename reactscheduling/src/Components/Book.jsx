import React from 'react';
import {
  Container,
  Paper,
  Grid,
} from '@mui/material';

import CalendarView from './CalendarView';
import UserListComponent from './UserListComponent';

const RightSidebar = () => {
  // Right sidebar content here...
};

const ParentComponent = () => {
  return (
    <Container maxWidth="lg" style={{ marginLeft: '25%' }}>

    <div style={{ display: 'flex' }}>
      <div>
        <CalendarView />    
      </div>
      <UserListComponent/>
    </div>
  </Container>
  );
};

export default ParentComponent;
