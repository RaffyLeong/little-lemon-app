import React, { useState } from 'react'

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
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


  return (
    <form onSubmit={handleSubmit}>
      {/* Choose date */}
      <label className="res-date">Choose date</label>
      <input value={date} type="date" onChange={handleDateChange} required/>

      {/* Choose Time */}
      <label className="res-time">Choose time</label>
      <select value={time} onChange={(e) => setTime(e.target.value)} required>
            <option value="">Select a time</option>
        {availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
        ))}
      </select>

      {/* Choose Guests */}
      <label className="guests">Number of guests</label>
      <input type="number"
      value={guests}
      onChange={(e) => setGuests(e.target.value)}
      placeholder="1"
      min="1"
      max="10"
      id="guests"
      required/>

      {/* Choose Occasion */}
      <label className="occasion">Occasion</label>
      <select id="occasion"
      value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      {/* Submit Button */}
      <input type="submit" value="Book Now"/>
    </form>
  )
}

export default BookingForm