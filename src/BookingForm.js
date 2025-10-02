import React, { useState } from 'react'

const BookingForm = ({ availableTimes, dispatch }) => {
    const [ date, setDate ] = useState('')

    const handleDateChange = (e) => {
        const newDate = e.target.value
        setDate(newDate)
        dispatch({ type: 'Date_CHANGED', date: newDate })
    }

  return (
    <form>
      <label className="res-date">Choose date</label>
      <input value={date} type="date" onChange={handleDateChange} />

      <label className="res-time">Choose time</label>
      <select id="res-time ">
        {availableTimes.map(time => (
            <option key={time}>{time}</option>
        ))}
      </select>
      <label className="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      <label className="occasion">Occasion</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  )
}

export default BookingForm