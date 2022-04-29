import React from 'react'
import Nav from './Nav'
import Jsondata from './Jsondata'


export default function About() {
  return (
  
    <div className='about'>
      <div>
      <Nav />
      </div>
    
      <div className='row py-3'>
        <h4><b>ABOUT</b></h4>
        <div className='col-lg-6 about11'>

        </div>
        <div className='col-lg-6 about111'>
          <div className='my-5 text-start mx-5'>
            <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
            <small>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus.
              Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi.
              Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</small>
          </div>
          <div className='d-flex'>
              <div className='mx-5' >
                <div className='py-2'><i class="bi bi-fingerprint"></i></div>
                <div className='py-4'> <i class="bi bi-gift"></i></div>
                <div className='py-2'>  <i class="bi bi-rss-fill"></i></div>
              </div>
              <div className=' text-start'>
                <div className='py-3'>
                  <h5>Lorem Ipsum</h5>
                  <small>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</small>
                </div>
                <div>
                  <h5>Lorem Ipsum</h5>
                  <small>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</small>
                </div>
                <div className='py-3'>
                  <h5>Lorem Ipsum</h5>
                  <small>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</small>
                </div>



              </div>
          </div>
        </div>
      </div>



    </div>
  )
}
