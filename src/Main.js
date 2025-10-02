import React, { useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import HomePage from './HomePage'
import Testimonials from './Testimonials'
import BookingPage from './BookingPage'

const initializeTimes = () => [
  '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
]

const updateTimes = (state, action) => {

  return initializeTimes();
}

const Main = () => {
  const [ availableTimes, dispatch ] = useReducer(updateTimes, [], initializeTimes)

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}/>} />
        <Route path="/menu" element={<div>Menu Page Coming Soon</div>} />
        <Route path="/order-online" element={<div>Order Online Coming Soon</div>} />
        <Route path="/login" element={<div>Login Coming Soon</div>} />
      </Routes>

    </main>
  )
}

export default Main