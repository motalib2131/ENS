import React, { useState } from 'react'
import { OurPeopleData } from './ourPeopleData'
import './OurPeople.css'

function OurPeople() {
    const [peopledata,setpeopleDate]=useState(OurPeopleData)
  return (
<>
<div className='OurPeopleSection'>
    <h1 className='OurPeopleHeading'>OUR BEST TEAM</h1>
    <h1 className='OurPeopleSubHeading'>OUR HARDWORKING <span className='chngeText'>PEOPLE</span></h1>
    <div className='cardSection'>
        {peopledata.map((item)=>{
            return(
                <div className='cardPeople'>
                    <img className='cardImg' src={item.img} alt="" />
                    <div className='cardData'>
                      <h4 className='cardHead'>{item.heading}</h4>
                      <p className='cardDes'>{item.description}</p>
                    </div>
                </div>
            )
        })}
    </div>
</div>
</>
    )
}

export default OurPeople