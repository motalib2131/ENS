import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { CgMenu, CgClose } from "react-icons/cg";


function Header() {

  const [link, setlink] = useState(true)

  return (
    <div className='header_container'>
      <div className='header_content_main'>

        <div className='logo_container'>
        <NavLink to='/'> <div className='unilever_container'>
            <img src="./Image/unilever.png" alt='' className='unilever_logo' />
          </div>
          </NavLink>
          <div className='microsoft_container'>
            <img src="./Image/o2c.png" alt='' className='microsoft_logo' />
            <h5 className='header_order'>Order to cash</h5>
          </div>
        </div>

        <ul className={link ? 'header_ul' : 'active_header_ul'}  >
          {/* {/ <ul className='header_ul'  > /} */}
          <li className='header_content'>
            <NavLink to='/product' className={link ? 'header_link' : 'active_header_link'}>
                          Product
            </NavLink>
          </li>
          <li className='header_content'>
            <NavLink to='/industries' className={link ? 'header_link' : 'active_header_link'} >
              Industries
            </NavLink>
          </li>
          <li className='header_content'>
            <NavLink to='/resources' className={link ? 'header_link' : 'active_header_link'} >
              Resources
            </NavLink>
          </li>
          <li className='header_content'>
            <NavLink to='/about' className={link ? 'header_link' : 'active_header_link'} >
              About
            </NavLink>
          </li>
          <div className='logIn_container'>
              <div className='header_login header_content'>
                <NavLink to='/authentication' className={link ? 'header_link' : 'active_header_link'} >
                  Log In
                </NavLink>
              </div>
              <div className='header_get_container'>
                <button to='/getstarted' className='header_get_btn'>Get Started</button>
              </div>
          </div>
        </ul>
     <CgMenu name='menu-outline' className='menu_icons' onClick={() => setlink(!link)} /> 
        {/* <CgClose name='close-menu-outline' className='menu_icons' onClick={() => setlink(true)} /> */}
      </div>
    </div>
  )
}

export default Header


