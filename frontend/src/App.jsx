import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventPage from './EventPage'

function App() {
  return (
    <div>
      <EventPage eventId={1}/>
    </div>
  )
}

export default App
