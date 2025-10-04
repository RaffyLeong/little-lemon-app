import React from "react";
import BookingForm from './BookingForm'


const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <div className="booking-page">
      <h1>Reserve Your Table</h1>
      <p>Experience the taste of Mediterranean at Little Lemon</p>

    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />

    <div className="booking-info">
        <h3>Need help?</h3>
        <span>Call us: (555) 123-4567</span>
    </div>
    </div>
  );
};

export default BookingPage;
