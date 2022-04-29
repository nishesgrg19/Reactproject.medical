import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer1'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 text-start'>
              <h4>Medilab</h4>
              <small>A108 Adam Street
                New York, NY 535022
                United States</small>
              <p className='text-muted my-2'>
                <span className='text-dark'>Phone :</span>
                +1 5589 55488 55
              </p>






              <p className='text-muted'>
                <span className='text-dark'>E-mail:</span>
                info@example.com
              </p>
            </div>
            <div className='col-lg-2'>
              <h4>Useful Links</h4>
              <div className='text-start'>
                <ul>
                  <li>  Home</li>
                  <li> About us</li>
                  <li> Services</li>
                  <li>Terms of service</li>
                  <li> Privacy policy</li>

                </ul>
              </div>
            </div>

            <div className='col-lg-2'>
              <h4>Our Services</h4>
              <div className='text-start'>
                <ul>
                  <li> Web Design</li>
                  <li>Web Development</li>
                  <li> Product Management</li>
                  <li> Marketing</li>
                  <li>Graphic Design</li>
                </ul>n 
              </div>
            </div>
            <div className='col-lg-5 text-start'>
              <h4>Join Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <div className='fotend'>
                <button className='btn btn-primary'>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer2'>
        <div className='container'>
          <div className='row py-4'>
            <div className='col-lg-6 text-start' >
              <small> © Copyright <strong>Medilab</strong>. All Rights Reserved<br/>
                Designed by <span className='foot2'>BootstrapMade</span></small>
            </div>
            <div className='col-lg-6 '>
            <i class="bi bi-facebook"></i>
            <span className='px-2'>  <i class="bi bi-twitter"></i></span>
          
            <i class="bi bi-instagram"></i>
            <span className='px-2'> <i class="bi bi-linkedin"></i></span>
           
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}
