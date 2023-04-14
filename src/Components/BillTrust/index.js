import React from 'react'
import './BillTrust.css'

function BillTrust() {
  return (
    <>
    <div className='billTrustSection'>
        <div className='billTrustLeft'>
           <h5 className='billTrustSubTitle'>Global Growth | Local Focus</h5>
           <h1 className='billTrustTitle'>Order To Cash Has Joined <span className='chngeText'>BillTrust</span></h1>
           <p className='billTrustDes'>
           Our coming together ensures that we can continue to provide the speed and quality of service needed to operate in today’s digital landscape.
           </p>
        </div>
        <div className='billTrustRight'>
            <img className='billTrustImage' src="/Image/order-delivery.gif" alt="" />
        </div>
    </div>
    </>
  )
}

export default BillTrust