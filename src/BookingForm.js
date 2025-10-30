import React, { useState } from 'react'

// availableTimes = list of available time slots
// dispatch = function to update available times when date changes
// submitForm = function to call when form is submitted
const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [ surname, setSurName ] = useState('')  // store username input
    const [ lastName, setLastName ] = useState('')  // store last Name input
    const [ date, setDate ] = useState('')  // store selected date
    const [ time, setTime ] = useState('')  // store selected time
    const [ guests, setGuests ] = useState(1)  // store number of guests
    const [ occasion, setOccasion ] = useState('Birthday')  // store occasion


    const handleDateChange = (e) => {
        const newDate = e.target.value  // get the date user selected from calendar
        setDate(newDate)  // save this date in form state
        dispatch({ type: 'DATE_CHANGED', date: newDate }) // tell Main.js to update times for this date
    }

    const handleSubmit = (e) => {
      e.preventDefault() // prevent form from refreshing the page

      // // Create an object with all the form data
      const formData = {
        surname: surname,
        lastName: lastName,
        date: date,
        time: time,
        guests: guests,
        occasion: occasion
      }

      // If parent component provided submitForm function, call it with the form data
      if (submitForm) {
        submitForm(formData)
      }
      console.log('Form submitted!')
    }


    // check if all form fields are valid before allowing submission
    const isFormValid = surname && lastName && date && time && guests >= 1 && guests <= 10 && occasion


  return (
    <form onSubmit={handleSubmit}> {/* When form submits, call handleSubmit */}
      {/* Surname */}
      <label htmlFor="surname" className="res-label">Surname</label>
      <input value={surname}
      id="Surname"
      type="text"
      onChange={(e) => setSurName(e.target.value)} // Update surname when user types
      className='form-input'
      required/>

      {/* Last Name */}
      <label htmlFor="date" className="res-label">Last Name</label>
      <input value={lastName}
      id="lastname"
      type="text"
      onChange={(e) => setLastName(e.target.value)} // Update last name when user types
      className="form-input"
      required/>

      {/* Choose date */}
      <label htmlFor="date" className="res-date">Choose Date</label>
      <input value={date}
      id="date"
      type="date"
      onChange={handleDateChange}  // call handleDateChange when data changeds
      min={new Date().toISOString().split('T')[0]}  // dont allow past dates
      required/>

      {/* Choose Time */}
      <label htmlFor="time" className="res-time">Choose Time</label>
      <select id="time" value={time} onChange={(e) => setTime(e.target.value)} required>
            <option value="">Select a time</option> {/* Empty default option */}
        {availableTimes.map(time => (  // Loop through available times and create options
            <option key={time} value={time}>{time}</option>
        ))}
      </select>

      {/* Choose Guests */}
      <label htmlFor="guests" className="guests">Number of Guests</label>
      <input type="number"
      value={guests}
      onChange={(e) => setGuests(e.target.value)}  // update guests count
      placeholder="1"
      min="1"
      max="10"
      id="guests"
      required/>

      {/* Choose Occasion */}
      <label htmlFor="occasion" className="occasion">Occasion</label>
      <select id="occasion"
      value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      {/* Submit Button */}
      <input type="submit" value="Book Now" aria-label="On Click" disabled={!isFormValid}/>
    </form>
  )
}

export default BookingForm