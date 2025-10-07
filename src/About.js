import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <div className="about-hero">
        <div className="about-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Little Lemon Chicago is a family owned Mediterranean restaurant located in the heart of the city.
            The restaurant is run by brothers Mario and Adrian, who have always had a passion for cooking and serving delicious food.
            Growing up in a Mediterranean household, the brothers were exposed to traditional recipes from an early age,
            and they decided to bring those recipes to the masses with a modern twist. At Little Lemon, you can expect to find a menu full of classic dishes with a creative twist that makes them stand out from the rest.
            Whether you're looking for a quick lunch or a leisurely dinner,
            Little Lemon Chicago is the perfect place to indulge in a delicious meal in a cozy and welcoming atmosphere.</p>
        </div>
        <div className="about-image">
          <img src="/Mario-and-Adrian.jpg" alt='Mario and Adrian'className="image-front"/>
          <img src="/restaurant.jpg" alt='Mario and Adrian in the restaurant'className="image-back"/>
        </div>
      </div>
    </div>
  )
}

export default About