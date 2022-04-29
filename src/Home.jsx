import React from 'react'
import Header from './Header'
import './index.css'
import Footer from './Footer'

export default function Home() {
  return (
    <div className='home'>
        
        <Header/>
        <div className='section1'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 sec1'>
                        <h3>WELCOME TO MEDILAB</h3>
                        <p>We are team of talented designers making websites with Bootstrap</p>
                        <div className='my-3'>
                        <button className='btn btn-primary'>GET STARTED</button>
                        </div>
                      
                    </div>


                </div>
            </div>

        </div>
        <div className='section2'>
            <div className='container'>
            <div className='row '>
                <div className='col-lg-4  text-white box11'>
                    <div>
                    <h3>Why Choose Medilab?</h3>
                    <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos.
                         Autem tempore quibusdam vel necessitatibus 
                         optio ad corporis.</p>
                    <div className='text-center btn11'>
                        <button  >Learn More</button>
                    </div>
                    
                    </div>
                </div>
                <div className='col-lg-2 box12 text-center'>
                    <div className='py-4'>
                <i className="bi bi-receipt"></i>
                    <h4>Corporis voluptates sit</h4>
                    <p className='py-3'>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                </div>
                <div className='col-lg-2 box12'>
                    <div className='py-4'>
                    <i class="bi bi-box"></i>
                    <h4>Ullamco laboris ladore pan</h4>
                    <p className='py-3'>Excepteur sint occaecat cupidatat non proident,
                         sunt in culpa qui officia deserunt</p>
                  </div>
                </div>
                <div className='col-lg-2 box12'>
                <div className='py-4'>
                <i class="bi bi-images"></i>
                <h4>Labore consequatur</h4>
                <p className='py-3'>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
                </div>
                </div>

            </div>

        </div>
        

        <Footer/>
    </div>
  )
}
