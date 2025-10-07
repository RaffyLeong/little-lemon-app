import React, { useState } from 'react'

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [ surname, setSurName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    
    const [ date, setDate ] = useState('')
    const [ time, setTime ] = useState('')
    const [ guests, setGuests ] = useState(1)
    const [ occasion, setOccasion ] = useState('Birthday')


    const handleDateChange = (e) => {
        const newDate = e.target.value
        setDate(newDate)
        dispatch({ type: 'DATE_CHANGED', date: newDate })
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      const formData = {
        surname: surname,
        lastName: lastName,
        date: date,
        time: time,
        guests: guests,
        occasion: occasion
      }

      if (submitForm) {
        submitForm(formData)
      }
      console.log('Form submitted!')
    }

    const isFormValid = surname && lastName && date && time && guests >= 1 && guests <= 10 && occasion


  return (
    <form onSubmit={handleSubmit}>
      {/* Surname */}
      <label htmlFor="surname" className="res-label">Surname</label>
      <input value={surname}
      id="Surname"
      type="text"
      onChange={(e) => setSurName(e.target.value)}
      className='form-input'
      required/>

      {/* Last Name */}
      <label htmlFor="date" className="res-label">Last Name</label>
      <input value={lastName}
      id="lastname"
      type="text"
      onChange={(e) => setLastName(e.target.value)}
      className="form-input"
      required/>

      {/* Choose date */}
      <label htmlFor="date" className="res-date">Choose Date</label>
      <input value={date}
      id="date"
      type="date"
      onChange={handleDateChange}
      min={new Date().toISOString().split('T')[0]}
      required/>

      {/* Choose Time */}
      <label htmlFor="time" className="res-time">Choose Time</label>
      <select id="time" value={time} onChange={(e) => setTime(e.target.value)} required>
            <option value="">Select a time</option>
        {availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
        ))}
      </select>

      {/* Choose Guests */}
      <label htmlFor="guests" className="guests">Number of Guests</label>
      <input type="number"
      value={guests}
      onChange={(e) => setGuests(e.target.value)}
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