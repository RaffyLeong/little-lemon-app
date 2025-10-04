import React, { useReducer } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import About from './About'
import HomePage from './HomePage'
import Testimonials from './Testimonials'
import BookingPage from './BookingPage'
import ConfirmedBooking from './ConfirmedBooking'
import { fetchAPI, submitAPI } from './api';


const initializeTimes = () => {
  const today = new Date()
 return fetchAPI(today)
}

const updateTimes = (state, action) => {
  if (action.type === 'DATE_CHANGED') {
    const selectedDate = new Date(action.date)
    return fetchAPI(selectedDate)
  }
  return state
}



const Main = () => {
  const [ availableTimes, dispatch ] = useReducer(updateTimes, [], initializeTimes)
  const navigate = useNavigate()

  const submitForm = (formData) => {
    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]')
    const updatedBookings = [...existingBookings, formData]
    localStorage.setItem('bookings', JSON.stringify(updatedBookings))

    if(submitAPI(formData)){
      navigate('/confirmed')
    } else {
      console.log('Form submited:', formData)
      navigate('/confirmed')
    }
  }



  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />

        <Route path="/reservations" element={
          <BookingPage
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
          />} />

        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/menu" element={<div>Menu Page Coming Soon</div>} />
        <Route path="/order-online" element={<div>Order Online Coming Soon</div>} />
        <Route path="/login" element={<div>Login Coming Soon</div>} />
      </Routes>

    </main>
  )
}

export default Main