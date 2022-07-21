import React from 'react'
import logo from '../Images/logo.png'
import './NavBar.css'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
        <span className='span'>
           <img className='img' src={logo}></img>
           <Link className='nav btn btn-danger' to = '/LastContent' >Hire Our Candidates</Link>
        </span>
    </div>
  )
}

export default NavBar
