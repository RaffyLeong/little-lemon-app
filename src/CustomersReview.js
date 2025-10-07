import React from 'react'

const CustomersReview = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sam Lopez",
      username: "Sam7",
      comment: "Senioudy cannot stop thinking about the Turkish Mie n'Cheese!!",
      rating: 5
    },
    {
      id: 2,
      name: "John Green",
      username: "Johnny, hallway",
      comment: "We had such a great time celebrating my grandmothers birthday!",
      rating: 5
    },
    {
      id: 3,
      name: "Sonny Surr",
      username: "and, a",
      comment: "Such a chilled out atmosphere, love it!",
      rating: 5
    },
    {
      id: 4,
      name: "Ni Maria",
      username: "SnowBall",
      comment: "Beat Feta Salad in town. come again!",
      rating: 5
    }
  ]

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating)
  }

  return (
    <div className='customers-review'>
        <div className='review-header'>
            <h2>Customers Review</h2>
        </div>

        <div className='testimonials-grid'>
          {testimonials.map((testimonial) => (
          <div id={testimonial.id} className='testimonial-card'>
            <div className='rating'>
              {renderStars(testimonial.rating)}
            </div>
            <div className='customer-info'>
              <h3 className='customer-name'>{testimonial.name}</h3>
              <span className='customer-username'>{testimonial.usrname}</span>
            </div>
            <p className='customer-comment'>{testimonial.comment}</p>
          </div>

))}
        </div>

    </div>
  )
}

export default CustomersReview