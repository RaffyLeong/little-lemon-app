import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/">Order Online</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/">Login</Link></li>

        </ul>
    </nav>
  )
}

export default Nav