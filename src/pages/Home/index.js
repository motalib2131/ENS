import React from 'react'
import BillTrust from '../../Components/BillTrust'
import CustomerExp from '../../Components/CustomerExp'
import MapProduct from '../../Components/Map Product'
import O2CUniverse from '../../Components/O2CUniverse'
import O2C_circle from '../../Components/O2C_circle'
import Testimonial from '../../Components/Testimonies'

function Home() {
  return (
    <>
    <BillTrust />
    <CustomerExp />
    <O2CUniverse />
    <O2C_circle />
    <MapProduct />
    <Testimonial />
    </>
  )
}

export default Home