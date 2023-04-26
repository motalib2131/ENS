import React from 'react'
import './ContactHead.css'

function ContactHead() {
  return (
    <>
    <div className='contactHeadSection'>
        <div className='contactHeadSubSection'>
          <div className='contactHeadSectionTxt'>
              <h4 className='contactHeadSectionTitle'>HOME <span><i class="fa fa-angle-double-right" aria-hidden="true"></i></span> CONTACT</h4>
              <h1 className='contactHeadSectionSubTitle'>Contact Us</h1>
          </div>
          <div className='contactHeadSectionImg'>
              <img className='contactImage' src="./Gif/email.gif" alt="" />
          </div>
        </div>
    </div>
    </>
  )
}

export default ContactHead