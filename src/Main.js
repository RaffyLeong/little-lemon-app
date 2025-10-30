import React, { useReducer } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import About from './About'
import HomePage from './HomePage'
import Testimonials from './Testimonials'
import BookingPage from './BookingPage'
import ConfirmedBooking from './ConfirmedBooking'
import { fetchAPI, submitAPI } from './api';


const initializeTimes = () => {
  const today = new Date() // Get today date
 return fetchAPI(today) // ask the api what time are available today
}

const updateTimes = (state, action) => {
  if (action.type === 'DATE_CHANGED') { // if user pick A new date
    const selectedDate = new Date(action.date) // convert the chosen date to a date object
    return fetchAPI(selectedDate)
  }
  return state  // otherwise keep current times
}



const Main = () => {
  const [ availableTimes, dispatch ] = useReducer(updateTimes, [], initializeTimes) // Set up a system to manage available booking times
  const navigate = useNavigate() // Get a function called navigate that lets us move users to different pages in the application

  const submitForm = (formData) => {
    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]') // check if there are any existing booking saved in the browser
    const updatedBookings = [...existingBookings, formData] // take all the old bookings, and Add the new booking to the end
    localStorage.setItem('bookings', JSON.stringify(updatedBookings)) // save all the update list of booking back to the browser storage

    if(submitAPI(formData)){  // try to send the booking to the restaurant's system
      navigate('/confirmed')  // whatever it work or fail , it display the confirmation page to the user
    } else {
      console.log('Form submited:', formData) // print the booking detail to the console
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

      </Routes>

    </main>
  )
}

export default Main