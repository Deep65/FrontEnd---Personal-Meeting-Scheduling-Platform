import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useEffect } from 'react'
import axios from 'axios'
const events = [
  { title: 'Meeting', start: new Date() }
]

function renderEventContent(eventInfo) {

   


    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

function MyCalendar() {

  useEffect(()=>{
    console.log("hiiii")
    const refreshToken = localStorage.getItem('refreshToken')
    axios.post('http://localhost:3011/users/getEventList',{refreshToken}).then((resp)=>{
          console.log('responseData',resp.data)
        }).catch((error)=>{
          console.log('error',error)
        })
  },[])

  return (
    <div>
    <h1>List Events</h1>
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView='dayGridMonth'
      weekends={false}
      events={events}
      eventContent={renderEventContent}
    />
  </div>
  )
}

export default MyCalendar