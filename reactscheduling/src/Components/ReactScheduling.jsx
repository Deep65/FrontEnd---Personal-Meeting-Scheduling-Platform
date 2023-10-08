import React from 'react'
import { ScheduleMeeting } from 'react-schedule-meeting';

function ReactScheduling() {
    const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
        return {
          id,
          startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
          endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0)),
        };
      });
  return (
    <div style={{marginLeft:'25%'}}>
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