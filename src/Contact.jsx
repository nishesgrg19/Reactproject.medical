import React, { useState } from 'react'
import Footer from './Footer'
import Nav from './Nav'

export default function Contact() {
  const[myobj,Setmyobj]=useState({'name':' ','email':' ','subject':' ','messg':' '})
  const[record,Setrecord]=useState([])
  
  const ok=(e)=>{
    var a=e.target.name
    var b=e.target.value
    Setmyobj({...myobj,[a]:b})


  }
  const handle=(s)=>
  {
    s.preventDefault()
    var n={...myobj,id:new Date().getTime().toString()}
    Setrecord([...record,n])
    Setmyobj({...myobj,'name':'','email':'','messg':''})
    

    
  }

  const value=record.map((data)=>
  <p>
    Name: {data.name} | Subject: {data.subject} | Message: {data.messg} | EMail: {data.email}
  </p>
   )
   function nok()
   {
     document.getElementById('formdata').style.display='block'
   }

   
  return (
    
    <div className='contact'>
    <Nav/>
      <div className='container py-3'>
      <div id='formdata'>
        {value}
      </div>
        <div className='text-center'>
          <h3>Contact</h3>
          <small>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
            Quia fugiat sit in iste officiis commodi quidem hic quas.</small>
        </div>
        <div className='row my-4'>
          <div className='col-lg-3'>
            <div className='d-flex'>
              <div className='left'>
                <div><i class="bi bi-geo-alt"></i></div>
                <div className='py-2'><i class="bi bi-envelope-fill"></i></div>
                <div><i class="bi bi-phone"></i></div>
              </div>
              <div className='right text-start mx-4'>
                <div>
                  <h6>Location</h6>
                  <small>A108 Adam Street, New York, NY 535022</small>
                </div>
                <div className='py-3'>
                  <h6>Email:</h6>
                  <small>info@example.com</small>
                </div>
                <div>
                  <h6>Call:</h6>
                  <small>+1 5589 55488 55s</small>
                </div>

              </div>
            </div>
          </div>
          <div className='col-lg-9'>
            <form onSubmit={handle}>
              <span className='name mx-3'>
                NAME: <input type='text' name='name' placeholder='Yourname' onChange={ok}  value={myobj.name} key={record.id} />
              </span>
              <span className='email mx-2'>
                E-MAIL: <input name='email' type='email'  onChange={ok} value={myobj.email} key={record.id}/>
              </span>

              <div className='subject my-2'>
               Subject: <input type='text' name='subject' placeholder='Your subject' onChange={ok} value={myobj.subject} key={record.id}/>
              </div>
              <div className='messg'>
               Message: <textarea name='messg' typeof='text' placeholder='Message' onChange={ok} value={myobj.messg} key={record.id}></textarea>
              </div>
              <div className='text-center py-3 btn'>
                <button className='btn btn-primary' type='submit' onClick={nok}>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    

    </div>
    
  )
}
