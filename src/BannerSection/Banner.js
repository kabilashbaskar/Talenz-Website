import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div>
    <center className='blue'>
           <h1>Source our <strong>Active IT Job Seekers</strong> </h1>
           <Link className='btn btn-danger' to = '/LastContent' >Hire Our Candidates</Link>

    </center>
   </div>
   
  )
}

export default Banner   
       
       
    