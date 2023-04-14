import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className='footerSection'>
      <div className='footerData'>
      <div className='footerLogo'>
        <img className='footer1' src="./Image/footer1.png" alt="" />
        {/* <img className='footer2' src="./Image/footer2.png" alt="" /> */}
        <h1 className='footerTitle'>O2C</h1>
      </div>
      <ul className='footerList'>
       <select className='footerSlct'>Product
         <option value="" key="">Product</option> 
         <option value="" key="">product1</option> 
        </select>
        <select className='footerSlct'>Industries
         <option value="" key="">Industries</option> 
         <option value="" key="">product1</option> 
        </select>
        <li className='linklist'>Resources</li>
        <li className='linklist'>About</li>
      </ul>
      <p className='footerDes'>
      Our coming together ensures that we can continue to provide the speed and quality of service needed to operate in today’s digital landscape.
      </p>
      <div className='footerIcons'>
      <i class="fa fa-facebook iconSpc" aria-hidden="true"></i>
      <i class="fa fa-twitter iconSpc" aria-hidden="true"></i>
      <i class="fa fa-linkedin iconSpc" aria-hidden="true"></i>
      <i class="fa fa-instagram iconSpc" aria-hidden="true"></i>
      </div>
      </div>
      <a className='footerLink' href="">Support@unilever.com</a>

    </div>
    </>
  )
}

export default Footer