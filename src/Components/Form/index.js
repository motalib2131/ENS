import React from 'react'
import Recaptcha from '../Recaptcha'
import './Form.css'

function Form() {
  return (
    <>
    <div className='formSection'>
        <h1 className='formHead'>Contact Us</h1>
        <div className='formData'>
            <div className='formNameData'>
                <input className='firstName' type="text" placeholder='First Name' />
                <input className='firstName' type="text" placeholder='Last Name' />
            </div>
            <input className='emailData' type="email" placeholder='Enter Email' />
            <div className='formNameData'>
                <input className='firstName' type="text" placeholder='First Name' />
                <input className='firstName' type="text" placeholder='Last Name' />
            </div>
            <textarea className='textarea' cols="40" rows="4" placeholder='Message'></textarea>
            <Recaptcha/>
            {/* <div className="g-recaptcha" data-sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"></div><br/> */}
            <button className='formBttn'>Submit</button>
        </div>
    </div>
    </>
  )
}

export default Form