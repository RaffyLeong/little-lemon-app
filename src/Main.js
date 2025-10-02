import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import HomePage from './HomePage'
import Testimonials from './Testimonials'
import BookingPage from './BookingPage'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/menu" element={<div>Menu Page Coming Soon</div>} />
        <Route path="/order-online" element={<div>Order Online Coming Soon</div>} />
        <Route path="/login" element={<div>Login Coming Soon</div>} />
      </Routes>

    </main>
  )
}

export default Main