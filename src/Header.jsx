import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='container py-2'>
      <nav className="navbar navbar-expand  bg-white">
        <div className="container-fluid">
          <Link className="navbar-brand title mx-5" to='/'>MEDILAB</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse header " id="navbarNav">
            <ul className="navbar-nav mx-auto nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/appointment">Appointment</Link>
              </li>
            
              <li className="nav-item">
                <Link className="nav-link " to='/contact'>Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link gallery2 " to='/gallery'>Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to='/employee'>Employee</Link>
              </li>
              <div className='mx-3 hbtn'>
                 <button className='btn btn-primary headbtn'>Make an appointment</button>
                 </div>

            </ul>
          </div>


        </div>
      </nav>


    </div>
  )
}
