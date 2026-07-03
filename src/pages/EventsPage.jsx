import React from 'react'
import Header from '../components/Layout/Header'
import EventCard from '../components/Route/Events/EventCard'
import Events from "../components/Route/Events/Events.jsx";

const EventsPage = () => {
  return (
    <div>
        <Header activeHeading={4}/>
        {/* <EventCard active={true}/>
        <EventCard active={true}/> */}
        <Events/>
    </div>
  )
}

export default EventsPage