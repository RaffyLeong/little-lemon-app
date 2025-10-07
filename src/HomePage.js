import React from 'react'
import CustomersReview from './CustomersReview'
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div>
        {/* Hero */}
        <section className='hero'>
          <div className='hero-text'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>Reserve a Table</button>
          </div>
          <div className='hero-image'>
            <img src='/hero-image.jpg' alt='Restaurant interior'/>
          </div>
        </section>


        {/* Specials */}
        <section className='specials'>
          <div className='specials-header'>
            <h2>This Weeks Specials! </h2>
            <button>Online Menu</button>
          </div>

          <div className='special-cards'>
            <div className='card'>
              <img src="/geek-salad.jpg" alt='Greek Salad'/>
              <h2>Greek Salad</h2>
              <span>$12.00</span>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</p>
              <Link to="/reservations">
              <button src="/reservations">Order a delivery</button>
              </Link>
            </div>

            <div className='card'>
              <img src="/bruchetta.jpg" alt='Bruchetta'/>
              <h2>Bruchetta</h2>
              <span>$5.99</span>
              <p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
              <Link to="/reservations">
              <button src="/reservations">Order a delivery</button>
              </Link>
            </div>

            <div className='card'>
              <img src="/lemon-dessert.jpg" alt='Lemon Dessert'/>
              <h2>Lemon Dessert</h2>
              <span>$5.00</span>
              <p>This comes straight from grandma's recipe book, every last ingredient has been source and is as authentic as can be imagined</p>
              <Link to="/reservations">
              <button src="/reservations">Order a delivery</button>
              </Link>
            </div>
          </div>
          <CustomersReview/>

        </section>
    </div>
  )
}

export default HomePage