import React from 'react'
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  return (
    <div className="confirmed-booking">
      <div className="confirmation-container">
        <div className="confirmation-icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
              fill="#495E57"
            />
          </svg>
        </div>

        <h1>Booking Confirmed!</h1>
        <div className="confirmation-message">
          <p>Your reservation has been successfully submitted.</p>
          <p>We look forward to serving you at Little Lemon!</p>
        </div>

        <div className="confirmation-actions">
          <Link to="/">
          <button className="btn-primary">Return to Home</button>
          </Link>
          <Link to="/reservations">
          <button className="btn-secondary">
            Make Another Reservation
          </button>
          </Link>
        </div>


      </div>
    </div>
  )
}

export default ConfirmedBooking