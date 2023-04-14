import React, { useState } from 'react'
import './MapProduct.css'

function MapProduct() {
const [popup, setpopup] = useState(false)

const [input1,setInput1] = useState()


function f1(){
let c1 = document.getElementById('p1')
let c2 = c1.value
// let a1 = document.getElementById('check')
// a1.value = c2
// console.log(c2)
}

    return (
        <div>
            <h2 className='map_top_heading'>Interactive Map Of <strong >Current Live </strong><span className='map_top_heading_span'>Products</span> </h2>
            <div className='map_product_content'>
                <div className='checkbox_container'>
                    <h2 className='checkbox_heading'>Pega Module & Live Tools</h2>
                    <div className='filter_heading'>
                        <div>Select a Product</div>
                        <button className='filter_btn'>Clear</button>
                    </div>
                    <input type='text' placeholder='Filter' onClick={()=>{setpopup(!popup)}} id='check' value={input1}/>
                    <div className = { popup ? "checkbox_popup" : "checkbox_content"} >
                        <div className='checkbox_inputdata'>
                            <input type='checkbox' className='checkbox_input' onClick={()=>{setInput1(f1)}}/>
                            <label id = 'p1'>Product 1</label>
                        </div>
                        <div className='checkbox_inputdata'>
                            <input type='checkbox' className='checkbox_input' />
                            <label>Product 2</label>
                        </div>
                        <div className='checkbox_inputdata'>
                            <input type='checkbox' className='checkbox_input' />
                            <label>Product 3</label>
                        </div>
                        <div className='checkbox_inputdata'>
                            <input type='checkbox' className='checkbox_input' />
                            <label>Product 4</label>
                        </div>
                        <div className='checkbox_inputdata'>
                            <input type='checkbox' className='checkbox_input' />
                            <label>Product 5</label>
                        </div>
                        <div className='checkbox_inputdata'>
                            <input type='checkbox' className='checkbox_input' />
                            <label>Product 5</label>
                        </div>
                        <div className='checkbox_inputdata'>
                            <input type='checkbox' className='checkbox_input' />
                            <label>Product 6</label>
                        </div>
                        <div className='checkbox_inputdata'>
                            <input type='checkbox' className='checkbox_input' />
                            <label>Product 7</label>
                        </div>
                        <div className='checkbox_inputdata'>
                            <input type='checkbox' className='checkbox_input' />
                            <label>Product 8</label>
                        </div>
                        <div className='checkbox_inputdata'>
                            <input type='checkbox' className='checkbox_input' />
                            <label>Product 9</label>
                        </div>
                    </div>
                </div>
                <div className='map_container'>
                    <h2 className='map_heading'>Pega Module & Live Tools</h2>
                    <img src='./Image/Rectangle-733.png' className='product_map' />
                </div>
            </div>
        </div>
    )
}

export default MapProduct