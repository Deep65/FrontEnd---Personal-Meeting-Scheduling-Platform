import { Button } from '@mui/material';
import React from 'react'
import { ScheduleMeeting } from 'react-schedule-meeting';
import { useNavigate } from 'react-router-dom';

function ReactScheduling() {
    const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
        return {
          id,
          startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
          endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0)),
        };
      });
      const nav=useNavigate()
  return (
    <div style={{marginLeft:'25%'}}>
      <Button onClick={()=>{nav('/book')}}>Back</Button>
         <ScheduleMeeting
    borderRadius={10}
    primaryColor="#3f5b85"
    eventDurationInMinutes={30}
    availableTimeslots={availableTimeslots}
    onStartTimeSelect={console.log}
  />
    </div>
   
  )
}

export default ReactScheduling