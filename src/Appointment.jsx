import React from 'react'
import Nav from './Nav'

export default function Appointment(param) {
  return (
    <div className='appointment'>
        <Nav/>
        <div className='container py-3'>
            <div>
                <h3>Make an Appointment</h3>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                     Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. 
                    Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                <div className='text-center'>
                <form method='POST'>
                    <div className='row'>
                        <div className='col-lg-4 i1'><input type='text' name='name' placeholder='your Name'></input></div>
                        <div className='col-lg-4 i1'><input type='email' name='email' placeholder='your email'></input></div>
                        <div className='col-lg-4 i1'> <input type='integer' name='contact' placeholder='your contact no'></input> </div>
                    </div>
                    <div className='row py-3'>
                        <div className='col-lg-12 i2'> 
                        <textarea placeholder='Message (optional)'></textarea>
                        </div>
                    </div>

                </form>
                <div className='text-center'>
                    <button className='btn btn-primary'> Make an appointment </button>
                </div>
                </div>
               

            </div>
        </div>

    </div>
  )
}
