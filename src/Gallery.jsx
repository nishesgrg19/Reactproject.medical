import React from 'react'
import Nav from './Nav'


export default function Gallery() {
  return (
    <div className='gallery '>
      <Nav/>
      <div className='container py-3'>
        <h4>Gallery</h4>
        <small>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
          Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
          suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</small>
      </div>
      <section className='img py-3'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='box3'>
              <img src='./images/gallery-1.jpg'></img>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='box3'>
              <img src='./images/gallery-2.jpg'></img>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='box3'>
              <img src='./images/gallery-3.jpg'></img>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='box3'>
              <img src='./images/gallery-4.jpg'></img>
            </div>
          </div>
     
     
         
        </div>
        <div className='row py-2'>
          <div className='col-lg-3'>
            <div className='box3'>
              <img src='./images/gallery-1.jpg' alt=''></img>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='box3'>
              <img src='./images/gallery-8.jpg' alt=''></img>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='box3'>
              <img src='./images/gallery-3.jpg' alt=''></img>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='box3'>
              <img src='./images/gallery-7.jpg' alt=''></img>
            </div>
          </div>
     
     
         
        </div>
      </section>

    </div>
  )
}
